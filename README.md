# DoB Atlas

Public player-facing manual for the Days of Britannia shard.

Production is served by Hostinger at [dobshard.com](https://dobshard.com/). GitHub
stores source and validates strict builds; it is not the production web host.

## Local preview

```powershell
python -m pip install -r requirements.txt
python -m mkdocs serve
```

## Production package

```powershell
.\scripts\build_hostinger.ps1
```

The command validates the documentation and creates
`dist\dob-atlas-hostinger.zip`. Extract the archive directly into the domain's
`public_html` directory in Hostinger. Credentials and hPanel exports must never
be committed.

Internal server implementation, infrastructure, credentials, logs and PvP Trainer decision logic do not belong in this repository.
