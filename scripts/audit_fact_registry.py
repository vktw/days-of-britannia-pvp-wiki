"""Validate that high-risk fact records point to real canonical pages."""

from __future__ import annotations

from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
REGISTRY = ROOT / "internal" / "facts" / "registry.yml"


def main() -> int:
    data = yaml.safe_load(REGISTRY.read_text(encoding="utf-8-sig")) or {}
    errors: list[str] = []
    entries = data.get("entries", [])
    if not entries:
        errors.append("fact registry has no entries")
    for entry in entries:
        ident = entry.get("id", "<missing-id>")
        for field in ("public_reference", "canonical_pt", "english_counterpart"):
            value = entry.get(field)
            if not value:
                errors.append(f"{ident}: missing {field}")
                continue
            target = ROOT / value if value.startswith("internal/") else ROOT / value
            if not target.is_file():
                errors.append(f"{ident}: {field} does not exist: {value}")
        if entry.get("status") == "live" and entry.get("source_status") != "approved":
            errors.append(f"{ident}: live fact is not approved")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"fact registry audit passed: {len(entries)} canonical records")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
