# Agent instructions

## Mission

Maintain the public, player-facing Days of Britannia manual. Prefer small,
verifiable changes that keep published URLs stable and do not expose private
server implementation.

For the detailed repository map, contracts, playbooks, and risk register, read
[`internal/agent-first-guide.md`](internal/agent-first-guide.md) before making a
non-trivial change.

The internal documentation index and maturity roadmap are in
[`internal/README.md`](internal/README.md). Consult them when changing the
agent-first operating model rather than ordinary player content.

The current operating method is **Método Atlas Lean — Lean 1.1**, documented in
[`internal/lean-methodology.md`](internal/lean-methodology.md). It separates
mandatory core controls from checks that apply only to specific change types.

## Repository boundary

Allowed:

- public gameplay rules and player instructions;
- public patch notes and planned changes that are explicitly approved;
- MkDocs configuration, theme overrides, CSS, JavaScript, assets, validation,
  packaging, and deployment automation;
- internal repository documentation that contains no secrets.

Never add:

- credentials, private keys, secret values, hPanel exports, or production logs;
- private infrastructure details beyond the deployment contract already
  documented in this repository;
- server source code or internal implementation;
- PvP Trainer decision logic, tactics, or other non-public behavior;
- speculative gameplay facts presented as live behavior.

When a requested fact cannot be verified from an approved source, stop and ask
for that source or label the text as planned/unverified in an internal note.
Do not invent values to complete a page.

## Source of truth

- `docs/` is the public manual.
- `mkdocs.yml` defines public navigation, site metadata, theme features, and the
  displayed live version.
- `internal/wiki-pvp-baseline-2026-07-24.md` records the migration baseline.
- `scripts/audit_wiki.py` is the executable compatibility contract for baseline
  paths, required headings, and local Markdown links.
- `.github/workflows/deploy.yml` is the production release contract.
- GitHub `main` is the production source branch.

If prose and executable configuration disagree, verify intent before changing
either. Do not silently document an assumption as fact.

## Change workflow — Lean 1.1 core

1. Inspect `git status --short --branch` and preserve unrelated user changes.
2. Read every target file plus the relevant entries in `mkdocs.yml`,
   `scripts/audit_wiki.py`, templates, CSS, or JavaScript.
3. Search for duplicated facts before editing:

   ```powershell
   rg -n "term or value" docs mkdocs.yml internal
   ```

4. Make the smallest coherent change. Update all affected public references,
   navigation labels, version labels, patch notes, and cross-links together.
5. Run the required checks from the repository root:

   ```powershell
   python scripts\audit_wiki.py
   python -m mkdocs build --strict --clean
   ```

6. Apply conditional checks from `internal/lean-methodology.md`: browser QA is
   required for layout, interaction, template, CSS, or JavaScript changes;
   editorial, localization, and fact checks apply only when those surfaces are
   affected.
7. Review `git diff --check` and `git diff` before handing off.

Do not push, deploy, or modify GitHub secrets unless the user explicitly asks.

## Public content rules

- Write player-facing pages in Brazilian Portuguese.
- Preserve existing terminology and exact command syntax such as `.arena` and
  `[PvPCamp`.
- Keep one H1 per page and use stable, descriptive headings.
- Use relative links between Markdown pages.
- Add a new page to `mkdocs.yml` or deliberately document why it is unlisted.
- Treat `docs/index.md` as a custom HTML landing page; preserve its class names
  and accessibility attributes unless the matching CSS is updated.
- Never publish direct server connection details. Direct players only to the
  official launcher at
  `https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe`.
- Update both `extra.dob_version` in `mkdocs.yml` and the relevant public release
  references when the live version changes.
- Planned behavior belongs in `docs/proximo-patch.md`; shipped behavior belongs
  in the relevant reference page and `docs/patches.md`.
- Preserve baseline paths. If a path must move, implement and verify an
  explicit redirect before removing it, then update the audit contract.

## Theme and interaction rules

- `overrides/` depends on Material for MkDocs template blocks and icon paths.
  Dependency upgrades require a rendered regression review.
- The order of top-level `nav` entries is coupled to `atlas_icons` in
  `overrides/partials/nav.html`. Reorder or add a section only when the icon
  mapping is updated at the same time.
- `docs/scripts/dob.js` must remain safe under Material instant navigation.
  Bindings are intentionally idempotent through `data-*` flags.
- CSS breakpoints at approximately 1220 px, 960 px, and 720 px control the
  desktop rail, drawer, and narrow layouts. Check all three regimes after
  structural changes.
- CSS, JavaScript, and brand image URLs use query-string versions to invalidate
  the seven-day production cache. Bump the relevant version whenever one changes.
- Keep interactive controls keyboard reachable and preserve `aria-*`, focus,
  `hidden`, and Escape behavior.

## Definition of done

A change is complete when:

- its public claims are traceable to an approved source;
- all duplicated facts and navigation references are consistent;
- the audit and strict build pass;
- interaction/layout changes received browser verification;
- no secrets or private implementation entered the repository;
- the final diff contains only intended files and the handoff states what was
  verified and what was not.
