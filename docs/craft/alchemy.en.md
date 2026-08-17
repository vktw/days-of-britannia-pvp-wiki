# Alchemy

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Alchemy" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-alchemy-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Skill menu</span>
    <h3 id="dob-craft-alchemy-title">Alchemy</h3>
    <p>Beta 0.32.0 · Alchemy is the base skill for potions. The chance shown below is the base success roll; a finished potion's effect is not strengthened by Alchemy.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Main menu</span>
    <h4>Choose a category</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="receitas-de-referencia" data-craft-sim-section-title="Reference recipes">
        <span><strong>Reference recipes</strong><small>5 recipes in this menu</small></span><b>5 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Full index">
        <span><strong>Search recipes</strong><small>Search the entire Alchemy menu</small></span><b>5 recipes&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Main menu</button>
        <div><span class="dob-craft-simulator__screen-label">Open menu</span><h4 data-craft-sim-category-title>Full index</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-alchemy-search">Search the index
        <input id="dob-craft-alchemy-search" type="search" data-craft-sim-search aria-controls="dob-craft-alchemy-index" placeholder="Name, group, or material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">5 recipes</p>
      <div id="dob-craft-alchemy-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Alchemy recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="total-mana-potion" data-craft-item-name="Total Mana Potion" data-craft-group="Reference recipes" data-craft-skill="Alchemy" data-craft-min="65.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="5 Eyes of Newt + 1 Bottle" data-craft-exceptional="Functional result; Exceptional does not apply" data-craft-base="0">
          <span data-craft-sim-index-name>Total Mana Potion</span>
          <span data-craft-sim-index-meta>Reference recipes · 65.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="greater-heal-potion" data-craft-item-name="Greater Heal Potion" data-craft-group="Reference recipes" data-craft-skill="Alchemy" data-craft-min="55.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="7 Ginseng + 1 Bottle" data-craft-exceptional="Separate quality roll" data-craft-base="0">
          <span data-craft-sim-index-name>Greater Heal Potion</span>
          <span data-craft-sim-index-meta>Reference recipes · 55.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="deadly-poison-potion" data-craft-item-name="Deadly Poison Potion" data-craft-group="Reference recipes" data-craft-skill="Alchemy" data-craft-min="90.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="8 Nightshade + 1 Bottle" data-craft-exceptional="Separate quality roll" data-craft-base="0">
          <span data-craft-sim-index-name>Deadly Poison Potion</span>
          <span data-craft-sim-index-meta>Reference recipes · 90.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="elixir-of-rebirth" data-craft-item-name="Elixir of Rebirth" data-craft-group="Reference recipes" data-craft-skill="Alchemy" data-craft-min="65.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Medusa Blood + 3 Spiders Silk + 1 Bottle" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Elixir of Rebirth</span>
          <span data-craft-sim-index-meta>Reference recipes · 65.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="barrab-hemolymph-concentrate" data-craft-item-name="Barrab Hemolymph Concentrate" data-craft-group="Reference recipes" data-craft-skill="Alchemy" data-craft-min="51.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bottle + 20 Ginseng + 5 Myrmidex Eggsac" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Barrab Hemolymph Concentrate</span>
          <span data-craft-sim-index-meta>Reference recipes · 51.0–105.0</span>
        </button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>No recipe matches this search.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Back to recipes</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Selected recipe</span>
          <h4 data-craft-sim-selected-name>Total Mana Potion</h4>
          <p data-craft-sim-selected-group>Reference recipes</p>
        </div>
        <strong data-craft-sim-selected-range>65.0–105.0 Alchemy</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Main material</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Fixed ingredients</strong>
          <small data-craft-sim-material-note>The recipe uses fixed ingredients; the full list appears below.</small>
        </div>
        <label for="dob-craft-alchemy-skill">Base skill query
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-alchemy-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-alchemy-help dob-craft-alchemy-note"><output for="dob-craft-alchemy-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Required materials</span><strong data-craft-sim-ingredients>5 Eyes of Newt + 1 Bottle</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill used</span><strong data-craft-sim-skill-name>Alchemy</strong></div>
        <div><span>Recipe minimum</span><strong data-craft-sim-recipe-min>65.0</strong></div>
        <div><span>Material minimum</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Success chance</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Functional result; Exceptional does not apply</strong></div>
      </div>
      <p id="dob-craft-alchemy-help" class="dob-craft-simulator__help">Total Mana Potion appears as total mana in the menu and uses five Eyes of Newt and one Bottle. The finished potion does not gain extra potency from a higher skill. Glassblowing uses Alchemy as its base skill but is a separate menu. It requires Alchemy 100.0, Glassblowing training, and a nearby forge.</p>
      <p id="dob-craft-alchemy-note" class="dob-craft-simulator__note" data-craft-sim-note>Choose a recipe to query its published curve.</p>
    </div>
  </div>
</section>
