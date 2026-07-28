# Threat Rating

!!! success "Status: Live 0.9.8"
    Classification uses formula 3 based on a MaxHits snapshot. The number remains internal; players see only the class, color, and variant.

**Threat Rating** summarizes each creature's endurance as a colored textual class. It lets players compare enemies without exposing an attribute spreadsheet in game.

[See the creature inventory](threat-inventory.md){ .md-button }

Classification is calculated when a creature spawns and remains frozen on that instance. Saves preserve the snapshot; a formula-version change recalculates older creatures during world loading. Multi-form creatures such as the Harrower refresh their snapshot when their MaxHits change.

## Classes

| Class | Color | Practical meaning |
| --- | --- | --- |
| Trivial | Gray | Very weak or introductory creatures |
| Common | White | Common threat to prepared adventurers |
| Dangerous | Green | Requires attention and suitable equipment |
| Deadly | Yellow | Dangerous combat with little room for error |
| Legendary | Orange | Elite enemies and major bosses |
| Mythic | Red | Exceptional threat |
| Cataclysmic | Magenta | Extremely high-risk encounter |
| World Threat | Blue | Threat that may require a collective response |
| Apocalyptic | Purple | Open band for the shard's greatest challenges |

**Apocalyptic** is the highest class. The internal index has no artificial cap.

## What influences the rating

Formula 3 uses only a snapshot of the creature's **effective MaxHits**, with a minimum of one. Damage, skills, Armor Rating, artificial intelligence, poison, self-healing, and other abilities receive no separate weights.

High hits represent a creature that remains dangerous for longer and has more opportunities to apply pressure, exploit mistakes, and land damage sequences. The index does not change during ordinary combat.

## Validation anchors

Anchors verify that the common formula produces the intended scale. They receive no fixed values or bonuses by name or type, and they are never forced into a class.

| Reference | Expected class | Validation role |
| --- | --- | --- |
| Zombie | Trivial | Start of the scale |
| Skeleton | Trivial | Introductory creature |
| Harpy | Trivial | Upper introductory reference |
| Troll | Trivial | Top introductory reference |
| Drake | Common | First material combat step |
| Dragon | Dangerous | Classic dangerous creature |
| Greater Dragon | Deadly | Top classic creature |
| Neira | Legendary | Champion reference |
| Harrower | Mythic | Major boss reference |

If an anchor falls outside its expected class, validation fails and the general calibration must be reviewed.

## Paragons

**Paragon is not a class above Apocalyptic.** It is shown as a separate variant. The formula uses the Paragon's effective MaxHits when the snapshot is assigned; no separate 10% score bonus is applied.

## Rewards

Threat Rating grants no XP, gold, or loot multiplier of its own. The planned 0.10.0 PvM system uses the same MaxHits snapshot as an independent input without changing the textual class.

## Classification limits

Threat is a consistent endurance comparison, not a guarantee of identical difficulty. Terrain, enemy count, party composition, resistances, abilities, and strategy can still make two encounters in the same class feel very different.

Controlled creatures, summons, vendors, and the PvP Trainer are not eligible for PvM Threat Rating.
