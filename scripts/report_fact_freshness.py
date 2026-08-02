"""Report missing or stale provenance metadata from internal/facts/registry.yml."""

from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path

import yaml


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "registry",
        nargs="?",
        default="internal/facts/registry.yml",
        help="path to the fact registry YAML",
    )
    args = parser.parse_args()
    path = Path(args.registry)
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    entries = data.get("entries", [])
    today = date.today()
    pending = []
    stale = []
    invalid = []
    valid_statuses = {"live", "planned", "deprecated", "unverified"}
    valid_source_statuses = {"approved", "pending_approval", "rejected"}
    required = {
        "id",
        "claim",
        "status",
        "source_status",
        "live_version",
        "verification_date",
        "approved_source",
        "canonical_pt",
        "english_counterpart",
        "owner",
        "review_after",
    }

    for entry in entries:
        missing = sorted(required - entry.keys())
        if missing:
            invalid.append(f"{entry.get('id', '<missing-id>')}: missing {', '.join(missing)}")
        if entry.get("status") not in valid_statuses:
            invalid.append(f"{entry.get('id', '<missing-id>')}: invalid status")
        if entry.get("source_status") not in valid_source_statuses:
            invalid.append(f"{entry.get('id', '<missing-id>')}: invalid source_status")
        if entry.get("source_status") != "approved" and entry.get("status") == "live":
            invalid.append(
                f"{entry.get('id', '<missing-id>')}: live status requires approved source"
            )
        if entry.get("source_status") == "approved" and not entry.get("approved_source"):
            invalid.append(f"{entry.get('id', '<missing-id>')}: approved source is missing")
        if entry.get("status") == "live" and not entry.get("live_version"):
            invalid.append(f"{entry.get('id', '<missing-id>')}: live version is missing")
        if entry.get("source_status") == "pending_approval":
            pending.append(entry.get("id", "<missing-id>"))
        if entry.get("source_status") == "rejected":
            invalid.append(f"{entry.get('id', '<missing-id>')}: source rejected")
        review_after = entry.get("review_after")
        if review_after:
            try:
                if date.fromisoformat(str(review_after)) < today:
                    stale.append(entry.get("id", "<missing-id>"))
            except ValueError:
                invalid.append(f"{entry.get('id', '<missing-id>')}: invalid review_after")

    print(f"fact registry: {len(entries)} entries")
    print(f"pending source approval: {len(pending)}")
    print(f"past review date: {len(stale)}")
    if pending:
        print("PENDING " + ", ".join(pending))
    if stale:
        print("STALE " + ", ".join(stale))
    if invalid:
        for message in invalid:
            print("INVALID " + message)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
