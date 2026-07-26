# Threat Rating

!!! info "Next scheduled patch"
    Formula 2 is under evaluation on the local server and is not yet active on the official shard. This page publishes the planned catalog in advance for board review.

The **Threat Rating** summarizes each creature's threat into a textual and colored class. It helps you quickly compare enemies without turning the game into a stat sheet.

[See the complete inventory of 618 creatures](threat-inventory.md){ .md-button }

The rating is calculated when the creature appears and becomes frozen in it. Restarts and saves preserve rank; When the formula changes, ancient creatures are recalculated during world loading.

## Classes

| Class | Color | Practical reading |
| --- | --- | --- |
| Trivial | Gray | Very weak or introductory creatures |
| Common | White | Common threat to prepared adventurers |
| Dangerous | Green | Requires attention and appropriate equipment |
| Deadly | Yellow | Dangerous combat with little margin for error |
| Legendary | Orange | Elite enemies and big bosses |
| Mythic | Red | Exceptional threat |
| Cataclysmic | Magenta | High-risk meeting |
| World Threat | Blue | Threat capable of demanding collective response |
| Apocalyptic | Purple | Open track for the shard's biggest challenges |

The upper classes remain open to the future growth of the world. **Apocalyptic** is the highest class; There is no artificial limit to the internal score.

## What influences

The calculation jointly considers:

- maximum life and Armor Rating;
- physical damage, attack skill and hit chance;
- Magery, Evaluating Intelligence and mana reserve;
- artificial intelligence of Mage or NecroMage;
- poison, immunities, Auto Dispel and teleports;
- special abilities, Dragon Breath and explicit self-healing ability;
- difficulty of the encounter when a creature represents or is part of a larger fight.

The curve is continuous: improving a creature's attributes or mechanics never reduces its threat just by crossing a rating band.

## Reference catalog

Nine creatures have fixed profiles in the server catalog and serve as references to keep the scale coherent. They are part of the catalog even when they are not spawned in the world. Other creatures use the general formula, unless they receive a revised profile in the future.

| Reference | Threat | XP | Calibrated class | Paper on the scale |
| --- | ---: | ---: | --- | --- |
| Zombie | 100 | 10 | Trivial | Start of scale |
| Skeleton | 120 | 12 | Trivial | Introductory Enemy |
| Harpy | 250 | 25 | Trivial | Top step of the starting lane |
| Troll | 400 | 40 | Trivial | Top of introductory anchors |
| Drake | 900 | 90 | Common | First combat-relevant jump |
| Dragon | 2,300 | 230 | Dangerous | Classic Dangerous Creature Reference |
| Shadow Wyrm | 5,000 | 500 | Deadly | High Risk Referral |
| GreaterDragon | 5,800 | 580 | Deadly | Top of classic creatures used in calibration |
| Harrower | 12,950–15,650 | 1295–1565 | Legendary | Variable Big Boss Encounter |

The **Harrower** range represents the calculated variance for the encounter. In all cases, XP corresponds to `Threat / 10`.

## Practical examples

- A **Zombie** and a **Skeleton** appear as `Threat: Trivial`.
- A **Drake** appears as `Threat: Common`.
- A **Dragon** appears as `Threat: Dangerous`.
- A **Shadow Wyrm** and a **Greater Dragon** appear as `Threat: Deadly`.
- The **Harrower** appears as `Threat: Legendary`.
- If an eligible creature becomes Paragon, its property also shows `Variant: Paragon`; the class may increase if the bonus crosses the next band.

The exact score of the creatures calculated by the general formula, the Threat Level and the Encounter Score remain internal. The wiki publishes the fixed reference values ​​to make the scale understandable to the player.

## Paragons

**Paragon is not a class above Apocalyptic.** It appears as a separate variant next to the creature's Threat Rating.

When becoming a Paragon, the creature receives a 10% increase in its threat score and can change classes if it exceeds the next threshold. The property continues to show the `Paragon` class and variant separately.

## Rewards

In the next patch, each creature will grant XP equal to its Threat divided by 10:

`XP = Threat / 10`

For example, a Zombie with Threat 100 grants 10 XP, while a Dragon with Threat 2,300 grants 230 XP.

Threat Rating does not increase loot or gold by itself. These rewards continue to follow the rules of the creature and the server economy.

## Classification limits

The rating is a consistent comparison, not a promise of identical difficulty for every character. Terrain, number of enemies, group composition, resistances and strategy can still make two encounters of the same class very different.

Controlled creatures, summons, vendors and the PvP Trainer do not receive PvM Threat Rating.
