# Craft

Use this page to check the special recipes active in **Live 0.26.3**. The tables separate material, cost, minimum skill, success-chance reference points, and the Exceptional rule for each family.

!!! success "Status: Live 0.26.3"
    Minimum skills and chance reference points below were read directly from the server's official craft catalog and reconciled with the production state.

!!! info "How to read the chances"
    This page's control shows only reference points published by the official source. It does not invent a percentage between two points and does not replace the server roll. `Minimum skill` is the recipe's first requirement; success chance and Exceptional chance are separate rolls when the source separates them.

## Special recipes

| System | Recipe | Material and cost | Minimum skill | Chance points shown | Exceptional |
|---|---|---|---:|---|---|
| **Blacksmithy** | Bloodrock — six DoB Weapons | 30 Bloodrock Ingots | 75.0 | 0% at 75.0; 50% at 92.5; final point under review | Arms Lore as a separate roll |
| **Blacksmithy** | Blackrock — six DoB Weapons | 30 Blackrock Ingots | 75.0 | 0% at 75.0; 50% at 92.5; final point under review | Arms Lore as a separate roll |
| **Bowcraft** | Fire Bow | 30 Fire Feathers + 30 Ash Logs | 75.0 | 75% at 100.0 | Separate percentage not published in this table |
| **Bowcraft** | Elven Bow | 30 Heartwood Logs | 65.0 | 0% at 65.0; 100% at 100.0 | Separate percentage not published in this table |
| **Tinkering** | Magic Earrings, Magic Ring, and Magic Bracelet | 20 Gold Ingots per piece | 65.0 | Native curve from 65.0 to 100.0 | Exceptional accepted; fixed bonuses do not change |
| **Alchemy** | Total Mana Potion | 5 Eyes of Newt + 1 Bottle | 65.0 | 100% at 105.0 | No functional Exceptional result |
| **Blacksmithy** | Chain Coif, Chain Legs, Chain Chest, and Chain Hatsuburi | Public metals; 10, 18, 20, and 20 ingots | 14.5, 36.7, 39.1, and 30.0 | Native ranges up to 64.5, 86.7, 89.1, and 80.0 | Arms Lore as a separate roll |

The Bloodrock and Blackrock lines have six named weapons each and appear under **DoB Weapons**. The [Classic weapons](armas.md) page keeps the names and damage bonuses without duplicating the full catalog here. For Chain, the selected metal keeps the piece's cost and changes its physical protection within the public catalog.

## DoB Tools

The six special Tinkering families use the active tool to change weight, uses, or an applicable roll. The family's material and minimum skill come from the recipe; the bonus is not granted by the item being produced.

| Family | Material | Minimum skill | Cost | Active-tool effect or bonus |
|---|---|---:|---:|---|
| **Light** | Bronze Ingots | 65.0 | 100 ingots | Lighter tool |
| **Hardened** | Shadow Ingots | 67.0 | 100 ingots | Doubles uses |
| **Tempered** | Silver Ingots | 60.0 | 100 ingots | Lighter tool with double uses |
| **Artisan** | Gold Ingots | 70.0 | 50 ingots | +10 percentage points of Exceptional on applicable crafts |
| **Reliable** | Bloodrock Ingots | 80.0 | 50 ingots | +10 percentage points of success; only the final roll for gathering |
| **Refined** | Blackrock Ingots | 90.0 | 50 ingots | Combines +10 percentage points of success and +10 of Exceptional |

The curves below describe creating the tool itself, before the bonus from an already active tool. A chance bonus applies only after minimum skill is met and never exceeds the action ceiling. Artisan and Refined do not apply Exceptional to gathering; Reliable Pickaxes, Shovels, and Hatchets change only the final Mining or Lumberjacking success roll.

| Family | First official point | Second official point | Third official point | Bonus on the finished tool |
|---|---|---|---|---|
| **Artisan** | 20% at 70.0 | 85% at 100.0 | 100% at 130.0 | +10 pp Exceptional on applicable crafts |
| **Reliable** | 30% at 80.0 | 90% at 100.0 | 100% at 140.0 | +10 pp success |
| **Refined** | 30% at 90.0 | 75% at 100.0 | 95% at 150.0 | +10 pp success and +10 pp Exceptional |

## Skill control

Use the selector to choose a recipe or family, then move effective skill to check the nearest official reference point. When skill falls between two points, the result shows both points without fabricating an interpolation.

<section class="dob-craft-control" data-dob-craft-control aria-labelledby="dob-craft-control-title">
  <h3 id="dob-craft-control-title">Chance lookup by skill</h3>
  <div class="dob-craft-control__fields">
    <label for="dob-craft-recipe">
      Recipe or family
      <select id="dob-craft-recipe" data-craft-recipe>
        <option value="artisan" data-craft-skill="Tinkering" data-craft-min="70.0" data-craft-points="70:20|100:85|130:100" data-craft-tail="cap" data-craft-exceptional="+10 pp on applicable crafts">Artisan · DoB Tools</option>
        <option value="reliable" data-craft-skill="Tinkering" data-craft-min="80.0" data-craft-points="80:30|100:90|140:100" data-craft-tail="cap" data-craft-exceptional="Does not change Exceptional">Reliable · DoB Tools</option>
        <option value="refined" data-craft-skill="Tinkering" data-craft-min="90.0" data-craft-points="90:30|100:75|150:95" data-craft-tail="review" data-craft-exceptional="+10 pp on applicable crafts">Refined · DoB Tools</option>
        <option value="elven-bow" data-craft-skill="Bowcraft" data-craft-min="65.0" data-craft-points="65:0|100:100" data-craft-tail="cap" data-craft-exceptional="Separate percentage not published in this preview">Elven Bow · DoB Weapons</option>
        <option value="fire-bow" data-craft-skill="Bowcraft" data-craft-min="75.0" data-craft-points="75:0|100:75" data-craft-tail="review" data-craft-exceptional="Separate percentage not published in this preview">Fire Bow · DoB Weapons</option>
        <option value="bloodrock" data-craft-skill="Blacksmithy" data-craft-min="75.0" data-craft-points="75:0|92.5:50" data-craft-tail="review" data-craft-exceptional="Arms Lore as a separate roll">Bloodrock · DoB Weapons</option>
        <option value="blackrock" data-craft-skill="Blacksmithy" data-craft-min="75.0" data-craft-points="75:0|92.5:50" data-craft-tail="review" data-craft-exceptional="Arms Lore as a separate roll">Blackrock · DoB Weapons</option>
      </select>
    </label>
    <label for="dob-craft-skill">
      Effective skill to check
      <span class="dob-craft-control__range-line">
        <input id="dob-craft-skill" type="range" min="60" max="150" step="0.1" value="100.0" data-craft-skill aria-describedby="dob-craft-help dob-craft-note">
        <output for="dob-craft-skill" data-craft-skill-value>100.0</output>
      </span>
    </label>
  </div>
  <div class="dob-craft-control__result" data-craft-result role="status" aria-live="polite">
    <div><span>Skill used</span><strong data-craft-skill-name>Tinkering</strong></div>
    <div><span>Minimum skill</span><strong data-craft-min>70.0</strong></div>
    <div><span>Success chance</span><strong data-craft-chance>85%</strong></div>
    <div><span>Exceptional</span><strong data-craft-exceptional>+10 pp on applicable crafts</strong></div>
  </div>
  <p id="dob-craft-help" class="dob-craft-control__help">The displayed chance is an official reference point. Effective skill may include bonuses allowed by the server.</p>
  <p id="dob-craft-note" class="dob-craft-control__note" data-craft-note>Official point at 100.0.</p>
</section>

## Success and Exceptional

In Blacksmithy, skill determines whether the piece is produced. After a success, **Arms Lore** makes the separate Exceptional roll; quality changes durability, not protection or damage. The control above keeps these two concepts separate.

Artisan and Refined increase Exceptional chance only on applicable crafts when the finished tool is active. Reliable increases success chance; for gathering, its bonus is limited to the final Mining or Lumberjacking roll. The family of the item being produced does not activate the bonus of its own tool.

For complete weapon and armor effects, see [Classic weapons](armas.md) and [Classic armor](armaduras.md). For resources, potions, and basic tools, see [Consumables, tools, and utilities](consumiveis.md).

!!! warning "Local preview"
    This page was created on the working branch for visual review. No commit, merge, push, or deploy accompanies this preview.
