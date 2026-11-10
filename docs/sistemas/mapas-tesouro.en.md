# Treasure Maps

Every eligible creature may drop a **Felucca treasure map** on death, with
Threat-based chance; the Daily Dungeon and the Fortune Draught raise the
chance. The Slayer Group hint on wild creature tooltips is the same group used
by Masteries, contracts, achievements, and scrolls.

Chests lie on Felucca land, away from towns, dungeons, and guarded areas, with
the tier set by the creature's strength: **Stash**, **Supply**, **Cache**,
**Hoard**, and **Trove**. In 2.3.0, opening a map you can read also shows the
treasure's exact position (x, y); only whoever can read the map sees it.

## What the chest holds

Gold and a few chosen items that improve with the tier: upgraded weapons and
armor, Mastery jewelry up to **+10%**, skill amulets with double uses and, from
**Cache** up, a treasure **Scroll of Knowledge** (**+10%** for **7 days** of
play, known Masteries only) and a treasure **Tome of Expertise** (**+10**
skill, craft and gathering included). Below Trove, a **10%** chance of a
next-tier Felucca map. **Sunken Gold Dye** (single use) only in **Hoard (2%)**
and **Trove (6%)**. In 1.3.0, Trove weapons and armor always come at Force or
better: **85%** Force, **10%** Power, and **5%** Vanquishing (Hardening,
Fortification, and Invulnerability armor).

**Trove** needs **101** Cartography to decode or read, and the Trove chest
needs **101** Lockpicking: above 100, only with a Magic Amulet bonus or the
treasure Tome.

## DoB tests on the chest

With the DoB client, the map owner and the party choose between the common
test and the **DoB test** on lockpick or Remove Trap; other clients only get
the common one. The choice holds per step, with no switching; on a DoB lock,
common lockpick and the Unlock spell do not work. Closing the Fuse window does
not pause study; to return to it, open the chest. Closing or walking away with
the fuse lit explodes the trap.

**Lock** (Lockpicking): each stage has a hidden sweet spot; hold to turn, it
vibrates near the spot, and forcing off the spot wears the pick until it
breaks (**1** lockpick) without breaking chest items. Higher tiers have more
stages and smaller spots, with a false spot from Hoard up. No minimum skill,
even on Trove; above 100 skill helps (bigger spot, longer-lasting pick,
faster turn).

**Fuse** (Remove Trap): study the mechanism in time and turn the pieces to the
vent; a burnt piece no longer turns. The spark explodes on a closed piece, on
running back, on leaving with no vent, or on entering the false one (trap
damage + Ancient Guardian, as in the common test). More skill slows the spark
and lengthens study; at **90** the false vent shows marked; at **80**,
**100**, and **110** the fuse pinches itself once each before exploding. In
1.3.0, with **100** Remove Trap the trap disarms at once after the chest's
wait (up to **9 minutes** on a Trove), as in the common test; above **100**
(amulets and power scrolls count), the explosion never takes more than **99**
life.

**Clean pick** (opening without breaking a pick) keeps the Grubber away and
adds **1** item; an earlier common failure blocks it. A Fuse disarmed without
explosion on the same chest makes it **perfect** and adds **1** more item.
Perfect chest achievements (**10**, **50**, and **100**) grant Mastery XP; at
50, the **Master Locksmith** title.

## Fishing maps: Driftseeker Pole and Fortune Tide

The **Driftseeker Pole** (Carpentry **85–110**, **100** boards of any wood,
named per wood) fishes **Map in a Bottle** with Fishing **100** at **0.05%**
per cast, with no limit. In 1.3.0 the chance doubled to **0.1%**, and the rod
only keeps the Map in a Bottle (the rest goes back to the water with a
message; casting still trains Fishing, and the ordinary pole is unchanged). Wood and Fishing above 100 push the tier: common wood
nothing; Oak and Ash a little; Yew more; Heartwood, Bloodwood, and Frostwood
the most, same as Fishing **110**; best wood with Fishing **110** never yields
Stash or Supply. On opening the bottle, the opener's Item Identification gives
**1%** per point above 100 (**10%** at **110**) for one tier up, except Trove.

The **Fortune Tide** runs every day for **1 hour** at a drawn unguarded port
(Jhelom, Nujel'm, Magincia, Ocllo, Buccaneer's Den, Cove, or Serpent's Hold):
fishing in town has a **2%** Map in a Bottle chance per cast, up to **4**
bottles a day, per account and per IP (since 1.3.0; previously **2**), and
fish never run out. `.fortunetide` shows
the port and time, and tells whether the Tide is active where you are.

## Chests, achievements, and Metal Chest

- **Treasure Hunter** achievements grant XP for the first chest of each tier and for **10**, **50**, and **100** opened chests; at 50, **the Treasure Hunter** title above the name. Trove surfacing: server and Discord announce, with no location or who.
- The Tinkering **Metal Chest** trains Lockpicking to **100**: made by a **100** tinker, its lock needs **76**; old chests unchanged.
- Treasure maps truly reset after **30 days** undug (the chest moves); guardians spawn around the chest, not on top; an item stolen by a Grubber returns on its corpse. The map owner's party can also disarm the trap. In 1.3.0, each chest calls at most **1 Ancient Guardian**, which leaves loot, and its death disarms the trap; lifting an item from the chest no longer calls a new monster.

## Treasure Map Book in 2.4.0

The **Treasure Map Book**, sold by the Mapmaker for **250,000** Gold, is a
blessed **1**-stone book for up to **50** decoded maps. Drop a decoded map onto
the book; double-click it to see each map's level, facet and position, and take
any of them out to your backpack.

The book has a cursor of its own: aim it at a map or at one of your containers
(the backpack too) and every map you decoded goes into it, up to **50**. Only
what you carry or keep in your bank counts; what is on the ground, in a house
or on another character is refused.

The window is an open book, like the Slayer's Codex: **6** maps per page, with
level, place, days left and a take button, arrows to turn the page, and a tier
filter (all plus each tier, from Stash to Trove, with the map count).

A map that completes **30** days goes to your bank, with a notice at your first
login if you were offline; beside each map, in how many days it leaves, in red
in the last **3**.

The book is brown leather, can be turned, and takes a book binding, like the
Runebook, the Hunter's Compendium, the Slayer's Codex and the Magnum Opus.

## Keep exploring

See [PvM Mastery](pvm-mastery.md) for bonuses, [Cartography](../craft/cartography.md) for maps, [Commands](../comandos.md) for `.fortunetide`, and [PvM rewards](../itens/recompensas-pvm.md) for loot.

!!! success "Status: 1.0.0"
    Felucca treasure maps, with DoB tests since 1.1.0.
