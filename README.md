# DoB Atlas

Public player-facing manual for the Days of Britannia shard.

Production is served by Hostinger at [dobshard.com](https://dobshard.com/). GitHub
is the source of truth and deploys every validated commit from `main`.

Agents and maintainers should start with [`AGENTS.md`](AGENTS.md). The detailed
architecture, change playbooks, verification matrix, and current risk register
are in [`internal/agent-first-guide.md`](internal/agent-first-guide.md). The
internal documentation map and maturity plan are indexed in
[`internal/README.md`](internal/README.md).

## Local preview

```powershell
python -m pip install -r requirements.txt
python -m mkdocs serve
```

## Production deployment

The normal release flow is:

1. Edit and preview locally.
2. Run the audit and strict build.
3. Commit and push to `main`.
4. GitHub Actions deploys the generated site to Hostinger and verifies production.

```powershell
python scripts\audit_wiki.py
python -m mkdocs build --strict --clean
git push origin main
```

The `production` environment requires these GitHub Actions secrets:

- `HOSTINGER_HOST`
- `HOSTINGER_KNOWN_HOSTS`
- `HOSTINGER_PORT`
- `HOSTINGER_USER`
- `HOSTINGER_SSH_KEY`

The deploy keeps the three most recent releases and backups on Hostinger. It
preserves `public_html/dob-downloads`, `public_html/.well-known`, and the
separate `public_html/economy` application. The deployment aborts if the
protected economy directory is missing and restores the previous snapshot if
publication fails.

## Manual package

```powershell
.\scripts\build_hostinger.ps1
```

The command validates the documentation and creates
`dist\dob-atlas-hostinger.zip`. This is an emergency fallback; automated deploys
should be preferred. Credentials and hPanel exports must never be committed.

Internal server implementation, infrastructure, credentials, logs and PvP Trainer decision logic do not belong in this repository.
