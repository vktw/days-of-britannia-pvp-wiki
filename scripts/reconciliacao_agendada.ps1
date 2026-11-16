# Rotina agendada de reconciliação da wiki (política em AGENTS.md).
#
# Uso: executado pelo Agendador de Tarefas do Windows (diário).
# 1. Atualiza a base local (fetch) e garante árvore limpa.
# 2. Compara a versão em produção (origin/main do servidor) com a dob_version da wiki.
# 3. Sem gap, encerra sem fazer nada (idempotente).
# 4. Com gap, cria a branch a partir do origin/main atual e dispara
#    `opencode run` com o playbook da reconciliação autônoma.
# O agente decide publicar ou escalar conforme os gates; humanos não são
# chamados quando tudo passa (exceção aprovada pelo dono em 2026-11-12).

$ErrorActionPreference = "Stop"
$WikiRoot = "C:\days-of-britannia-pvp-wiki"
$ServerRepo = "C:\TrueUO"

function Get-ProductionVersion {
    # O checkout local pode estar defasado; a verdade está no origin/main.
    git -C $ServerRepo fetch origin main --quiet
    $text = git -C $ServerRepo show "origin/main:Docs/Agent/RELEASES.md"
    $m = [regex]::Match($text, '- Version: `v([\d.]+)`')
    if (-not $m.Success) { throw "Versão de produção não encontrada em origin/main:Docs/Agent/RELEASES.md" }
    return $m.Groups[1].Value
}

function Get-WikiVersion {
    $line = Select-String -Path (Join-Path $WikiRoot "mkdocs.yml") -Pattern 'dob_version:\s*"([\d.]+)"' | Select-Object -First 1
    if (-not $line) { throw "dob_version não encontrada em mkdocs.yml" }
    return $line.Matches[0].Groups[1].Value
}

# Base sempre atual: fetch + aborta se houver trabalho não commitado.
git -C $WikiRoot fetch origin main --quiet
$dirty = git -C $WikiRoot status --porcelain | Where-Object { $_ -notmatch '^\?\? internal/offgame/' }
if ($dirty) { throw "Árvore local suja; reconciliação automática abortada para não sobrescrever trabalho." }

$prod = Get-ProductionVersion
$wiki = Get-WikiVersion
Write-Output "producao=$prod wiki=$wiki"

if ([version]$prod -le [version]$wiki) {
    Write-Output "Sem gap. Nada a fazer."
    exit 0
}

$branch = "codex/reconciliacao-$($prod.Replace('.', ''))-$(Get-Date -Format 'yyyyMMdd')"
git -C $WikiRoot checkout -B $branch origin/main --quiet
Write-Output "branch=$branch"

$prompt = @"
Rotina autônoma de reconciliação da wiki (política em AGENTS.md, exceção aprovada em 2026-11-12).
Produção está em v$prod e a wiki em v$wiki. Você já está na branch $branch, criada de origin/main atual.
1) Extraia o escopo de C:\TrueUO\Docs\Patches\$prod.md e do PatchCatalog PT+EN (Scripts/Services/PatchNotes/PatchCatalog.cs e PatchCatalogEnglish.cs, tag da versão). Use git show origin/main:<path>, somente leitura.
2) Verifique cada mecânica player-facing no código do servidor.
3) Atualize docs/patches.md e .en.md (nova seção no topo), páginas de referência afetadas, docs/index.md e .en.md, docs/proximo-patch.md e .en.md, dob_version em mkdocs.yml e o heading em scripts/audit_wiki.py. PT-BR primeiro, EN em paridade (mesmos números, comandos, links).
4) Rode todos os gates: scripts\audit_wiki.py, scripts\audit_localization.py, scripts\audit_site_contract.py, scripts\audit_fact_registry.py, report_fact_freshness, python -m mkdocs build --strict --clean, git diff --check.
5) Se TODOS passarem e só arquivos esperados mudaram: commit, push, abra o PR, aguarde o CI ficar verde, faça merge, verifique o deploy em https://dobshard.com/ e abra uma issue no repo resumindo a versão publicada e o que foi verificado.
6) Se qualquer gate falhar ou algo sair do escopo: NÃO publique; suba a branch, abra o PR como rascunho e registre o bloqueio numa issue.
Regras: nenhum segredo no repo; nunca altere o servidor do jogo; sem especulação (só delta publicado + código verificado); internal/offgame nunca é commitado.
"@

Set-Location $WikiRoot
& opencode run --auto --model openai/gpt-5.6-luna $prompt
