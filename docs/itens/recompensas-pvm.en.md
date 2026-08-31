# PvM rewards

In the shard's custom PvM, defeating an eligible creature may grant nearby participants with looting rights PvM Mastery experience. Gold, Loot Pack opportunities, and other rewards follow the encounter's resilience; the Threat class helps compare risk but does not guarantee a specific item.

Centralized PvM gold now uses a **1.9** factor instead of 2.3. This change does not alter XP, Loot Pack, or Newcomer bonus rules.

## Loot Packs

A custom Loot Pack delivers one item from one of these categories:

- classic equipment available to players;
- magical stat jewelry;
- magical skill amulets;
- utilities such as a Bag of Sending or Powder of Translocation.

More resilient creatures offer more Loot Pack opportunities. Selection remains random, and not every death produces a pack or Scroll of Knowledge.

Animals, currently or previously tamed creatures, and summons grant no gold,
XP, or system-generated death loot.

## Tomes of Expertise

Eligible PvM creatures, except animals, have a **7.5% chance** to drop a Tome
of Expertise. It grants permanent progress in one of the 49 skills; high gains
are rare, and the Craft and Harvesting families grant at most 1.0. See
[Tomes of Expertise](../sistemas/tomes-expertise.md) for usage and limits.

## Eyes of Newt

NPCs with **Magery above 50.0** may carry 1 to `Magery/10` Eyes of Newt in death
loot and may also provide the resource when carved. For that carving, Forensics
uses the normal skill check and adds `ceil((Forensics - 60) / 2)`% with no cap;
the result is reported by a system message. The special contract delivers only
Eyes of Newt instead of the normal carving resource set.

## Magical jewelry

Magical earrings, bracelets, and rings can increase STR, DEX, or INT while equipped. Jewelry uses the classic appearance of its item type and has durability.

Physical hits can wear down one equipped stat jewel. These jewels can be repaired through normal **Tinkering**, subject to the usual weakening from repeated repairs.

## Arena jewelry and Mastery bonuses in 0.40.0

In Tinkering's **DoB Jewelry** category, 0.40.0 includes only three pieces with the fixed Arena jewelry bonuses:

- **Magic Earrings:** +5 INT.
- **Magic Ring:** +5 STR.
- **Magic Bracelet:** +5 DEX.

New magical jewelry from Loot Packs can receive a PvM Mastery bonus from **+1.00% to +7.50%**, in **0.25%** increments. Equipping the piece temporarily activates the matching Mastery, and the Compendium displays the bonus. Removing the jewelry removes only that temporary activation; it does not replace the normal five build slots.

## Skill amulets

Amulets can temporarily raise an available skill, including above 100 effective value, without changing its permanent base. Each amulet displays its remaining uses.

An action related to the equipped skill consumes one use. The final use still benefits the action and then breaks the amulet. Inspecting properties, equipping, or storing it does not consume charges.

## Newcomer

Characters with the eligible Young benefit receive **100% additional PvM Mastery
experience** and **25% additional creature gold**. Normal participation, range,
and looting-right rules still apply.

See also [PvM Mastery](../sistemas/pvm-mastery.md) and [Threat Rating](../mundo/threat-rating.md).

!!! success "Status: 0.40.0"
    Eligible creatures reward the group according to the scale of the encounter.
