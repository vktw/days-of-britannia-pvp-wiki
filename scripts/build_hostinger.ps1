[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$sitePath = Join-Path $repoRoot "site"
$distPath = Join-Path $repoRoot "dist"
$archivePath = Join-Path $distPath "dob-atlas-hostinger.zip"

Push-Location $repoRoot

try {
    python -m mkdocs build --strict --clean

    if ($LASTEXITCODE -ne 0) {
        throw "MkDocs build failed."
    }

    New-Item -ItemType Directory -Force -Path $distPath | Out-Null
    Remove-Item -LiteralPath $archivePath -Force -ErrorAction SilentlyContinue
    Compress-Archive -Path (Join-Path $sitePath "*") -DestinationPath $archivePath -CompressionLevel Optimal

    Write-Host "Hostinger package created at $archivePath"
}
finally {
    Pop-Location
}
