"""Check the player-facing PT-BR/English documentation contract."""

from __future__ import annotations

import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
TERMS = ROOT / "internal" / "terminology.yml"
NUMBER_RE = re.compile(r"(?<![\w])\d+(?:[.,]\d+)?%?")
COMMAND_RE = re.compile(r"`(\.[a-z][a-z0-9]*)`", re.I)
HEADING_RE = re.compile(r"^(#{1,6})\s+(.+?)\s*$", re.M)
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")


def normalized_numbers(text: str) -> list[str]:
    return [value.replace(",", ".") for value in NUMBER_RE.findall(text)]


def headings(text: str) -> list[tuple[int, str]]:
    return [(len(m.group(1)), re.sub(r"[`*_]", "", m.group(2)).strip()) for m in HEADING_RE.finditer(text)]


def relative_links(text: str) -> list[str]:
    return [target.partition("#")[0] for target in LINK_RE.findall(text) if not target.startswith(("http://", "https://", "mailto:"))]


def main() -> int:
    errors: list[str] = []
    protected_terms = [
        term["pt_br"]
        for term in yaml.safe_load(TERMS.read_text(encoding="utf-8-sig")).get("terms", [])
        if term.get("protected")
    ]

    pages = [page for page in DOCS.rglob("*.md") if not page.name.endswith(".en.md")]
    for page in pages:
        english = page.with_name(f"{page.stem}.en.md")
        relative = page.relative_to(DOCS)
        if not english.is_file():
            errors.append(f"translation missing: {relative}")
            continue
        pt = page.read_text(encoding="utf-8-sig")
        en = english.read_text(encoding="utf-8-sig")
        if [level for level, _ in headings(pt)] != [level for level, _ in headings(en)]:
            errors.append(f"heading structure changed: {english.relative_to(DOCS)}")
        if COMMAND_RE.findall(pt) != COMMAND_RE.findall(en):
            errors.append(f"commands changed: {english.relative_to(DOCS)}")
        if normalized_numbers(pt) != normalized_numbers(en):
            errors.append(f"numbers changed: {english.relative_to(DOCS)}")
        if relative_links(pt) != relative_links(en):
            errors.append(f"link destinations changed: {english.relative_to(DOCS)}")
        for term in protected_terms:
            if term in pt and term not in en:
                errors.append(f"protected term missing ({term}): {english.relative_to(DOCS)}")
        if bool(re.search(r"Status: (?:Live|Alpha|Beta) ", pt)) != bool(re.search(r"Status: (?:Live|Alpha|Beta) ", en)):
            errors.append(f"live status missing from one language: {english.relative_to(DOCS)}")

    if errors:
        print("\n".join(errors))
        return 1
    print(f"localization audit passed: {len(pages)} PT-BR pages paired")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
