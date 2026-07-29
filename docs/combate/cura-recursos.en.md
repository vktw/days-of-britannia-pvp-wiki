# Healing and resources

!!! success "Status: Live 0.9.12"
Tracks, delays and recovery correspond to the official server.

## Healing Tracks

Values ​​below consider relevant skills at 100.0:

| Resource | Healing | Reach |
|---|---:|---:|
| Heal | 9–12 | 10 tiles |
| Greater Heal | 30–40 | 10 tiles |
| Bandage | 30–40 | 2 tiles |
| Greater Heal Potion | 40 fixed | Own use |

Heal and Greater Heal heal the caster or another character for the same range. Poison does not block Heal, Greater Heal or Greater Heal Potion.

Bandage cures poison immediately without restoring health. When there is no poison, health healing occurs after 3.5 seconds. Using a bandage requires free hands and automatically unequips items from the hands; a paralyzed character can only use it if his hands are already empty.

## Potions

All potions share a **15-second** global cooldown and do not require free hands. The effects of the drinkable potions below are immediate.

- Greater Heal: 40 hits.
- Total Mana: 40 mana.
- Total Refresh: recovers stamina depending on the type.
- Invisibility: Applies invisibility immediately.

Every potion drunk reproduces the classic sound of consumption.

### Explosion Potions

Explosion Potions are throwable and therefore do not take effect immediately. They open a targeting cursor, use a countdown of approximately 3.6 seconds, and explode in a two-tile area. Base damage varies by tier:

| Tier | Base damage |
|---|---:|
| Lesser Explosion | 5–10 |
| Explosion | 10–20 |
| Greater Explosion | 20–40 |

When more than two targets enter the blast, the damage is divided by the number of other targets hit. The values ​​still go through the scale applicable to the potion before distribution.

## Mana

Focus and Meditation work regardless of equipment. The server recovers one mana point at each interval calculated by:

```text
focusBonus = Focus / 200
medBonus = 0.0075 × Meditation + 0.0025 × INT
itemBase = (((Meditation / 2 + Focus / 4) / 90) × 0.65) + 2.35
itemBonus = (itemBase × sqrt(Mana Regen) − (itemBase − 1)) / 10
interval = 1 / (0.2 + focusBonus + medBonus + itemBonus)
```

`Mana Regen` represents the applicable equipment attribute; disabled modern attributes do not grant ruleset advantage. During active Meditation, `medBonus` is not doubled.

### Effective recovery

The examples below consider Focus 100.0, Meditation 100.0 and no Mana Regen from items. STR and DEX do not participate in mana recovery; among the stats, only INT changes the result.

| INT | Status | Range per mana | Mana per second | Mana per minute |
|---:|---|---:|---:|---:|
| 100 | Passive | 1.324 s | **0.755** | **45.33** |
| 100 | Active Meditation | 0.662 s | **1.511** | **90.67** |
| 120 | Passive | 1.282 s | **0.780** | **46.83** |
| 120 | Active Meditation | 0.641 s | **1.561** | **93.66** |

In practice, a character with INT 100 recovers approximately **7.6 mana in 10 seconds** passively or **15.1 mana in 10 seconds** by actively meditating. With INT 120, recovers approximately **7.8 mana in 10 seconds** passively or **15.6 mana in 10 seconds** with Meditation active.

These values ​​represent Live's actual mathematical rate; points enter individually as each interval is completed.

Passive regeneration remains unchanged. Active Meditation for players and the PvP Trainer no longer doubles the Meditation component.
