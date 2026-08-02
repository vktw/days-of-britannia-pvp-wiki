# Método Atlas Lean — Lean 1.1

Este é o modelo operacional mínimo para agentes que mantêm a wiki. Ele reduz
burocracia sem relaxar os controles que protegem jogadores, URLs, segredos e a
publicação.

**Versão:** Lean 1.1
**Nome:** Método Atlas Lean
**Escopo:** manutenção do manual público e de sua operação interna
**Regra de precedência:** `AGENTS.md`, configuração executável e fontes
aprovadas continuam acima deste documento.

## Princípio

Use rigor onde um erro é caro e velocidade onde o risco é baixo. Nenhum agente
deve preencher um checklist inteiro apenas porque ele existe.

Antes de começar, responda:

> Esta alteração pode expor algo privado, publicar uma regra errada, quebrar uma
> URL, quebrar o build ou alterar a experiência em produção?

Se a resposta for não, aplique somente o núcleo obrigatório. Se for sim,
adicione os controles condicionais correspondentes.

## Núcleo obrigatório — todas as alterações

1. **Inspecionar o estado:** `git status --short --branch` e escopo da mudança.
2. **Proteger a fronteira:** conteúdo público fica em `docs/`; operação interna
   fica em `internal/`; nenhum segredo ou implementação privada entra no repo.
3. **Usar fonte aprovada para gameplay público:** não inventar regras, números,
   comandos ou status. Para documentação interna, use os contratos e arquivos
   executáveis do repositório; não crie uma falsa exigência de fonte editorial.
4. **Alterar o mínimo coerente:** procurar duplicações e manter URLs estáveis.
5. **Rodar os gates essenciais:**

   ```powershell
   python scripts\audit_wiki.py
   python -m mkdocs build --strict --clean
   git diff --check
   ```

6. **Revisar o diff e o status:** confirmar que apenas os arquivos pretendidos
   mudaram.

Publicação nunca é implícita. Push, deploy ou alteração de secrets exigem
autorização explícita.

## Controles condicionais

| Tipo de alteração | Controle adicional | Não aplicar quando |
|---|---|---|
| Prosa pública | `editorial-style-guide.md` e tipo de página | mudança exclusivamente interna |
| PT-BR/EN | `localization-guide.md` e `terminology.yml` | nenhuma versão traduzida é afetada |
| Número, regra, comando, item, sistema ou status live | `facts/registry.yml` e `report_fact_freshness.py` | texto não faz afirmação de gameplay |
| Nova página ou URL | navegação, links, headings, redirect e browser spot-check | alteração sem rota ou página nova |
| CSS, JavaScript, Jinja ou layout | QA desktop/mobile, teclado e instant navigation | mudança somente Markdown/YAML interno |
| Versão ou patch | busca do valor antigo e revisão de `patches.md`/`proximo-patch.md` | versão não foi alterada |
| Deploy/workflow | leitura completa do workflow e verificação live | nenhuma automação foi tocada |

O registry de fatos é obrigatório apenas para fatos de alto risco. Ele não deve
ser preenchido para cada frase da wiki. Enquanto uma fonte autorizada não for
fornecida, marque a entrada como `pending_approval`; não transforme a própria
wiki em evidência.

## Recomendações, não bloqueios

Estas práticas melhoram a qualidade, mas não devem bloquear uma alteração
simples:

- classificar a intenção da página;
- revisar exemplos com um jogador novo;
- registrar uma dúvida recorrente;
- atualizar o glossário com um termo novo;
- fazer browser QA extra em uma página de texto;
- registrar contexto histórico no roadmap;
- propor métricas ou scorecards.

Se uma recomendação virar requisito recorrente, explique o risco e promova-a
para a tabela condicional. Não promova por hábito.

## Futuro, não requisito atual

Os itens abaixo pertencem ao roadmap, mas não devem criar trabalho antecipado:

- scorecard de qualidade;
- analytics e pesquisas sem resultado;
- auditoria completa de localização;
- auditoria de SEO, HTML e assets;
- testes automatizados de acessibilidade;
- revisão formal de todas as páginas por tipo;
- registry exaustivo de fatos de baixo risco.

## Roteamento em um minuto

```text
Mudança chegou
    |
    +-- é pública? ---- não --> núcleo mínimo + diff
    |
    +-- é prosa? ------ sim --> editorial
    |
    +-- é PT/EN? ------- sim --> localização + glossário
    |
    +-- é regra/valor? - sim --> fonte + registry de alto risco
    |
    +-- muda visual? --- sim --> browser QA
    |
    `-- publicar? ------ sim --> autorização + workflow + verificação live
```

Os ramos se acumulam apenas quando aplicáveis. Uma correção de typo em um
documento interno não precisa de tradução, registry, browser QA ou scorecard.

## Critério de parada

Pare e peça direção quando:

- a fonte oficial estiver ausente ou contraditória;
- a mudança puder expor conexão, segredo ou implementação privada;
- a URL pretendida substituir uma baseline sem redirect verificável;
- houver alteração fora do escopo autorizado;
- o deploy ou uma permissão impedir a verificação necessária.

Não contorne a parada adicionando uma suposição ao texto público.

## Definição de pronto Lean

Uma alteração está pronta quando o núcleo obrigatório passou, os controles
condicionais aplicáveis passaram e o diff não contém trabalho não autorizado.
Qualquer controle não aplicado deve ser justificável pelo tipo de alteração,
não apenas omitido.
