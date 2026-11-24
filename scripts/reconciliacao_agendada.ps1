# Rotina agendada de reconciliação da wiki (política em AGENTS.md).
#
# Uso: executado pelo Agendador de Tarefas do Windows (diário).
# 1. Compara a versão em produção (origin/main do servidor) com a dob_version
#    da wiki (lida do origin/main, sem depender do checkout local).
# 2. Sem gap, encerra sem fazer nada (idempotente).
# 3. Com gap, prepara um worktree isolado e dispara `opencode run` com o
#    playbook da reconciliação autônoma. O checkout principal nunca é tocado,
#    então trabalho local em andamento não bloqueia nem é sobrescrito.
# 4. Qualquer falha antes ou durante o ciclo abre/atualiza uma issue
#    "[auto] Reconciliação bloqueada" em vez de morrer em silêncio.
# O agente decide publicar ou escalar conforme os gates; humanos não são
# chamados quando tudo passa (exceção aprovada pelo dono em 2026-11-12).

$ErrorActionPreference = "Stop"
$WikiRoot = "C:\days-of-britannia-pvp-wiki"
$ServerRepo = "C:\TrueUO"
$AutoDir = "C:\dob-wiki-auto"
$RepoSlug = "vktw/days-of-britannia-pvp-wiki"
$BlockTitlePrefix = "[auto] Reconciliação bloqueada"
# $false: o PR fica aberto para aprovação do dono (padrão).
# $true: merge automático após CI verde (exceção de 2026-11-12 em AGENTS.md).
$AutoMerge = $false

function Get-ProductionVersion {
    git -C $ServerRepo fetch origin main --quiet
    $text = git -C $ServerRepo show "origin/main:Docs/Agent/RELEASES.md"
    $m = [regex]::Match($text, '- Version: `v([\d.]+)`')
    if (-not $m.Success) { throw "Versão de produção não encontrada em origin/main:Docs/Agent/RELEASES.md" }
    return $m.Groups[1].Value
}

function Get-WikiVersion {
    $text = git -C $WikiRoot show "origin/main:mkdocs.yml"
    $m = [regex]::Match($text, 'dob_version:\s*"([\d.]+)"')
    if (-not $m.Success) { throw "dob_version não encontrada em origin/main:mkdocs.yml" }
    return $m.Groups[1].Value
}

function Notify-Blocked([string]$reason) {
    try {
        $open = gh issue list --repo $RepoSlug --state open --search "$BlockTitlePrefix in:title" --json number --jq 'length' 2>$null
        if ($open -ne "0" -and $null -ne $open) {
            Write-Output "Issue de bloqueio já aberta; sem duplicar."
            return
        }
        $body = "O ciclo autônomo abortou antes de concluir.`n`nMotivo: $reason`n`nData (UTC): $([DateTime]::UtcNow.ToString('u'))`n`nVerificar e retomar manualmente quando possível."
        gh issue create --repo $RepoSlug --title "$BlockTitlePrefix" --body $body 2>&1 | Select-Object -First 2
    } catch {
        Write-Output "AVISO: falha ao registrar issue de bloqueio: $_"
    }
}

try {
    git -C $WikiRoot fetch origin main --quiet

    $prod = Get-ProductionVersion
    $wiki = Get-WikiVersion
    Write-Output "producao=$prod wiki=$wiki"

    if ([version]$prod -le [version]$wiki) {
        Write-Output "Sem gap. Nada a fazer."
        exit 0
    }

    $branch = "codex/reconciliacao-$($prod.Replace('.', ''))-$(Get-Date -Format 'yyyyMMdd')"
    if (Test-Path $AutoDir) {
        git -C $WikiRoot worktree remove --force $AutoDir 2>&1 | Out-Null
        git -C $WikiRoot worktree prune
    }
    git -C $WikiRoot worktree add --detach $AutoDir origin/main --quiet
    Write-Output "worktree=$AutoDir branch=$branch"

    if ($AutoMerge) {
        $MergeStep = "Com CI verde, faça merge, verifique o deploy em https://dobshard.com/ e abra uma issue no repo resumindo a versão publicada e o que foi verificado."
    } else {
        $MergeStep = "NÃO faça merge: deixe o PR pronto para revisão, atribuído a vktw, com o resumo da versão e do que foi verificado no corpo. O dono aprova e faz o merge."
    }

    $prompt = @"
Rotina autônoma de reconciliação da wiki (política em AGENTS.md, exceção aprovada em 2026-11-12).
Produção está em v$prod e a wiki em v$wiki. Você está num worktree isolado de origin/main (detached); crie a branch $branch antes de editar.
1) Extraia o escopo de C:\TrueUO\Docs\Patches\$prod.md e do PatchCatalog PT+EN (Scripts/Services/PatchNotes/PatchCatalog.cs e PatchCatalogEnglish.cs, tag da versão). Use git show origin/main:<path>, somente leitura.
2) Verifique cada mecânica player-facing no código do servidor.
3) Atualize docs/patches.md e .en.md (nova seção no topo), páginas de referência afetadas, docs/proximo-patch.md e .en.md, dob_version em mkdocs.yml e o heading em scripts/audit_wiki.py. PT-BR primeiro, EN em paridade (mesmos números, comandos, links).
   HOME (docs/index.md e .en.md): mude SÓ o texto dentro de duas tags na faixa de status: o <strong> do "Versão atual"/"Current version" (número da versão) e o <strong> do "Última atualização"/"Latest update" (nome curto do patch, 2 a 4 palavras). Não adicione, remova nem reordene tags, classes ou atributos; não mexa em overrides/, docs/stylesheets/, docs/scripts/, docs/assets/, hooks/ nem .github/. Temporadas (extra.dob_seasons) só mudam se o patch trouxer temporada nova.
4) Rode todos os gates: scripts\audit_home_layout.py --auto-scope (layout da home e escopo de arquivos), scripts\audit_wiki.py, scripts\audit_localization.py, scripts\audit_site_contract.py, scripts\audit_fact_registry.py, report_fact_freshness, python -m mkdocs build --strict --clean, git diff --check.
5) Se TODOS passarem e só arquivos esperados mudaram: commit, push (upstream da branch), abra o PR e aguarde o CI ficar verde. $MergeStep
6) Se qualquer gate falhar ou algo sair do escopo: NÃO publique; suba a branch, abra o PR como rascunho e registre o bloqueio numa issue.
Regras: nenhum segredo no repo; nunca altere o servidor do jogo; sem especulação (só delta publicado + código verificado); internal/offgame nunca é commitado (não existe neste worktree).
"@

    Set-Location $AutoDir
    & opencode run --auto --model openai/gpt-5.6-luna $prompt
} catch {
    Notify-Blocked "$_"
    throw
}
