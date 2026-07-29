# Examples of damage

!!! success "Status: Live 0.9.12"
The examples use currently published formulas.

The examples below follow the official **Live 0.9.12** server. They isolate a hit that has already landed; hit chance and Parrying chance are separate, prior rolls.

## Striker used

In the first examples, the attacker has:

- 100 Tactics.
- 100 Anatomy.
- 100 STR.
- Weapon of Vanquishing, with a final bonus of +9.

Its scale is:

```text
scale = 1 + (100 - 50)/100 + 100/500 + 100/500
scale = 1 + 0.50 + 0.20 + 0.20
scale = 1.90
```

## Raw damage ranges

| Weapon | Base damage | After scaling and truncation | Vanquishing | Final raw damage |
|---|---:|---:|---:|---:|
| Kryss | 10-13 | 19-24 | +9 | **28-33** |
| Bardiche | 29-33 | 55-62 | +9 | **64-71** |
| Bow | 15-20 | 28-38 | +9 | **37-47** |

Each hit deals an integer within the base damage range. Therefore, intermediate values ​​do not necessarily form a perfectly uniform progression after multiplication and truncation.

## Example 1: region without armor

A Bow of Vanquishing rolls 19 base damage:

```text
scaled damage = truncate(19 × 1.90) = truncate(36.10) = 36
raw damage = 36 + 9 = 45
unarmored-region bonus = round(45 × 25%) = 11
final damage = 45 + 11 = 56
```

The character loses **56 hits**. Ordinary clothing and jewelry without Physical Resist do not eliminate this bonus.

## Example 2: regional armor

The same 45-point raw hit strikes a piece that displays 18% Physical Resist:

```text
absorption = round(45 × 18%) = 8
final damage = 45 - 8 = 37
```

The character loses **37 hits**. There is no absorption draw: the percentage displayed by the piece directly determines the result.

## Example 3: armor with Protection

The region has 18% Physical Resist and Protection granted 8%:

```text
armor absorption = round(45 × 18%) = 8
after armor = 45 - 8 = 37
Protection absorption = round(37 × 8%) = 3
final damage = 37 - 3 = 34
```

The character loses **34 hits**.

If the region is empty, the 25% bonus comes in first and then Protection:

```text
after unarmored-region bonus = 45 + round(45 × 25%) = 56
Protection absorption = round(56 × 8%) = 4
final damage = 56 - 4 = 52
```

## Example 4: Parrying with shield

The defender has Parrying 100.0 and a shield that displays 31% Physical Resist:

```text
block chance = 45%
absorption on a successful block = round(45 × 31%) = 14
final damage = 45 - 14 = 31
```

If the block occurs, the character loses **31 hits** and no body parts are consulted. If Parrying fails, the server normally draws a body region and applies the armor from that region. Protection, when active, is calculated on the remaining 31 points.

## Example 5: complete comparison

For the same 45 raw damage:

| Defense found | Calculation | Final damage |
|---|---|---:|
| Empty region, without Protection | 45 + 25% | **56** |
| Piece with 18% Physical Resist | 45 - 18% | **37** |
| Piece with 18% and Protection 8% | 45 - 18%, then -8% | **34** |
| Empty region and Protection 8% | 45 + 25%, then -8% | **52** |
| Parry with 31% shield | 45 - 31% | **31** |

The practical result may involve three separate draws: attack success, parrying success and, when there is no block, body region. The absorption percentages are no longer random.
