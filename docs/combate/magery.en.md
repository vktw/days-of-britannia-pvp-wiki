# Magery

## Cast flow

Magery follows **choose target → wait for cast → apply effect**.

- The cursor appears when the spell is activated.
- Cancelling before choosing a valid target does not consume resources.
- Movement is allowed during most casts.
- Frozen or Paralyzed alone do not prevent Magery, but occupied hands can block a paralyzed character.
- Activating Magery normally moves the weapon and shield to the backpack.
- Ordinary damage does not interrupt most spells; Teleport, Recall, and Gate Travel are exceptions.
- Switching spells during a cast makes the previous one fizzle and consume its resources.
- Starting an accepted spell cancels a pending bandage; immediate poison treatment does not create that delay.
- FC, FCR, LRC, and LMC do not modify this ruleset.

## Important delays

| Spell | Delay |
| --- | ---: |
| Harm | 1.0 s |
| Fireball | 2.5 s |
| Paralyze | 2.5 s |
| Flame Strike | 3.5 s |
| Recall and Gate Travel | 4.0 s after choosing a valid destination |

Protection is a fast exception at 1.4 seconds. Earthquake has no cursor.

## Damage and mana

At 100 INT and 100.0 Evaluating Intelligence, the main PvP maximum damage values are:

| Spell | Maximum damage |
| --- | ---: |
| Magic Arrow | 10 |
| Harm | 5–7 in PvP |
| Fireball | 17 |
| Lightning | 25 |
| Mind Blast | 26 |
| Energy Bolt | 27 |
| Explosion | 35 |
| Flame Strike | 40 |

INT or Evaluating Intelligence below 100 reduce damage. Values above 100 do not increase the maximum. Chain Lightning, Meteor Swarm, and Earthquake divide their damage among affected PvP targets.

In PvP, Harm deals 5–7 damage per cast. In PvM, its native damage and range remain unchanged.

## Buffs and control

- Protection lasts 90 seconds and reduces part of the remaining damage.
- Reactive Armor lasts 90 seconds and returns part of melee damage to the attacker.
- Protection and Reactive Armor use the historical Sphere 0.51a visual effects and cast sounds. During reflection, Reactive Armor shows only the historical red effect on the attacker.
- Magic Reflection has one charge against the next eligible harmful spell or field.
- Paralyze can be renewed; direct damage may free the target.
- Poison does not break Paralyze.
- Dispel removes only compatible classic magical effects; it does not remove weapon poison, potion effects, Young, or Arena states.
- Magic Arrow used on your own character applies its effect and damage together when the cast ends. Against other targets, it keeps the projectile and normal impact delay.

## Fields

Player and PvP Trainer fields have a 12-tile range and form seven tiles. Fire Field deals damage, including to its caster; the first tick occurs after 0.5 seconds and later ticks every 1.6 seconds. Poison Field applies poison, and Energy Field blocks the opposing PvP participant.

Paralyze Field can reapply Paralyze after a brief window. Wall of Stone lasts 60 seconds and follows its own positioning rules.

## Travel and targets

Spells can be cast in towns. Specific arena, travel, geometry, and target-eligibility restrictions remain.

Targeted spells normally have range 12. Felucca is the only public facet; Trammel remains restricted to official arenas. Recall, Mark, and Gate Travel cannot leave the public facet.

Resurrection may return movable corpse items when the ghost is nearby and accepts resurrection.

!!! success "Status: Live 0.26.3"
    Delays, range, and effects needed to play and plan combat.
