"""Public metadata fixes for the rendered Atlas.

mkdocs-static-i18n 1.3.1 writes per-page hreflang links as relative paths that
Material renders without the site_url separator (for example
``https://dobshard.comarena/``). This hook rewrites those links from the page
URL and adds social/structured metadata. It does not change the build pipeline
or any theme template.
"""

from __future__ import annotations

import html
import json
import re
from urllib.parse import urljoin

SITE_NAME = "Days of Britannia Wiki"
OG_IMAGE = "assets/card-britannia-exploration.webp?v=20260813.1"
LINK_RE = re.compile(r"<link\b[^>]*rel=\"alternate\"[^>]*>")
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S)
CANONICAL_RE = re.compile(r"<link\b[^>]*rel=\"canonical\"[^>]*href=\"([^\"]+)\"[^>]*>")


def _language_paths(url: str) -> tuple[str, str]:
    """Return (pt-BR path, en path) for a MkDocs page URL."""
    clean = (url or "").strip().lstrip("/")
    if clean in ("", ".", "./", "index.html"):
        return "", "en/"
    if clean.startswith("en/"):
        return clean[3:], clean
    return clean, f"en/{clean}"


def _absolute(site_url: str, path: str) -> str:
    base = site_url if site_url.endswith("/") else f"{site_url}/"
    return urljoin(base, path)


def _json_ld(*, url: str, title: str, description: str, language: str, site_url: str) -> str:
    data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": f"{site_url}#website",
                "url": site_url,
                "name": SITE_NAME,
                "inLanguage": ["pt-BR", "en"],
                "description": description,
            },
            {
                "@type": "WebPage",
                "@id": f"{url}#webpage",
                "url": url,
                "name": title,
                "inLanguage": language,
                "isPartOf": {"@id": f"{site_url}#website"},
            },
        ],
    }
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    return f'<script type="application/ld+json">{payload}</script>'


def on_post_page(output: str, page, config, **kwargs) -> str:
    site_url = config.get("site_url") or ""
    if not site_url:
        return output

    pt_path, en_path = _language_paths(page.url)
    expected = {
        "pt-BR": _absolute(site_url, pt_path),
        "en": _absolute(site_url, en_path),
        "x-default": _absolute(site_url, pt_path),
    }

    def fix_link(match: re.Match[str]) -> str:
        tag = match.group(0)
        lang = re.search(r"hreflang=\"([^\"]+)\"", tag)
        if not lang or lang.group(1) not in expected:
            return tag
        return re.sub(r"href=\"[^\"]*\"", f"href=\"{expected[lang.group(1)]}\"", tag)

    output = LINK_RE.sub(fix_link, output)

    title_match = TITLE_RE.search(output)
    title = html.unescape(title_match.group(1)).strip() if title_match else (page.title or SITE_NAME)
    canonical_match = CANONICAL_RE.search(output)
    canonical = canonical_match.group(1) if canonical_match else expected["pt-BR"]
    description = (page.meta.get("description") or config.site_description or "").strip()
    language = "en_US" if page.url.startswith("en/") else "pt_BR"
    locale = "en" if language == "en_US" else "pt-BR"
    alternate_locale = "pt_BR" if language == "en_US" else "en_US"
    image = _absolute(site_url, OG_IMAGE)

    esc = lambda value: html.escape(value, quote=True)
    tags = [
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta property="og:site_name" content="{esc(SITE_NAME)}">',
        '<meta property="og:type" content="website">',
        f'<meta property="og:locale" content="{language}">',
        f'<meta property="og:locale:alternate" content="{alternate_locale}">',
        f'<meta property="og:url" content="{esc(canonical)}">',
        f'<meta property="og:title" content="{esc(title)}">',
        f'<meta property="og:description" content="{esc(description)}">',
        f'<meta property="og:image" content="{esc(image)}">',
        '<meta property="og:image:width" content="1536">',
        '<meta property="og:image:height" content="1024">',
        f'<meta name="twitter:title" content="{esc(title)}">',
        f'<meta name="twitter:description" content="{esc(description)}">',
        f'<meta name="twitter:image" content="{esc(image)}">',
        _json_ld(
            url=canonical,
            title=title,
            description=description,
            language=locale,
            site_url=site_url if site_url.endswith("/") else f"{site_url}/",
        ),
    ]
    block = "    " + "\n    ".join(tags) + "\n  "
    return output.replace("</head>", f"{block}</head>", 1)
