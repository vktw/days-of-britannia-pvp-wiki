# Healing and resources

## Healing ranges

With the relevant skills at 100.0:

| Resource | Healing | Use |
| --- | ---: | --- |
| Heal | 9–12 | Up to 10 tiles |
| Greater Heal | 30–40 | Up to 10 tiles |
| Bandage | 30–40 | Up to 2 tiles |
| Greater Heal Potion | 40 | Self only |

Poison does not prevent Heal, Greater Heal, or Greater Heal Potion.

A bandage removes poison immediately without restoring health in that application. Without poison, healing completes after **3.5 seconds**. Using a bandage frees the hands automatically; if the character is paralyzed, they must already be empty.

Treatment is captured when the bandage is used: poison present at the start is
treated immediately; without poison at the start, life or bleed treatment keeps
its choice during the delay even if poison appears afterward.

A clean bandage used successfully becomes a Bloody Bandage. A water source uses one unit to wash the entire stack; if the backpack cannot hold the result, it drops to the ground.

Starting a spell accepted by the server cancels any bandage still in progress. The bandage is not refunded and does not complete its healing later. Immediate poison treatment is unaffected.

## Potions

Drinkable potions share a global **15-second** cooldown and do not require empty hands.

- Greater Heal restores 40 hits.
- Total Mana restores 40 mana.
- Total Refresh restores stamina.
- Invisibility immediately makes the character invisible.

A Total Mana Potion is not consumed when mana is already full.

Explosion Potions use a target cursor and countdown. They can affect an area, so positioning and timing matter more than memorizing a damage calculation.

## Mana

Focus, Meditation, and INT help mana recovery. Disabled modern equipment attributes grant no extra advantage.

With 100.0 Focus, 100.0 Meditation, 100 INT, and no item Mana Regen:

- passive recovery: approximately **0.76 mana per second**;
- active Meditation: approximately **1.51 mana per second**.

Active Meditation is faster, but does not fully double recovery. Plan a safe window before relying on it during combat.

!!! success "Status: Live 0.26.3"
    Values and restrictions that affect decisions during combat.
