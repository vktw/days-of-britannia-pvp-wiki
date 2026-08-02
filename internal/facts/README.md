# Fact provenance and freshness

This directory tracks high-risk public gameplay claims without copying private
server implementation or production evidence into the repository. The live
server is the authority: a behavior present in production is approved, while a
local-only change is not a public fact.

## Registry

[`registry.yml`](registry.yml) is an inventory of high-risk claims with safe
source metadata. Live entries use `source_status: approved` and identify the
live version or release without exposing script paths or implementation. Local
drafts use `status: planned` and must not be presented as live behavior.

## Fact lifecycle

Use these values consistently:

| Field | Allowed values | Meaning |
|---|---|---|
| `status` | `live`, `planned`, `deprecated`, `unverified` | Editorial state of the claim |
| `source_status` | `approved`, `pending_approval`, `rejected` | Source state; live behavior is approved |
| `owner` | role or approved maintainer | Who confirms or updates the fact |

Invariant: an entry with `status: live` must have `source_status: approved` and
must refer to a live version. Local-only work cannot be `status: live`.

Transitions:

```text
planned → live       only after the behavior reaches production
live → deprecated     when replaced, with the replacement linked
any → unverified      when the live behavior is contradicted or removed
pending_approval → approved only after the source is confirmed in production
```

The public page may describe a claim as live only when the behavior exists in
production and the registry points to its live version. Until then, keep the
local uncertainty internal and do not introduce a new public claim.

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
gameplay truth; production state does that.
