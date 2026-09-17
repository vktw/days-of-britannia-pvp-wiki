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

These remain classic armor pieces; they are not part of Blacksmithy's thematic **DoB Weapons** lines.

## Kits, leather, and Ringmail in 0.43.0

Bankers sell the **Royal Armorer's Charter** for **10,000 account gold**. With
the charter, Blacksmithy can produce a **Platemail Armor Kit Deed** for 118
ingots and a **Chainmail Armor Kit Deed** for 100 ingots; both require **75.0
Inscription**. Each deed releases seven pieces while preserving the kit's
material and hue. An eligible failure consumes 10 ingots.

Each **Leather Armor** piece now has exactly the same `Armor Rating` as its
matching Chain, Ringmail, or Gorget piece in the same material. Mixing Leather
with metal no longer gives an advantage over the kit; the Blacksmithy curve and
the separate **Arms Lore** roll for Exceptional remain unchanged.

**Ringmail Chest** costs **20 ingots** and **Ringmail Legs** costs **18 ingots**.
A complete Ringmail kit, including Gorget and Coif, costs **82 ingots** and
matches the Chainmail kit's per-piece `Armor Rating`.

## Armor Rating in 0.40.0

Armor and shields display **Armor Rating: N**. For recipe-backed pieces, the
value considers ingot cost, material bonus, and protection tier. On direct hits
against players, the server aggregates Armor Rating from equipped pieces and
applies global absorption; the value is not a body-region percentage.

Quality changes durability, while material and tier define the protection used
by the Armor Rating calculation.

## Maximum durability

After a weapon, armor, clothing, jewel, talisman, or Spellbook is created, its
maximum durability cannot increase. Wear, death, or another reduction can
lower that ceiling; when it does, current durability is limited to the new
maximum as well.

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

!!! success "Status: 0.43.0"
    Direct-hit resolution uses global Armor Rating from equipped pieces.
