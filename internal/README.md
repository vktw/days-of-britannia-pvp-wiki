# Agent-first documentation

This directory contains the non-public operational documentation used by agents
and maintainers of the Days of Britannia wiki. It must not contain credentials,
production logs, private server implementation, or unapproved gameplay claims.

## Start here

1. Read [`../AGENTS.md`](../AGENTS.md) for mandatory repository rules.
2. Read [`lean-methodology.md`](lean-methodology.md) to route the change.
3. Read [`agent-first-guide.md`](agent-first-guide.md) when a playbook is
   needed.
4. Consult [`agent-first-roadmap.md`](agent-first-roadmap.md) when improving the
   documentation operation itself.

## Current documents

| Document | Purpose | Authority |
|---|---|---|
| [`../AGENTS.md`](../AGENTS.md) | Mandatory scope, safety, workflow, and definition of done | Normative |
| [`agent-first-guide.md`](agent-first-guide.md) | Repository map, contracts, playbooks, risks, and verification | Normative operational guide |
| [`lean-methodology.md`](lean-methodology.md) | Lean 1.1 routing rules and control tiers | Normative operating method |
| [`agent-first-roadmap.md`](agent-first-roadmap.md) | Phased evolution toward a first-class wiki operation | Planning |
| [`editorial-style-guide.md`](editorial-style-guide.md) | Player-facing voice, page types, patterns, and editorial checklist | Normative editorial guide |
| [`localization-guide.md`](localization-guide.md) | PT-BR/English parity, translation workflow, and exceptions | Normative localization guide |
| [`terminology.yml`](terminology.yml) | Controlled bilingual terms and protected names | Normative terminology |
| [`facts/README.md`](facts/README.md) | Fact lifecycle, provenance states, and freshness policy | Normative evidence guide |
| [`facts/registry.yml`](facts/registry.yml) | High-risk public-claim inventory | Evidence inventory; pending entries are not approvals |
| [`wiki-pvp-baseline-2026-07-24.md`](wiki-pvp-baseline-2026-07-24.md) | Historical migration and compatibility record | Historical |

When documents disagree, executable configuration and approved live gameplay
sources take precedence over descriptive prose. Agents must surface the conflict
instead of silently choosing an interpretation.

## Target documentation architecture

The target is a small set of documents with distinct responsibilities. The
editorial, localization, terminology, and initial fact-provenance documents
below are now implemented. The `quality/` directory and localization/quality
audits remain future roadmap work; they are shown to make the intended
destination explicit, not as empty placeholders.

```text
AGENTS.md                         mandatory agent contract
internal/
|-- README.md                    index and authority map
|-- agent-first-guide.md         repository operations and playbooks
|-- lean-methodology.md          Lean 1.1 routing rules and control tiers
|-- agent-first-roadmap.md       maturity plan and acceptance criteria
|-- editorial-style-guide.md     player-facing voice, patterns, and page types
|-- localization-guide.md        PT-BR/EN workflow and parity rules
|-- terminology.yml              controlled bilingual terminology
|-- facts/
|   |-- README.md                fact lifecycle and provenance policy
|   `-- registry.yml             high-risk fact provenance and live version
|-- quality/
|   |-- scorecard.md             quality targets and review cadence
|   `-- known-gaps.md            accepted risks and remediation status
`-- history/
    `-- wiki-pvp-baseline-*.md   immutable migration records
scripts/
|-- audit_wiki.py                compatibility and structural checks
|-- report_fact_freshness.py     provenance and review-date report
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
