# Patch notes

This page summarizes changes players can notice. Current numbers and full instructions belong on the reference pages.

## 0.23.3 · Hiding/Stealth, gathering, and PvM

- Hiding and Stealth now share concealment: walking consumes a combined limit of up to 25 steps, exhausting the limit reveals the character, and running reveals immediately.
- Stealth is no longer blocked or penalized by armor when starting or renewing hidden movement.
- 5x5 area gathering now finalizes correctly for Mining, Lumberjacking, and Fishing, recognizes equipped or backpack Fishing Poles, and retries the current bank after a skillcheck failure while stock remains.
- Fishing Poles show remaining uses, start with 50 uses, break at zero, and can be equipped and used with one double-click.
- The First Trainer Fight achievement completes after a finished PvP Trainer match and grants 200 PvM Mastery XP once.
- Tinkers now sell Hatchet, Pickaxe, and Shovel; Carpenters now sell Fishing Pole as a basic tool.
- Ordinary spellcasting creatures show Words of Power and remain still while casting; the PvP Trainer remains mobile.
- Direct magical damage from eligible wild creatures against players in PvM is reduced by 25%, without changing PvP, poison, pets, summons, or player-owned attacks.
- Positive direct damage dealt by a player to an eligible wild creature in PvM ends Hiding, Stealth, and active invisibility; misses, zero damage, poison ticks, and PvP do not trigger this rule.

## 0.23.2 · Arena, economy, resistance, and tools

- Arena checks the required gold before preparing a fight, avoiding sessions that cannot start.
- The base Physical Resist multiplier for armor and shields is now `1.60`.
- New Honesty lost items are no longer generated on the ground; existing items remain preserved.
- The native Platinum system is disabled; legacy balances are preserved but cannot be created, spent, or transferred.
- Player stamina recovery now uses a 1-point-per-second baseline while preserving additional bonuses.
- Mastery descriptions now appear below the level controls, with the compact Compendium layout aligned.
- The Minoc Mine on Felucca and Trammel is now guarded within the defined bounds.
- Provisioners now sell Hatchet, Pickaxe, Shovel, and Fishing Pole as basic gathering tools.

## 0.23.1 · Arena loot modes and Alpha notice

- The first login shows a bilingual Alpha notice about frequent patches, possible issues, a one-week duration, account reset, and the official Beta Test on 14/08/2026; this is a historical communication from that version.
- The PvP Trainer charges 1,000 gold at fight start and uses a fixed Iron kit; tier selection is not part of this flow.
- Player duels choose System Loot or Personal Loot, charging 5,000 gold per participant at fight start; System Loot uses a fixed Iron kit and restores the original setup.
- With Personal Loot, only the winner may loot the corpse for 60 seconds; the loser is held for 15 seconds and remaining contents are lost.
- NuJelm allows Personal Loot only; player rankings are separated by mode and Trainer times remain in their own table.

## 0.23.0 · Arena NuJelm and Nujelm Safe Haven

- Arena NuJel'm now offers player duels in Felucca through `.arena`, with the same rules as Yew Arena.
- The official Safe Haven moves from Ocllo to Nujelm; death, Stuck, and recovery returns use Nujelm's central point (`3767,1296,0`).
- Ocllo and the canonical Felucca cemeteries no longer receive guard protection in the defined regions.
- Event gates with Felucca destinations can be managed by the staff and require a living, recovered character out of combat.
- New or tier-mutated Invulnerability and Vanquishing equipment uses hue `2483`; saved items are not migrated.

## 0.22.1 · Mounted movement, defensive spells, and bandages

- Mounted running now supports a larger movement burst before excess-speed protection applies.
- Overweight stamina loss is reduced by half while running, mounted movement, and minimum-loss rules remain unchanged.
- Centralized PvM reward gold uses a 1.9 factor instead of 2.3; XP, Loot Packs, and Newcomer bonus rules remain unchanged.
- Protection and Reactive Armor use the historical Sphere 0.51a visual effects and cast sounds; Reactive Armor keeps only the historical red effect on the attacker during the reflection.
- Successfully used clean bandages become Bloody Bandages with the same weight. When overloaded, they drop to the ground instead of increasing carried weight.
- Bloody Bandages can be washed at a water source: one water unit cleans the whole stack and sends the clean stack to the backpack.
- Players no longer receive an automatic robe on resurrection; existing items and robes remain preserved.
- Apostrophes and quotation marks in gumps now render correctly without visible HTML entities.
- Lumberjacking bonus items such as Bark Fragment, Fungi, and Switch are temporarily disabled; logs and boards remain available.
- Area Miner, Area Fisher, and Area Lumberjack grant 200 PvM Mastery XP each; Rare Phoenix Hunter grants 350 XP.
- Maintenance notices appear in Portuguese and English before the next automatic save; players are disconnected after the save to apply the patch.

## 0.22.0 · Days of Britannia Achievements

- The first login introduces the Achievements system and the `.achievements` command.
- The introductory path guides players through Undead, Trolls, and Lizardmen and rewards Mastery XP, gold, and Scrolls of Knowledge.
- The full catalogue includes Mining, Fishing, 5x5 Lumberjacking, and Rare Phoenix achievements.
- The Achievements panel uses taller cards, complete guidance, and visual separation between achievements.
- The base Physical Resist of armor and shields uses the 1.50 multiplier.
- Detect Hidden is a fixed 12-tile area search that reveals hidden players, including in PvP, after two seconds without affecting mobs or items.
- Harm has a 1-second cast time; in PvP it deals 5–7 damage per cast while PvM damage remains unchanged.
- The potion cooldown bar is off by default and can be enabled from the `.pvp` panel.
- All spells can be cast in towns; specific arena, travel, geometry, and target restrictions remain.
- Fire Field also damages its caster; the first tick occurs after 0.5 seconds and later ticks every 1.6 seconds.

## 0.21.1 · Safe Rare Phoenix spawning

- Rare Phoenix now avoids areas protected by guards.
- Nujelm remained eligible for the event in that version; the current guard rule is the later consolidation from patch 0.23.0.

## 0.21.0 · Magical AI and proportional Threat

- Spellbinders now receive the same Threat weight as other magical creatures.
- Necro creatures now use Magery and retain caster flee behavior when Necromancy is disabled.
- Brittanium now uses its updated visual color on new or resource-mutated equipment.
- Ordinary creature damage no longer drains stamina; explicit drains and Vigor Shield remain unchanged.
- Hostile wild creatures now show fizzle smoke and sound when their spell loses range, sight, or a valid target before completion.
- Hostile wild creatures now appear in red without changing combat or crime rules.
- Clean Up Britannia is disabled for the Sphere 51a ruleset; new points, appraisals, and system rewards are unavailable.
- Ultima Store is disabled for the Sphere 51a ruleset; new purchases, deliveries, and store use of Sovereigns are unavailable.
- Vice vs Virtue is disabled for the Sphere 51a ruleset; new enrollment, battles, silver, and rewards are unavailable.
- Automatic account creation now allows up to 10 accounts per IP.

## 0.20.0 · Cleaner character creation

- Character creation no longer gives legacy profession or skill weapons, tools, reagents, bandages, or books.
- New characters now start near the Britain bank.
- The DoB kit, Spellbook, Runebook, starting horse, starting gold, and basic cosmetics remain available.

## 0.19.0 · Thematic weapons

- Ordinary weapons remain Iron; Bloodrock and Blackrock lines are separated into DoB Weapons.
- Crimson Rite, Blood Vow, Vein Sever, Ritual Conduit, Sanguine Toll, and Crimson Verdict form the Bloodrock line.
- Dusk Reaver, Nightfang, Gloom Sever, Umbral Conduit, Dark Toll, and Midnight Verdict form the Blackrock line.
- The new weapons use 30 ingots and require 75–110 Blacksmithy; cannons are no longer made through Blacksmithy.

## 0.18.4 · Blackthorn invasion disabled

- The Blackthorn invasion and its rewards are disabled.
- Blackthorn Dungeon, quests, and independent content remain separate from this change.

## 0.18.3 · Proportional magical threat

- Threat from magically intelligent creatures now scales with 25% of health.
- Archers receive a proportional 10% adjustment, and wild special abilities contribute within defined bounds.

## 0.18.1 · Stable notices

- The maintenance notice remains available after restarts and automatic saves.

## 0.18.0 · Help and safe return

- `.help` provides short command descriptions and direct access to available actions.
- `.store` opens the Ultima Store directly.
- Stuck returns a character to Ocllo after two minutes when health, stamina, and mana are full and the character is out of combat, subject to confirmation and system conditions.
- The legacy Veteran Rewards program is disabled; previously received items remain usable.

## 0.17.2 · Felucca map update

- Nujelm and other Felucca locations receive new DoB landscape and decoration.

## 0.17.0 · First steps in Masteries

- The first learned PvM Mastery is automatically added to the build at level 1 when the combat log is enabled.
- Compendium controls and guidance become clearer.

## 0.16.0 · Special tools

- Light, Hardened, and Tempered tools now use Bronze, Shadow, and Silver.
- Artisan Gold improves Exceptional items; Reliable Bloodrock increases crafting safety; Refined Blackrock combines materials.
- Skill amulets can be effective up to 105, while starting skills remain capped at 100.
- `.skillcheck` shows the check value, chances, and result.

## 0.15.0 · Mastery of vital resources

- Mana Shield and Vigor Shield pay part of incoming PvM damage with mana and stamina.
- Arcane Exertion and Blood Magic pay part of spell mana costs with stamina and health.
- Hit Stamina Leech restores stamina from effective direct weapon damage against PvM creatures.
- The five masteries scale from 5% to 9.5% and do not affect PvP or the Arena.
- Deadly Poison uses the same damage formula in PvM and PvP while keeping different application rules in each context.

## 0.14.1 · Clearer ore piles

- Ore piles now use different appearances for 1, 2, 3, and 4 or more units.
- Item Identification preserves part of the result after a failed smelt attempt, including amulet bonuses.
- Guard boundaries, simultaneous connections, and vendor sale limits receive clearer rules.

## 0.14.0 · Area gathering

- Compatible tools can start sequential gathering across a 5x5 area.
- Pickaxes and hatchets can be equipped and targeted with a double-click.
- Exhausted spots are skipped, with four-second mining and lumber cycles.

## 0.13.1 · Consistent movement and casting

- Movement while not overweight no longer consumes stamina; overweight applies 20% fatigue, with a minimum of 1, while shove cost remains.
- Magery validates reagents before the target and consumes them at cast start.

## 0.13.0 · New metals of Britannia

- The metal catalog now includes Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril, and Brittanium.
- Metal defines additional physical protection for armor and shields; quality defines durability, not protection.
- The modern Enhance system no longer defines materials; magical PvM equipment remains Iron.

## 0.12.0 · Whispers of Britannia

- A rare Phoenix can appear every hour in a Britannia cemetery.
- Town Criers now negotiate whispers about rare events through a dedicated conversation.
- Rare Phoenixes provide Fire Feathers when carved, with a bonus based on Forensic Evaluation.

## 0.11.5 · Invisibility on impact

- Targeted spells fail when the target is invisible at impact.
- An invisible attacker is revealed only when its attack or spell validly hits another player.
- Detect Hidden resolves the search after two seconds, with no additional cooldown.

## 0.11.4 · More precise Paralyze decisions

- PvP Trainer training receives containment and finishing adjustments without exposing internal tactical decisions.

## 0.11.3 · More precise containment

- The PvP Trainer improves control consistency during training without exposing its internal logic.
- Wall of Stone correctly blocks diagonal passages during containment.
- When a fight ends, the Arena removes temporary objects created by combat.

## 0.11.1 · Stats and resources in sync

- Effective STR, DEX, and INT now determine maximum Hits, Stamina, and Mana respectively; Hits remain capped at 120.

## 0.11.0 · Daily Dungeon

- One Daily Dungeon receives a 25% PvM Mastery experience bonus until the next rotation.
- Customized Loot Packs appear twice as often for eligible creatures in the Daily Dungeon.
- `.dailydungeon` shows the selected dungeon and remaining time.

## 0.10.3 · More consistent attacks

- With equal Melee or Archery skills, the initial PvP hit chance becomes 90%.
- Archery requires a continuous 0.5-second stop before releasing a prepared shot.
- `.pvp` configures the colored potion cooldown bar and poison application messages.
- Total Mana Potions are not consumed when mana is already full.

## 0.10.2 · New mastery paths

- Resonant Cascade arrives for Bards and Summoned Vitality for summoners.
- Dragon Breath now increases a creature's Threat and proportional rewards.
- Loot Packs receive a more balanced distribution across equipment, jewelry, amulets, and utilities.
- Magical stat jewelry now has durability and can be repaired with Tinkering.
- Magic Arrow used on your own character synchronizes effect and damage with the end of the cast.

## 0.10.1 · Weapon selection

- The available weapon catalog is refined, and official kits now share Bow, War Mace, Kryss, Bardiche, Black Staff, War Hammer, and Axe.
- Kit Kryss, Bardiche, and Axe receive Deadly Poison; short two-handed Fencing or Swords weapons can also accept poison.
- Bow now uses Speed 3.75 at 100 DEX, and Harm now has a 1.75-second cast.
- Starting an accepted spell cancels a pending bandage.
- In Felucca, Britain and Moonglow guard protection is limited to their classic urban cores.
- The `.patchnotes` panel can now switch between Portuguese and English.

## 0.10.0 · PvM Mastery

- The Hunter's Compendium goes live with character progression, Scrolls of Knowledge, and builds of up to five masteries.
- Eligible creatures now grant PvM Mastery experience, gold, and Loot Pack opportunities scaled to the encounter.
- In PvM, equal skills produce a 50% base hit chance and up to 50% blocking with Parrying.
- Eligible Newcomers receive 25% additional PvM Mastery experience and creature gold.
- Loot Packs can deliver classic equipment, stat jewelry, skill amulets, and utilities.

## 0.9.12 · PvP balance

- Updates to hit chance, Magery, poison, fields, and Meditation.
- Dispel now removes only compatible classic effects.

## 0.9.11 · Recovery

- Ghosts can request resurrection from healers with a double-click during DoB recovery.
- Operational world-protection improvements with no change to the player routine.

## 0.9.10 · Moving ghosts

- Ghosts can walk while choosing how to return to Ocllo.

## 0.9.9 · Stability

- Better server resource use without changing game pace.

## 0.9.8 · Ocllo connected

- Ocllo joins Felucca's public moongate network and receives an Animal Trainer.

## 0.9.7 · Combat accuracy

- Melee and Archery hit chance adjustment.

## 0.9.6 · Weapons and armor

- Rebalanced weapon roles, armor, shields, and Macing.
- Black Staff joins the official kits.

## 0.9.5 · Threat Rating

- Creatures now display a textual threat classification.

## 0.9.4 · PvP preparation

- Updates to long weapons and the PvP Trainer.
- New characters receive the Starter PvP Iron kit.

## 0.9.3 · Long weapons and Poison

- More classic weapons can use poison; incompatible options stop circulating among players.

## 0.9.2 · Magical travel

- Recall and Gate Travel receive a uniform delay after choosing a valid destination.

## 0.9.1 · Equipment and PvP kit fixes

- Double-clicking an accessible Spellbook in the backpack opens it without moving weapons or shields.

## 0.9.0 · World foundation

- Ocllo becomes the Safe Haven; deaths outside the Arena receive recovery choices.
- Felucca becomes the only public facet, with Trammel reserved for arenas.
- Threat Rating, Newcomer protection, classic Magery rules, and the new equipment balance arrive.

## 0.8.0 · Combat and response

- Common actions become more responsive, with updates to Hiding, bandages, Magery, poison, and Arena.

## 0.7.0 · Equipment and strategy

- Regional armor, Parrying, Protection, and equipment qualities gain clearer roles.
- Arena receives tier selection and expanded kits.

## 0.6.0 · Combat updates

- Improvements to hit chance, Parrying, and official-match observation.

## 0.5.0 · Server stability

- Automatic process recovery and availability monitoring.

## 0.4.2 · World protection

- Encrypted off-site backups and recovery checks.

## 0.4.1 · World persistence

- Persistence fixes for accounts, characters, and the world.

## 0.4.0 · Combat refinements

- Evolution of Arena, regional armor, Parrying, healing, potions, Meditation, and poison.

## 0.3.0 · Arena and fields

- Arena system and updates to Paralyze, fields, and travel.

## 0.2.0 · Classic combat

- Consolidation of stats, skills, Magery, weapons, armor, and PvP combat.

## 0.1.0 · Foundation

- First public version of the Days of Britannia ruleset.
