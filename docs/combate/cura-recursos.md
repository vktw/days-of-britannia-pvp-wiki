# Cura e recursos

## Faixas de cura

Valores abaixo consideram as skills relevantes em 100.0:

| Recurso | Cura | Alcance |
|---|---:|---:|
| Heal | 9–12 | 10 tiles |
| Greater Heal | 30–40 | 10 tiles |
| Bandage | 30–40 | 2 tiles |
| Greater Heal Potion | 40 fixos | Uso próprio |

Heal e Greater Heal curam o caster ou outro personagem pela mesma faixa. Poison não bloqueia Heal, Greater Heal ou Greater Heal Potion.

Bandage cura poison imediatamente sem restaurar vida. Quando não há poison, a cura de vida ocorre após 2,5 segundos. O uso de bandage exige mãos livres e desequipa automaticamente itens das mãos; um personagem paralisado só consegue usá-la se já estiver com as mãos vazias.

## Potions

Todas as potions compartilham cooldown global de **15 segundos** e não exigem mãos livres. Os efeitos das potions bebíveis abaixo são imediatos.

- Greater Heal: 40 hits.
- Total Mana: 40 mana.
- Total Refresh: recupera stamina conforme o tipo.
- Invisibility: aplica invisibilidade imediatamente.

Toda potion bebida reproduz o som clássico de consumo.

### Explosion Potions

Explosion Potions são arremessáveis e, portanto, não possuem efeito imediato. Elas abrem um cursor, usam uma contagem regressiva de aproximadamente 3,6 segundos e explodem em uma área de dois tiles. O dano-base varia por tier:

| Tier | Dano-base |
|---|---:|
| Lesser Explosion | 5–10 |
| Explosion | 10–20 |
| Greater Explosion | 20–40 |

Quando mais de dois alvos entram na explosão, o dano é dividido pelo número de outros alvos atingidos. Os valores ainda passam pela escala aplicável à potion antes da distribuição.

## Mana

Focus e Meditation funcionam independentemente do equipamento. Meditation ativa acelera a recuperação; a recuperação passiva de jogadores usa INT, Meditation e Focus conforme a fórmula do shard.
