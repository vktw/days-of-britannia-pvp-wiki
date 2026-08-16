# Blacksmithy

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Blacksmith" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-blacksmithy-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Skill menu</span>
    <h3 id="dob-craft-blacksmithy-title">Blacksmithy</h3>
    <p>Beta 0.31.1 · Blacksmithy uses Blacksmith as its skill and separates regular crafting from the DoB Weapons lines and special metals. The percentages below are the chance to produce the item; Arms Lore and Exceptional are separate when applicable.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Main menu</span>
    <h4>Choose a category</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="dob-weapons" data-craft-sim-section-title="DoB Weapons">
        <span><strong>DoB Weapons</strong><small>2 recipes in this menu</small></span><b>2 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="armaduras-e-pecas-chain" data-craft-sim-section-title="Armor and Chain pieces">
        <span><strong>Armor and Chain pieces</strong><small>5 recipes in this menu</small></span><b>5 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="curvas-de-metais-especiais" data-craft-sim-section-title="Special-metal curves">
        <span><strong>Special-metal curves</strong><small>8 recipes in this menu</small></span><b>8 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Full index">
        <span><strong>Search recipes</strong><small>Search the entire Blacksmithy menu</small></span><b>15 recipes&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Main menu</button>
        <div><span class="dob-craft-simulator__screen-label">Open menu</span><h4 data-craft-sim-category-title>Full index</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-blacksmithy-search">Search the index
        <input id="dob-craft-blacksmithy-search" type="search" data-craft-sim-search aria-controls="dob-craft-blacksmithy-index" placeholder="Name, group, or material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">15 recipes</p>
      <div id="dob-craft-blacksmithy-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Blacksmithy recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="dob-weapons" data-craft-item-id="bloodrock-crimson-rite-blood-vow-vein-sever-ritual-conduit-sanguine-toll-e-crimson-verdict" data-craft-item-name="Bloodrock: Crimson Rite, Blood Vow, Vein Sever, Ritual Conduit, Sanguine Toll, and Crimson Verdict" data-craft-group="DoB Weapons" data-craft-skill="Blacksmith" data-craft-min="75.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="points" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="30 Bloodrock Ingots" data-craft-exceptional="Arms Lore as a separate roll" data-craft-points="75:0|92.5:50|105:100" data-craft-interpolate="true">
          <span data-craft-sim-index-name>Bloodrock: Crimson Rite, Blood Vow, Vein Sever, Ritual Conduit, Sanguine Toll, and Crimson Verdict</span>
          <span data-craft-sim-index-meta>DoB Weapons · 75.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="dob-weapons" data-craft-item-id="blackrock-dusk-reaver-nightfang-gloom-sever-umbral-conduit-dark-toll-e-midnight-verdict" data-craft-item-name="Blackrock: Dusk Reaver, Nightfang, Gloom Sever, Umbral Conduit, Dark Toll, and Midnight Verdict" data-craft-group="DoB Weapons" data-craft-skill="Blacksmith" data-craft-min="75.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="points" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="30 Blackrock Ingots" data-craft-exceptional="Arms Lore as a separate roll" data-craft-points="75:0|92.5:50|105:100" data-craft-interpolate="true">
          <span data-craft-sim-index-name>Blackrock: Dusk Reaver, Nightfang, Gloom Sever, Umbral Conduit, Dark Toll, and Midnight Verdict</span>
          <span data-craft-sim-index-meta>DoB Weapons · 75.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="armaduras-e-pecas-chain" data-craft-item-id="chain-coif" data-craft-item-name="Chain Coif" data-craft-group="Armor and Chain pieces" data-craft-skill="Blacksmith" data-craft-min="14.5" data-craft-max="64.5" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="10 Iron Ingots" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Chain Coif</span>
          <span data-craft-sim-index-meta>Armor and Chain pieces · 14.5–64.5</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="armaduras-e-pecas-chain" data-craft-item-id="chain-legs" data-craft-item-name="Chain Legs" data-craft-group="Armor and Chain pieces" data-craft-skill="Blacksmith" data-craft-min="36.7" data-craft-max="86.7" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="18 Iron Ingots" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Chain Legs</span>
          <span data-craft-sim-index-meta>Armor and Chain pieces · 36.7–86.7</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="armaduras-e-pecas-chain" data-craft-item-id="chain-chest" data-craft-item-name="Chain Chest" data-craft-group="Armor and Chain pieces" data-craft-skill="Blacksmith" data-craft-min="39.1" data-craft-max="89.1" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="20 Iron Ingots" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Chain Chest</span>
          <span data-craft-sim-index-meta>Armor and Chain pieces · 39.1–89.1</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="armaduras-e-pecas-chain" data-craft-item-id="chain-hatsuburi" data-craft-item-name="Chain Hatsuburi" data-craft-group="Armor and Chain pieces" data-craft-skill="Blacksmith" data-craft-min="30.0" data-craft-max="80.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="20 Iron Ingots" data-craft-exceptional="Not published in this preview" data-craft-base="0">
          <span data-craft-sim-index-name>Chain Hatsuburi</span>
          <span data-craft-sim-index-meta>Armor and Chain pieces · 30.0–80.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="armaduras-e-pecas-chain" data-craft-item-id="plate-chest" data-craft-item-name="Plate Chest" data-craft-group="Armor and Chain pieces" data-craft-skill="Blacksmith" data-craft-min="75.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="25 Iron Ingots" data-craft-exceptional="Arms Lore as a separate roll" data-craft-base="0">
          <span data-craft-sim-index-name>Plate Chest</span>
          <span data-craft-sim-index-meta>Armor and Chain pieces · 75.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="bronze" data-craft-item-name="Bronze" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="35.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-formula="points" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="Bronze Ingots" data-craft-exceptional="Arms Lore as a separate roll" data-craft-points="35:20|100:100" data-craft-interpolate="true">
          <span data-craft-sim-index-name>Bronze</span>
          <span data-craft-sim-index-meta>Special-metal curves · 35.0–100.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="shadow" data-craft-item-name="Shadow" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="45.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Shadow Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Shadow</span>
          <span data-craft-sim-index-meta>Special-metal curves · 45.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="silver" data-craft-item-name="Silver" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="55.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Silver Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Silver</span>
          <span data-craft-sim-index-meta>Special-metal curves · 55.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="gold" data-craft-item-name="Gold" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="65.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Gold Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Gold</span>
          <span data-craft-sim-index-meta>Special-metal curves · 65.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="bloodrock" data-craft-item-name="Bloodrock" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="75.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Bloodrock Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Bloodrock</span>
          <span data-craft-sim-index-meta>Special-metal curves · 75.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="blackrock" data-craft-item-name="Blackrock" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="80.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Blackrock Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Blackrock</span>
          <span data-craft-sim-index-meta>Special-metal curves · 80.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="mythril" data-craft-item-name="Mythril" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="85.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="review" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Mythril Ingots" data-craft-exceptional="Not published in this preview">
          <span data-craft-sim-index-name>Mythril</span>
          <span data-craft-sim-index-meta>Special-metal curves · 85.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="curvas-de-metais-especiais" data-craft-item-id="brittanium" data-craft-item-name="Brittanium" data-craft-group="Special-metal curves" data-craft-skill="Blacksmith" data-craft-min="90.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="points" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="Brittanium Ingots" data-craft-exceptional="Arms Lore as a separate roll" data-craft-points="90:20|100:75" data-craft-interpolate="true">
          <span data-craft-sim-index-name>Brittanium</span>
          <span data-craft-sim-index-meta>Special-metal curves · 90.0–105.0</span>
        </button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>No recipe matches this search.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Back to recipes</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Selected recipe</span>
          <h4 data-craft-sim-selected-name>Bloodrock: Crimson Rite, Blood Vow, Vein Sever, Ritual Conduit, Sanguine Toll, and Crimson Verdict</h4>
          <p data-craft-sim-selected-group>DoB Weapons</p>
        </div>
        <strong data-craft-sim-selected-range>75.0–105.0 Blacksmith</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Main material</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Fixed ingredients</strong>
          <small data-craft-sim-material-note>The recipe uses fixed ingredients; the full list appears below.</small>
        </div>
        <label for="dob-craft-blacksmithy-skill">Base skill query
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-blacksmithy-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-blacksmithy-help dob-craft-blacksmithy-note"><output for="dob-craft-blacksmithy-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Required materials</span><strong data-craft-sim-ingredients>30 Bloodrock Ingots</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill used</span><strong data-craft-sim-skill-name>Blacksmith</strong></div>
        <div><span>Recipe minimum</span><strong data-craft-sim-recipe-min>75.0</strong></div>
        <div><span>Material minimum</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Success chance</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Arms Lore as a separate roll</strong></div>
      </div>
      <p id="dob-craft-blacksmithy-help" class="dob-craft-simulator__help">Regular weapons continue to use Iron. Special metal is not applied automatically to regular recipes. The selected metal keeps the piece's cost and changes its protection in the public ruleset. Exceptional quality is a separate roll.</p>
      <p id="dob-craft-blacksmithy-note" class="dob-craft-simulator__note" data-craft-sim-note>Choose a recipe to query its published curve.</p>
    </div>
  </div>
</section>
