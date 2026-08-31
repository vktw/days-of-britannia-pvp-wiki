---
status: proposed
scope: wiki-content-reconciliation
target_version: 0.40.0
publication_authorized: false
prepared_at: 2026-08-31
---

# Handoff — reconciliação da wiki com o Live 0.40.0

## Fontes verificadas

- Servidor oficial em produção: tag `v0.40.0`, commit
  `4b23cc17ac5c9db673932b2a2264d9fcf29f4432`.
- Registro posterior do deploy em `live/main`: commit `6b90deebf`.
- Patchnotes player-facing: `Scripts/Services/PatchNotes/PatchCatalog.cs` na tag
  `v0.40.0`.
- Wiki local no início da reconciliação: commit
  `abc10cb90fe85bb75a749d85b9c9a7e1e22ef879`.
- Wiki publicada consultada em `https://dobshard.com/patches/` e
  `https://dobshard.com/`: contém 0.37.0, não contém 0.38.0 nem 0.40.0 e ainda
  exibe `Beta 0.37.0`.

O checkout local do servidor em `C:\DoB-Dev` estava 11.464 commits atrás de sua
referência; por isso, nenhum fato foi inferido dos arquivos locais. A leitura foi
feita diretamente da tag e das refs remotas oficiais.

## Diagnóstico

| Item | Wiki atual | Produção | Ação necessária |
|---|---|---|---|
| Versão exibida | `Beta 0.37.0` | `0.40.0` | Atualizar `extra.dob_version`, home, Próximo patch e tags de status para `0.40.0`, sem o prefixo Beta. |
| Patchnotes 0.38 | Ausentes | 22 notas públicas | Incluir seção completa PT-BR/EN. |
| Patchnotes 0.39 | Ausentes | 18 notas públicas | Incluir seção completa PT-BR/EN. |
| Patchnotes 0.40 | Ausentes | 18 notas públicas | Incluir seção completa PT-BR/EN. |
| Páginas canônicas | Descrevem 0.37 | Várias regras mudaram em 0.38–0.40 | Atualizar as referências abaixo, sem copiar implementação privada. |
| Rótulos Beta atuais | 81 arquivos contêm `Beta 0.37.0` | O estado atual não é Beta | Remover Beta das referências atuais; preservar menções históricas nos patchnotes 0.31 e Alpha/Beta antigos. |

## Mapa de atualização player-facing

As referências `38.xx`, `39.xx` e `40.xx` correspondem à ordem das notas
player-facing no catálogo oficial de cada versão.

| Prioridade | Destino canônico | Notas oficiais | Mudança proposta |
|---|---|---|---|
| P0 | `mkdocs.yml`, `docs/index.md`, `docs/index.en.md`, `docs/proximo-patch*.md` | Versão global | Exibir `0.40.0` sem Beta; destacar `0.40.0 · O Veredito Rubro`, data de 28/08/2026 e resumo player-friendly; recalcular Últimos artigos atualizados. |
| P0 | `docs/patches.md` e `docs/patches.en.md` | Todas as 58 notas | Adicionar 0.38.0, 0.39.0 e 0.40.0 em ordem decrescente, preservando números, condições e exceções do catálogo oficial. |
| P0 | Todas as páginas com status atual | Estado live | Trocar `Status: Beta 0.37.0` por `Status: 0.40.0` e atualizar textos correntes de versão. Não reescrever títulos históricos como `0.31.0 · Transição para o Beta`. |
| P1 | `docs/sistemas/spawns-raros*.md` | 38.10–13, 38.19, 39.05, 39.17, 40.01–02 | Documentar Nochyer, Black Moon, Night Sight, recompensas e lore; Rare Zostrich e notoriedade; Odran, Seris, testemunhas, Ruby Mustang, recompensas e sinais de combate relevantes ao jogador. |
| P1 | `docs/sistemas/pvm-mastery*.md` | 40.03–04, 40.09–10, 40.14 | Adicionar curva das seis summons de oitavo círculo, Maestria Chamado Inquebrável, bônus de joias, remoção do limite de 12,5% de Ruptura Arcana e duração de 90 s de Caçador Focado. |
| P1 | `docs/sistemas/caca-pvm*.md` | 38.18, 38.20, 39.04, 40.11, 40.18 | Atualizar bônus do grupo alvo para 75%; classificar Ensorcelled Armor e variantes dracônicas; incluir Hell Hounds selvagens; explicar término de Paralyze do caster PvM e ausência de recompensa de criaturas marcadas. |
| P1 | `docs/primeiros-passos/morte-recuperacao*.md` | 39.08, 40.06, 40.13 | Informar que criaturas não saqueiam cadáveres; perda de 1–3 de durabilidade máxima por morte, com exceção de Party/guild; retorno automático em 5 minutos e diferença PvP/PvM. |
| P1 | `docs/personagem*.md` | 38.07, 38.21–22, 39.01, 39.06, 40.15 | Atualizar revelação ao conjurar/usar skills, War Mode encerrando Tracking, Detect Hidden manual, stamina passiva e Polymorph Daemon com stats e restrições. |
| P1 | `docs/mundo/mapas-viagem*.md` | 38.01, 39.02, 39.07 | Gate Travel sem fizzle de skill em 100 Magery; Recall acima do peso; chegada em tile ocupado, preservando demais restrições. |
| P1 | `docs/itens/recompensas-pvm*.md` | 38.10, 38.17, 39.03, 40.09 | Atualizar recompensas de Nochyer/Odran; novos amuletos sem Wrestling; Bag of Sending somente para Gold; joias PvM com +1,00% a +7,50% de Maestria. |
| P1 | Nova página `docs/sistemas/casas.md` + EN e navegação | 39.10, 40.12 | Criar referência curta sobre proteção da fronteira de casas privadas e interação através de pisos no mesmo andar. Casas públicas permanecem inalteradas. |
| P1 | Nova página `docs/sistemas/pets-montarias.md` + EN e navegação | 38.09, 38.13, 39.05, 39.17, 40.16 | Centralizar Shrink Potion, liberação da vaga de montarias raras, correções visuais dos Ostards e descarte de itens ao liberar pets naturalmente agressivos. |
| P2 | `docs/itens/armas*.md` | 38.03, 38.06 | Registrar dano-base 1–3 de utilitários e Stamina Damage de Macing em 80% do dano final. |
| P2 | `docs/itens/armaduras*.md` e `docs/craft/tailoring*.md` | 40.06–07 | Documentar durabilidade de roupas, desgaste por morte e reparo por Tailoring; manter claro que roupa não reduz dano recebido. |
| P2 | `docs/itens/consumiveis*.md` | 38.02, 38.08, 39.03 | Poisoning com reuse de 4 s e aplicação de 2 s; estoque mínimo dos Alchemists; Bag of Sending limitada a Gold. |
| P2 | `docs/craft/index*.md` | 38.16, 40.05 | Explicar troca automática de ferramenta comum/DoB e substituição do menu anterior em crafting. |
| P2 | `docs/craft/tinkering*.md` | 39.11–12 | Adicionar Metal Chest (150 ingots) e deeds de Suit of Gold/Silver Armor (200 ingots), com material/cor. Validar curvas e materiais na fonte oficial antes de alterar o simulador. |
| P2 | `docs/arena*.md` | 39.13 | Adicionar troféus sazonais para campeões únicos dos três modos e regra de empate sem campeão. |
| P2 | `docs/mundo/cidades-guards*.md` | 38.14, 39.09 | Adicionar alerta anônimo de PK em cidade (5 min por PK) e as duas áreas ao norte de Minoc sem guards. |
| P2 | `docs/comandos*.md` | 38.04–05, 39.16 | Atualizar `.skillcheck`; registrar contagem online/recorde na primeira página do Help. Não adicionar `.pvpcamp`. |
| P2 | `docs/combate/index*.md` | 40.08 | Informar que Fire Field não troca o alvo de combate selecionado pelo caster. |
| P2 | `docs/sistemas/index*.md` ou referência apropriada | 39.15 | Registrar apenas o comportamento existente: Stealing entre jogadores não exige NPC guild e Disguise Kits não podem ser usados; não criar página sobre guilds desativadas. |

## Alterações que devem ficar apenas nos patchnotes

Estas notas são correções históricas ou mensagens operacionais sem necessidade
de ocupar uma página canônica:

- 38.15: aviso vermelho quando o cliente envia ações rápido demais;
- 39.14: Huntmaster Challenge desativado — não criar página para sistema que não
  existe no estado atual;
- 39.18: correção de acentos em “Socorro, estou preso!”;
- 40.05: correção de empilhamento de menus pode ser citada em Craft, mas não
  exige seção própria;
- 40.17: cabelo/barba/bigode virtuais fora do Grid Container de corpses.

As correções visuais 39.05 e 39.17 podem ser resumidas na página de pets e
montarias se ela for criada; caso contrário, permanecem somente nos patchnotes.

## Política para remover “Beta”

1. `mkdocs.yml`: usar `dob_version: "0.40.0"`.
2. Tags de status atuais: usar `Status: 0.40.0`.
3. Texto corrente: preferir `Na versão 0.40.0` ou remover a versão quando a regra
   for estável e não depender do release.
4. Simuladores de Craft: trocar `Beta 0.37.0` por `0.40.0` somente depois de
   validar os respectivos catálogos; não usar a troca de rótulo para fingir que
   tabelas antigas foram reconciliadas.
5. Preservar menções históricas a Alpha/Beta dentro dos patchnotes 0.29–0.31.

## Ordem recomendada de implementação

1. Versão global, home, Próximo patch e patchnotes 0.38–0.40.
2. Maestria PvM, Caça PvM, Spawns raros e Recompensas PvM.
3. Morte/recuperação, Personagem, viagem e casas.
4. Pets/montarias, Craft/Tinkering, armas, armaduras e consumíveis.
5. Arena, guards, comandos e PvP.
6. Atualização global das tags atuais, registro de fatos e Últimos artigos.
7. Auditorias PT-BR/EN, build estrito e smoke visual local.

## Restrições de publicação

- Esta branch contém apenas o diagnóstico e este handoff.
- Não houve autorização para merge, push ou deploy.
- Claims player-facing devem vir do catálogo oficial da tag `v0.40.0`; o arquivo
  detalhado `Docs/Patches/0.40.0.md` não deve ser copiado para a wiki porque
  contém inventário técnico e histórico de implementação.
