# Magery

!!! success "Status: Live 0.9.1"
Flow, delays and effects correspond to the official server.

## Cast flow

Magery uses the **target → cast delay → revalidation → effect** flow. The cursor appears immediately after activation. Initially selecting an invalid target or canceling the cursor does not consume resources.

- It is allowed to move during the cast.
- Frozen or Paralyzed, alone, do not prevent starting or completing Magery.
- A paralyzed character with a weapon or shield in their hands cannot cast or unequip these items manually.
- With empty hands, a paralyzed character can cast and use bandage.
- Outside of this specific block, activating Magery automatically sends items from your hands to your backpack.
- Items can be equipped after activation.
- Common damage does not cause fizzle, except in Teleport, Recall and Gate Travel.
- FC, FCR, LRC and LMC do not affect Magery.
- Earthquake is the only spell without a cursor.

## Delays per circle

| Circle | Delay | Circle | Delay |
|---:|---:|---:|---:|
| 1 | 1.0s | 5 | 3.0s |
| 2 | 1.5s | 6 | 3.5s |
| 3 | 2.0s | 7 | 4.0s |
| 4 | 2.5s | 8 | 4.5s |

Protection has its own exception of 1.4 seconds.

## Damage and mana

| Circle | Mana | Circle | Mana |
|---:|---:|---:|---:|
| 1 | 4 | 5 | 14 |
| 2 | 6 | 6 | 20 |
| 3 | 9 | 7 | 40 |
| 4 | 11 | 8 | 50 |

Mana Phasing, Mind Rot, Purge Magic, and Arcane Gems remain valid exceptions to normal consumption. LRC and LMC remain ineffective.

### Maximum damage in PvP

The values ​​below consider **100 INT and 100.0 Evaluating Intelligence**:

| Magic | Maximum damage |
|---|---:|
| Magic Arrow | 10 |
| Harm | 15 |
| Fireball | 20 |
| Lightning | 25 |
| Mind Blast | 30 |
| Explosion | 35 |
| Energy Bolt | 35 |
| Flame Strike | 40 |
| Chain Lightning | 40 |
| Meteor Swarm | 40 |
| Earthquake | Pool of 40 divided between PvP targets |

INT and Evaluating Intelligence below 100 reduce these values. Although buffs can raise INT up to 120, **INT above 100 does not increase magic damage**. Inscription also does not modify this damage.

Flame Strike is the anchor of balance: it consumes 40 mana and deals 40 damage at maximum conditions. Without scrolling, your normal hit range starts at approximately 65.7 Magery. Projectile spells only preserve the time needed to synchronize damage and visual impact, while Explosion maintains its three-second fuse.

Harm deals its full damage at any valid range. Chain Lightning and Meteor Swarm divide the maximum pool of 40 points between targets hit.

Earthquake is an exception: it doesn't use a cursor, has a cast of 4.5 seconds and hits an area around the caster. In PvP, it has a maximum reserve of 40 points, divided between the affected players. Against NPCs and other targets outside of the PvP Sphere, deals half the current hits, capped at between 15 and 100, plus 0 to 15 points.

Resisting Spells can prevent the application of magical Poison and participates in the duration of Paralyze. Magic Reflection does not use this skill in the one-charge system. Resisting Spells do not recreate the five AOS elemental resistances nor directly reduce Sphere magic damage.

## Buffs and control

- Protection grants 5% to 10% additional absorption in PvP for 90 seconds, applied after armor, shield or uncovered region bonus. It does not have modern penalties. Ends on death, logout, Dispel, Purge Magic, or expiration and persists across saves for the duration of a valid session.
- Reactive Armor lasts 90 seconds. When receiving melee damage, it returns 20% of the final damage to the attacker and reduces the damage received by the same amount, preserving a minimum of 1 point. Your Physical Resistance AOS bonus does not participate separately from PvP damage.
- Magic Reflection has a charge and fully reflects the next eligible harmful spell or field. If attacker and defender are shielded, both charges are consumed and the spell is negated without damage. There is no reserve per circle or automatic reset in 30 seconds. The AOS resistance modifiers displayed do not reduce Sphere magic damage, and Inscription does not participate in the calculation.
- Paralyze can be renewed. Its duration is `60 + (100 - Eval Int) × 0,3 + (100 - Resist) × 0,3` seconds, varying from 60 to 120 seconds within the normal skill limits.
- Poison does not break Paralyze. Direct damage opens up the possibility of release.
- Magic Arrow itself is a valid way to do this direct damage.
- Paralyze Field uses the same rules as Paralyze and can also affect the caster. Direct damage opens a **500ms** window before the field can reapply Paralyze; remaining or returning to the tile after this window allows new application.
- Prepared melee attacks and Archery shots can still be released during Paralyze when its other conditions are met.
- Wall of Stone forms five tiles, lasts 60 seconds and can coexist with other fields.

### Fields

The fields below use the standard Magery range of 12 tiles and form five tiles:

| Field | Effect | Duration with Magery 100.0 |
|---|---|---:|
| Fire Field | Deals 2 points when crossing the tile and on periodic checks while the target remains on it | 53 s |
| Poison Field | Applies or resets poison when crossing the tile and while the target remains on it | 43 s |
| Energy Field | Blocks passage | 30 s |

Paralyze Field follows the Paralyze rules described above. Wall of Stone also has five tiles, but uses its own rules for positioning, overlapping and duration of 60 seconds.

### Stats courses

- Clumsy reduces DEX by 15, Feeblemind reduces INT by 15 and Weaken reduces STR by 15.
- Curse reduces STR, DEX and INT by 10; Mass Curse applies the same logic to area.
- Targeted curses have a range of 12.
- Resisting Spells does not change the fixed magnitude of these reductions.
- An individual curse of 15 points temporarily prevails over the corresponding Curse component, which returns when the individual effect ends.
- With Evaluating Intelligence 100.0, the duration is 121 seconds.

### Resurrection

Resurrection, or An Corp, uses range 12. The success range per spellbook starts at 60.0 Magery and reaches 100% at 100.0. Upon accepting, the resurrected loses 10% of their current Fame. If you are on the same map and within one tile of the corpse itself, your movable items return to the backpack; items without space remain in the body.

## Beneficial targets and summons

Create Food, Reactive Armor, Protection, Magic Reflection, Incognito and Polymorph accept any living and valid `Mobile` at range 12, including the caster itself, players and NPCs. Polymorph applies the form previously chosen by the caster to the target, and Create Food delivers the food to the target's backpack.

Summon Creature, Summon Daemon and the Air, Earth, Fire and Water elementals accept as reference the ground or a `Mobile` at range 12. Upon release, the creature appears at the closest valid point to the target's current position and remains belonging to and obeying the caster. Player summons are still prevented from damaging other players.

## Trip in Trammel

Felucca is the only public facet. Recall, Mark, Gate Travel, scrolls, Runebooks, and other means of travel do not allow players to access other facets. Trammel remains available only in controlled areas of official arenas. Teleport remains available within the current facet, outside of the specific restrictions of an arena session.
