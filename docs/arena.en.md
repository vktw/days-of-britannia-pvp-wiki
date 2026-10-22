# Arena

Use `.arena` to open the system. You can challenge another player or, in the
compatible arena, train against the **PvP Trainer**.

## Available arenas

| Arena | Player vs player | PvP Trainer |
|---|:---:|:---:|
| Moonglow | Yes | Yes |
| Yew Cemetery | Yes | Yes |
| Arena NuJel'm | Yes | Yes |

Arena NuJel'm is in Felucca. All three arenas accept duels with system loot or
personal loot. In 0.53.0, the PvP Trainer started being offered in every arena.

The full **Yew Cemetery** area is recognized as part of Yew Arena. Participants
inside the official area are not treated as being outside the fight boundary.

During a fight, the Arena uses the same rules as open PvP for hit chance,
damage, poison, healing, bandages, cast delay, and mana. Arena-specific
restrictions belong to preparation, the area, session timing, and loot; see the
[PvP guide](combate/index.md) to understand how those rules combine in combat.

## Duel modes

Player duels in the compatible arenas offer two modes:

- **System Loot:** each participant receives the Arena's fixed Iron kit and the
  original setup is restored afterward. There is no public armor or weapon tier
  selection. In 1.0.0, the kit started including the Bone Harvester,
  Broadsword, Viking Sword, Executioner's Axe, Scythe, and Double Bladed Staff,
  in Iron.
- **Personal Loot:** the body, backpack, and mount follow the normal death flow.
  Only the winner may loot the defeated body for 60 seconds; the loser is held
  for 15 seconds and the remaining contents are lost when the window ends.

Both modes have separate ranking tables. The winner of each player duel is
announced to the whole server.

## Fees and fight flow

In 0.52.0, the Arena became free: player duels and PvP Trainer fights no longer
charge an entry fee.

1. Open `.arena`, choose a player duel or PvP Trainer training and, for player
   duels, choose the available loot mode.
   Players in combat with other players do not enter the arena, open, or accept
   challenges until **2 minutes** after the last attack.
2. Public challenges remain available for acceptance for 120 seconds; when 15
   seconds remain, the reminder is recalculated. Characters on the same account
   cannot face each other.
3. When a candidate accepts, their spot is reserved for 15 seconds while the
   challenger confirms or rejects the opponent.
4. There are 90 seconds of preparation without movement, attacks, or potions.
   The fight lasts a maximum of 10 minutes.
5. After the result, there are 15 seconds before the return. The Arena closes
   pending casts and actions and clears temporary combat states.

An item held on the cursor when the match starts is stored with the belongings
and returned at the end. In System Loot mode, the Arena restores the original
setup and the participant's belongings. In Personal Loot mode, return follows
the body and mount rules above.

## Disconnection

- During preparation, disconnection cancels the fight without a result.
- During combat, the disconnected player loses by forfeiting.
- Session and belongings recovery is checked at the next login when needed.

## Ranking

- Victory: 3 points.
- Draw: 1 point.
- The first scoring fight against a given IP counts in the season.
- Fights between the same IP do not score points.
- The season lasts 15 days.
- System Loot and Personal Loot use separate rankings.
- PvP Trainer ranking uses the shortest victory time and remains in its own table.
- At season end, unique PvP Trainer, System Loot, and Personal Loot champions
  receive a **Days of Britannia Arena Trophy** in their bank. Remaining ties
  produce no champion.

## PvP Trainer

The PvP Trainer is a training option available in all three arenas. Entry is
free and provides the fixed Iron kit; tier selection is not part of this flow.
In 0.53.0, it started moving at player speed (mounted keeps up with mounted),
chasing while casting (finishers included), retreating while healing or buffing,
and colliding like a player (passing through needs full stamina, costs 10).
This page documents only observable entry, fee, and result rules, not the NPC's
internal tactical decisions.

!!! success "Status: 0.53.0"
    These are the rules available on the official server.
