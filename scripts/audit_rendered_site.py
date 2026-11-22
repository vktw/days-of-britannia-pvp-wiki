"""Check metadata and duplicate anchors in the rendered MkDocs site."""

from __future__ import annotations

import json
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
SITE_URL = "https://dobshard.com/"
OVERRIDES = json.loads((ROOT / "scripts" / "seo_config.json").read_text(encoding="utf-8"))


def _paths(relative: Path) -> tuple[str, str, str, str, bool]:
    """Expected (canonical, pt-BR, en, html lang, is_en) for a rendered HTML file."""
    parts = list(relative.parts)
    # Material's 404 page reuses the home alternates and has no page metadata.
    if parts[-1] in ("index.html", "404.html"):
        parts = parts[:-1]
    is_en = bool(parts) and parts[0] == "en"
    path = "/".join(parts)
    if path == "en":
        base = ""
    else:
        base = path[3:] if path.startswith("en/") else path
    target = OVERRIDES.get(base)
    pt = target if target else base
    en = f"en/{pt}" if pt else "en"

    def absolute(value: str) -> str:
        clean = value.strip("/")
        if clean.endswith(".html"):
            return f"{SITE_URL.rstrip('/')}/{clean}"
        return f"{SITE_URL.rstrip('/')}/{clean + '/' if clean else ''}"

    pt_url, en_url = absolute(pt), absolute(en)
    canonical = en_url if is_en else pt_url
    return canonical, pt_url, en_url, ("en" if is_en else "pt-BR"), is_en


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.lang = ""
        self.title_parts: list[str] = []
        self.in_title = False
        self.site_marker = False
        self.hreflangs: set[str] = set()
        self.alternate_hreflangs: set[str] = set()
        self.alternate_urls: dict[str, str] = {}
        self.canonicals: list[str] = []
        self.og: dict[str, str] = {}
        self.twitter: dict[str, str] = {}
        self.json_ld = 0
        self.in_json_ld = False
        self.json_ld_text: list[str] = []
        self.breadcrumb_nav = 0
        self.ids: set[str] = set()
        self.duplicates: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "html":
            self.lang = values.get("lang", "")
        if tag == "title":
            self.in_title = True
        if values.get("data-dob-site") == "atlas":
            self.site_marker = True
        if tag == "nav" and "dob-breadcrumb" in (values.get("class") or ""):
            self.breadcrumb_nav += 1
        if tag == "a" and values.get("hreflang"):
            self.hreflangs.add(values["hreflang"] or "")
        if tag == "link" and values.get("rel") == "alternate" and values.get("hreflang"):
            lang = values["hreflang"]
            self.alternate_hreflangs.add(lang or "")
            self.alternate_urls[lang] = values.get("href", "")
        if tag == "link" and values.get("rel") == "canonical":
            self.canonicals.append(values.get("href", ""))
        if tag == "meta":
            key = values.get("property") or values.get("name") or ""
            if key.startswith("og:"):
                self.og[key] = values.get("content", "")
            elif key.startswith("twitter:"):
                self.twitter[key] = values.get("content", "")
        if tag == "script" and values.get("type") == "application/ld+json":
            self.json_ld += 1
            self.in_json_ld = True
        anchor = values.get("id")
        if anchor:
            if anchor in self.ids:
                self.duplicates.add(anchor)
            self.ids.add(anchor)

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag == "script":
            self.in_json_ld = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.in_json_ld:
            self.json_ld_text.append(data)

    @property
    def title(self) -> str:
        return "".join(self.title_parts).strip()

    @property
    def breadcrumb_json_ld(self) -> bool:
        return '"@type": "BreadcrumbList"' in "".join(self.json_ld_text)


def main() -> int:
    errors: list[str] = []
    pages = sorted(SITE.rglob("*.html")) if SITE.is_dir() else []
    if not pages:
        print("rendered site missing: run mkdocs build first")
        return 1
    audited = 0
    for page in pages:
        text = page.read_text(encoding="utf-8")
        # Search Console verification files are plain-text tokens, not pages.
        if text.startswith("google-site-verification:"):
            continue
        audited += 1
        parser = PageParser()
        parser.feed(text)
        relative = page.relative_to(SITE)
        canonical, pt_url, en_url, expected_lang, is_en = _paths(relative)
        is_home = relative.name == "index.html" and (
            len(relative.parts) == 1 or (len(relative.parts) == 2 and relative.parts[0] == "en")
        )
        is_404 = relative.name == "404.html"
        if is_404:
            if not parser.lang:
                errors.append(f"missing html lang: {relative}")
        elif parser.lang != expected_lang:
            errors.append(f"html lang {parser.lang!r} != {expected_lang!r}: {relative}")
        if not parser.title:
            errors.append(f"missing html title: {relative}")
        if not parser.site_marker:
            errors.append(f"missing atlas marker: {relative}")
        if parser.hreflangs != {"pt-BR", "en"}:
            errors.append(f"incomplete language links: {relative}")
        if parser.alternate_hreflangs != {"pt-BR", "en", "x-default"}:
            errors.append(f"incomplete hreflang metadata: {relative}")
        expected_alternates = {"pt-BR": pt_url, "en": en_url, "x-default": pt_url}
        for lang, expected in expected_alternates.items():
            actual = parser.alternate_urls.get(lang)
            if actual != expected:
                errors.append(f"hreflang {lang} URL {actual!r} != {expected!r}: {relative}")
        if is_404:
            if len(parser.canonicals) != 1 or parser.canonicals[0].rstrip("/") != canonical.rstrip("/"):
                errors.append(f"canonical link {parser.canonicals} != [{canonical!r}]: {relative}")
        elif parser.canonicals != [canonical]:
            errors.append(f"canonical link {parser.canonicals} != [{canonical!r}]: {relative}")
        if not is_404:
            for key in ("og:title", "og:description", "og:image", "og:url", "og:locale"):
                if not parser.og.get(key):
                    errors.append(f"missing {key}: {relative}")
            if not parser.twitter.get("twitter:card"):
                errors.append(f"missing twitter:card: {relative}")
            if parser.json_ld != 1:
                errors.append(f"JSON-LD block count is {parser.json_ld}: {relative}")
            if is_home:
                if parser.breadcrumb_nav:
                    errors.append(f"unexpected breadcrumb on home: {relative}")
            elif parser.breadcrumb_nav != 1:
                errors.append(f"breadcrumb count is {parser.breadcrumb_nav}: {relative}")
            elif not parser.breadcrumb_json_ld:
                errors.append(f"missing BreadcrumbList JSON-LD: {relative}")
        for anchor in sorted(parser.duplicates):
            errors.append(f"duplicate anchor: {relative}#{anchor}")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"rendered site audit passed: {audited} HTML pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
