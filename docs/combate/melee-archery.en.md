# Melee and Archery

## Hit chance

With attack and defense at 100.0, the initial PvP hit chance is **90%**. In
Live 0.26.3 PvM, standard weapons use the base curve
`max(2%, 75% * clamp(skill, 0, 100) / 100)`: effective attack skill reaches
**75% at 100.0**, with a 2% operational floor.

In the PvM branch, base chance uses the weapon's effective attack skill and is
not reduced by the creature's defense. The same skill keeps the same base chance
against targets with different defenses. The relative PvM Mastery bonus is
applied after this step; the PvP formula remains based on the defense matchup.

Defense uses the skill appropriate to the equipped weapon in the PvP path. An
unarmed character relies on Wrestling.

## Speed

The weapon's displayed `Speed` is its delay at 100 DEX. More DEX speeds attacks up to the allowed limit; less DEX increases the interval. Every attack respects the global 1.25-second minimum delay.

The classic Bow has Speed 3.75 and fires every 3.75 seconds at 100 DEX.

In Archery, walking does not discard a prepared shot. The arrow is released when the target is in range and the archer remains still for **500 ms**.

## Damage and range

- STR, Tactics, Anatomy, weapon quality, and weapon type affect physical damage.
- Ruin, Might, Force, Power, and Vanquishing increase damage in that order.
- Poison is applied when a compatible charged weapon hits.
- Competitive Macing weapons also remove stamina according to damage dealt.
- Polearms and some spears reach two tiles; most melee weapons reach one.
- Competitive Archery reaches ten tiles.

In PvP, hitting a region without effective armor grants **25% additional damage**. Protection is applied afterward. See [Armor and Parrying](armor-parrying.md).

## Bowcraft bows in Live 0.26.3

- **Fire Bow:** receives +6 thematic damage and shows only the Fireball impact on the target.
- **Elven Bow:** uses Speed 3.00, 7–12 base damage, and grants +10 Tactics and +10 Archery while equipped; both skills return to normal when it is unequipped. In PvM, its +10 Archery may remain effective above 100, reaching **82.5%** base chance at 110.0; its +10 Tactics also affects damage above 100.

See [Classic weapons](../itens/armas.md) for resources and crafting curves.

## Practical choice

- One-handed weapons allow a shield and favor defense.
- Two-handed weapons trade the shield for greater pressure or reach.
- Archery offers distance but requires a brief stop before firing.
- Speed, range, poison, and Stamina Damage usually matter more than small theoretical damage differences.

Archery weapons cannot be used with body plate. Plate Gorgets and shields are exceptions.

See [Classic weapons](../itens/armas.md) and [Damage examples](exemplos-dano.md).

!!! success "Status: Live 0.26.3"
    Practical rules for choosing weapons, distance, and attack pace.
