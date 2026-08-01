# Agent-first documentation

This directory contains the non-public operational documentation used by agents
and maintainers of the Days of Britannia wiki. It must not contain credentials,
production logs, private server implementation, or unapproved gameplay claims.

## Start here

1. Read [`../AGENTS.md`](../AGENTS.md) for mandatory repository rules.
2. Read [`agent-first-guide.md`](agent-first-guide.md) before a non-trivial
   change.
3. Consult [`agent-first-roadmap.md`](agent-first-roadmap.md) when improving the
   documentation operation itself.

## Current documents

| Document | Purpose | Authority |
|---|---|---|
| [`../AGENTS.md`](../AGENTS.md) | Mandatory scope, safety, workflow, and definition of done | Normative |
| [`agent-first-guide.md`](agent-first-guide.md) | Repository map, contracts, playbooks, risks, and verification | Normative operational guide |
| [`agent-first-roadmap.md`](agent-first-roadmap.md) | Phased evolution toward a first-class wiki operation | Planning |
| [`wiki-pvp-baseline-2026-07-24.md`](wiki-pvp-baseline-2026-07-24.md) | Historical migration and compatibility record | Historical |

When documents disagree, executable configuration and approved live gameplay
sources take precedence over descriptive prose. Agents must surface the conflict
instead of silently choosing an interpretation.

## Target documentation architecture

The target is a small set of documents with distinct responsibilities. Files
are created only when the corresponding roadmap phase is implemented; this tree
is not a request to add empty placeholders.

```text
AGENTS.md                         mandatory agent contract
internal/
|-- README.md                    index and authority map
|-- agent-first-guide.md         repository operations and playbooks
|-- agent-first-roadmap.md       maturity plan and acceptance criteria
|-- editorial-style-guide.md     player-facing voice, patterns, and page types
|-- localization-guide.md        PT-BR/EN workflow and parity rules
|-- terminology.yml              controlled bilingual terminology
|-- facts/
|   `-- registry.yml             high-risk fact provenance and live version
|-- quality/
|   |-- scorecard.md             quality targets and review cadence
|   `-- known-gaps.md            accepted risks and remediation status
`-- history/
    `-- wiki-pvp-baseline-*.md   immutable migration records
scripts/
|-- audit_wiki.py                compatibility and structural checks
|-- audit_localization.py        PT-BR/EN parity checks
`-- audit_quality.py             metadata, assets, HTML, and policy checks
```

The architecture separates five concerns:

- **rules:** what an agent must do;
- **operations:** how to perform common changes safely;
- **editorial quality:** how player-facing content should read and be organized;
- **evidence:** which approved source and patch support sensitive claims;
- **assurance:** which automated and manual checks prove an acceptable result.

## Maintenance rules

- Keep `AGENTS.md` concise; move explanations and examples into the guide.
- Do not duplicate a rule across several documents unless one location is
  clearly canonical and the others link to it.
- Give every new internal document a defined purpose and authority level.
- Prefer executable checks over prose when a rule can be tested reliably.
- Do not automate editorial truth: gameplay correctness still requires an
  approved source.
- Update this index when an operational document is added, replaced, or retired.
