# PvM Mastery

!!! warning "Planned for 0.10.0"
    This system is enabled only in the local environment for acceptance testing. It is not part of the official Live 0.9.6 server yet.

The **Hunter's Compendium** provides character-based PvM progression. Scrolls of Knowledge found through Slayer families reveal masteries; players distribute generic points among them and build a loadout with up to **five active masteries**.

## Progression and points

- The first point requires 1,000 XP; each following point requires 500 more XP than the previous one.
- Reaching the target leaves a point pending. Unlocking it costs 1,000 gold for the first, 2,000 for the second, increasing by 1,000 for every purchased point.
- Payment consumes gold from the backpack or bank.
- Once purchased, a point belongs to the character and can be redistributed among discovered masteries while out of combat.
- Each mastery reaches level 10; a character has a 45-point limit.

## XP and participation

A creature's base XP is `floor(MaxHits / 6)`. Participants with native looting rights who are alive, connected, on the same map, and within 18 tiles receive:

| Eligible participants | XP for each player |
| ---: | ---: |
| 1 | 100% |
| 2 | 80% |
| 3 | 70% |
| 4 | 60% |
| 5 or more | 50% |

## Scrolls of Knowledge

Each death creates at most one scroll. Every Slayer group, including Undead, uses the same table:

| Rarity | Chance |
| --- | ---: |
| Basic | 1% |
| Proc | 0.5% |
| Synergy | 0.25% |
| Area | 0.1% |

The bands are disjoint. If a rolled rarity has no operational mastery in that group, no scroll is created.

## MVP masteries

| Mastery | Scroll family | Summary |
| --- | --- | --- |
| Hit Life Leech | Undead | Restores health from effective PvM damage |
| Hit Mana Leech | Undead | Restores mana from effective PvM damage |
| Spell Effect Resistance | Undead | May negate compatible hostile magical effects |
| Melee Damage Increase | Humanoid | Increases direct melee damage |
| Melee Hit Chance Increase | Humanoid | Relatively increases melee hit chance |
| Focused Hunter | Humanoid | Builds a bonus through consecutive kills in one Slayer group |
| Archery Damage Increase | Reptilian | Increases direct Archery damage |
| Archery Hit Chance Increase | Reptilian | Relatively increases Archery hit chance |
| Spell Damage Increase | Abyssal | Increases player-owned magical PvM damage |
| Magic Damage Resistance | Abyssal | Reduces remaining magical PvM damage |
| Relentless Focus | Abyssal | Builds damage while persisting on one target |
| Parrying Block Chance Increase | Fey | Relatively increases normal Parrying blocks |
| Versatile Hunter | Fey | Strengthens the first hit against a creature type not seen recently |
| Physical Damage Resistance | Elemental | Reduces remaining physical PvM damage |
| Hit Lightning Chance | Elemental | May trigger Lightning from compatible damage |
| Hit Effect Area | Elemental | Divides an effect among nearby PvM creatures |
| Hit Paralyze Chance | Arachnid | May paralyze after a direct weapon hit |
| Paralyzed Damage Bonus | Arachnid | Increases the next compatible hit against a paralyzed creature |

## Gold and Loot Pack

- Centralized gold: `floor(MaxHits × 2.3)`, split into piles of at most 7,500.
- Every 10,000 MaxHits guarantees one Loot Pack roll; the remainder becomes the exact chance of one additional roll.
- Each roll creates one item: 20% classic equipment, 40% magic jewelry, or 40% a magic skill amulet.
- Both Harrower forms grant XP, gold, and rolls separately.

Threat and rewards use the same MaxHits snapshot, but the textual class grants no multiplier.

## Combat limits

Masteries work only against eligible PvM creatures. Players, controlled pets, summons, Arena participants, and characters with recent PvP aggression are excluded. Each mastery can enable a persistent log that reports only effects actually applied.
