# Melee and Archery

!!! success "Status: Live 0.9.8"
Formulas and behaviors active on the official server.

## Chance of success

With offensive skill 100.0 against defense 100.0, Melee and Archery have **70% hit chance**. The formula is:

`chance = 1.40 × (attack + 50) ÷ [2 × (defense + 50)]`

The final result is limited between 2% and 98%.

Defense uses the skill appropriate to the target's equipment. Wrestling covers the character without a weapon.

## Speed

The weapon's `Speed` value represents the delay in seconds with 100 DEX:

`delay = Speed × 200 ÷ (DEX + 100)`

The effective DEX used in the formula is between 0 and 120 and there is a global minimum delay of 1.25 seconds. The classic Bow has Speed ​​4.5, so it fires every 4.5 seconds with 100 DEX.

The swing belongs to the current target. Walking does not reset the preparation of the shot, but Archery keeps the shot in buffer and only releases it when the character remains within valid range and remains stationary for 250 ms.

Common equip and unequip actions respond immediately, without artificial action delay. The delays for attacks, spells, potions, bandages and skills continue to apply normally.

## Damage and range

Each hit that lands first draws an integer value between `MinDamage` and `MaxDamage` from the weapon. This value is the **base damage drawn**.

The attacker's scale is:

`scale = 1 + (Tactics − 50)/100 + Anatomy/500 + effective STR/500`

Effective STR is limited between 0 and 120. Raw damage is calculated in the following order:

`raw damage = truncate(rolled base damage × scale) + classic weapon bonus`

`truncate` discards the decimal part. The scale result never falls below 1 point before the classic bonus.

| Property | Bonus added after scale |
|---|---:|
| Regular | 0 |
| Ruin | +1 |
| Might | +3 |
| Force | +5 |
| Power | +7 |
| Vanquishing | +9 |

The same calculation is used by Melee and Archery. The weapon's skill determines the hit chance, but does not appear again in the raw damage formula.

Poisoned weapons consume a charge and poison every successful hit.

### Competitive roles

| Role | Expected Vanquishing DPS reference |
|---|---:|
| Archery | approximately 6.46 |
| One-handed, shield, and poison | approximately 7.00 |
| Two-handed, range 2, and poison | approximately 7.54 |
| Long non-poisonable staves | approximately 5.38 |

The reference uses 100 STR, 100 DEX, 100.0 Tactics, 100.0 Anatomy, 100.0 weapon skill, and a 70% base hit chance. Poison, armor, Parrying, and downtime are excluded. Competitive Macing weapons also remove stamina equal to the final damage dealt by the hit.

### Weapons with range 2

The following two-handed weapons reach two tiles:

- Polearms, including Bardiche, Halberd and Scythe.
- Pike, Gargish Pike, Lance and Gargish Lance.
- Spear and Pitchfork. Tribal Spear does not circulate among players.
- Bladed Staff, Double Bladed Staff and Lajatang.
- Quarter Staff, Black Staff, and Gnarled Staff. Shepherd's Crook remains a Herding utility outside the competitive ranking.

The additional range does not change the weapon's speed.

## Archery and plate

Archery weapons cannot be equipped while the character is wearing a body plate piece. It is also not possible to wear body plate with an Archery weapon equipped.

**Plate Gorget and shields are exceptions** and can be combined with Archery.

See [Damage examples](exemplos-dano.md) for the complete calculation from the weapon roll to the target's lost hits.
