# Craft

**0.41.0** organizes crafting into nine categories. This section gathers
the recipes most useful to players, required materials, skill ranges, and a
control for checking base success chance.

!!! success "Official source"
    The tables were checked against the server's official catalog. The in-game
    craft gump remains the final reference for native recipes that are not part
    of this player-facing selection.

## Choose a category

- [Alchemy](alchemy.md): potions and alchemical ingredients.
- [Blacksmithy](blacksmithy.md): weapons, armor, metals, and forge tools.
- [Bowcraft](bowcraft.md): bows, crossbows, arrows, and DoB Weapons lines.
- [Carpentry](carpentry.md): wooden weapons, furniture, and special pieces.
- [Cartography](cartography.md): maps, charts, and atlases.
- [Cooking](cooking.md): food, special recipes, and preparations requiring heat.
- [Inscription](inscription.md): books, scrolls, and scribe recipes.
- [Tailoring](tailoring.md): clothing, leather, quivers, and belts.
- [Tinkering](tinkering.md): tools, jewelry, and DoB Tools.

## Base skill and success chance

| Menu category | Base skill used for the query | Note |
|---|---|---|
| Blacksmithy | Blacksmith | Special metals have their own curves. |
| Bowcraft | Fletching | The public category is called Bowcraft. |
| Cartography | Cartography | The result depends on the selected map. |
| Cooking | Cooking | Some recipes have a different base chance. |
| Inscription | Inscribe | Craft chance does not change magic damage. |
| Tailoring | Tailoring | Exceptional is a separate roll. |
| Tinkering | Tinkering | DoB Tools use special curves. |

For a regular recipe, the server starts at the chance for the minimum skill and
progresses to 100% at the maximum skill. The control uses the player's entered
**base skill** and does not apply temporary item, talisman, bench, or active-tool
bonuses. DoB special policies can replace the linear curve.

In this local preview, tables and controls are deliberately limited to 105.0
skill. When the official source continues beyond that point, the preview does
not extrapolate the curve past the cutoff.

## What Exceptional means

Success chance answers whether the item is produced. Exceptional is a separate
quality roll and appears only when the recipe and category allow it. For that
reason, the pages show the information in separate columns and do not add the
percentages together.

!!! info "First organization scope"
    The pages prioritize DoB special recipes and practical references from the
    native catalog. Unlisted recipes remain available in the official gump and
    can be added gradually without changing this section's URLs.

!!! warning "Local preview"
    This reorganization is on the work branch for visual review. No commit,
    merge, push, or deploy accompanies this preview.
