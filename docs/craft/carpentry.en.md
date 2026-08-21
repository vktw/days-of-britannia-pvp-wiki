# Carpentry

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Carpentry" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-carpentry-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Skill menu</span>
    <h3 id="dob-craft-carpentry-title">Carpentry</h3>
    <p>Beta 0.34.0 · Carpentry uses Carpentry as its base skill and covers wooden pieces, weapons, furniture, and special recipes. Masonry is a separate menu, but the server uses Carpentry as its base skill; the relationship is explained on Masonry .</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Main menu</span>
    <h4>Choose a category</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="receitas-de-referencia" data-craft-sim-section-title="Reference recipes">
        <span><strong>Reference recipes</strong><small>6 recipes in this menu</small></span><b>6 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Full index">
        <span><strong>Search recipes</strong><small>Search the entire Carpentry menu</small></span><b>6 recipes&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Main menu</button>
        <div><span class="dob-craft-simulator__screen-label">Open menu</span><h4 data-craft-sim-category-title>Full index</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-carpentry-search">Search the index
        <input id="dob-craft-carpentry-search" type="search" data-craft-sim-search aria-controls="dob-craft-carpentry-index" placeholder="Name, group, or material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">6 recipes</p>
      <div id="dob-craft-carpentry-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Carpentry recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="wild-staff" data-craft-item-name="Wild Staff" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="63.8" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="16 Boards" data-craft-exceptional="Separate quality roll" data-craft-base="50">
          <span data-craft-sim-index-name>Wild Staff</span>
          <span data-craft-sim-index-meta>Reference recipes · 63.8–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="phantom-staff" data-craft-item-name="Phantom Staff" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="90.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="16 Boards + 1 Diseased Bark + 10 Putrefaction + 10 Taint" data-craft-exceptional="This recipe has no Exceptional" data-craft-base="50">
          <span data-craft-sim-index-name>Phantom Staff</span>
          <span data-craft-sim-index-meta>Reference recipes · 90.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="arcanist-s-wild-staff" data-craft-item-name="Arcanist's Wild Staff" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="63.8" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="16 Boards + 1 White Pearl" data-craft-exceptional="Separate quality roll" data-craft-base="50">
          <span data-craft-sim-index-name>Arcanist's Wild Staff</span>
          <span data-craft-sim-index-meta>Reference recipes · 63.8–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="ironwood-crown" data-craft-item-name="Ironwood Crown" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="85.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="10 Boards + 1 Diseased Bark + 10 Corruption + 10 Putrefaction" data-craft-exceptional="This recipe has no Exceptional" data-craft-base="50">
          <span data-craft-sim-index-name>Ironwood Crown</span>
          <span data-craft-sim-index-meta>Reference recipes · 85.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bramble-coat" data-craft-item-name="Bramble Coat" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="85.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="10 Boards + 1 Diseased Bark + 10 Taint + 10 Scourge" data-craft-exceptional="This recipe has no Exceptional" data-craft-base="50">
          <span data-craft-sim-index-name>Bramble Coat</span>
          <span data-craft-sim-index-meta>Reference recipes · 85.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="kotl-black-rod" data-craft-item-name="Kotl Black Rod" data-craft-group="Reference recipes" data-craft-skill="Carpentry" data-craft-min="100.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="20 Boards + 1 Blackrock Moonstone + 1 Staff of the Magi" data-craft-exceptional="Not published in this preview" data-craft-base="50">
          <span data-craft-sim-index-name>Kotl Black Rod</span>
          <span data-craft-sim-index-meta>Reference recipes · 100.0–105.0</span>
        </button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>No recipe matches this search.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Back to recipes</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Selected recipe</span>
          <h4 data-craft-sim-selected-name>Wild Staff</h4>
          <p data-craft-sim-selected-group>Reference recipes</p>
        </div>
        <strong data-craft-sim-selected-range>63.8–113.8 Carpentry</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Main material</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Fixed ingredients</strong>
          <small data-craft-sim-material-note>The recipe uses fixed ingredients; the full list appears below.</small>
        </div>
        <label for="dob-craft-carpentry-skill">Base skill query
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-carpentry-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-carpentry-help dob-craft-carpentry-note"><output for="dob-craft-carpentry-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Required materials</span><strong data-craft-sim-ingredients>16 Boards</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill used</span><strong data-craft-sim-skill-name>Carpentry</strong></div>
        <div><span>Recipe minimum</span><strong data-craft-sim-recipe-min>63.8</strong></div>
        <div><span>Material minimum</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Success chance</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Separate quality roll</strong></div>
      </div>
      <p id="dob-craft-carpentry-help" class="dob-craft-simulator__help">Phantom Staff, Ironwood Crown, Bramble Coat, and Kotl Black Rod are fixed-result recipes and do not offer Exceptional in the catalog. The recipe requirement still applies when the skill is already in the correct range.</p>
      <p id="dob-craft-carpentry-note" class="dob-craft-simulator__note" data-craft-sim-note>Choose a recipe to query its published curve.</p>
    </div>
  </div>
</section>
