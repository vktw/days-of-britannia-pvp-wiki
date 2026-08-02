# Agent-first repository guide

This guide is the operational model of the DoB Atlas repository. It is written
for an agent that needs to orient itself, make a safe change, and prove the
result without reverse-engineering the project on every task.

## System summary

DoB Atlas is a static, public gameplay manual built with MkDocs Material. There
is no application backend, database, package manager, or runtime API in this
repository.

```text
Markdown + assets ─┐
mkdocs.yml ────────┼─> MkDocs build ─> site/ ─> release archive
theme overrides ──┤                         └─> Hostinger public_html
CSS + JavaScript ─┘

scripts/audit_wiki.py ─> compatibility and local-link gate
GitHub main ───────────> GitHub Actions build/deploy pipeline
```

The player-visible result is served at `https://dobshard.com/`. A validated push
to `main` starts the production workflow.

## Repository map

| Path | Responsibility | Change considerations |
|---|---|---|
| `docs/` | Public source content and browser assets | Everything here can be published |
| `docs/index.md` | Custom HTML-rich landing page | Coupled to `home.html` and `.dob-*` CSS |
| `docs/scripts/dob.js` | Search shortcut and responsive navigation behavior | Must tolerate MkDocs instant navigation |
| `docs/stylesheets/extra.css` | Complete visual system and responsive layout | Requires rendered desktop/mobile QA |
| `mkdocs.yml` | Site metadata, version, plugins, extensions, and ordered navigation | Strict build treats warnings as failures |
| `overrides/` | Jinja templates replacing Material theme partials | Coupled to the pinned Material version |
| `scripts/audit_wiki.py` | Baseline paths/headings and local Markdown-link validation | A compatibility gate, not a full test suite |
| `scripts/build_hostinger.ps1` | Windows emergency ZIP package | Writes ignored output to `site/` and `dist/` |
| `.github/workflows/deploy.yml` | Linux build, archive, SSH publication, retention, and verification | Production-affecting and secret-dependent |
| `internal/` | Non-public repository records and agent guidance | May be committed, but must contain no secrets |
| `site/` | Generated MkDocs output | Ignored; never hand-edit |
| `dist/` | Generated manual deployment package | Ignored; never hand-edit |

## Content architecture

The navigation is explicitly ordered in `mkdocs.yml`; directory structure alone
does not publish a page in the menu.

| Area | Public purpose |
|---|---|
| `primeiros-passos/` | Official launcher, account, and first-character onboarding |
| `personagem.md` | Character baseline, stats, skills, buffs, and race |
| `mundo/` | Facets, locations, guards, maps, and travel |
| `combate/` | Canonical combat rules, formulas, ranges, and worked examples |
| `itens/` | Player-visible weapon, armor, consumable, and utility behavior |
| `arena.md` | Arena lifecycle, ranking, kits, disconnect behavior, and Trainer boundary |
| `sistemas/` and `sistemas-desativados.md` | Enabled and intentionally unavailable systems |
| `comandos.md` | Exact player command reference |
| `patches.md` | Shipped, versioned changes |
| `proximo-patch.md` | Planned behavior that is not yet live |

### Fact lifecycle

Gameplay facts often appear in more than one place. A change is incomplete if
only one occurrence is updated.

```text
approved source
      |
      +--> canonical reference page
      +--> command/onboarding page, when player action changes
      +--> patches.md, when the behavior ships
      +--> proximo-patch.md, while it remains planned
      +--> index.md and mkdocs.yml, when version/highlight copy changes
```

Before changing a number, command, version, item, arena rule, or system status,
search all of `docs/`, `mkdocs.yml`, and `internal/`.

The public connection flow is launcher-only. Do not publish or restore direct
connection details or manual client configuration. The canonical download URL is
`https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe`; keep the home
page CTA and `primeiros-passos/conexao.md` aligned with it.

## Executable contracts

### Documentation audit

`python scripts/audit_wiki.py` currently checks:

- the presence of 16 baseline files/assets;
- required headings in selected canonical pages;
- destinations of local Markdown links;
- fragments of links to Markdown headings.

It does **not** check:

- correctness or consistency of gameplay claims;
- completeness of `mkdocs.yml` navigation;
- raw HTML links in `docs/index.md`;
- image references;
- duplicate anchors;
- external URLs;
- rendered accessibility, layout, or JavaScript behavior;
- hashes recorded in the historical baseline file.

The baseline record contains historical byte counts and SHA-256 values; current
files are allowed to evolve. The executable audit preserves paths and selected
headings, not historical file contents.

### Strict build

`python -m mkdocs build --strict --clean` validates MkDocs configuration,
navigation, plugins, Markdown parsing, and theme rendering. It rebuilds `site/`
from scratch. Because `site/` is generated and ignored, inspect source files,
not generated HTML, when reviewing a change.

### Browser behavior

Material instant navigation can replace page content without a full reload.
`docs/scripts/dob.js` subscribes to `document$` and makes binding idempotent:

- home search buttons get a `data-dob-search-bound` marker;
- the global Ctrl/Cmd+K shortcut is bound once on `body`;
- desktop navigation triggers and close controls get a bound marker;
- mobile accordions close their siblings;
- Escape closes open desktop panels.

Any new listener must follow the same re-entry model or explicitly clean itself
up.

## Visual architecture

The theme is Material for MkDocs with a custom Jinja directory.

- `header.html` renders the Days of Britannia Atlas identity, search, live
  version, and the stable production-verification marker.
- `nav.html` implements two navigation systems: a desktop icon rail with panels
  and a mobile accordion drawer.
- `home.html` removes the standard layout wrapper for the landing page.
- `footer.html` provides stable links to the main operational references.

`nav.html` maps icons by top-level navigation position. This is an implicit
array-index contract: a top-level navigation change must be checked against
`atlas_icons`.

The custom CSS is organized by header, search, Atlas navigation, document
layout, home page, footer/utilities, desktop, tablet/mobile, and narrow mobile.
The principal responsive boundaries are:

- desktop: `min-width: 76.25em` (about 1220 px);
- tablet/mobile: `max-width: 76.234375em`;
- compact layout: `max-width: 59.984375em` (about 960 px);
- narrow mobile: `max-width: 44.984375em` (about 720 px).

## Task playbooks

### Operating method: Método Atlas Lean — Lean 1.1

Use [`lean-methodology.md`](lean-methodology.md) as the routing layer before
choosing a playbook. The core gates apply to every change; editorial,
localization, fact, browser, and deployment checks apply only when the change
type requires them. This keeps a typo fix from inheriting the process for a
gameplay or theme change.

### Editorial and localization standards

Before changing public prose, read [`editorial-style-guide.md`](editorial-style-guide.md)
and choose the page's primary intent: tutorial/onboarding, how-to, reference,
explanation, or landing page. For PT-BR/English work, also read
[`localization-guide.md`](localization-guide.md) and consult
[`terminology.yml`](terminology.yml). The Portuguese page is the editorial
source, but English must preserve the same rules, numbers, commands, status, and
exceptions.

For a new or substantially revised public page, record the page type and run the
editorial checklist. Use the six pilot surfaces recorded in the editorial guide
as reference patterns when the page type matches. Do not add a new page to
public navigation while its approved language counterpart is missing, unless the
exception is explicit in the change record.

### Fact provenance and freshness (high-risk claims only)

Only for high-risk gameplay claims, read [`facts/README.md`](facts/README.md) and
record the claim in [`facts/registry.yml`](facts/registry.yml). Production live
behavior is the approved source; record a safe live-version or release
identifier, never a private script path. Local-only behavior must remain
`planned` or outside the public manual. Never copy private implementation into
the repository.

Run the report before reviewing a version change:

```powershell
python scripts\report_fact_freshness.py
```

The report is intentionally non-blocking for pending approvals while the
registry is being populated. Invalid registry structure is a failure. Do not
run or update it for ordinary prose, internal maintenance, or claims outside
the high-risk classes. Once the owner has approved the source workflow, the
report can become a CI gate in a later phase.

### Correct or add a gameplay rule

1. Obtain an approved public source for the rule.
2. Find every current mention with `rg -n`.
3. Choose one canonical reference page for the full explanation.
4. Update secondary pages with concise, consistent wording and a link where
   useful.
5. If shipped, update `patches.md`; if not shipped, keep it in
   `proximo-patch.md` and do not describe it as live elsewhere.
6. Run the audit and strict build.

### Add a public page

1. Place it in the matching content area under `docs/`.
2. Use one Portuguese H1 and a short orientation paragraph.
3. Link it from related pages.
4. Add it to `nav` in `mkdocs.yml`, unless it is intentionally unlisted.
5. If it replaces a baseline URL, preserve the old URL with an explicit,
   tested redirect before changing the audit.
6. Build and inspect the resulting navigation at desktop and mobile sizes.

### Change the live version

1. Update `extra.dob_version` in `mkdocs.yml`.
2. Add/update the release entry in `docs/patches.md`.
3. Move any shipped claims out of `docs/proximo-patch.md`.
4. Update the home-page release card in `docs/index.md`.
5. Search for the old version and review every remaining occurrence.
6. Run all documentation checks and inspect header/home rendering.

### Change navigation or theme

1. Read `mkdocs.yml`, the affected override, `dob.js`, and relevant CSS blocks.
2. Keep the top-level navigation/icon mapping aligned.
3. Preserve semantic controls, accessible labels, focus styling, `hidden`
   state, and Escape behavior.
4. Verify direct page load and instant-navigation transitions.
5. Verify desktop rail/panel, tablet drawer, narrow mobile, search, keyboard
   navigation, long labels, long tables, and footer.
6. Treat a Material dependency upgrade as a theme compatibility change.

### Build an emergency Hostinger package

Run:

```powershell
.\scripts\build_hostinger.ps1
```

This performs a strict clean build, recreates
`dist/dob-atlas-hostinger.zip`, and leaves generated output ignored by Git. Run
`python scripts\audit_wiki.py` separately first; the packaging script does not
invoke the repository audit.

### Change deployment automation

Read the complete workflow before editing. Preserve these properties unless the
user explicitly changes the release policy:

- build and deploy are separate jobs connected by an immutable SHA archive;
- only validated content is packaged;
- SSH host verification is configured from GitHub secrets;
- `dob-downloads/` and `.well-known/` survive publication and rollback;
- a pre-publication snapshot exists;
- publication uses `rsync --delete` with explicit exclusions;
- the three newest releases and backups are retained;
- production verification requires the stable `data-dob-site="atlas"` marker;

The remote rollback trap protects errors inside the remote publication block.
The later HTTP verification is a separate step; a failure there reports a failed
workflow but does not automatically invoke the remote rollback function.

## Verification matrix

| Change | Audit | Strict build | Browser QA | Extra check |
|---|:---:|:---:|:---:|---|
| Prose only | Yes | Yes | When HTML/layout changes | Search duplicated facts |
| Links/headings | Yes | Yes | Spot-check | Confirm stable inbound anchors |
| New/moved page | Yes | Yes | Yes | Navigation and redirect policy |
| `mkdocs.yml` metadata/version | Yes | Yes | Yes | Search old value |
| CSS/Jinja/JavaScript | Yes | Yes | Required | Keyboard, mobile, instant nav |
| Dependency upgrade | Yes | Yes | Required | Template/icon compatibility |
| Packaging script | Yes | Yes | No | Inspect ZIP contents |
| Deploy workflow | Yes | Yes | No | Review shell quoting, rollback, exclusions |

Every handoff should also include:

```powershell
git diff --check
git status --short
```

Production serves static presentation assets with a long browser cache. CSS,
JavaScript, and brand image references therefore include query-string asset
versions. Increment the relevant version whenever one of those files changes;
otherwise returning visitors can keep the previous presentation for up to seven
days.

## Production pipeline

On a push to `main`, GitHub Actions:

1. checks out the exact commit;
2. installs pinned Python dependencies on Python 3.12;
3. runs the wiki audit and strict clean build;
4. archives the contents of `site/` and retains the artifact for 14 days;
5. uploads the SHA-named archive over SSH;
6. extracts it into a SHA-specific release directory;
7. snapshots the current public tree;
8. publishes with `rsync`, preserving downloads and ACME content;
9. records the current SHA and prunes older releases/backups;
10. fetches production up to six times and looks for
    `data-dob-site="atlas"`.

Required GitHub environment secrets are named in `README.md`. Never print,
copy, commit, or replace their values during ordinary documentation work.

## Review findings and risk register

These are constraints to account for, not authorization to expand a task:

1. **Editorial truth is manual.** Automated checks cannot establish whether a
   gameplay number or rule is correct. Approved source traceability is required.
2. **The audit has deliberate gaps.** Raw HTML links, images, external links,
   navigation completeness, and rendered behavior need separate review.
3. **Theme coupling is implicit.** Custom Material partials and icon paths can
   break after dependency upgrades even when Markdown content is unchanged.
4. **Navigation icons are positional.** A top-level reorder can silently assign
   the wrong icon.
5. **There are no automated browser tests.** Interaction and responsive checks
   are manual.
6. **The manual package omits the custom audit.** Run it separately.
7. **HTTP verification does not trigger remote rollback.** It detects a bad
   production result after publication but does not itself restore the snapshot.
8. **`main` is deployment-active.** A push is a production action, not merely a
   collaboration step.

## Completion checklist

- [ ] Target files and related references were read before editing.
- [ ] Public claims came from an approved source.
- [ ] The page intent and editorial pattern were reviewed.
- [ ] PT-BR/English parity and protected terminology were reviewed when applicable.
- [ ] Private implementation and secrets stayed out of the repository.
- [ ] Duplicated facts, commands, versions, and status labels agree.
- [ ] Baseline paths and required headings remain valid.
- [ ] `python scripts\audit_wiki.py` passes.
- [ ] `python -m mkdocs build --strict --clean` passes.
- [ ] Browser QA was completed when presentation or interaction changed.
- [ ] `git diff --check` passes.
- [ ] Generated `site/` and `dist/` output is not included in the change.
- [ ] The final handoff distinguishes verified behavior from unverified risk.
