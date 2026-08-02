# Fact provenance and freshness

This directory tracks high-risk public gameplay claims without copying private
server implementation or production evidence into the repository.

## Registry

[`registry.yml`](registry.yml) is an inventory of claims that deserve explicit
source and review metadata. It is intentionally conservative: entries can be
listed before their source is approved, but they must be marked
`source_status: pending_approval` and `verification_date: null`. A pending
entry is not evidence that the claim is correct.

## Fact lifecycle

Use these values consistently:

| Field | Allowed values | Meaning |
|---|---|---|
| `status` | `live`, `planned`, `deprecated`, `unverified` | Editorial state of the claim |
| `source_status` | `approved`, `pending_approval`, `rejected` | State of the source review |
| `owner` | role or approved maintainer | Who confirms or updates the fact |

Invariant: an entry with `source_status` other than `approved` cannot have
`status: live`. Use `status: unverified` until the source is confirmed.

Transitions:

```text
planned → live       only after the behavior ships and is approved
live → deprecated     when replaced, with the replacement linked
any → unverified      when the source is missing or contradicted
pending_approval → approved only after an authorized source is confirmed
```

The public page may describe a claim as live only when `status: live`, the
corresponding source is approved, and the version/review fields are current.
Until then, keep the uncertainty internal and do not introduce a new public
claim.

## Required fields

Every entry must include:

- stable `id`;
- concise `claim` without private implementation;
- `status` and `source_status`;
- `live_version` when applicable;
- `verification_date` or explicit `null`;
- `approved_source` or explicit `null`;
- canonical PT-BR page and English counterpart;
- `owner`;
- `review_after` or explicit `null`.

`public_reference` identifies where the claim currently appears; it is not a
substitute for `approved_source`.

## Review triggers

Review an entry when:

- the live version changes;
- the server owner changes the behavior;
- a player-facing page contradicts the source;
- `review_after` is reached;
- a translation exposes a number, command, condition, or status mismatch.

The freshness report is a reminder and inventory aid. It does not establish
gameplay truth and does not replace owner approval.
