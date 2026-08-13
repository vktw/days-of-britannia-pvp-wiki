---
audit_type: patchnotes-reconciliation
status: local_preview
created: 2026-08-13
target_version: "0.26.3"
production_source: "live-server/v0.26.3"
wiki_base: "001ab46"
publication_authorized: false
---

# Plano local: reconciliar a wiki com o Live 0.26.3

## Objetivo

Preparar a atualização local da wiki para o estado de produção `v0.26.3`,
comparando o manual atual com os patchnotes oficiais e separando regras que
precisam de uma página canônica, mudanças que pertencem somente ao histórico de
patches e conteúdo que não deve ser publicado. Este documento é um plano de
execução para esta branch; não autoriza push, merge, deploy ou alteração no
servidor.

O plano foi executado nesta branch como prévia local para revisão. A publicação
continua explicitamente não autorizada.

## Autoridade e estado encontrado

- A fonte oficial local `Docs/Agent/RELEASES.md` registra `v0.26.3` como
  `production`.
- A sequência produtiva relevante é `0.24.0`, `0.25.0`, `0.26.0`, `0.26.1`,
  `0.26.2` e `0.26.3`.
- `0.23.6` é um registro histórico cujo escopo de bandagens foi transferido
  para `0.24.0`; não deve receber uma seção própria na página pública.
- `0.25.1` não possui escopo de produção após a transferência histórica do
  planejamento de Nujelm; não deve ser inventado como release público.
- A wiki partiu do commit `001ab46`; antes desta execução local, identificava
  `0.23.5` como versão Live em `mkdocs.yml`, nos banners, na home, no audit e
  no registry.
- A prévia local agora identifica `0.26.3` como Live e resume as mudanças
  posteriores em `docs/patches.md`/`.en.md`.

Fontes de patch consultadas no repositório oficial local:

- `Docs/Patches/0.23.6.md`
- `Docs/Patches/0.24.0.md`
- `Docs/Patches/0.25.0.md`
- `Docs/Patches/0.25.1.md`
- `Docs/Patches/0.26.0.md`
- `Docs/Patches/0.26.1.md`
- `Docs/Patches/0.26.2.md`
- `Docs/Patches/0.26.3.md`

## Resultado da reconciliação

| Release | Evidência player-facing oficial | Estado atual da wiki | Classificação | Próxima ação |
|---|---|---|---|---|
| `0.23.6` | Tratamento de bandagem é definido no momento do uso; o conteúdo foi transferido para `0.24.0`. | `docs/combate/cura-recursos*` cobre poison imediato e cura atrasada, mas não explicita que poison surgido durante o atraso não troca o tratamento. | Parcial; histórico transferido | Corrigir a regra canônica e registrar a nota em `0.24.0`, sem criar `0.23.6` público. |
| `0.24.0` | Dragon Blood Clothing Dye em Moonglow e Serpent's Hold; faixa de cultivo de Britain em Felucca sem guards; correção de bandagens; paginação de Classic Jewelry; Safe Haven bloqueia todo início de spellcasting fora da Arena NuJelm. | Dye, paginação e o bloqueio completo de spellcasting estão ausentes. Britain aparece de forma genérica e a página de Nujelm ainda lista apenas famílias de magias. | Ausente/conflitante | Atualizar itens, cidades, Nujelm, cura e patch notes. |
| `0.25.0` | Eyes of Newt em loot/carving de NPCs com Magery acima de 50; receita de Total Mana; venda de Eyes fora de regiões guardadas; Summoner's Bond; retângulo sem guards em Moonglow/Felucca; Serpent's Hold sem guards em Felucca e Trammel. | Não há Eyes of Newt, receita de Total Mana, Summoner's Bond ou Serpent's Hold na wiki. A página de guards não traz o retângulo exato de Moonglow. | Ausente | Atualizar recompensas PvM, consumíveis, Maestria e cidades; registrar o conjunto em `0.25.0`. |
| `0.25.1` | Registro de planejamento superseded; sem código, catálogo público ou estado de produção próprio. | Não há seção pública, corretamente. | Sem ação | Manter fora da sequência pública. |
| `0.26.0` | Preferência de idioma por personagem, Português/English, através de `.options`; Help, Patch Notes, Achievements e Compendium compartilham a preferência com fallback. | `.options` não aparece em `docs/comandos*`; a nota de `.patchnotes` descreve apenas alternância dentro do painel. | Ausente | Adicionar comando e explicar a preferência; registrar em `0.26.0`. |
| `0.26.1` | Young passa a receber 100% extra de XP de Maestria PvM; Gold, ganho de skill e demais benefícios permanecem inalterados. | `docs/primeiros-passos/newcomer*` e `docs/itens/recompensas-pvm*` ainda afirmam 25% extra para XP e Gold juntos. | Conflitante | Separar XP `+100%`, Gold `+25%` já documentado e skill gain `+25%`; atualizar PT/EN. |
| `0.26.2` | Correção de Unicode no conteúdo PT-BR e Patch Notes in-game passam a começar em `0.21.0`, preservando histórico antigo internamente. | Não há registro público da release. A wiki web mantém histórico anterior a `0.21.0` sem distinguir o painel in-game. | Ausente; sem conflito de gameplay | Adicionar nota histórica e explicar a diferença entre histórico web e filtro do painel in-game. |
| `0.26.3` | Chance-base PvM de Melee/Archery usa skill de ataque normalizada; armas comuns chegam a 75% em 100; Elven Bow pode usar +10 Archery acima de 100 e +10 Tactics influencia dano; PvP permanece inalterado. | `docs/combate/melee-archery*` ainda afirma 50% PvM em ataque/defesa 100 e dependência da defesa da criatura. `docs/itens/armas*` não explica a exceção de acerto/dano do Elven Bow. | Conflito de regra de alto risco | Corrigir combate e armas, com fórmula, limites PvM/PvP e exceção do Elven Bow. |

## Conteúdo já alinhado e que deve ser preservado

- Fire Bow permanece documentado somente com `75%` em Bowcraft `100.0`; não
  reintroduzir endpoints removidos, especialmente `120.0`.
- DoB Tools, DoB Weapons de Blacksmithy, Bowcraft, metais e peças Chain já
  foram incluídos nas páginas canônicas de itens; a atualização deve apenas
  atualizar a versão e cruzar eventuais efeitos do `0.26.3`.
- A página de Nujelm já preserva a precedência da Arena e as regras anteriores
  de viagem, dano e ganho de skill; a mudança de `0.24.0` deve ampliar o texto,
  não substituir a exceção da Arena.
- A ausência de comandos staff-only ou obsoletos no manual público deve ser
  mantida. Não copiar comandos operacionais, testes, nomes de classes, caminhos
  de deploy, identificadores de save ou lógica interna dos patch documents.
- `0.27.0`, `0.28.0` e `0.29.0` são registros históricos/transferidos e não
  entram como Live nem como próxima versão pública.

## Plano de atualização por superfície — executado localmente

### 1. Metadados, versão e histórico

Atualizar em conjunto:

- `mkdocs.yml`: `extra.dob_version` para `Alpha 0.26.3` e referências de
  navegação que dependam do texto atual.
- `docs/index.md` e `.en.md`: CTA, card da última atualização e destaque de
  `0.26.3`.
- Banners `Status: Live` nas páginas públicas e `docs/proximo-patch*` para
  apontarem para `0.26.3`.
- `docs/patches.md` e `.en.md`: inserir, em ordem decrescente, as notas
  player-facing de `0.26.3`, `0.26.2`, `0.26.1`, `0.26.0`, `0.25.0` e
  `0.24.0`. Não criar seções para `0.23.6` ou `0.25.1`.
- `scripts/audit_wiki.py`: substituir somente as expectativas que significam
  estado atual; preservar claims históricos.
- `internal/facts/registry.yml`: promover o registro de versão atual para
  `0.26.3`, adicionar fatos de alto risco dos releases novos e manter os
  registros antigos com sua última verificação profunda quando isso for
  explicitamente histórico.

### 2. Combate, armas e Maestria

- `docs/combate/melee-archery.md`/`.en.md`:
  - trocar a descrição PvM de 50%/defesa do alvo pela curva-base oficial
    `max(2%, 75% * clamp(skill, 0, 100) / 100)` para armas padrão;
  - explicar que a mesma skill de ataque mantém a mesma chance-base contra
    criaturas com defesas diferentes;
  - manter a fórmula PvP baseada em defesa sem alteração;
  - indicar que o multiplicador relativo de PvM Mastery vem depois da chance
    base, sem criar um segundo modificador de acerto;
  - documentar o Elven Bow em `110.0` como exceção de `82,5%` PvM e o `+10`
    de Tactics no dano acima de 100, sem transformar isso em cap geral.
- `docs/itens/armas.md`/`.en.md`:
  - atualizar o título de versão do bloco Bowcraft;
  - manter Fire Bow em `75%` a `100.0` e incluir a separação entre sua curva
    de craft e a exceção de combate do Elven Bow;
  - ligar a descrição do Elven Bow à regra de chance PvM e ao dano com Tactics
    efetiva.
- `docs/sistemas/pvm-mastery.md`/`.en.md`:
  - incluir **Summoner's Bond** como Maestria da família Arachnid;
  - descrever somente o efeito observável: parte do dano PvM elegível de summon
    criado pelo jogador é redirecionada ao invocador, com piso seguro de 10 Hits
    e ao menos 1 ponto quando houver dano positivo elegível;
  - preservar exclusões de PvP, pets, summons não elegíveis e Arena;
  - atualizar o catálogo atual para `0.26.3` sem apagar o contexto histórico de
    Ruptura Arcana.

### 3. Itens, loot e recursos

- `docs/itens/recompensas-pvm.md`/`.en.md`:
  - adicionar Eyes of Newt ao loot/carving de NPCs com Magery acima de 50;
  - documentar a faixa de loot, o carving e o bônus de Forensics sem teto com
    linguagem de jogador e sem copiar contratos internos;
  - corrigir o bônus Young para XP de Maestria `+100%` e separar Gold `+25%`.
- `docs/itens/consumiveis.md`/`.en.md`:
  - documentar a receita de Total Mana com 5 Eyes of Newt, Bottle e Alchemy
    `65.0–105.0`, preservando o efeito existente;
  - explicar a origem de Eyes of Newt em alquimistas fora de regiões guardadas,
    incluindo o preço/estoque somente na medida em que a nota oficial sustenta;
  - adicionar uma seção curta para Dragon Blood Clothing Dye em Moonglow e
    Serpent's Hold, com 150 ingots compatíveis, 1 Dragon Blood, uma carga e
    gold dinâmico com piso de 50.000, sem criar detalhes de implementação;
  - deixar paginação de Classic Jewelry no histórico de patch, salvo se a
    futura reorganização criar uma página própria de craft.
- `docs/primeiros-passos/newcomer.md`/`.en.md`:
  - manter skill gain `+25%` e Gold `+25%` já estabelecidos;
  - alterar somente o bônus de XP de Maestria para `+100%`;
  - atualizar referências `Live 0.23.5` para `Live 0.26.3`.

### 4. Mundo, proteção e bandagens

- `docs/mundo/cidades-guards.md`/`.en.md`:
  - substituir a descrição genérica da faixa agrícola de Britain por uma
    exceção precisa em Felucca: `X=1130..1261`, `Y=1542..1732`;
  - preservar Trammel sem alteração;
  - acrescentar o retângulo sem guards de Moonglow/Felucca
    `X=4399..4458`, `Y=1176..1187`, deixando claro que ele não remove a
    proteção da cidade inteira nem de Trammel;
  - acrescentar Serpent's Hold sem guards em Felucca e Trammel, mantendo seus
    limites e conteúdo.
- `docs/mundo/nujelm.md`/`.en.md`:
  - ampliar a regra para bloquear qualquer início de spellcasting dentro do
    Safe Haven fora da sobreposição governada pela Arena NuJelm;
  - manter as regras já documentadas de viagem, Fields, dano, ganho de skill,
    Newcomer e precedência da Arena.
- `docs/combate/cura-recursos.md`/`.en.md` e, se necessário,
  `docs/itens/consumiveis*`:
  - explicar que o tratamento é capturado no momento do uso;
  - poison presente no início é tratado imediatamente;
  - sem poison no início, a cura de vida/bleed mantém a escolha durante o delay,
    mesmo que poison apareça depois;
  - preservar a regra separada de cancelamento por magia aceita.

### 5. Comandos e preferência de idioma

- `docs/comandos.md`/`.en.md`: adicionar `.options` como comando player-facing
  de preferência por personagem, com Português/English e fallback para o idioma
  disponível; atualizar `.patchnotes` para explicar que a preferência também
  se aplica a Help, Patch Notes, Achievements e Hunter's Compendium.
- `docs/sistemas/habilitados.md`/`.en.md`: atualizar o resumo de novidades para
  `0.26.3` e incluir a preferência de idioma somente como ponte para o comando,
  sem duplicar a especificação inteira.
- `internal/terminology.yml`: revisar os nomes novos e protegidos
  (`Summoner's Bond`, `Eyes of Newt`, `Dragon Blood`, `.options`) antes da
  tradução; não criar traduções inconsistentes entre páginas.

## Decisões editoriais

- Manter as URLs existentes e trabalhar nas páginas canônicas atuais. Não criar
  uma nova página pública de crafting nesta rodada; a reorganização estrutural
  pode separar itens, receitas e preferências depois, com redirect e pares PT/EN
  planejados.
- Usar `docs/patches*` para correções puramente visuais/de interface, como
  paginação de Classic Jewelry, correção de Unicode, idioma disponível e limite
  histórico do painel in-game, sem inflar páginas de regras.
- Para regras de alto risco, escrever primeiro em PT-BR, espelhar no `.en.md` e
  registrar a fonte em `internal/facts/registry.yml`.
- Não publicar caminhos de código, IDs de requisitos, nomes de classes,
  evidência operacional, comandos de staff, credenciais, logs ou detalhes de
  rollback.

## Ordem de execução local

1. Atualizar a matriz de fatos e a versão de referência sem publicar nenhum
   claim ainda não revisado.
2. Corrigir primeiro os conflitos de regra: chance PvM `0.26.3`, Young
   `0.26.1` e Safe Haven `0.24.0`.
3. Adicionar os conteúdos ausentes de Maestria, itens, loot, cidades e
   comandos, sempre em pares PT-BR/EN.
4. Inserir os seis blocos de patch notes e atualizar home, banners e
   `proximo-patch`.
5. Revisar duplicações com `rg`, verificar termos protegidos e checar que
   `0.23.5` restante é apenas histórico ou proveniência interna justificada.
6. Fazer QA de tabelas e páginas longas no navegador local, especialmente
   combate, itens, recompensas, cidades e comandos.

## Critérios de aceite antes de qualquer publicação

- `python scripts\audit_wiki.py`
- `python scripts\audit_localization.py`
- `python scripts\audit_parity.py`
- `python scripts\audit_site_contract.py`
- `python scripts\audit_fact_registry.py`
- `python scripts\report_fact_freshness.py`
- `python -m mkdocs build --strict --clean`
- `git diff --check`
- Busca sem referências atuais incorretas a `0.23.5`, sem endpoints Fire Bow
  removidos e sem comandos staff/obsoletos em `docs/`.
- Browser QA dos layouts afetados em desktop, largura intermediária e narrow.

O resultado desta etapa deve permanecer somente nesta branch até revisão e
aprovação explícitas para uma futura publicação.

## Estado da prévia

- A home, os banners, `mkdocs.yml`, `proximo-patch`, o audit e o registro de
  fatos apontam para `0.26.3`.
- As regras de chance PvM, Young, Safe Haven, bandagens, itens, guards,
  Summoner's Bond e `.options` foram atualizadas em pares PT-BR/English.
- As notas públicas de `0.24.0` a `0.26.3` foram inseridas; `0.23.6` e
  `0.25.1` permanecem fora da sequência pública.
- A verificação visual foi feita na home, primeira hora, comandos,
  consumíveis, recompensas PvM e cidades/guards em
  `http://127.0.0.1:8000/`. A aba ficou aberta na home para revisão.
- Nenhum commit, push, merge ou deploy foi realizado.
