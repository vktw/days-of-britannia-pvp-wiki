---
audit_type: craft-catalog-reorganization-preview
status: local_preview
created: 2026-08-13
target_version: "0.26.3"
production_source: "live-server/v0.26.3"
branch: "codex/alteracoes-main"
publication_authorized: false
---

# Handoff: reorganização local de Craft

## Objetivo

Transformar a antiga entrada **Itens** em uma seção pública bilíngue de Craft,
com uma página para cada categoria do catálogo oficial, materiais, skill mínima
e controle visual de chance por skill-base. Esta alteração é somente uma prévia
local; não autoriza commit, push, merge ou deploy.

## Fontes oficiais consultadas

- `live-server/v0.26.3` como versão de produção registrada pelo servidor.
- Política oficial de equipamentos: materiais DoB, qualidade, Arms Lore,
  famílias DoB Tools e linhas temáticas de Blacksmithy.
- Patch oficial `0.16.0`: custos, skills mínimas, bônus das famílias Artisan,
  Reliable e Refined e seus pontos de criação.
- Patch oficial `0.19.0`: seis receitas Bloodrock e seis Blackrock, custo de 30
  ingots, skill mínima 75.0 e pontos oficiais de chance em 75.0 e 92.5.
- Patch oficial `0.23.5`: materiais, skills mínimas e pontos publicados para
  Fire Bow e Elven Bow.
- Patches oficiais `0.23.5` e `0.25.0`/catálogo de craft: DoB Jewelry e Total
  Mana Potion.
- Catálogo oficial de Blacksmithy: custos e faixas nativas das quatro peças
  Chain apresentadas na página.

Os documentos de fonte foram usados para extrair fatos player-facing. Caminhos
de código, nomes de classes, testes, logs e detalhes de implementação não
foram colocados em `docs/`.

## Conteúdo implementado

| Superfície | Resultado | Fonte de skill |
|---|---|---|
| `docs/craft/` | Hub e páginas de Alchemy, Blacksmithy, Bowcraft, Carpentry, Cartography, Cooking, Glassblowing, Inscription, Masonry, Tailoring e Tinkering | Catálogo oficial do servidor |
| `docs/craft/*.md/.en.md` | Simulador progressivo em cada skill: menu, categorias, índice pesquisável, materiais, skill-base, chance e Exceptional | Catálogo oficial de cada skill |
| `docs/scripts/dob.js` | Navegação compartilhada, interpolação da fórmula-base, curvas especiais publicadas e aviso explícito para curvas não publicadas | Fórmula de `CraftItem` e políticas DoB aprovadas |
| `mkdocs.yml` e `docs/itens/*` | Entrada **Itens** convertida em **Craft**; endereços antigos preservados como compatibilidade | Contrato de navegação |
| `docs/sistemas/index*` | Recompensas PvM adicionadas a Sistemas | Organização player-facing |

Cada página mostra a skill-base que o servidor usa para a rolagem. O controle
calcula a chance-base entre o mínimo e o máximo quando a fonte publica a fórmula
linear; curvas especiais usam os pontos oficiais. Quando a fonte atual não
publica a curva completa, a bancada informa isso sem inventar uma interpolação.
O bloco de Exceptional continua separado da chance de sucesso.

## Fluxo implementado nas skills de Craft

O padrão de Bowcraft foi replicado nas outras dez páginas de skill para
representar a abertura de menus no jogo, sem expor implementação privada. Cada
página pública fica reduzida ao próprio simulador:

- a primeira tela mostra somente o menu principal da skill;
- ao abrir uma categoria ou **Buscar receita**, o simulador mostra o índice
  daquela tela;
- ao escolher uma receita, o índice dá lugar à bancada com material, skill-base,
  chance e Exceptional;
- os botões de retorno simulam a navegação de volta para o índice ou para o
  menu principal.

O índice de cada página recebeu todas as linhas do catálogo/tabela já
documentadas naquela skill, não apenas os exemplos que existiam no controle
anterior. Bowcraft mantém o seletor de madeira; as demais páginas exibem os
materiais fixos da receita na bancada.

O catálogo usado pelo fluxo de Bowcraft continua sendo:

- o índice reúne 29 entradas do catálogo oficial, incluindo materiais, munição,
  arcos, bestas e DoB Weapons;
- a busca considera nome, grupo e materiais;
- Board, Oak Board, Ash Board, Yew Board, Heartwood Board, Bloodwood Board e
  Frostwood Board exibem suas skills mínimas de seleção: 0.0, 65.0, 75.0,
  85.0, 95.0, 95.0 e 95.0;
- a madeira selecionada altera somente o recurso e a elegibilidade do material;
  o simulador não inventa bônus de chance ou de combate;
- Fire Bow mantém apenas o recorte público em 100.0, enquanto ingredientes
  fixos ficam visíveis e desativam o seletor de madeira;
- itens com `ForceNonExceptional` aparecem como sem Exceptional, separados da
  chance de produção.

O painel continua sendo uma prévia player-facing: não inclui bônus de talismã,
bancada, ferramenta ou outros modificadores que não estejam representados na
consulta pública.

## Divergências mantidas para aprovação

1. Bloodrock e Blackrock mantêm a decisão pública já aprovada: 0% em 75.0,
   50% em 92.5 e 100% em 105.0 ou mais. A menção a 110.0 não deve voltar para
   a referência pública dessas linhas.
2. A fonte do Fire Bow contém um endpoint que foi deliberadamente retirado da
   wiki por decisão do responsável. A página mostra 75% em 100.0, sem publicar
   a curva em 120.0, e o controle não extrapola esse ponto.

Essas omissões são intencionais: o resultado público não transforma uma fonte
contraditória ou um endpoint editorialmente removido em uma nova afirmação.

## Limite aplicado nesta revisão local

Por solicitação do responsável, todas as tabelas e simuladores de Craft foram
limitados a 105.0 de skill. O limite foi aplicado aos controles, às faixas
exibidas e aos pontos de curva; pontos acima de 105.0 foram retirados da
prévia, e as curvas afetadas não extrapolam esse corte. Esse é um recorte de
visualização para aprovação local, não uma confirmação de que toda receita do
servidor tenha 105.0 como skill máxima. A revisão receita por receita continua
necessária antes de publicar.

## Próximo agente

- Revisar visualmente `/craft/` e as dez skills em desktop, tablet e narrow.
- Abrir categorias, retornar entre telas, pesquisar e selecionar uma receita em
  pelo menos Alchemy, Blacksmithy, Bowcraft e Tinkering; confirmar que curvas
  não publicadas permanecem sem interpolação.
- Confirmar se o agrupamento das categorias coincide com a ordem desejada nos
  gumps do servidor antes de qualquer publicação.
- Depois da aprovação, revisar os links de compatibilidade de `docs/itens/` e
  atualizar os registros de fatos canônicos caso novas receitas sejam adicionadas.

## Estado

- Branch: `codex/alteracoes-main`.
- Prévia: local.
- Commit, push, merge e deploy: não realizados.
