---
description: Learn how Snooping, Stealing, retaliation, item returns, and the thief's gray status work on the official server.
---

# Thief: Snooping and Stealing

If you play as a thief, **Snooping** lets you inspect containers and **Stealing** lets you attempt to steal from other players. Each action has different consequences for the victim and your character.

## Snooping: inspecting containers

Snooping attempts have a **4-second** interval. If you try again too soon, you are told the remaining time and do not see the container's contents.

You can inspect and open starter-bound containers, including those holding other bound items. This does not enable using, moving, trading, or stealing those items.

When the victim detects the Snooping, they can retaliate directly against the snooper for **2 minutes** without becoming criminal or triggering guards. This right applies only between those two characters and does not persist after logout.

## Stealing: attempting to steal from a player

You can use Stealing against other players without joining an NPC guild. In PvP theft, the victim is told the thief's name. They can retaliate directly against the thief for **2 minutes after a failed attempt** or **20 minutes after a successful theft**. This right applies only to that pair, without criminal status or guard intervention.

If the thief dies within **20 minutes after a successful theft**, stolen stackable items return to their owner in the amount still remaining. Consumed items and containers do not return.

In [Nujelm Safe Haven](../mundo/nujelm.md), stealing between players is blocked by the region's protection.

The first time you use Stealing, a window explains the stealing rules; the
skill unlocks only after you accept. Stealing from or snooping a party or guild
member has no consequences: no steal count, no gray state, no aggression.

## Getting caught stealing

Each attempt against a player can expose the thief: at **100.0 Stealing**, roughly **1 in 3** attempts is noticed; at **120.0**, roughly **1 in 5**. Immovable items outside containers never cause this exposure.

Whoever is caught **turns criminal on the spot**, and everyone within **8 tiles** sees the attempt — unless they share the victim's guild or the victim is not innocent. Being caught or failing does not count toward the 5 thefts of gray status.

The victim always gets the attempt warning, even on a clean theft. With a
**+10** Stealing amulet, effective skill reaches **110.0** and the caught
chance drops to roughly **1 in 4**.

## How much can be stolen

Nothing over **10 stones** can be stolen. In stacks, the maximum amount per
attempt is skill divided by 10 and by the unit weight — with the skill check
deciding success:

- Gold coins: up to **1,500** at 100.0, up to **1,650** at 110.0.
- Reagents: up to **100** at 100.0, up to **110** at 110.0.
- 1-stone potions: up to **10** at 100.0, up to **11** at 110.0.

Near the 10-stone limit, success chance at 110.0 is around **2 in 3**.

## Training at home

Stealing items from your own **secured** chest at home causes no criminal
flag, calls no guards, and does not count toward gray status. Put the training
item in the chest and repeat stealing and returning it.

Skill gain follows item weight — use these bands as reference:

| Stealing | Ideal weight | Examples |
|---|---|---|
| 0.0–40.0 | 1 stone | Daggers, empty bottles |
| 40.0–60.0 | 2–3 stones | Books, shoes, clothes |
| 60.0–80.0 | 4–6 stones | Smith hammers, light armor |
| 80.0–100.0 | 7–10 stones | Shields, ingots, 8–10 stone piles |

## The thief's gray status

After **5 successful PvP thefts**, the character turns gray and can be attacked by any player without the attacker becoming criminal. Guards do not interfere; banks, vendors, and moongates keep working. Murderer status takes precedence.

The count decreases by **1 every 24 hours of play**. In 0.51.0, all counts were
cleared once. To check it in game, say `*i must consider my sins*`.

The [Thieving Cape](../craft/tailoring.md) can hide gray status from players who have not revealed the wearer. Crafting and wearing it require **100.0 base** Hiding, Stealth, Snooping, and Stealing. Forensic Evaluation reveals the wearer for **10 minutes**.

The cape carries **1 hour** of disguise, spent only while worn, and is
indistinguishable from a common cloak in name, art, weight, and hue. Attacking
a cloaked thief does not make the attacker criminal, even with the confirm
gump. Revealing is a **Forensics + Detect Hidden** versus **Hiding + Stealth**
contest: the winner sees the thief gray for 10 minutes, privately — to
everyone else, the thief still looks blue. The thief gets the red warning
`You have been revealed by [name]!`. Only real success against a player counts
toward gray: failures, monsters, NPCs, and the Arena do not, and at the 5th
point `You are now known as a thief!` appears.

For other combat rules, see [How PvP works](../combate/index.md). For concealment and movement, see [Hiding and Stealth](../personagem.md).

!!! success "Status: Live 0.45.1"
    Thief rules on the official server.
