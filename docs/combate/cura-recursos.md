# Cura e recursos

!!! success "Status: Live 0.9.12"
    Faixas, delays e recuperação correspondem ao servidor oficial.

## Faixas de cura

Valores abaixo consideram as skills relevantes em 100.0:

| Recurso | Cura | Alcance |
|---|---:|---:|
| Heal | 9–12 | 10 tiles |
| Greater Heal | 30–40 | 10 tiles |
| Bandage | 30–40 | 2 tiles |
| Greater Heal Potion | 40 fixos | Uso próprio |

Heal e Greater Heal curam o caster ou outro personagem pela mesma faixa. Poison não bloqueia Heal, Greater Heal ou Greater Heal Potion.

Bandage cura poison imediatamente sem restaurar vida. Quando não há poison, a cura de vida ocorre após 3,5 segundos. O uso de bandage exige mãos livres e desequipa automaticamente itens das mãos; um personagem paralisado só consegue usá-la se já estiver com as mãos vazias.

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

Focus e Meditation funcionam independentemente do equipamento. O servidor recupera um ponto de mana a cada intervalo calculado por:

```text
focusBonus = Focus / 200
medBonus = 0,0075 × Meditation + 0,0025 × INT
itemBase = (((Meditation / 2 + Focus / 4) / 90) × 0,65) + 2,35
itemBonus = (itemBase × sqrt(Mana Regen) − (itemBase − 1)) / 10
intervalo = 1 / (0,2 + focusBonus + medBonus + itemBonus)
```

`Mana Regen` representa o atributo de equipamento aplicável; os atributos modernos desativados não concedem vantagem no ruleset. Durante Meditation ativa, `medBonus` não é dobrado.

### Recuperação efetiva

Os exemplos abaixo consideram Focus 100.0, Meditation 100.0 e nenhum Mana Regen de itens. STR e DEX não participam da recuperação de mana; entre os stats, somente INT altera o resultado.

| INT | Estado | Intervalo por mana | Mana por segundo | Mana por minuto |
|---:|---|---:|---:|---:|
| 100 | Passiva | 1,324 s | **0,755** | **45,33** |
| 100 | Meditation ativa | 0,662 s | **1,511** | **90,67** |
| 120 | Passiva | 1,282 s | **0,780** | **46,83** |
| 120 | Meditation ativa | 0,641 s | **1,561** | **93,66** |

Na prática, um personagem com INT 100 recupera aproximadamente **7,6 mana em 10 segundos** passivamente ou **15,1 mana em 10 segundos** meditando ativamente. Com INT 120, recupera aproximadamente **7,8 mana em 10 segundos** passivamente ou **15,6 mana em 10 segundos** com Meditation ativa.

Esses valores representam a taxa matemática real do Live; os pontos entram individualmente conforme cada intervalo é completado.

A regeneração passiva permanece inalterada. A Meditation ativa de jogadores e do PvP Trainer não recebe mais a duplicação do componente de Meditation.
