# Cooking

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Cooking" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-cooking-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Skill menu</span>
    <h3 id="dob-craft-cooking-title">Cooking</h3>
    <p>Beta 0.32.0 · Cooking uses Cooking as its base skill. Regular recipes follow the normal curve; some special recipes have a different starting chance or require heat/oven.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Main menu</span>
    <h4>Choose a category</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="receitas-de-referencia" data-craft-sim-section-title="Reference recipes">
        <span><strong>Reference recipes</strong><small>9 recipes in this menu</small></span><b>9 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Full index">
        <span><strong>Search recipes</strong><small>Search the entire Cooking menu</small></span><b>9 recipes&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Main menu</button>
        <div><span class="dob-craft-simulator__screen-label">Open menu</span><h4 data-craft-sim-category-title>Full index</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-cooking-search">Search the index
        <input id="dob-craft-cooking-search" type="search" data-craft-sim-search aria-controls="dob-craft-cooking-index" placeholder="Name, group, or material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">9 recipes</p>
      <div id="dob-craft-cooking-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Cooking recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="gingerbread-cookie" data-craft-item-name="Gingerbread Cookie" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="35.0" data-craft-max="85.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Cookie Mix + 1 Fresh Ginger" data-craft-exceptional="Separate quality roll" data-craft-base="0">
          <span data-craft-sim-index-name>Gingerbread Cookie</span>
          <span data-craft-sim-index-meta>Reference recipes · 35.0–85.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="three-tiered-cake" data-craft-item-name="Three-Tiered Cake" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="60.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="3 Cake Mix" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Three-Tiered Cake</span>
          <span data-craft-sim-index-meta>Reference recipes · 60.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bowl-of-rotworm-stew" data-craft-item-name="Bowl of Rotworm Stew" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="0.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Rotworm Meat" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Bowl of Rotworm Stew</span>
          <span data-craft-sim-index-meta>Reference recipes · 0.0–100.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bowl-of-blackrock-stew" data-craft-item-name="Bowl of Blackrock Stew" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="30.0" data-craft-max="70.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bowl of Rotworm Stew + 1 Small Piece of Blackrock" data-craft-exceptional="This recipe has no Exceptional" data-craft-base="0">
          <span data-craft-sim-index-name>Bowl of Blackrock Stew</span>
          <span data-craft-sim-index-meta>Reference recipes · 30.0–70.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="hamburger" data-craft-item-name="Hamburger" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bread Loaf + 1 Raw Ribs + 1 Lettuce" data-craft-exceptional="Separate quality roll" data-craft-base="0">
          <span data-craft-sim-index-name>Hamburger</span>
          <span data-craft-sim-index-meta>Reference recipes · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="hot-dog" data-craft-item-name="Hot Dog" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bread Loaf + 1 Sausage" data-craft-exceptional="Separate quality roll" data-craft-base="0">
          <span data-craft-sim-index-name>Hot Dog</span>
          <span data-craft-sim-index-meta>Reference recipes · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="grilled-serpent-steak" data-craft-item-name="Grilled Serpent Steak" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Sea Serpent Steak + 1 Fresh Seasoning" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Grilled Serpent Steak</span>
          <span data-craft-sim-index-meta>Reference recipes · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bbq-dino-ribs" data-craft-item-name="BBQ Dino Ribs" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Dino Ribs + 1 Fresh Seasoning + 1 Sack of Sugar + 1 Samuel's Secret Sauce" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>BBQ Dino Ribs</span>
          <span data-craft-sim-index-meta>Reference recipes · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="waku-chicken" data-craft-item-name="Waku Chicken" data-craft-group="Reference recipes" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Bird + 1 Dried Herbs + 1 Samuel's Secret Sauce" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Waku Chicken</span>
          <span data-craft-sim-index-meta>Reference recipes · 45.0–95.0</span>
        </button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>No recipe matches this search.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Back to recipes</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Selected recipe</span>
          <h4 data-craft-sim-selected-name>Gingerbread Cookie</h4>
          <p data-craft-sim-selected-group>Reference recipes</p>
        </div>
        <strong data-craft-sim-selected-range>35.0–85.0 Cooking</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Main material</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Fixed ingredients</strong>
          <small data-craft-sim-material-note>The recipe uses fixed ingredients; the full list appears below.</small>
        </div>
        <label for="dob-craft-cooking-skill">Base skill query
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-cooking-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-cooking-help dob-craft-cooking-note"><output for="dob-craft-cooking-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Required materials</span><strong data-craft-sim-ingredients>1 Cookie Mix + 1 Fresh Ginger</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill used</span><strong data-craft-sim-skill-name>Cooking</strong></div>
        <div><span>Recipe minimum</span><strong data-craft-sim-recipe-min>35.0</strong></div>
        <div><span>Material minimum</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Success chance</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Separate quality roll</strong></div>
      </div>
      <p id="dob-craft-cooking-help" class="dob-craft-simulator__help">Oven recipes require an oven; barbecue preparations require heat. The catalog marks cooking results as non-Exceptional when that quality does not apply.</p>
      <p id="dob-craft-cooking-note" class="dob-craft-simulator__note" data-craft-sim-note>Choose a recipe to query its published curve.</p>
    </div>
  </div>
</section>
