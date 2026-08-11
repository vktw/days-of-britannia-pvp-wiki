---
audit_type: patchnotes-crosscheck
status: ready_for_approval
created: 2026-08-10
approved_source: live-server/v0.23.3
production_tag: v0.23.3
production_commit: 2f4e793ceea0bca787a4d2d546466e94a204c795
---

# Handoff: cruzamento das patchnotes com a produção

## Objetivo

Corrigir a defasagem entre as patchnotes públicas da wiki e o catálogo oficial
do servidor que está em produção. Este documento prepara o agente executor para
incluir o que foi publicado, alterar referências dependentes e retirar conteúdo
que viola o limite público da wiki. Não publicar nem fazer deploy sem solicitação
explícita.

## Estado desta cópia local

As correções descritas neste handoff foram aplicadas localmente para revisão e
aprovação. A produção, o repositório do servidor e o deployment não foram
alterados. Se a revisão aprovar o conteúdo, o próximo agente deve apenas
confirmar o diff final e seguir o processo de publicação autorizado.

## Fonte e autoridade

- A produção foi confirmada em `v0.23.3`, tag `v0.23.3`, commit
  `2f4e793ceea0bca787a4d2d546466e94a204c795`, com confirmação do owner em
  10/08/2026.
- A fonte operacional é o manifesto/registro de releases e o catálogo oficial
  contido nessa tag do repositório do servidor. O checkout local do servidor
  está sujo e não deve ser usado como evidência de produção.
- A página descritiva de `0.23.3` registra um estado de ciclo de vida mais fraco
  (`validated`), mas o manifesto e o registro de releases são a autoridade de
  produção e confirmam `v0.23.3` como ativo. Não tratar essa divergência
  editorial como bloqueio para a atualização da wiki.
- O catálogo da tag contém 55 versões até `0.23.3`. A wiki contém 52 títulos de
  versão e termina em `0.23.0`, tanto em português quanto em inglês.
- `v0.23.5`, `v0.24.0` e demais candidatos de desenvolvimento não são live.
  Não incluir Fire Bow, Elven Bow ou qualquer outra mudança candidata nas
  páginas públicas.
- Quando uma descrição do catálogo oficial revelar implementação interna,
  preservar somente o comportamento observável pelo jogador. Não expor código,
  decisões internas do PvP Trainer, logs ou detalhes de infraestrutura.

## Diagnóstico do cruzamento

### O que está consistente

- As seções da wiki anteriores a `0.23.1` correspondem ao catálogo de produção
  no nível de resumo que a própria página declara. A diferença entre a
  quantidade de notas oficiais e os bullets resumidos não é, por si só, erro.
- `0.23.0` é uma versão histórica válida e não deve ser apagada. Arena NuJelm,
  Safe Haven de Nujelm, áreas sem guards, condições de entrada e hue 2483 estão
  representados em resumo.
- Não foi encontrado motivo para excluir versões antigas só porque não são a
  versão atual; elas formam o histórico público.

### Lacuna principal

Adicionar, em ordem decrescente, as seções `0.23.3`, `0.23.2` e `0.23.1` em
[`docs/patches.md`](../../docs/patches.md) e
[`docs/patches.en.md`](../../docs/patches.en.md). Os bullets abaixo são o
conteúdo oficial que precisa ser coberto; a redação final deve seguir os guias
editorial e de localização.

#### `0.23.3` — mudanças de Hiding/Stealth, coleta e PvM

1. Hiding e Stealth passam a compartilhar a ocultação: caminhar consome um
   limite combinado de até 25 passos, esgotar o limite revela o personagem e
   correr revela imediatamente.
2. Armadura deixa de bloquear ou penalizar Stealth.
3. A ocultação inicial passa a inicializar corretamente o limite combinado.
4. A coleta em área 5x5 é finalizada corretamente para Mining, Lumberjacking e
   Fishing; Fishing Pole equipado ou na mochila é reconhecido e a tentativa
   pode continuar no banco atual quando ainda houver estoque após falha do
   teste.
5. Fishing Pole exibe usos, começa com 50 usos, quebra ao chegar a zero e é
   equipado/usado com dois cliques.
6. O achievement First Trainer Fight é concedido ao concluir um combate contra
   o Trainer (vitória, derrota ou empate, conforme a regra do servidor) e dá
   200 XP de Maestria PvM uma única vez.
7. Tinkers passam a vender Hatchet, Pickaxe e Shovel; Carpenters passam a vender
   Fishing Pole.
8. Criaturas comuns que lançam magias exibem Words of Power e ficam paradas
   durante o lançamento; o Trainer mantém o comportamento de mobilidade próprio
   do treinamento.
9. O dano mágico direto de criaturas selvagens elegíveis contra jogadores em PvM
   é reduzido em 25%. A regra não se estende a PvP, poison, pets, summons ou
   ataques de jogadores.
10. Dano direto positivo causado pelo jogador a uma criatura selvagem elegível
    em PvM encerra Hiding, Stealth e invisibilidade ativa. Misses, dano zero,
    ticks de poison, pets/summons controlados e PvP não devem ser tratados como
    esse gatilho.

Detalhar as regras completas nas páginas canônicas de personagem, combate,
achievements e itens; a página de patchnotes deve continuar resumida.

#### `0.23.2` — arena, resistências, recursos e guards

1. A Arena verifica o saldo antes de iniciar a preparação, evitando a entrada
   sem fundos.
2. O Physical Resist base de armaduras passa de `1.50` para `1.60`.
3. Itens perdidos pela Honesty deixam de ser gerados no chão; itens existentes
   são preservados.
4. Platinum nativo fica desativado; saldos legados são preservados, mas não
   podem ser criados, gastos ou transferidos.
5. A recuperação base de stamina do jogador passa a ser `1` por segundo,
   preservando bônus adicionais.
6. As descrições de Maestria ficam abaixo dos controles de nível e o layout
   compacto do Compendium é alinhado.
7. A Minoc Mine passa a ser protegida por guards dentro dos limites definidos
   para a área.
8. Provisioners passam a vender Hatchet, Pickaxe, Shovel e Fishing Pole básicos.

Verificar se cada fato tem uma página canônica antes de criar uma nova. Não
duplicar regras de Platinum, Honesty ou Compendium sem necessidade.

#### `0.23.1` — modos de loot e novo contrato da Arena

1. O aviso bilíngue de Alpha no primeiro login informa a frequência de patches,
   possibilidade de problemas, janela de Alpha, reset de contas, início
   anunciado do Beta Test em 14/08/2026 e o pedido para observar economia e
   recursos. Registrar isso apenas como nota histórica; não transformar o aviso
   em instrução atual na home ou em `proximo-patch.md`.
2. O PvP Trainer cobra 1000 gold no início e usa kit Iron fixo; seleção de tier
   ou kit pelo jogador deixa de fazer parte desse fluxo.
3. Duelos entre jogadores escolhem System Loot ou Personal Loot; cada
   participante paga 5000 gold no início da luta. System Loot usa kit Iron fixo
   e restaura a configuração original do personagem ao sair.
4. Em Personal Loot, somente o vencedor pode saquear o corpo derrotado por 60
   segundos; o perdedor fica retido por 15 segundos e o conteúdo restante é
   perdido. Preservar as regras normais de corpo, mochila e montaria conforme a
   página oficial do patch ao redigir a referência pública.
5. NuJelm oferece somente Personal Loot; rankings de System Loot e Personal
   Loot são separados, e o Trainer possui sua própria tabela.

Consultar a nota oficial `0.23.1` para os casos de reembolso antes de escrever
exceções financeiras; não inferir regras que não estejam na fonte aprovada.

## Conteúdo a excluir ou alterar

Estas ações são necessárias mesmo quando o texto antigo aparece no catálogo
oficial, porque a wiki pública tem um limite editorial mais restrito:

- Excluir ou generalizar os bullets táticos do PvP Trainer em `0.11.3` e
  `0.11.4` de [`docs/patches.md`](../../docs/patches.md) e da versão inglesa.
  Remover detalhes sobre combo de Paralyze/Walls, escolha contra oponente
  armado/desarmado e finalizações. Pode permanecer uma descrição observável e
  não tática de melhorias no treinamento.
- Generalizar o bullet de `0.18.4` que cita `controllers`, `waves`, `invaders` e
  `beacons`. A versão pública deve dizer que a invasão e suas recompensas foram
  desativadas, preservando a informação de que Blackthorn Dungeon, quests e
  conteúdos independentes continuam separados.
- Manter o fato histórico de `0.21.1` sobre a elegibilidade de Nujelm, mas
  deixar explícito que a regra atual deve ser lida em `0.23.0`/nas páginas de
  mundo. O texto histórico não pode parecer substituir o estado atual.
- Não remover `0.23.0` nem reescrever o histórico como se `0.23.3` tivesse
  introduzido Arena NuJelm ou Safe Haven.

## Páginas dependentes da correção

Atualizar o par PT-BR/EN e seus status somente após confirmar a redação final:

- [`docs/arena.md`](../../docs/arena.md) e `docs/arena.en.md`: substituir a
  descrição antiga de escolha de tier/kit pelos modos System Loot/Personal Loot,
  taxas, kit Iron do Trainer, janela de saque, NuJelm Personal-only e rankings
  separados. Não documentar decisões táticas do Trainer.
- [`docs/comandos.md`](../../docs/comandos.md) e `docs/comandos.en.md`:
  atualizar `.arena` e corrigir `.pvpcamp` para o fluxo oficial de entrega
  direcionada por staff, sem manter seleção pública de tier/kit.
- [`docs/itens/armaduras.md`](../../docs/itens/armaduras.md) e a versão inglesa:
  trocar Physical Resist `1.50` por `1.60` onde for regra base; preservar hue
  `2483` apenas onde ele continuar sendo a afirmação correta.
- [`docs/personagem.md`](../../docs/personagem.md) e
  `docs/combate/invisibilidade.md`, com versões inglesas: incorporar o limite
  compartilhado de Hiding/Stealth, a ausência de penalidade por armadura e o
  gatilho de revelação por dano direto positivo em PvM.
- [`docs/sistemas/achievements.md`](../../docs/sistemas/achievements.md):
  incluir First Trainer Fight e os 200 XP de Maestria PvM; manter a distinção
  entre conquista e regra interna do Trainer.
- A página canônica de ferramentas/consumíveis deve documentar Fishing Pole,
  usos, quebra, compra e uso; se for necessário criar página, incluir a entrada
  correspondente na navegação e sua tradução.
- [`docs/mundo/cidades-guards.md`](../../docs/mundo/cidades-guards.md):
  registrar a proteção da Minoc Mine dentro dos limites públicos confirmados.
- Revisar [`docs/sistemas/pvm-mastery.md`](../../docs/sistemas/pvm-mastery.md)
  apenas para layout/descrições do Compendium e para o rótulo de versão; não
  reescrever o catálogo inteiro sem uma mudança de gameplay que o exija.

## Referências de versão que ficaram obsoletas

O texto `0.23.0` ainda aparece como versão atual em `mkdocs.yml`, landing pages,
`proximo-patch.md`, muitos blocos `Status: Live`, páginas de referência e
`internal/facts/registry.yml`. Atualizar as ocorrências que significam “estado
atual” para `0.23.3`, preservando ocorrências históricas como “introduzido em
0.23.0”. Não fazer substituição global cega.

## Sequência recomendada para o agente executor

1. Ler `AGENTS.md`, `internal/lean-methodology.md`,
   `internal/editorial-style-guide.md`, `internal/localization-guide.md` e
   `internal/terminology.yml`.
2. Auditar duplicações com `rg` antes de editar e listar cada ocorrência de
   `0.23.0`, `1.50`, tiers de Arena, `.pvpcamp`, Hiding/Stealth, First Trainer e
   Fishing Pole.
3. Corrigir primeiro as três seções de patchnotes em PT-BR/EN; depois atualizar
   páginas canônicas e, por último, status, home, navegação e registro de fatos.
4. Manter URLs estáveis, um H1 por página e paridade PT-BR/EN. Não incluir
   conteúdo de desenvolvimento nem implementação privada.
5. Executar no diretório raiz:

   ```powershell
   python scripts\audit_wiki.py
   python -m mkdocs build --strict --clean
   python scripts\audit_localization.py
   python scripts\report_fact_freshness.py
   git diff --check
   git diff
   ```

6. Fazer uma inspeção visual rápida da home e das páginas alteradas após o
   build. Não fazer push, deploy ou alteração de secrets.

## Critério de conclusão

O trabalho estará pronto quando `0.23.1`–`0.23.3` estiverem cobertos nos dois
idiomas, as páginas canônicas refletirem apenas comportamento aprovado e
observável, os status atuais apontarem para `0.23.3`, o conteúdo tático/privado
listado acima tiver sido removido ou generalizado e todas as verificações
passarem. A fonte de produção usada no handoff deve permanecer registrada como
`v0.23.3`/`2f4e793ceea0bca787a4d2d546466e94a204c795`.
