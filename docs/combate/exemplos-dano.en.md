# Examples of damage

!!! success "Status: Live 0.9.6"
The examples use currently published formulas.

The examples below follow the official server **Live 0.9.6**. They isolate a blow that has already landed; The chance of success and the chance of parrying are previous and independent draws.

## Striker used

In the first examples, the attacker has:

- 100 Tactics.
- 100 Anatomy.
- 100 STR.
- Weapon of Vanquishing, with a final bonus of +9.

Its scale is:

```text
escala = 1 + (100 - 50)/100 + 100/500 + 100/500
escala = 1 + 0,50 + 0,20 + 0,20
escala = 1,90
```

## Raw damage ranges

| Weapon | Base damage | After scaling and truncation | Vanquishing | Final raw damage |
|---|---:|---:|---:|---:|
| Kryss | 10-13 | 19-24 | +9 | **28-33** |
| Bardiche | 29-33 | 55-62 | +9 | **64-71** |
| Bow | 15-20 | 28-38 | +9 | **37-47** |

Each hit deals an integer within the base damage range. Therefore, intermediate values ​​do not necessarily form a perfectly uniform progression after multiplication and truncation.

## Example 1: region without armor

A Bow of Vanquishing deals 19 base damage:

```text
dano escalado = truncar(19 x 1,90) = truncar(36,10) = 36
dano bruto = 36 + 9 = 45
bonus por regiao descoberta = arredondar(45 x 15%) = 7
dano final = 45 + 7 = 52
```

The character loses **52 hits**. Ordinary clothing and jewelry without Physical Resist do not eliminate this bonus.

## Example 2: regional armor

The same 45 raw hit hits a piece that displays 18% Physical Resist:

```text
absorcao = arredondar(45 x 18%) = 8
dano final = 45 - 8 = 37
```

The character loses **37 hits**. There is no absorption draw: the percentage displayed by the piece directly determines the result.

## Example 3: armor with Protection

The region has 18% Physical Resist and Protection granted 8%:

```text
absorcao da armor = arredondar(45 x 18%) = 8
apos armor = 45 - 8 = 37
absorcao de Protection = arredondar(37 x 8%) = 3
dano final = 37 - 3 = 34
```

The character loses **34 hits**.

If the region is empty, the 15% bonus comes in first and then Protection:

```text
apos bonus de regiao descoberta = 45 + arredondar(45 x 15%) = 52
absorcao de Protection = arredondar(52 x 8%) = 4
dano final = 52 - 4 = 48
```

## Example 4: Parrying with shield

The defender has Parrying 100.0 and a shield that displays 31% Physical Resist:

```text
chance de bloquear = 45%
absorcao em bloqueio bem-sucedido = arredondar(45 x 31%) = 14
dano final = 45 - 14 = 31
```

If the block occurs, the character loses **31 hits** and no body parts are consulted. If Parrying fails, the server normally draws a body region and applies the armor from that region. Protection, when active, is calculated on the remaining 31 points.

## Example 5: complete comparison

For the same 45 raw damage:

| Defense found | Calculation | Final damage |
|---|---|---:|
| Empty region, without Protection | 45 + 15% | **52** |
| Piece with 18% Physical Resist | 45 - 18% | **37** |
| Sin with 18% and Protection 8% | 45 - 18%, then -8% | **34** |
| Empty region and Protection 8% | 45 + 15%, then -8% | **48** |
| Parry with 31% shield | 45 - 31% | **31** |

The practical result may involve three separate draws: attack success, parrying success and, when there is no block, body region. The absorption percentages are no longer random.
