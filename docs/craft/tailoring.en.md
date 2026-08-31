# Tailoring

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Tailoring" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-tailoring-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Skill menu</span>
    <h3 id="dob-craft-tailoring-title">Tailoring</h3>
    <p>0.40.0 · Tailoring uses Tailoring as its base skill for clothing, leather, quivers, and belts. Some special recipes force a result without Exceptional or start with a different success chance from the system base.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Main menu</span>
    <h4>Choose a category</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="roupas-e-couro" data-craft-sim-section-title="Clothing and leather">
        <span><strong>Clothing and leather</strong><small>4 recipes in this menu</small></span><b>4 recipes&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Full index">
        <span><strong>Search recipes</strong><small>Search the entire Tailoring menu</small></span><b>4 recipes&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Main menu</button>
        <div><span class="dob-craft-simulator__screen-label">Open menu</span><h4 data-craft-sim-category-title>Full index</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-tailoring-search">Search the index
        <input id="dob-craft-tailoring-search" type="search" data-craft-sim-search aria-controls="dob-craft-tailoring-index" placeholder="Name, group, or material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">4 recipes</p>
      <div id="dob-craft-tailoring-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Tailoring recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="roupas-e-couro" data-craft-item-id="bandana" data-craft-item-name="Bandana" data-craft-group="Clothing and leather" data-craft-skill="Tailoring" data-craft-min="0.0" data-craft-max="25.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="2 Cloth" data-craft-exceptional="Separate roll" data-craft-base="0"><span data-craft-sim-index-name>Bandana</span><span data-craft-sim-index-meta>Clothing and leather · 0.0–25.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="roupas-e-couro" data-craft-item-id="shirt" data-craft-item-name="Shirt" data-craft-group="Clothing and leather" data-craft-skill="Tailoring" data-craft-min="20.7" data-craft-max="45.7" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="8 Cloth" data-craft-exceptional="Separate roll" data-craft-base="0"><span data-craft-sim-index-name>Shirt</span><span data-craft-sim-index-meta>Clothing and leather · 20.7–45.7</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="roupas-e-couro" data-craft-item-id="cloak" data-craft-item-name="Cloak" data-craft-group="Clothing and leather" data-craft-skill="Tailoring" data-craft-min="41.4" data-craft-max="66.4" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="14 Cloth" data-craft-exceptional="Separate roll" data-craft-base="0"><span data-craft-sim-index-name>Cloak</span><span data-craft-sim-index-meta>Clothing and leather · 41.4–66.4</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="roupas-e-couro" data-craft-item-id="leather-chest" data-craft-item-name="Leather Chest" data-craft-group="Clothing and leather" data-craft-skill="Tailoring" data-craft-min="70.5" data-craft-max="95.5" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="12 Leather" data-craft-exceptional="Separate roll" data-craft-base="0"><span data-craft-sim-index-name>Leather Chest</span><span data-craft-sim-index-meta>Clothing and leather · 70.5–95.5</span></button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>No recipe matches this search.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Back to recipes</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Selected recipe</span>
          <h4 data-craft-sim-selected-name>Bandana</h4>
          <p data-craft-sim-selected-group>Clothing and leather</p>
        </div>
        <strong data-craft-sim-selected-range>0.0–25.0 Tailoring</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Main material</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Fixed ingredients</strong>
          <small data-craft-sim-material-note>The recipe uses fixed ingredients; the full list appears below.</small>
        </div>
        <label for="dob-craft-tailoring-skill">Base skill query
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-tailoring-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-tailoring-help dob-craft-tailoring-note"><output for="dob-craft-tailoring-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Required materials</span><strong data-craft-sim-ingredients>2 Cloth</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill used</span><strong data-craft-sim-skill-name>Tailoring</strong></div>
        <div><span>Recipe minimum</span><strong data-craft-sim-recipe-min>65.0</strong></div>
        <div><span>Material minimum</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Success chance</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Separate quality roll</strong></div>
      </div>
      <p id="dob-craft-tailoring-help" class="dob-craft-simulator__help">Quivers and belts require their recipes when the catalog marks them as learned. Exceptional is not the same as craft chance: check each recipe's column and the gump result.</p>
      <p id="dob-craft-tailoring-note" class="dob-craft-simulator__note" data-craft-sim-note>Choose a recipe to query its published curve.</p>
    </div>
  </div>
</section>
