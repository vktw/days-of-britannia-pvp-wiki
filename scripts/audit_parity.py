import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
LIVE_VERSION = "Live 0.10.2"

NUMBER_RE = re.compile(r"(?<![\w])\d+(?:[.,]\d+)?%?")
COMMAND_RE = re.compile(r"`(\.[a-z][a-z0-9]*)`", re.I)
LINK_RE = re.compile(r"(?<!!)\[([^\]]*)\]\(([^)]+)\)")


def prose(text):
    return re.sub(r"<script>[\s\S]*?</script>", "", text, flags=re.I)


def numbers(text):
    return [value.replace(",", ".") for value in NUMBER_RE.findall(prose(text))]


def audit():
    errors = []
    portuguese_pages = [page for page in DOCS.rglob("*.md") if not page.name.endswith(".en.md")]

    for page in portuguese_pages:
        english = page.with_name(f"{page.stem}.en.md")
        if not english.is_file():
            continue
        source_text = page.read_text(encoding="utf-8-sig")
        english_text = english.read_text(encoding="utf-8-sig")
        relative = english.relative_to(DOCS)

        if numbers(source_text) != numbers(english_text):
            errors.append(f"numbers changed in translation: {relative}")
        if COMMAND_RE.findall(source_text) != COMMAND_RE.findall(english_text):
            errors.append(f"player command sequence changed in translation: {relative}")

        source_links = [target.partition("#")[0] for _, target in LINK_RE.findall(prose(source_text))]
        english_links = [target.partition("#")[0] for _, target in LINK_RE.findall(prose(english_text))]
        if source_links != english_links:
            errors.append(f"link destinations changed in translation: {relative}")
        if len(re.findall(r"^\|", source_text, re.M)) != len(re.findall(r"^\|", english_text, re.M)):
            errors.append(f"table rows changed in translation: {relative}")

    for page in DOCS.rglob("*.md"):
        text = page.read_text(encoding="utf-8-sig")
        if "Status: Live " in text and f"Status: {LIVE_VERSION}" not in text:
            errors.append(f"stale live version: {page.relative_to(DOCS)}")
        for label, target in LINK_RE.findall(text):
            if not label.strip():
                errors.append(f"empty link label: {page.relative_to(DOCS)} -> {target}")

    config = (ROOT / "mkdocs.yml").read_text(encoding="utf-8-sig")
    if f'dob_version: "{LIVE_VERSION}"' not in config:
        errors.append(f"mkdocs live version is not {LIVE_VERSION}")
    if "0.10.2" not in (DOCS / "index.md").read_text(encoding="utf-8-sig"):
        errors.append("home release card is not 0.10.2")
    english_home = (DOCS / "index.en.md").read_text(encoding="utf-8-sig")
    if 'src="../assets/hero-mark.png' not in english_home:
        errors.append("English home hero mark does not resolve to the shared assets directory")
    for exposed in [
        DOCS / "data" / "threat-inventory-v2.json",
        DOCS / "data" / "threat-inventory-v3.json",
        DOCS / "assets" / "inventario-armas-0.10.1.html",
    ]:
        if exposed.exists():
            errors.append(f"technical public artifact still exists: {exposed.relative_to(DOCS)}")

    forbidden = {
        "mundo/threat-rating.md": ["Threat / 10", "aumento de 10% em seu score", "Shadow Wyrm | Deadly"],
        "mundo/threat-inventory.md": ["Threat / 10", "fórmula v2"],
    }
    for relative, claims in forbidden.items():
        text = (DOCS / relative).read_text(encoding="utf-8-sig")
        for claim in claims:
            if claim in text:
                errors.append(f"stale formula exposed: {relative}: {claim}")

    return errors
