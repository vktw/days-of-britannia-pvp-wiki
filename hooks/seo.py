"""Public metadata fixes for the rendered Atlas.

mkdocs-static-i18n 1.3.1 writes per-page hreflang links as relative paths that
Material renders without the site_url separator (for example
``https://dobshard.comarena/``). This hook rewrites those links from the page
URL, aligns ``html lang`` with hreflang, points compatibility stubs at their
canonical pages, and adds breadcrumbs plus social/structured metadata. It does
not change the build pipeline or any theme template.
"""

from __future__ import annotations

import html
import json
import re
from pathlib import Path
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
OVERRIDES = json.loads((ROOT / "scripts" / "seo_config.json").read_text(encoding="utf-8"))

SITE_NAME = "Days of Britannia Wiki"
OG_IMAGE = "assets/card-britannia-exploration.webp?v=20260813.1"
SECTIONS = {
    "pt-BR": {
        "primeiros-passos": "Primeiros passos",
        "combate": "PvP",
        "craft": "Craft",
        "itens": "Itens",
        "mundo": "Mundo",
        "sistemas": "Sistemas",
    },
    "en": {
        "primeiros-passos": "Getting started",
        "combate": "PvP",
        "craft": "Craft",
        "itens": "Items",
        "mundo": "World",
        "sistemas": "Systems",
    },
}
HOME = {"pt-BR": "Início", "en": "Home"}
# The home page targets the game, not the manual: brand first, then the query
# players type ("shard brasileiro de Ultima Online").
HOME_TITLE = {
    "pt-BR": "Days of Britannia: shard brasileiro de Ultima Online grátis",
    "en": "Days of Britannia: free Brazilian Ultima Online shard",
}
HOME_IMAGE = "assets/home/hero-britain.webp?v=20261123.2"
SAME_AS = [
    "https://discord.gg/e2VDbg2NYw",
    "https://www.youtube.com/@DaysOfBritannia",
    "https://uoservers.com/server/dob-shard-days-of-britannia",
]

LINK_RE = re.compile(r"<link\b[^>]*rel=\"alternate\"[^>]*>")
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S)
CANONICAL_RE = re.compile(r"<link\b[^>]*rel=\"canonical\"[^>]*href=\"([^\"]+)\"[^>]*>")
ARTICLE_MARKER = '<article class="md-content__inner md-typeset">'


def _is_en(url: str) -> bool:
    return (url or "").startswith("en/")


def _base_path(url: str) -> str:
    clean = (url or "").strip().lstrip("/")
    if clean.startswith("en/"):
        clean = clean[3:]
    elif clean == "en":
        clean = ""
    if clean in ("", ".", "./", "index.html"):
        return ""
    return clean.rstrip("/")


def _absolute(site_url: str, path: str) -> str:
    base = site_url if site_url.endswith("/") else f"{site_url}/"
    return urljoin(base, path)


def _local_path(path: str, is_en: bool) -> str:
    return f"en/{path}" if is_en and path else ("en/" if is_en else path)


def _breadcrumbs(base: str, is_en: bool, site_url: str, title: str, current: str, lang: str) -> list[dict[str, str]]:
    crumbs = [{"name": HOME[lang], "url": _absolute(site_url, _local_path("", is_en))}]
    parts = [part for part in base.split("/") if part]
    walked = ""
    for part in parts[:-1]:
        walked = f"{walked}/{part}" if walked else part
        crumbs.append(
            {
                "name": SECTIONS[lang].get(part, part),
                "url": _absolute(site_url, _local_path(walked + "/", is_en)),
            }
        )
    crumbs.append({"name": title, "url": current})
    return crumbs


def _json_ld(
    *,
    url: str,
    title: str,
    description: str,
    language: str,
    site_url: str,
    crumbs: list[dict[str, str]],
    home: bool = False,
    image: str = "",
) -> str:
    graph = [
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
    ]
    if home:
        graph.append(
            {
                "@type": "Organization",
                "@id": f"{site_url}#organization",
                "name": "Days of Britannia",
                "url": site_url,
                "logo": _absolute(site_url, "assets/logo.png"),
                "sameAs": SAME_AS,
            }
        )
        graph.append(
            {
                "@type": "VideoGame",
                "@id": f"{site_url}#game",
                "name": "Days of Britannia",
                "alternateName": ["DoB Shard", "DoB"],
                "url": url,
                "description": description,
                "image": image,
                "genre": ["MMORPG", "Ultima Online shard"],
                "gamePlatform": "PC",
                "operatingSystem": "Windows, Linux, macOS",
                "playMode": "MultiPlayer",
                "inLanguage": ["pt-BR", "en"],
                "isAccessibleForFree": True,
                "offers": {"@type": "Offer", "price": "0", "priceCurrency": "BRL"},
                "publisher": {"@id": f"{site_url}#organization"},
                "sameAs": SAME_AS,
            }
        )
    if crumbs:
        graph.append(
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": index + 1, "name": item["name"], "item": item["url"]}
                    for index, item in enumerate(crumbs)
                ],
            }
        )
    payload = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False).replace("</", "<\\/")
    return f'<script type="application/ld+json">{payload}</script>'


def on_post_page(output: str, page, config, **kwargs) -> str:
    site_url = config.get("site_url") or ""
    if not site_url:
        return output

    url = page.url or ""
    is_en = _is_en(url)
    base = _base_path(url)
    lang = "en" if is_en else "pt-BR"
    target = OVERRIDES.get(base)
    pt_path = target if target else (f"{base}/" if base else "")
    pt_url = _absolute(site_url, pt_path)
    en_url = _absolute(site_url, _local_path(pt_path, True))
    expected = {"pt-BR": pt_url, "en": en_url, "x-default": pt_url}

    def fix_link(match: re.Match[str]) -> str:
        tag = match.group(0)
        found = re.search(r"hreflang=\"([^\"]+)\"", tag)
        if not found or found.group(1) not in expected:
            return tag
        return re.sub(r"href=\"[^\"]*\"", f"href=\"{expected[found.group(1)]}\"", tag)

    output = LINK_RE.sub(fix_link, output)
    if target:
        canonical_url = en_url if is_en else pt_url
        output = re.sub(
            r"(<link\b[^>]*rel=\"canonical\"[^>]*href=\")[^\"]*(\")",
            rf"\g<1>{canonical_url}\g<2>",
            output,
            count=1,
        )
    output = re.sub(r'(<html\b[^>]*\blang=")[^"]*(")', rf"\g<1>{lang}\g<2>", output, count=1)

    title_match = TITLE_RE.search(output)
    title = html.unescape(title_match.group(1)).strip() if title_match else (page.title or SITE_NAME)
    canonical_match = CANONICAL_RE.search(output)
    canonical = canonical_match.group(1) if canonical_match else (en_url if is_en else pt_url)
    description = (page.meta.get("description") or config.site_description or "").strip()
    locale = "en_US" if is_en else "pt_BR"
    alternate_locale = "pt_BR" if is_en else "en_US"
    is_home = base == "" and not target
    image = _absolute(site_url, HOME_IMAGE if is_home else OG_IMAGE)
    if is_home:
        title = HOME_TITLE[lang]
        output = TITLE_RE.sub(f"<title>{html.escape(title)}</title>", output, count=1)

    crumb_title = title.removesuffix(f" - {SITE_NAME}")
    crumbs = _breadcrumbs(base, is_en, site_url, crumb_title, canonical, lang) if base and ARTICLE_MARKER in output else []
    if crumbs:
        esc = lambda value: html.escape(value, quote=True)
        items = "".join(
            f'<li aria-current="page">{esc(item["name"])}</li>' if index == len(crumbs) - 1
            else f'<li><a href="{esc(item["url"])}">{esc(item["name"])}</a></li>'
            for index, item in enumerate(crumbs)
        )
        block = (
            f'  <nav class="dob-breadcrumb" aria-label="{esc("Breadcrumb" if is_en else "Trilha de navegação")}">'
            f"<ol>{items}</ol></nav>\n  "
        )
        output = output.replace(ARTICLE_MARKER, block + ARTICLE_MARKER, 1)

    esc = lambda value: html.escape(value, quote=True)
    tags = [
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta property="og:site_name" content="{esc(SITE_NAME)}">',
        '<meta property="og:type" content="website">',
        f'<meta property="og:locale" content="{locale}">',
        f'<meta property="og:locale:alternate" content="{alternate_locale}">',
        f'<meta property="og:url" content="{esc(canonical)}">',
        f'<meta property="og:title" content="{esc(title)}">',
        f'<meta property="og:description" content="{esc(description)}">',
        f'<meta property="og:image" content="{esc(image)}">',
        f'<meta property="og:image:width" content="{1600 if is_home else 1536}">',
        f'<meta property="og:image:height" content="{899 if is_home else 1024}">',
        f'<meta name="twitter:title" content="{esc(title)}">',
        f'<meta name="twitter:description" content="{esc(description)}">',
        f'<meta name="twitter:image" content="{esc(image)}">',
        _json_ld(
            url=canonical,
            title=title,
            description=description,
            language=lang,
            site_url=site_url if site_url.endswith("/") else f"{site_url}/",
            crumbs=crumbs,
            home=is_home,
            image=image,
        ),
    ]
    head_block = "    " + "\n    ".join(tags) + "\n  "
    return output.replace("</head>", f"{head_block}</head>", 1)
