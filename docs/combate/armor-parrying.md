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

O `AR da região` corresponde ao `ArmorRatingScaled` da peça sorteada e já incorpora material, qualidade, durabilidade, propriedade clássica e o peso proporcional daquela região corporal. Protection acrescenta seu bônus de +5 a +10 a esse valor, inclusive quando a região sorteada está sem armor.

A absorção regional é:

```text
AR efetivo = AR da região + bônus de Protection
absorção mínima = floor(AR efetivo / 4)
absorção máxima = ceil(AR efetivo / 2)
absorção = inteiro aleatório entre o mínimo e o máximo
dano final = max(1, dano bruto − absorção)
```

Sem armor e sem Protection, o AR efetivo é zero e o dano bruto passa integralmente.

## Escudos

Parrying exige um shield equipado. Sem shield, a chance de bloqueio é zero. A chance é calculada por:

`chance de parry = min(45%, Parrying × 0,45%)`

Com Parrying 100.0, portanto, a chance de bloqueio é **45%**. Quando o bloqueio ocorre, não existe sorteio de região corporal: o shield substitui completamente essa etapa.

```text
absorção do shield = max(0, round(ArmorRatingScaled do shield))
dano final = max(1, dano bruto − absorção do shield)
```

O arredondamento segue o padrão numérico do servidor. Protection não é acrescentada à absorção do shield.

O escudo, portanto, continua valorizando qualidades superiores como Invulnerability.

Consulte [Exemplos de dano](exemplos-dano.md) para comparar região sem armor, armor regional e bloqueio com shield.
