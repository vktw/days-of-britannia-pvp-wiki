# Armor and Parrying

!!! success "Status: Live 0.9.1"
    Regional absorption and Parrying correspond to the official server.

## Body regions

A physical blow that lands selects a body region. Only armor equipped in that region contributes to absorption; Ordinary clothing, jewelry, and weapons do not count as protection.

| Region | Chance of being hit |
|---|---:|
| Chest | 35% |
| Legs | 22% |
| Arms | 15% |
| Head | 14% |
| Hands | 7% |
| Neck | 7% |

Each piece displays its individual Physical Resist. This number is exactly the percentage of damage absorbed when that region is hit. The Regular base resistance receives a multiplier of 1.30; after that, classic properties add percentage points:

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
absorção da peça = arredondar(dano bruto × Physical Resist / 100)
após armor = max(1, dano bruto − absorção da peça)
absorção de Protection = arredondar(após armor × Protection / 100)
dano final = max(1, após armor − absorção de Protection)
```

Without armor in the affected region, the attack receives a 15% bonus per region discovered. Protection, when active, then absorbs a percentage of this total.

## Shields

Parrying requires a shield equipped. Without a shield, the chance of blocking is zero. The chance is calculated by:

`chance de parry = min(45%, Parrying × 0,45%)`

With Parrying 100.0, therefore, the chance of blocking is **45%**. When the blockage occurs, there is no selection of body regions: the shield completely replaces this stage.

```text
absorção do shield = arredondar(dano bruto × Physical Resist do shield / 100)
após shield = max(1, dano bruto − absorção do shield)
dano final = max(1, após shield − absorção percentual de Protection)
```

Rounding uses the nearest whole, with half a point rounded up. Protection is calculated after the shield and does not change the percentage displayed by the part.

The shield, therefore, continues to value superior qualities such as Invulnerability.

See [Damage examples](exemplos-dano.md) to compare an unarmored region, regional armor and a shield block.
