# PvP

Days of Britannia PvP is built around pressure and response, not a fixed
rotation. Players combine physical damage, magic, and poison to force a
defensive answer; they then manage hits, mana, bandages, and positioning until a
finishing window appears.

Outside the Arena and during a fight in the Arena, the PvP ruleset is the same:
hit chance, damage, poison, healing, bandages, cast delay, and mana cost follow
the same rules. The Arena adds session flow, preparation, boundaries, and loot;
those differences are described in [Arena and training](../arena.md).

## How a fight works

- **Create pressure:** use a weapon, poison, or spell to keep the opponent
  responding instead of attacking freely.
- **Force the response:** accumulated damage, poison, and control can make the
  target use a bandage, potion, protection, or movement.
- **Read the commitment:** a bandage, a long cast, or a consumed defense opens
  an opportunity, but it can also be bait. The goal is to recognize the window,
  not repeat an automatic sequence.
- **Finish:** Flame Strike (FS), Lightning, and Harm are examples of spells used to
  confirm damage when the target's recovery is limited.

## Physical, magical, and poison pressure

The most consistent pressure package combines sources that demand different
responses:

- **Melee or archery weapon:** maintains physical damage and a hit threat while
  the target tries to reposition.
- **Poison:** creates recurring damage and turns a bandage into an immediate
  decision.
- **Magery:** alternates pressure, control, and confirmation. The immediate
  target is selected before the cast delay; the effect is released only after
  that time.

## Bandages and poison

Bandage treatment is selected automatically when the bandage starts:

- if poison is present at the start, the application attempts to cure it
  immediately;
- that poison-cure application does not restore hits;
- a normal life or bleed bandage ends in 3.5 seconds;
- poison applied after the start does not replace the life or bleed treatment
  that was already selected;
- starting an accepted spell cancels a pending bandage.

For that reason, applying poison is not only about damage: it tests whether the
opponent will spend their response now. Likewise, attacking during the
treatment window is a timing decision, not a guarantee of damage.

## Cast delay and mana

These are the base values for the Magery spells most relevant to PvP. Cast
delay is fixed per spell in this ruleset; FC and FCR do not change it. The cost
is the spell's base mana expenditure; LRC and LMC do not reduce costs in this
ruleset.

| Spell | PvP role | Cast delay | Mana |
| --- | --- | ---: | ---: |
| Magic Arrow | Cheap pressure | 1.0 s | 4 |
| Harm | Short-range pressure | 1.0 s | 6 |
| Fireball | Magical pressure | 2.5 s | 9 |
| Lightning | Fast finisher | 2.5 s | 11 |
| Mind Blast | Offense | 3.0 s | 14 |
| Energy Bolt | Offense | 3.5 s | 20 |
| Explosion | Offense with delayed impact | 3.5 s | 20 |
| Flame Strike | Heavy finisher | 3.5 s | 40 |
| Paralyze | Control and opening | 2.5 s | 14 |
| Cure | Poison cure | 1.5 s | 6 |
| Heal | Healing | 1.0 s | 4 |
| Greater Heal | Strong healing | 2.5 s | 11 |
| Protection | Defense | 1.4 s | 6 |
| Reactive Armor | Melee defense | 1.0 s | 4 |
| Magic Reflection | Magic defense | 4.0 s | 14 |

The delay in the table is the casting time, not necessarily the moment of the
visual impact. Some spells have an additional wait before damage reaches the
target.

## The finishing window

“Finisher” describes a timing decision, not a mandatory rotation:

- **Lightning** is a direct and faster confirmation, suitable when the target's
  recovery is compromised.
- **Flame Strike** requires a larger time and mana commitment, but it is a
  heavy direct-damage option for a well-prepared window.
- **Harm** has a very short cast and short range; in PvP it deals 5–7 damage and
  works as pressure or confirmation when distance allows.

Practical examples, without turning the fight into a fixed sequence:

- a weapon with poison makes the target start a bandage; follow that commitment
  and look for Lightning or Flame Strike when recovery cannot answer the impact;
- Fireball or Explosion can maintain pressure while you manage mana and
  position; Lightning can confirm the next window;
- Paralyze can create space, but the target can renew the defense or break the
  effect, so the cast must be read together with the opponent's response.

## Defense that buys time

- **Parrying:** with 100.0 Parrying, a shield reaches 45% block in PvP.
- **Protection:** lasts 90 seconds and reduces part of the remaining damage
  after the other absorption steps.
- **Reactive Armor:** lasts 90 seconds and returns part of melee damage to the
  attacker.
- **Magic Reflection:** has one charge against the next eligible harmful spell
  or field.
- **Positioning and armor:** coverage, the hit region, and movement also belong
  to the defensive read.

Defense is not only waiting for hits to rise: it buys the time needed to
reposition, recover mana, or prepare the next response.

!!! success "Status: Live 0.26.3"
    This page summarizes the active ruleset on the official server. Gameplay
    values were checked against the official server source.
