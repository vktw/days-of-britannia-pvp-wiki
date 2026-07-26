# Patch notes

## 0.9.1 · PvP gear and kit fixes

### Improvement

- The kit delivered by `.pvpcamp` now includes a bag of magic jewelry with Magic Earrings (+5 INT), Magic Ring (+5 STR) and Magic Bracelet (+5 DEX), the same as the set used in the arena. Gems follow normal loot rules and are not Blessed.

### Correction

- Two clicks on a Spellbook accessible in the backpack now correctly opens the book without equipping it, moving weapons or hand shields, or changing the rule that prevents players from equipping Spellbooks.

## 0.9.0 · World Foundation

### News

- Ocllo, in Felucca, is now the official **Safe Haven**: conflict between players, stealing and harmful actions by pets or summons are blocked throughout the island.
- Kills outside the arena offer immediate return to Ocllo, recovery of remaining items on the body after 60 seconds, or waiting for help for up to five minutes.
- **Threat Rating** now displays a textual classification of creatures, keeping Paragons as a separate variant.
- The newcomer benefit lasts 168 hours for the first eligible character per account and IP.

### Improvements

- Felucca becomes the only public facet. Official arenas in Trammel remain a controlled exception.
- `.arena` remains the only official dueling and training system.
- Magery with target uses a uniform range of 12 tiles and allows you to replace a spell in preparation with another, with normal fizzle of the previous one.
- Magic Reflection has a charge and fully reflects the next harmful spell or field. In double reflection, both charges are consumed without damage.
- Reactive Armor lasts 90 seconds and returns 20% of final melee damage; Protection also lasts 90 seconds and maintains 5% to 10% absorption.
- Mana Drain and Mana Vampire do not affect players or the PvP Trainer, preserving functionality against creatures.
- Melee and ranged weapons received new speed and damage ladders; Competitive Archery maintains range 10.
- Spellbooks remain in the backpack; selected modern wands and artifacts become historic; Items incompatible with humans no longer circulate to players.
- The economy grants 10,000 gold only to the first eligible character per IP and limits sales to vendors to 20,000 gold per IP per day.
- Original quests are temporarily unavailable, preserving scripts and saved state.
- PvM now uses a central baseline without loot or direct rewards for eligible creatures in this first phase.

### Corrections

- Ocllo has been permanently removed from Vice vs Virtue battles.
- Questers without a quest list no longer cause an error during Threat classification.
- Magic Reflection is correctly removed on death or logout.
- Characters outside of Felucca without a valid arena session return to Ocllo.

For exact numbers, see the Magery, Melee and Archery, Armor and Parrying, Poison and Healing, and resource pages.

!!! info "Official history"
    This page preserves versions already published on the server.

## 0.8.0 · Combat and Response

### Improvements

- Common item and equipment actions now respond immediately. Delays for potions, bandages, skills, spells and attacks continue to apply normally.
- Healing bandages complete their effect in **3.5 seconds**; immediate poison removal remains unchanged.
- Hiding now has **3 seconds of preparation** and can be interrupted before hiding the character.
- Resurrection uses range 10, starts its success range at 60.0 Magery and can recover items when the ghost is next to the corpse itself.
- Weaken, Clumsy and Feeblemind apply -15 to the corresponding stat; Curse and Mass Curse apply -10 to STR, DEX and INT.
- Magery's maximum direct damage has been redistributed into a progression of **10/15/20/25/30/35/40**, from Magic Arrow to Flame Strike. Harm no longer loses damage over distance.
- Reapplying the same poison level silently renews its duration, and periodic warnings have been reduced.
- The PvP Trainer has been rebuilt to exert melee pressure, recover more judiciously, and reserve offensive spells for submissions.

### Corrections

- Magery failures on target revalidation now display the full fizzle effect after resource consumption.
- Every exit from the arena clears temporary combat states before restoring the character to their original location.

### Security and compatibility

- The server now protects connections against sustained overload without adding artificial delay to legitimate usage.
- Saves, characters, old escrows and combat-specific cooldowns remain compatible.

## 0.7.0 · Equipment and Strategy

### PvP Changes

- The `Physical Resist` displayed on each piece now directly represents the percentage of physical damage absorbed when that body region is hit.
- Example: a piece with 10% Physical Resist absorbs 4 points from a raw hit of 40.
- The base resistance of Regular armor and shields has been increased by **30%**. The result is rounded to the nearest integer.
- The magical bonus is added after the base resistance and is valid in full per piece: Defense +1, Guarding +3, Hardening +5, Fortification +7 and Invulnerability +9 percentage points.
- Thus, an Invulnerability version always displays and absorbs exactly 9 percentage points more than an equivalent Regular piece under the same conditions.
- When a melee or archery attack passes through Parrying and hits an unarmored region, it receives **15% additional physical damage**.
- Ordinary clothing and jewelry without Physical Resist do not count as armor and do not prevent this bonus.
- On a successful Parrying, the shield absorbs the percentage of Physical Resist displayed on it. No body region is drawn in this scam.
- Protection remains separate: its 5% to 10% is applied to the remaining damage after the armor or shield.
- All final damage remains limited to a minimum of 1 point.
- These percentage formulas are exclusive to PvP Sphere. PvM maintains the previous random absorption based on Armor Rating.
- Players' passive mana regeneration interval has been doubled, reducing passive recovery by approximately **50%**.
- Active Meditation has not been slowed down and continues to use its normal speed.
- Deadly Poison Potion can be used to poison weapons without activating or consuming the 15 second global cooldown of drinkable potions.

### PvP system

- `.arena` now allows you to choose the tier of armor and weapons separately before starting the fight.
- The available armor tiers are **Regular, Defense, Guarding, Hardening, Fortification and Invulnerability**.
- The available weapon tiers are **Regular, Ruin, Might, Force, Power and Vanquishing**.
- In duels between players, whoever opens the challenge defines the profile. The two participants receive exactly the same tiers, also presented in the global announcement and in the acceptance and confirmation gumps.
- Fights against the PvP Trainer follow the same armor and weapon profile chosen by the player.
- `.pvpcamp` also opens the equipment selector before delivering the kit.
- Arena, PvPCamp and PvP Trainer kits now include **15 Greater Heal Potions**, **15 Total Mana Potions** and **3 Deadly Poison Potions**.
- `.pvpcamp` and `.patchnotes` commands have been added. `.patchnotes` opens the latest patch without changing the character's first read control.
- `.pvptrainer` was kept only as a guideline for using `.arena`; the Trainer remains exclusive to the Moonglow Arena.
- New characters also start with **Hiding, Stealth, Detect Hidden and Poisoning at 100.0**.
- Existing characters receive these four skills at 100.0 once upon first login after the patch, without reducing or resetting other skills.
- Unified Arena logs now more accurately identify the source of damage and healing and record absorption components used in fights.

### PvP Trainer

- The PvP Trainer received general improvements in its combat decisions, positioning, resource management and response to the opponent's actions.

### Fixes and compatibility

- The chosen equipment profile is persisted in the Arena escrow. Escrows created by previous versions remain compatible and use Invulnerability/Vanquishing as a fallback.
- Saves, existing characters and PvM rules remain compatible.

## 0.6.0 · Combat Adjustments

**Improvements:** 65% hit chance in 100 vs. 100; Parrying with a maximum chance of 45%.

**News:** unified monitoring of official arena fights to guide adjustments.

## 0.5.0 · Server Stability

Automatic process recovery after failures and external availability monitoring.

## 0.4.2 · World Protection

Encrypted offsite backups and periodic recovery checks.

## 0.4.1 · Persistence of the World

Corrections to the persistence of accounts, characters, world and spawn generation.

## 0.4.0 · Combat Refinements

Paralyze Field window, buffs up to 120, magical jewels from the arena, regional armor absorption, Parrying with shield, healing under poison, immediate potions, Meditation without equipment restrictions, new poison and protection of mounts in the arena.

## 0.3.0 · Arena and fields

Arena system, Paralyze and Wall of Stone refinements, combat log expansion, and Trammel travel adjustments.

## 0.2.0 · Classic combat

Consolidation of physical and magical damage, caps, initial skills, classic weapons and armor, PvPCamp and main Sphere 51 rules.

## 0.1.0 · Foundation

First version of the Days of Britannia ruleset on TrueUO, including the Magery Sphere 51 core.
