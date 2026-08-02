# Método Atlas Lean — Lean 1.1

Este é o modelo operacional mínimo para agentes que mantêm a wiki. Ele reduz
burocracia sem relaxar os controles que protegem jogadores, URLs, segredos e a
publicação.

**Versão:** Lean 1.1
**Nome:** Método Atlas Lean
**Escopo:** manutenção do manual público e de sua operação interna
**Regra de precedência:** `AGENTS.md`, configuração executável e fontes
aprovadas continuam acima deste documento.

## Fonte de verdade de gameplay

O servidor live é a autoridade final. Se um comportamento está no live, ele é
aprovado e pode ser documentado como verdade da versão vigente. Alterações no
servidor local são rascunho: não entram na wiki nem no registry como `live` até
serem publicadas no servidor.

Os scripts live podem ser a referência técnica, mas nunca devem ser copiados
para `docs/` ou `internal/`. Registre apenas um identificador seguro da versão,
release ou módulo, sem expor implementação privada.

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
3. **Usar o live para gameplay público:** documentar apenas comportamento
   presente no servidor live; não promover comportamento local, regra imaginada,
   número ou comando ainda não publicado.
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
ser preenchido para cada frase da wiki. Para comportamento live, use
`source_status: approved` e um identificador seguro da versão; para trabalho
local, use `status: planned` ou mantenha a informação fora da wiki até publicar.

## Fase 3 — gates automatizados de qualidade

A Fase 3 adiciona controles executáveis somente onde o retorno é alto. O gate de
localização verifica pares PT-BR/EN, headings, comandos, números, links e termos
protegidos. O gate de contrato do site verifica navegação e assets locais. O gate
do registry confirma que fatos apontam para páginas canônicas existentes. Após o
build, o gate renderizado verifica `lang`, título, marcador Atlas, links de idioma,
metadata canônica e anchors duplicados.

Esses gates rodam no CI antes do empacotamento. Eles detectam deriva estrutural e
quebras de publicação; não substituem a fonte live nem provam que uma regra de
gameplay está correta. A auditoria de metadata SEO mais ampla permanece uma
etapa posterior, quando houver necessidade comprovada.

### Política de bloqueio

Os gates de links, paridade PT-BR/EN, navegação/assets, registry e build são
bloqueadores: uma falha impede o pacote e o deploy. A auditoria renderizada de
metadata, canonical, hreflang e anchors é advisory por enquanto: aparece no CI,
mas não interrompe uma publicação. Ela só vira bloqueadora após evidência de
falsos positivos baixos e benefício operacional claro.

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
- auditoria de SEO além dos metadados estruturais já verificados;
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
