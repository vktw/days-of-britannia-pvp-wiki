"""Check navigation membership and local image/assets used by the public site."""

from __future__ import annotations

import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
CONFIG = ROOT / "mkdocs.yml"
IMAGE_RE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)|<img[^>]+src=[\"']([^\"']+)[\"']", re.I)


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
    for page in sorted(public_pages - navigated):
        errors.append(f"page missing from navigation: {page}")
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
    print(f"site contract audit passed: {len(public_pages)} navigated PT-BR pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
