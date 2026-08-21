# Classic armor

## Live 0.13.0 metals

The crafting catalog includes **Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril, and Brittanium**. The metal defines 0 to 8 additional points of physical protection for armor and shields; Low, Normal, and Exceptional quality keep the same protection and change durability only.

Magical PvM equipment remains Iron.

## Metals and Chain pieces

Blacksmithy lets you choose **Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril, or Brittanium**. The selected metal keeps the recipe cost and contributes its material bonus to `Armor Rating` according to its tier. Low, Normal, and Exceptional quality change durability but not the protection calculated from the material.

The main **Chain** pieces use these costs and native Blacksmithy ranges:

| Piece | Cost | Blacksmithy |
|---|---:|---:|
| **Chain Coif** | 10 ingots | 14.5–64.5 |
| **Chain Legs** | 18 ingots | 36.7–86.7 |
| **Chain Chest** | 20 ingots | 39.1–89.1 |
| **Chain Hatsuburi** | 20 ingots | 30.0–80.0 |

These remain classic armor pieces; they are not part of Blacksmithy's thematic **DoB Weapons** lines.

## Armor Rating in Beta 0.34.0

Armor and shields display **Armor Rating: N**. For recipe-backed pieces, the
value considers ingot cost, material bonus, and protection tier. On direct hits
against players, the server aggregates Armor Rating from equipped pieces and
applies global absorption; the value is not a body-region percentage.

Quality changes durability, while material and tier define the protection used
by the Armor Rating calculation.

## Qualities

Defensive qualities follow this order:

| Quality | Protection |
| --- | --- |
| Regular | Base |
| Defense | Low |
| Guarding | Moderate |
| Hardening | High |
| Fortification | Very high |
| Invulnerability | Maximum |

The displayed `Armor Rating` shows the piece's practical protection. Modern
elemental resistances do not apply separately in the shard's PvP.

New or tier-mutated Invulnerability equipment uses hue `2483`; saved items are
not migrated.

## Coverage and slots

- Chest, Legs, Arms, Head, Hands, and Neck are independent equipment slots.
- The occupied piece still defines visual coverage; there is no public
  body-region roll or automatic extra damage for an uncovered region.
- Ordinary clothing and jewelry do not replace armor.
- Shields work through Parrying and occupy the second hand.
- Body plate prevents Archery; Plate Gorgets and shields are allowed.

See [Armor and Parrying](../combate/armor-parrying.md).

!!! success "Status: Beta 0.34.0"
    Direct-hit resolution uses global Armor Rating from equipped pieces.
