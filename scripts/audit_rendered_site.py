"""Check metadata and duplicate anchors in the rendered MkDocs site."""

from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.lang = ""
        self.title_parts: list[str] = []
        self.in_title = False
        self.site_marker = False
        self.hreflangs: set[str] = set()
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
        if tag == "a" and values.get("hreflang"):
            self.hreflangs.add(values["hreflang"] or "")
        anchor = values.get("id")
        if anchor:
            if anchor in self.ids:
                self.duplicates.add(anchor)
            self.ids.add(anchor)

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)

    @property
    def title(self) -> str:
        return "".join(self.title_parts).strip()


def main() -> int:
    errors: list[str] = []
    pages = sorted(SITE.rglob("*.html")) if SITE.is_dir() else []
    if not pages:
        print("rendered site missing: run mkdocs build first")
        return 1
    for page in pages:
        parser = PageParser()
        parser.feed(page.read_text(encoding="utf-8"))
        relative = page.relative_to(SITE)
        if not parser.lang:
            errors.append(f"missing html lang: {relative}")
        if not parser.title:
            errors.append(f"missing html title: {relative}")
        if not parser.site_marker:
            errors.append(f"missing atlas marker: {relative}")
        if parser.hreflangs != {"pt-BR", "en"}:
            errors.append(f"incomplete language links: {relative}")
        for anchor in sorted(parser.duplicates):
            errors.append(f"duplicate anchor: {relative}#{anchor}")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"rendered site audit passed: {len(pages)} HTML pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
