---
audit_type: patchnotes-crosscheck
status: production_confirmed
created: 2026-08-10
production_confirmed: 2026-08-11
wiki_head: 96d755c8dfb7e23f43ad14b3172f4ec681869638
official_source_head: c425f4c0e96e8bb7998157603befdb64e9d1b838
production_tag: v0.23.5
production_tag_commit: a8472d7d5f204dfdf3e8eb03adb06353f89d7e75
---

# Handoff: cruzamento das patchnotes com a produção atual

## Objetivo

Atualizar a wiki pública para refletir as mudanças player-facing que chegaram
à produção depois do `0.23.3`, preservando o histórico, removendo conteúdo que
não deve ser exposto e mantendo PT-BR/EN alinhados. Este handoff prepara um
agente executor; não autoriza publicação, deploy, alteração do servidor ou
alteração de secrets.

## Autoridade de produção resolvida

Em 2026-08-11, o owner confirmou que `v0.23.5` é a versão em produção. A tag
protegida `v0.23.5` (`a8472d7d5f204dfdf3e8eb03adb06353f89d7e75`) e o registro de
implantação sustentam a atualização da versão pública da wiki. A partir desta
confirmação, `mkdocs.yml`, os banners atuais, o registry e as páginas canônicas
podem tratar `0.23.5` como Live; `0.23.1`, `0.23.2` e `0.23.3` permanecem apenas
como histórico.

## Diagnóstico da wiki atual

- `docs/patches.md` e `docs/patches.en.md` agora terminam em `0.23.5`.
- `mkdocs.yml`, landing pages, banners de status, `proximo-patch`, páginas
  canônicas e `internal/facts/registry.yml` tratam `0.23.5` como versão atual.
- Não existe patch oficial `0.23.4` no catálogo do servidor; não criar uma
  seção `0.23.4` por inferência.
- As seções históricas `0.23.1`, `0.23.2` e `0.23.3` não devem ser apagadas.
  Elas continuam fazendo parte do histórico, mesmo que `0.23.5` seja
  confirmado como produção.
- A seção `0.23.3` está alinhada no essencial, mas não registra explicitamente
  a correção de que entrar em Hidden por Hiding ou Stealth inicializa o limite
  do primeiro movimento escondido. Incluir esse bullet ao tocar a seção.
- As menções públicas a `.pvpcamp` e `.pvptrainer` continuam ausentes, como
  solicitado pelo owner. Não reintroduzi-las ao copiar notas históricas do
  servidor. A expressão `PvP Trainer` pode permanecer apenas quando descreve
  uma regra player-facing do sistema, não um comando obsoleto nem sua lógica
  interna.

## Resultado do cruzamento

| Área | Evidência oficial | Estado na wiki | Ação do agente | Prioridade |
|---|---|---|---|---|
| Versão de produção | `0.23.5` em `Docs/Patches/0.23.5.md`, na tag e na confirmação do owner | Atualizada para `0.23.5` | Concluído | P0 |
| Patch notes | Catálogo PT/EN de `v0.23.5` | Presente | Mantido em PT-BR/EN | P1 |
| Hiding/Stealth | Nota oficial de `0.23.3` | Resumo sem o primeiro-movimento | Acrescentar o fix de inicialização do limite | P1 |
| Bowcraft | Fire Bow, Elven Bow e política de materiais em `0.23.5` | Ausente | Atualizar armas/combate e patch notes | P1 |
| Fire Feathers | Compatibilidade das penas da Rare Phoenix com Fire Bow | Phoenix documentada, receita ausente | Explicar o resultado observável sem expor tipos internos | P1 |
| Joias e PvM | Joias DoB craftáveis, bônus de Loot Pack e Arcane Disruption | Joias genéricas e catálogo antigo | Atualizar recompensas, Maestria e páginas relacionadas | P1 |
| Safe Haven | Nujelm bloqueia Fields, viagem mágica, ganho de skill e dano fora da Arena | Página cobre conflito/stealing, mas não todos os limites | Completar a regra e preservar a exceção da Arena NuJelm | P1 |
| Guardas/mundo | Britain Turnip Field 2 em Felucca sem guards; Trammel inalterada | Ausente | Incluir em cidades/guards e patch notes | P1 |
| Rare Events | Ostards fixos e rumores via Whispers; ferramenta `RareEvents` é staff-only | Phoenix/Whispers antigos | Incluir somente o comportamento público, sem comando/coordenadas | P1 |
| Visual de Felucca | Spring como aparência sazonal da facet | Ausente | Incluir somente após confirmar que a mudança é aprovada como nota pública | P2 |
| Candidatos | `0.24.0`, `0.27.0` e `0.29.0` seguem `development` | Não devem aparecer como Live | Manter fora das páginas Live | P0 |

## Conteúdo player-facing a incluir em `0.23.5`

Usar a redação curta do catálogo oficial, em PT-BR e inglês, sem copiar o
manifesto interno inteiro:

1. Fire Feathers obtidas de Rare Phoenix passam a ser utilizáveis para fabricar
   Fire Bow.
2. Fire Bow e Elven Bow entram em `DoB Weapons` da Bowcraft, com materiais,
   efeitos e bônus próprios.
3. A curva do Fire Bow registra 75% em Bowcraft 100.0. Outros endpoints da
   curva não entram no texto público da wiki.
4. Fire Bow mostra somente o impacto do Fireball no alvo; não anunciar
   projétil de fogo em movimento.
5. Armas produzidas na Bowcraft deixam de receber bônus de combate derivados da
   madeira escolhida; identidade visual/recurso e bônus intrínsecos de Fire Bow
   e Elven Bow permanecem.
6. Arcane Disruption/Ruptura Arcana pode interromper a conjuração de uma
   criatura selvagem quando dano direto positivo do jogador acerta durante o
   cast. Descrever como efeito PvM, sem publicar cooldown, estado interno ou
   lógica de proc.
7. Tinkering passa a oferecer Magic Earrings, Magic Ring e Magic Bracelet com
   os bônus das joias da Arena; novas joias de Loot Pack podem receber bônus de
   Maestria PvM.
8. Joias de Loot Pack podem rolar bônus de `+1,00%` a `+5,00%`, em incrementos
   de `0,25%`; equipá-las ativa temporariamente a Maestria correspondente e o
   Compendium mostra o bônus.
9. Rare Events passam a incluir Desert Ostard, Forest Ostard e Frenzied Ostard
   em pontos fixos, com rumores disponíveis por Whispers of Britannia.
10. O gump de Whispers fica mais largo e dá mais espaço para os rumores.
11. As Patch Notes em português passam a usar acentuação correta.
12. Nujelm Safe Haven bloqueia Fields, Recall, Mark, Gate Travel, Teleport,
    ganho de skill e dano recebido fora das regras próprias da Arena NuJelm.
13. `A Turnip Field in Britain 2`, em Felucca, deixa de ser guardada; o campo
    equivalente de Trammel permanece inalterado.
14. Felucca recebe o visual sazonal Spring, caso essa nota visual seja validada
    como comportamento público desejado.
15. Elven Bow equipado aplica uma vez +10 de Tactics e +10 de Archery, inclusive
    acima do cap comum; ao desequipar, os valores retornam ao normal.

## Aprofundamento por área

### 1. Bowcraft, Fire Bow e Elven Bow

Fonte: `Docs/Patches/0.23.5.md`, seção de notas públicas e escopo consolidado,
tag `v0.23.5`.

- Fire Bow usa Fire Feathers e Ash Logs; a nota pública não precisa ensinar
  detalhes de tipos serializados. Basta informar que penas obtidas da Phoenix
  funcionam na receita.
- Fire Bow é um Bow temático com impacto visual/sonoro de Fireball, mas sem
  projétil móvel. O dano e a elegibilidade de acerto não foram alterados pela
  apresentação.
- Elven Bow usa Heartwood e concede +10 Tactics/+10 Archery somente equipado.
  O bônus é uma exceção isolada do item; não transforme isso em aumento do cap
  geral de skill.
- A política de material vale para armas fabricadas na Bowcraft: não aplicar
  bônus de dano, velocidade, acerto, leech, regeneração, lower requirements,
  luck ou elemental damage vindos da madeira. Preservar identidade do recurso,
  hue, durabilidade, qualidade, maker, runic/enhancement e bônus intrínsecos.
- Não afirmar que armas antigas foram normalizadas. A fonte explicitamente
  deixa a normalização retroativa para uma decisão separada, porque o save não
  identifica com segurança a origem de cada atributo.

Páginas candidatas: `docs/itens/armas.md`/`.en.md`,
`docs/combate/melee-archery.md`/`.en.md`,
`docs/mundo/raridades-britannia.md`/`.en.md` e `docs/patches*`.

### 2. DoB Magic Jewelry e Maestria PvM

- A Tinkering recebe exatamente três peças `Magic Earrings`, `Magic Ring` e
  `Magic Bracelet`, com os bônus fixos das joias da Arena; não criar `Magic
  Necklace` por analogia.
- Joias novas de Loot Pack podem receber uma Maestria em passos de 0,25%, entre
  +1,00% e +5,00%. Ao equipar, a Maestria fica temporariamente ativa sem
  substituir a build serializada de cinco Maestrias; ao retirar, somente o
  bônus temporário desaparece.
- O agente deve explicar o efeito no Compendium, mas não expor detalhes de
  serialização, migração ou markup de tooltip.
- `Arcane Disruption`/`Ruptura Arcana` é uma nova Maestria PvM. A descrição
  player-facing deve limitar-se a: dano direto positivo do jogador pode fazer
  uma criatura selvagem falhar enquanto conjura. Não incluir probabilidade,
  cooldown, estados internos, classificação de dano ou funções de limpeza do
  cast.

Páginas candidatas: `docs/sistemas/pvm-mastery.md`/`.en.md`,
`docs/sistemas/habilitados.md`/`.en.md`,
`docs/itens/recompensas-pvm.md`/`.en.md`,
`docs/personagem.md`/`.en.md` e `docs/patches*`.

### 3. Rare Events e Whispers

- O catálogo público confirma os três Ostards e os rumores de Town Criers.
- O manifesto interno também fala em Rare Phoenix, Rare Rideable Llama,
  pontos fixos, agendamento, limites de entradas e observabilidade de staff.
  Essas partes não devem ser copiadas para a wiki sem uma nota pública
  aprovada.
- A ferramenta `[RareEvents` e as ações de GOTO são staff-only. Não criar
  entrada em `docs/comandos*`, não publicar coordenadas, cronogramas, caps,
  serials, páginas do gump ou comandos de teleporte.
- Se o conteúdo público ficar maior que a página de Phoenix, preferir uma
  página de eventos raros player-facing com rumores e regras observáveis, sem
  detalhes operacionais.

Páginas candidatas: `docs/mundo/raridades-britannia.md`/`.en.md`,
`docs/mundo/index*` se houver nova página, e `docs/patches*`.

### 4. Nujelm Safe Haven

A página atual já documenta conflito entre jogadores, stealing, ações nocivas
de pets/summons e ausência de ganhos normais. O patch `0.23.5` amplia a
fronteira pública: dentro do Safe Haven estático, jogadores e criaturas
controladas não podem usar Fields, Recall, Mark, Gate Travel ou Teleport, não
ganham skills e não recebem dano. A Arena NuJelm, com prioridade própria,
continua governando o overlap.

Atualizar `docs/mundo/nujelm*`, rever referências de primeira hora/newcomer e
manter o texto da Arena separado. Não generalizar a proteção para toda a
cidade fora da região definida.

### 5. Guardas e visual de mundo

- `A Turnip Field in Britain 2` em Felucca deve ser descrita como área sem
  guards; Trammel não muda. A nota não precisa incluir prioridade regional,
  largura, altura ou implementação de spawn.
- A alteração de Spring em Felucca é visual. Confirmar com o owner se deve ser
  uma nota pública antes de afirmar que é regra de gameplay; não inferir
  mudanças de clima, recursos, colisão ou mapa.

Atualizar `docs/mundo/cidades-guards*`, possivelmente uma página de mapa/world,
e `docs/patches*` apenas depois de validar a intenção editorial.

## Conteúdo a excluir, generalizar ou manter fora da wiki

- Não publicar `[RareEvents`, GOTO de staff, coordenadas, serials, cronogramas,
  caps, arquivos de save, nomes de classes, IDs de efeitos, packet details,
  estados internos de cast, aliases de tipos ou lógica de proc.
- Não reintroduzir `.pvpcamp`; o servidor o marca como staff-only e o owner
  determinou que a wiki pública não deve mencioná-lo.
- Não reintroduzir `.pvptrainer`/`.pvptreinar`; o comando está obsoleto. Uma
  referência a PvP Trainer só pode permanecer como sistema player-facing já
  documentado, sem tática ou decisão interna.
- Não incluir Fire Bow, Elven Bow, Arcane Disruption, joias, Ostards ou outras
  mudanças de `0.24.0`, `0.27.0` ou `0.29.0` como se fossem produção; esses
  candidatos permanecem fora do Live.
- Não apagar `0.23.1`, `0.23.2` ou `0.23.3`, nem mover mudanças transferidas
  para `0.23.1` de volta ao histórico errado. O patch `0.23.5` é o local
  canônico para as notas atuais de Bowcraft, joias e PvM herdadas daquela
  transferência.
- Não copiar o detalhe interno de que Fire Feathers possuem classes legadas
  diferentes; publicar apenas que as penas da Rare Phoenix podem ser usadas na
  receita.

## Sequência recomendada para o agente executor

1. Ler `AGENTS.md`, `internal/lean-methodology.md`,
   `internal/editorial-style-guide.md`, `internal/localization-guide.md` e
   `internal/terminology.yml`.
2. A autoridade de produção foi confirmada pelo owner em 2026-08-11; registrar
   a confirmação e promover `v0.23.5` como versão pública da wiki.
3. Comparar `docs/patches*` com o catálogo PT/EN de `v0.23.5`; adicionar a
   seção nova e o bullet de inicialização do primeiro movimento em `0.23.3`.
4. Atualizar as páginas canônicas em pares PT-BR/EN: armas/combate, Maestria e
   recompensas, raridades/Whispers, Nujelm Safe Haven e cidades/guards.
5. Atualizar referências de versão que significam estado atual em `mkdocs.yml`,
   home, `proximo-patch`, banners e `internal/facts/registry.yml`; preservar
   ocorrências históricas.
6. Auditar duplicações antes e depois com `rg`, garantindo que os comandos
   proibidos não retornem em `docs/`.
7. Executar na raiz da wiki:

   ```powershell
   python scripts\audit_wiki.py
   python -m mkdocs build --strict --clean
   python scripts\audit_localization.py
   python scripts\report_fact_freshness.py
   git diff --check
   git diff
   ```

8. Se houver nova página, atualizar `mkdocs.yml`, verificar links e fazer QA
   visual no desktop/drawer/narrow. Não fazer push, merge ou deploy sem nova
   autorização explícita.

## Critério de conclusão

O handoff foi executado quando a autoridade de produção foi confirmada, a wiki
passou a ter `0.23.5` como Live, `0.23.3` recebeu a correção do primeiro
movimento, e as páginas canônicas passaram a cobrir
as mudanças observáveis, PT-BR/EN estiverem pareados, o histórico permanecer
intacto, os detalhes staff-only/privados não aparecerem em `docs/` e todas as
auditorias passarem. A ausência de `0.23.4` deve continuar explícita: não há
patch oficial publicado com esse número.
