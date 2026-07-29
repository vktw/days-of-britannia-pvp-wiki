# Armor and Parrying

!!! success "Status: Live 0.9.12"
    Regional absorption and Parrying correspond to the official server.

## Body regions

A physical blow that lands selects a body region. Only armor equipped in that region contributes to absorption; ordinary clothing, jewelry, and weapons do not count as protection.

| Region | Chance of being hit |
|---|---:|
| Chest | 35% |
| Legs | 22% |
| Arms | 15% |
| Head | 14% |
| Hands | 7% |
| Neck | 7% |

Each piece displays its individual Physical Resist. This number is exactly the percentage of damage absorbed when that region is hit. The Regular base resistance receives a multiplier of 1.40; after that, classic properties add percentage points:

| Property | Physical Resist Bonus |
|---|---:|
| Defense | +1 |
| Guarding | +3 |
| Hardening | +5 |
| Fortification | +7 |
| Invulnerability | +9 |

Modern elemental resistances do not participate in PvP.

The percentage of the region already incorporates material, quality, durability, the proportional weight of the region and the classic property. Protection remains a separate layer of 5% to 10% applied to the remaining damage, even when the drawn region is unarmored.

Regional absorption is:

```text
piece absorption = round(raw damage × Physical Resist / 100)
after armor = max(1, raw damage − piece absorption)
Protection absorption = round(after armor × Protection / 100)
final damage = max(1, after armor − Protection absorption)
```

Without effective armor in the affected region, a PvP hit receives the 25% uncovered-region bonus, rounded to the nearest integer with a minimum bonus of 1 point. When active, Protection then absorbs a percentage of this total. Reactive Armor does not turn an uncovered region into an equipped one.

## Shields

Parrying requires a shield equipped. Without a shield, the chance of blocking is zero. The chance is calculated by:

`block chance = min(45%, Parrying × 0.45%)`

With Parrying 100.0, the chance of blocking is therefore **45%**. When a block occurs, no body region is selected: the shield completely replaces this stage.

```text
shield absorption = round(raw damage × shield Physical Resist / 100)
after shield = max(1, raw damage − shield absorption)
final damage = max(1, after shield − percentage absorption from Protection)
```

Rounding uses the nearest whole, with half a point rounded up. Protection is calculated after the shield and does not change the percentage displayed by the part.

Shields therefore continue to reward higher qualities such as Invulnerability.

See [Damage examples](exemplos-dano.md) to compare an unarmored region, regional armor and a shield block.
