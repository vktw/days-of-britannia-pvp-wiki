# Damage examples

## Raw damage ranges

Damage varies with weapon, quality, STR, Tactics, and Anatomy. Weapon skill mainly determines hit chance; armor, Parrying, and Protection apply after the hit lands.

## Unarmored region

In PvP, a hit on a region without effective armor receives **25% additional damage**. Leaving the Neck, Hands, or Head uncovered can therefore be risky even when the main pieces are strong.

## Regional armor

When a hit finds an armor piece, its displayed `Physical Resist` reduces that attack. A better piece protects only its own region; it does not compensate for another uncovered region.

## Protection

Protection reduces part of the damage remaining after armor, shield, or the uncovered-region bonus. In practical terms, the order is:

1. check Parrying;
2. use the shield or body region;
3. apply the bonus if the region has no armor;
4. apply Protection when active.

## Parrying

On a successful block, the shield is used instead of the body region. If the block fails, armor on the selected region determines protection.

## Quick comparison

For the same hit that lands:

| Situation | Expected result |
| --- | --- |
| Region without armor | Highest damage taken |
| Armored region | Damage reduced by the piece's Physical Resist |
| Armor and Protection | Reduction in two steps |
| Shield block | Shield replaces the body region |

**Protection changes the final result**, but full coverage also matters. See [Armor and Parrying](armor-parrying.md) when assembling your equipment.

!!! success "Status: Live 0.23.5"
    Practical examples for equipment decisions without reproducing the server's internal formula.
