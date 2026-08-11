---
description: Learn how Invisibility, attacks against hidden targets, and Detect Hidden search timing work.
---

# Invisibility and Detect Hidden

This page explains what to expect when you use Invisibility, attack an invisible target, or search for hidden characters with Detect Hidden.

## When a spell or attack meets an invisible target

- A targeted spell fails if the target is still invisible at impact.
- Periodic poison damage does not remove the victim's invisibility.
- Fields, area effects, and environmental damage follow their own rules; this page covers targeted attacks and spells.

## Attacking while invisible

You remain hidden during preparation. In PvP, you are revealed when your spell,
melee attack, or Archery shot validly hits another player. In PvM, positive
direct damage dealt by you to an eligible wild creature ends Hiding, Stealth,
and active invisibility effects. Misses, zero damage, poison ticks, pets,
summons, and attacks against PvP targets do not trigger this rule. An invisible
caster's Words of Power remain in the journal and do not appear above the
character's head.

## Using Detect Hidden

Detect Hidden starts a targetless search in a fixed **12-tile** area. Wait **2 seconds** for it to resolve; there is no additional cooldown afterward. The search reveals other hidden players, including in PvP, but does not affect mobs, creatures, pets, NPCs, or hidden items.

## Quick reference

| Situation | Result |
|---|---|
| Targeted spell against an invisible target at impact | Fails |
| Periodic poison on an invisible victim | Does not reveal |
| Valid attack by an invisible character against another player | Reveals the attacker |
| Positive direct damage to an eligible wild PvM creature | Ends Hiding, Stealth, and active invisibility |
| PvM miss, zero damage, or poison tick | Does not reveal |
| Detect Hidden | 12-tile area; reveals players after 2 s |

The invisibility rules apply to players, creatures, and the PvP Trainer when the corresponding action is used. The active Detect Hidden search reveals only other living hidden players.

!!! success "Status: Live 0.23.5"
    Invisibility is evaluated at the real impact of attacks and spells.
