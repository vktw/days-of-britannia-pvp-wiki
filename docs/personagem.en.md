# Character

## Initial base

Every new human character starts with **100 STR, 100 DEX and 100 INT**, a complete Spellbook, a Runebook, a shrunken horse, 15 normal Heal Potions, and an ordinary, lootable **Starter PvP Iron kit**. The kit contains no jewelry or potion bag. The books, horse, and initial **10,000 gold** remain bound to the character; the gold is only awarded to the first eligible character per IP.

The Starter kit and Heal Potions are ordinary items and may be lost as loot.
Starter gold can pay for NPC purchases, does not become account gold, and cannot
fund Player Vendors.

New characters start with the following skills at **100.0**:

| Combat | Support |
|---|---|
| Swords, Tactics, Archery, Healing | Magery, Meditation |
| Focus | Resisting Spells |

Profession-specific skills are assigned separately. Existing characters keep
their saved values; the compatible migration never lowers an existing skill.

There is no effective global skill cap. Each player base skill is individually
capped at **100.0**; temporary bonuses such as skill amulets can raise effective
value above that limit according to the skill's rules.

## Skill progression

The 49 active skills use calibrated training curves. Between **30.0 and 100.0**,
projected progression now targets **4 or 6 active hours**, depending on the
skill. Protected gain still operates only while a skill is behind its curve and
keeps the **8- or 10-hour** limits for the fast and normal profiles. No
protected progress is banked below 30.0; saved progress is preserved.

Anatomy, Evaluating Intelligence, Fencing, Wrestling, Parrying, and Mace
Fighting gain **0.2** when a normal gain is approved in eligible PvM combat,
without changing the skill-check chance. Forensic Evaluation can be trained
repeatedly on any corpse while it exists, from 0.0 to 100.0.

Controlled pets and animals already owned by the same tamer do not grant Animal
Taming gains, including through Combat Training. Herding enters a four-second
cooldown as soon as the Shepherd's Crook is used, even with a cancelled or
invalid target.

In protected **Poisoning** training, each paid poison application follows the
progress, including when the application fails or the poison is unsuitable for
the target.

Characters created before version 0.7.0 receive Hiding, Stealth, Detect Hidden and Poisoning at 100.0 once upon first login after the update.

## Tracking

Tracking uses **effective skill** for search range: it reaches **43 tiles at
100.0** and **45 tiles at 105.0**. Filters and result limits remain unchanged.

Tracking activations observe a **four-second** interval. Entering War Mode
interrupts active Tracking and reports that the quarry was lost.

## Moving through creatures

Animals, monsters, pets, and NPC vendors with at least **10 stamina** can be
pushed. The movement costs the creature **10 stamina**. This exception does not
change player-to-player collision.

## Stats and buffs

- Permanent stats: maximum 100 each and 300 in total.
- Temporary buffs, potions and items can raise each stat up to 120.
- Bless: +10 in STR, DEX and INT.
- Strength, Agility and Cunning: +15 in the corresponding stat.
- Agility Potion: +10 DEX; Greater Agility Potion: +15 DEX.
- Strength Potion: +10 STR; Greater Strength Potion: +15 STR.
- There is no equivalent Cunning Potion to increase INT in the current set.
- Arena jewels grant +5 STR, DEX or INT depending on the piece.

STR influences health and physical damage. DEX influences stamina and weapon speed. INT influences mana and participates in magical formulas.

## Race

Human is the only permanent race available to players. Temporary spell transformations remain separate effects.

## Hiding and Stealth

When using Hiding or Stealth, the character remains visible for 3 seconds of
preparation. You may move during this period but must be stationary at the end.
Damage, attack, magic, speech, potion, bandage, revealing actions, death,
logout, or map change interrupt the attempt. Reactivating Hiding or Stealth
while hidden reveals the character and starts a new preparation.

Both skills can start or renew concealment and share hidden movement. The limit
is calculated as `floor((Hiding + Stealth) / 8)`, with a minimum of 1 and a
maximum of 25 steps. Walking, including while mounted, consumes the limit;
exhausting it reveals the character, and running, including while mounted,
reveals immediately. Armor does not block or reduce Stealth effectiveness.

!!! success "Status: 0.42.0"
    Stats, skills, caps and race correspond to the official server.
