# Arena

Use `.arena` to open the system. You can challenge another player or, in the
compatible arena, train against the **PvP Trainer**.

## Available arenas

| Arena | Player vs player | PvP Trainer |
|---|:---:|:---:|
| Moonglow | Yes | Yes |
| Yew Cemetery | Yes | No |
| Arena NuJel'm | Yes | No |

Arena NuJel'm is in Felucca. It accepts player duels only in **Personal Loot**
mode. The PvP Trainer remains available exclusively in Moonglow Arena.

## Duel modes

Player duels in the compatible arenas offer two modes:

- **System Loot:** each participant receives the Arena's fixed Iron kit and the
  original setup is restored afterward. There is no public armor or weapon tier
  selection.
- **Personal Loot:** the body, backpack, and mount follow the normal death flow.
  Only the winner may loot the defeated body for 60 seconds; the loser is held
  for 15 seconds and the remaining contents are lost when the window ends.

NuJelm offers Personal Loot only. The selected mode also determines the ranking:
System Loot and Personal Loot use separate tables.

## Fees and fight flow

1. Open `.arena`, choose a player duel or PvP Trainer training and, for player
   duels, choose the available loot mode.
2. The Arena checks the required gold before preparing the session. The charge
   happens at fight start: 5,000 gold per participant in player duels and 1,000
   gold for Trainer training.
3. Public challenges remain available for acceptance for one minute; characters
   on the same account cannot face each other.
4. When a candidate accepts, their spot is reserved for 15 seconds while the
   challenger confirms or rejects the opponent.
5. There are 60 seconds of preparation without movement, attacks, or potions.
   The fight lasts a maximum of 10 minutes.
6. After the result, there are 15 seconds before the return. The Arena closes
   pending casts and actions and clears temporary combat states.

In System Loot mode, the Arena restores the original setup and the participant's
belongings. In Personal Loot mode, return follows the body and mount rules above.

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

## PvP Trainer

The PvP Trainer is a training option available through Moonglow Arena. Entry
costs 1,000 gold and provides the fixed Iron kit; tier selection is not part of
this flow. This page documents only observable entry, fee, and result rules, not
the NPC's internal tactical decisions.

!!! success "Status: Live 0.26.3"
    These are the rules available on the official server.
