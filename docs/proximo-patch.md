# Próximo Patch Planejado

!!! info "Implementado localmente"
    As mudanças desta página já existem no servidor local de testes e estão planejadas para o próximo patch. Elas **ainda não estão disponíveis no servidor oficial 0.6.0** e podem receber ajustes durante a validação antes da publicação.

## Combate físico

**Status: implementado localmente.**

- Golpes que passam pelo Parrying e atingem uma região sem armor recebem bônus de 15% no dano físico, com mínimo de +1.

## PvP Trainer e arena

**Status: implementado localmente.**

- Ajustes de decisão do Trainer para reduzir ações desperdiçadas e escolher finalizações pelo dano projetado.
- Os kits do `[PvPCamp`, da arena e do PvP Trainer passam a fornecer **15 Greater Heal Potions** e **15 Total Mana Potions**.
- Os mesmos kits passam a fornecer **3 Deadly Poison Potions**, independentes do cooldown global das poções ingeríveis e sujeitas apenas ao fluxo normal da skill Poisoning.
- `[PvPCamp` e `[PvPTrainer` passam a aceitar também os aliases `.pvpcamp` e `.pvptrainer`.
- A telemetria de arena recebe atribuição mais precisa da origem de dano e cura.

## Skills iniciais

**Status: implementado localmente.**

- Novos personagens começam com Hiding, Stealth, Detect Hidden e Poisoning em 100.0.
- Personagens existentes recebem essas quatro skills em 100.0 no primeiro login após o patch, por migração persistente executada uma única vez.

## Regeneração de mana

**Status: implementado localmente.**

- Recuperação passiva de mana de jogadores e PvP Trainer passa a usar o dobro do intervalo atual, reduzindo a taxa passiva em 50%.
- Meditation ativa permanece inalterada.

!!! warning "Publicação ainda não autorizada"
    Estas alterações ainda não possuem número de patch ou data de publicação autorizados. A inclusão nesta página representa o planejamento atual, não disponibilidade no Live.
