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

## Eyes of Newt

NPCs with **Magery above 50.0** may carry 1 to `Magery/10` Eyes of Newt in death
loot and may also provide the resource when carved. For that carving, Forensics
uses the normal skill check and adds `ceil((Forensics - 60) / 2)`% with no cap;
the result is reported by a system message. The special contract delivers only
Eyes of Newt instead of the normal carving resource set.

## Magical jewelry

Magical earrings, bracelets, and rings can increase STR, DEX, or INT while equipped. Jewelry uses the classic appearance of its item type and has durability.

Physical hits can wear down one equipped stat jewel. These jewels can be repaired through normal **Tinkering**, subject to the usual weakening from repeated repairs.

## Arena jewelry and Mastery bonuses in Beta 0.34.0

In Tinkering's **DoB Jewelry** category, Beta 0.34.0 includes only three pieces with the fixed Arena jewelry bonuses:

- **Magic Earrings:** +5 INT.
- **Magic Ring:** +5 STR.
- **Magic Bracelet:** +5 DEX.

New magical jewelry from Loot Packs can receive a PvM Mastery bonus from **+1.00% to +5.00%**, in **0.25%** increments. Equipping the piece temporarily activates the matching Mastery, and the Compendium displays the bonus. Removing the jewelry removes only that temporary activation; it does not replace the normal five build slots.

## Skill amulets

Amulets can temporarily raise an available skill, including above 100 effective value, without changing its permanent base. Each amulet displays its remaining uses.

An action related to the equipped skill consumes one use. The final use still benefits the action and then breaks the amulet. Inspecting properties, equipping, or storing it does not consume charges.

## Newcomer

Characters with the eligible Young benefit receive **100% additional PvM Mastery
experience** and **25% additional creature gold**. Normal participation, range,
and looting-right rules still apply.

See also [PvM Mastery](../sistemas/pvm-mastery.md) and [Threat Rating](../mundo/threat-rating.md).

!!! success "Status: Beta 0.34.0"
    Eligible creatures reward the group according to the scale of the encounter.
