"""Check navigation membership and local image/assets used by the public site."""

from __future__ import annotations

import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
CONFIG = ROOT / "mkdocs.yml"
IMAGE_RE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)|<img[^>]+src=[\"']([^\"']+)[\"']", re.I)

# These pages remain published as compatibility stubs so existing bookmarks
# keep working after the navigation reorganization. They are intentionally
# absent from the player-facing menu.
INTENTIONALLY_UNLISTED = frozenset(
    {
        "mundo/cidades-guards.md",
        "mundo/index.md",
        "mundo/mapas-viagem.md",
        "mundo/ocllo.md",
        "mundo/raridades-britannia.md",
        "mundo/threat-inventory.md",
        "personagem.md",
        "primeiros-passos/conexao.md",
        "primeiros-passos/personagem-inicial.md",
        "primeiros-passos/primeira-hora.md",
    }
)


def nav_files(node: object) -> set[str]:
    found: set[str] = set()
    if isinstance(node, list):
        for item in node:
            found.update(nav_files(item))
    elif isinstance(node, dict):
        for value in node.values():
            if isinstance(value, str) and value.endswith(".md"):
                found.add(value.replace("\\", "/"))
            else:
                found.update(nav_files(value))
    return found


def main() -> int:
    errors: list[str] = []
    config = yaml.safe_load(CONFIG.read_text(encoding="utf-8-sig")) or {}
    navigated = nav_files(config.get("nav", []))
    public_pages = {
        page.relative_to(DOCS).as_posix()
        for page in DOCS.rglob("*.md")
        if not page.name.endswith(".en.md")
    }
    unlisted = public_pages - navigated
    for page in sorted(unlisted - INTENTIONALLY_UNLISTED):
        errors.append(f"page missing from navigation: {page}")
    for page in sorted(INTENTIONALLY_UNLISTED - public_pages):
        errors.append(f"compatibility page missing from docs: {page}")
    for target in sorted(navigated - public_pages):
        errors.append(f"navigation target missing: {target}")

    for page in DOCS.rglob("*.md"):
        text = page.read_text(encoding="utf-8-sig")
        for first, second in IMAGE_RE.findall(text):
            target = first or second
            if target.startswith(("http://", "https://", "data:")):
                continue
            local_target = target.split("?", 1)[0].split("#", 1)[0]
            destination = (page.parent / local_target).resolve()
            if not destination.is_file() and page.parent == DOCS and local_target.startswith("../"):
                destination = (DOCS / local_target[3:]).resolve()
            if not destination.is_file():
                errors.append(f"missing local asset: {page.relative_to(DOCS)} -> {target}")

    if errors:
        print("\n".join(errors))
        return 1
    navigated_public_pages = public_pages - INTENTIONALLY_UNLISTED
    print(
        "site contract audit passed: "
        f"{len(navigated_public_pages)} navigated PT-BR pages; "
        f"{len(INTENTIONALLY_UNLISTED)} compatibility pages intentionally unlisted"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
