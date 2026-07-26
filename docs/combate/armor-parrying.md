# Armor e Parrying

!!! success "Status: Live 0.9.1"
    Absorção regional e Parrying correspondem ao servidor oficial.

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

Cada peça exibe seu Physical Resist individual. Esse número é exatamente o percentual de dano absorvido quando aquela região é atingida. A resistência-base Regular recebe um multiplicador de 1,30; depois disso, as propriedades clássicas acrescentam pontos percentuais:

| Propriedade | Bônus de Physical Resist |
|---|---:|
| Defense | +1 |
| Guarding | +3 |
| Hardening | +5 |
| Fortification | +7 |
| Invulnerability | +9 |

As resistências elementais modernas não participam do PvP.

O percentual da região já incorpora material, qualidade, durabilidade, o peso proporcional da região e a propriedade clássica. Protection permanece uma camada separada de 5% a 10% aplicada sobre o dano restante, inclusive quando a região sorteada está sem armor.

A absorção regional é:

```text
absorção da peça = arredondar(dano bruto × Physical Resist / 100)
após armor = max(1, dano bruto − absorção da peça)
absorção de Protection = arredondar(após armor × Protection / 100)
dano final = max(1, após armor − absorção de Protection)
```

Sem armor na região atingida, o golpe recebe o bônus de 15% por região descoberta. Protection, quando ativa, absorve depois uma parcela percentual desse total.

## Escudos

Parrying exige um shield equipado. Sem shield, a chance de bloqueio é zero. A chance é calculada por:

`chance de parry = min(45%, Parrying × 0,45%)`

Com Parrying 100.0, portanto, a chance de bloqueio é **45%**. Quando o bloqueio ocorre, não existe sorteio de região corporal: o shield substitui completamente essa etapa.

```text
absorção do shield = arredondar(dano bruto × Physical Resist do shield / 100)
após shield = max(1, dano bruto − absorção do shield)
dano final = max(1, após shield − absorção percentual de Protection)
```

O arredondamento usa o inteiro mais próximo, com meio ponto arredondado para cima. Protection é calculada depois do shield e não altera o percentual exibido pela peça.

O escudo, portanto, continua valorizando qualidades superiores como Invulnerability.

Consulte [Exemplos de dano](exemplos-dano.md) para comparar região sem armor, armor regional e bloqueio com shield.
