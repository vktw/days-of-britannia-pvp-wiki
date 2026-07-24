# Armor e Parrying

## Regiões corporais

Um golpe físico que acerta seleciona uma região corporal. Somente a armadura equipada naquela região contribui para a absorção; roupas comuns, joias e armas não contam como proteção.

| Região | Chance de ser atingida |
|---|---:|
| Chest | 35% |
| Legs | 22% |
| Arms | 15% |
| Head | 14% |
| Hands | 7% |
| Neck | 7% |

Cada peça exibe sua contribuição individual de Physical Resist/Armor Rating. As propriedades clássicas acrescentam ao AR da peça:

| Propriedade | Bônus de AR |
|---|---:|
| Defense | +1 |
| Guarding | +3 |
| Hardening | +5 |
| Fortification | +7 |
| Invulnerability | +9 |

As resistências elementais modernas não participam do PvP.

Quando existe armor na região sorteada, a peça absorve aleatoriamente entre `floor(AR / 4)` e `ceil(AR / 2)`. Essa absorção, isoladamente, nunca reduz o golpe para menos de 1 de dano.

## Escudos

Com Parrying 100.0, a chance máxima de bloqueio é **45%**. Quando o bloqueio ocorre, o sorteio de região corporal é substituído pelo escudo. Ele absorve seu próprio Armor Rating arredondado, em vez de simplesmente anular todo o ataque, preservando no mínimo 1 de dano.

O escudo, portanto, continua valorizando qualidades superiores como Invulnerability.
