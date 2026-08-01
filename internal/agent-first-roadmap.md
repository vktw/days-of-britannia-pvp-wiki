# Agent-first maturity roadmap

## Objective

Evolve the current safe docs-as-code foundation into a first-class wiki
operation: accurate, player-friendly, bilingual, accessible, discoverable, and
maintainable by agents without exposing private server implementation.

This roadmap governs the documentation operation, not gameplay delivery. It
does not authorize publication or turn an unverified claim into a live fact.

## Starting point

The repository already has a strong operational foundation:

- a concise mandatory contract in `AGENTS.md`;
- a repository map, playbooks, risk register, and verification matrix;
- versioned Markdown and stable public URLs;
- a compatibility and local-link audit;
- strict MkDocs builds;
- manual responsive and interaction review;
- validated, reproducible deployment from `main` with rollback protection.

The principal gaps are:

- no project-specific editorial style guide;
- no controlled PT-BR/English terminology;
- no automated translation-parity checks;
- no structured provenance for high-risk gameplay facts;
- limited automated accessibility, rendered-link, asset, and SEO validation;
- no formal freshness policy, ownership, quality scorecard, or player-feedback
  loop.

## Design principles

1. **Player outcome first.** Optimize for finding, understanding, and applying
   information, not for documenting implementation.
2. **One responsibility per document.** Keep mandatory rules, explanations,
   evidence, and historical records distinct.
3. **Progressive automation.** Automate deterministic checks; keep editorial
   judgment and gameplay approval explicit.
4. **Risk-based rigor.** Connection, commands, live rules, items, skills, and
   competitive systems receive stronger controls than atmospheric copy.
5. **Bilingual by design.** English is a maintained product surface, not an
   occasional translation afterthought.
6. **Small reversible increments.** Each phase must deliver value independently
   and keep published URLs stable.

## Maturity model

| Level | Description | Exit condition |
|---|---|---|
| 1. Controlled | Safe edits and reproducible publication | Already achieved |
| 2. Consistent | Shared editorial and localization standards | Phase 1 complete |
| 3. Traceable | Important live claims have source and patch provenance | Phase 2 complete |
| 4. Assured | Structural, localization, accessibility, and web checks run routinely | Phases 3 and 4 complete |
| 5. Learning | Usage and feedback drive an ongoing review cycle | Phase 5 complete |

## Phase 0 — Formalize the operating model

**Priority:** immediate
**Effort:** small
**Status:** complete

### Deliverables

- create an index and authority map for internal documentation;
- record this roadmap and the target architecture;
- define which guidance is normative, planning, or historical;
- keep `AGENTS.md` as the single concise mandatory entry point.

### Acceptance criteria

- a new agent can identify the mandatory rules and detailed guide in under two
  minutes;
- no contradictory source-of-truth hierarchy exists;
- no empty placeholder documents are introduced;
- audit and strict build remain green.

## Phase 1 — Establish editorial and localization standards

**Priority:** highest
**Effort:** medium
**Status:** local commit ready for publication

### Deliverables

- write `internal/editorial-style-guide.md` covering audience, voice, tone,
  headings, summaries, examples, tables, warnings, commands, and the definition
  of player-friendly content;
- classify page intent using four practical types: onboarding/tutorial,
  task/how-to, reference, and explanation;
- write `internal/localization-guide.md` defining the PT-BR source workflow,
  English parity expectations, exceptions, and review process;
- introduce `internal/terminology.yml` for official PT-BR/English names of
  skills, items, systems, commands, places, and recurring interface language;
- add concise links to these standards from the operational guide.

### Acceptance criteria

- an agent can choose the correct page type and content pattern before writing;
- recurring terms have one approved representation in each language;
- commands, product names, and game terminology are never freely translated;
- a sampled review by a maintainer finds no material ambiguity in the rules.

## Phase 2 — Add fact provenance and freshness controls

**Priority:** highest
**Effort:** medium

### Deliverables

- define the high-risk fact classes that require provenance: live version,
  commands, formulas, numbers, ranges, item availability, system status, death,
  loot, progression, and competitive rules;
- create `internal/facts/registry.yml` with a minimal schema: stable fact ID,
  status, live version, verification date, approved source reference, canonical
  PT-BR page, English counterpart, and optional review trigger;
- define how shipped, planned, deprecated, and unverified facts move through the
  repository;
- add a freshness report that flags facts not reviewed after a live-version
  change or past their review trigger;
- assign review ownership by content area, even if the initial owner is a role
  rather than a named person.

### Acceptance criteria

- every high-risk public claim sampled from the wiki has traceable approval;
- planned behavior cannot pass as live behavior;
- a version update produces a deterministic list of facts and pages to review;
- private source material is referenced safely and never copied into the repo.

## Phase 3 — Automate bilingual and structural quality

**Priority:** high
**Effort:** medium to large

### Deliverables

- add `scripts/audit_localization.py` to compare PT-BR/English page pairs;
- check paired-page presence, heading shape, commands, versions, important
  numbers, local links, and terminology;
- extend quality checks to raw HTML links, images, duplicate anchors, navigation
  membership, canonical URLs, `hreflang`, titles, and descriptions;
- validate the structured fact registry and references to canonical pages;
- run deterministic checks in GitHub Actions before deployment.

### Acceptance criteria

- missing or structurally stale translations fail CI;
- command, version, and protected-term drift fail CI;
- every navigated page has valid language metadata and local assets;
- checks provide actionable file-and-line diagnostics;
- false positives are documented and kept low enough that failures are trusted.

## Phase 4 — Assure accessibility and rendered behavior

**Priority:** high
**Effort:** large

### Deliverables

- adopt WCAG 2.2 AA as the accessibility target;
- automate representative browser smoke tests at desktop, tablet, and narrow
  mobile breakpoints;
- test search, language switching, navigation, keyboard focus, Escape behavior,
  instant navigation, overflow, tables, and 404 handling;
- run automated accessibility checks on representative templates and critical
  player journeys;
- check external links on a scheduled workflow, separating transient network
  failures from deploy-blocking internal failures.

### Acceptance criteria

- critical journeys work with keyboard only and at all supported breakpoints;
- no serious or critical automated accessibility violation remains unexplained;
- page-level horizontal overflow is detected automatically;
- internal navigation and language switching have repeatable regression tests;
- manual QA remains required only where automation cannot make a reliable
  judgment.

## Phase 5 — Create a continuous quality loop

**Priority:** medium
**Effort:** medium and ongoing

### Deliverables

- define a privacy-conscious measurement plan for search terms, zero-result
  searches, 404s, high-value journeys, and page usefulness;
- create `internal/quality/scorecard.md` with targets for correctness,
  completeness, localization, accessibility, discoverability, and freshness;
- maintain `internal/quality/known-gaps.md` for accepted risks with owners and
  review dates;
- establish a lightweight monthly review and a mandatory review after each live
  patch;
- convert recurring player questions into prioritized documentation work;
- periodically test the onboarding journey with a player unfamiliar with the
  shard.

### Acceptance criteria

- priorities can be justified with player evidence rather than intuition alone;
- zero-result searches and recurring support questions have an accountable
  review process;
- critical pages have an explicit freshness status;
- known quality gaps have an owner, impact, and next review date;
- the scorecard shows trend over time without collecting unnecessary personal
  data.

## Recommended delivery order

The phases are sequential in governance but may overlap in implementation:

```text
Phase 0: operating model
   |
   v
Phase 1: editorial + localization standards
   |
   v
Phase 2: fact provenance + freshness
   |\
   | `--> Phase 3: bilingual + structural automation
   `----> Phase 4: accessibility + browser assurance
                    |
                    v
              Phase 5: feedback + continuous quality
```

The first major milestone is the completion of Phases 1 and 2. They address the
largest current risk: content that is well deployed but inconsistent,
untraceable, or stale. Phases 3 and 4 then convert the new policies into trusted
automation. Phase 5 ensures the system improves according to player needs.

## Quality scorecard target

These targets guide future scorecard implementation; they are not claims about
the current wiki.

| Dimension | First-class target |
|---|---|
| Correctness | 100% of sampled high-risk facts traceable to approved sources |
| Localization | 100% of public PT-BR pages paired or explicitly exempted |
| Protected parity | Zero command, live-version, and protected-term drift |
| Link integrity | Zero broken internal links and missing local assets |
| Accessibility | WCAG 2.2 AA target; no unresolved serious/critical automated issue |
| Freshness | Critical pages reviewed for every live patch |
| Findability | Zero-result searches reviewed monthly |
| Operations | Audit, strict build, and deployment verification pass for every release |

## Scope controls

This roadmap must not lead to:

- publishing server source, implementation details, credentials, or logs;
- creating bureaucracy for low-risk prose that provides no player benefit;
- treating automated checks as proof that gameplay information is true;
- duplicating the public manual inside internal documentation;
- breaking stable URLs to make the directory tree look cleaner;
- collecting player data without a documented purpose and privacy review.

## Roadmap maintenance

- Update phase status only when its acceptance criteria are met.
- Record material scope changes in this file rather than silently redefining a
  phase.
- Review the roadmap after each completed phase and at least once per quarter.
- Keep implementation details in the relevant guide or script documentation;
  keep this file focused on outcomes and gates.
