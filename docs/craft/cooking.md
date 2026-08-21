# Cooking

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Cooking" data-craft-sim-slider-max="105" aria-labelledby="dob-craft-cooking-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Menu da skill</span>
    <h3 id="dob-craft-cooking-title">Cooking</h3>
    <p>Beta 0.34.0 · Cooking usa Cooking como skill-base. Receitas comuns seguem a curva normal; algumas receitas especiais têm chance inicial diferente ou exigem heat/oven.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Menu principal</span>
    <h4>Escolha uma categoria</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="receitas-de-referencia" data-craft-sim-section-title="Receitas de referência">
        <span><strong>Receitas de referência</strong><small>9 receitas deste menu</small></span><b>9 receitas&nbsp; →</b>
      </button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Índice completo">
        <span><strong>Buscar receita</strong><small>Pesquisar em todo o menu de Cooking</small></span><b>9 receitas&nbsp; →</b>
      </button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Menu principal</button>
        <div><span class="dob-craft-simulator__screen-label">Menu aberto</span><h4 data-craft-sim-category-title>Índice completo</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-cooking-search">Buscar no índice
        <input id="dob-craft-cooking-search" type="search" data-craft-sim-search aria-controls="dob-craft-cooking-index" placeholder="Nome, grupo ou material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">9 receitas</p>
      <div id="dob-craft-cooking-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Cooking recipes">
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="gingerbread-cookie" data-craft-item-name="Gingerbread Cookie" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="35.0" data-craft-max="85.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Cookie Mix + 1 Fresh Ginger" data-craft-exceptional="Rolagem de qualidade separada" data-craft-base="0">
          <span data-craft-sim-index-name>Gingerbread Cookie</span>
          <span data-craft-sim-index-meta>Receitas de referência · 35.0–85.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="three-tiered-cake" data-craft-item-name="Three-Tiered Cake" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="60.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="3 Cake Mix" data-craft-exceptional="Não publicado na prévia" data-craft-base="0">
          <span data-craft-sim-index-name>Three-Tiered Cake</span>
          <span data-craft-sim-index-meta>Receitas de referência · 60.0–105.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bowl-of-rotworm-stew" data-craft-item-name="Bowl of Rotworm Stew" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="0.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Rotworm Meat" data-craft-exceptional="Não publicado na prévia" data-craft-base="0">
          <span data-craft-sim-index-name>Bowl of Rotworm Stew</span>
          <span data-craft-sim-index-meta>Receitas de referência · 0.0–100.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bowl-of-blackrock-stew" data-craft-item-name="Bowl of Blackrock Stew" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="30.0" data-craft-max="70.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bowl of Rotworm Stew + 1 Small Piece of Blackrock" data-craft-exceptional="Não há Exceptional nesta receita" data-craft-base="0">
          <span data-craft-sim-index-name>Bowl of Blackrock Stew</span>
          <span data-craft-sim-index-meta>Receitas de referência · 30.0–70.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="hamburger" data-craft-item-name="Hamburger" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bread Loaf + 1 Raw Ribs + 1 Lettuce" data-craft-exceptional="Rolagem de qualidade separada" data-craft-base="0">
          <span data-craft-sim-index-name>Hamburger</span>
          <span data-craft-sim-index-meta>Receitas de referência · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="hot-dog" data-craft-item-name="Hot Dog" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Bread Loaf + 1 Sausage" data-craft-exceptional="Rolagem de qualidade separada" data-craft-base="0">
          <span data-craft-sim-index-name>Hot Dog</span>
          <span data-craft-sim-index-meta>Receitas de referência · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="grilled-serpent-steak" data-craft-item-name="Grilled Serpent Steak" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Sea Serpent Steak + 1 Fresh Seasoning" data-craft-exceptional="Não publicado na prévia" data-craft-base="0">
          <span data-craft-sim-index-name>Grilled Serpent Steak</span>
          <span data-craft-sim-index-meta>Receitas de referência · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="bbq-dino-ribs" data-craft-item-name="BBQ Dino Ribs" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Dino Ribs + 1 Fresh Seasoning + 1 Sack of Sugar + 1 Samuel's Secret Sauce" data-craft-exceptional="Não publicado na prévia" data-craft-base="0">
          <span data-craft-sim-index-name>BBQ Dino Ribs</span>
          <span data-craft-sim-index-meta>Receitas de referência · 45.0–95.0</span>
        </button>
        <button type="button" role="option" data-craft-sim-item data-craft-sim-section="receitas-de-referencia" data-craft-item-id="waku-chicken" data-craft-item-name="Waku Chicken" data-craft-group="Receitas de referência" data-craft-skill="Cooking" data-craft-min="45.0" data-craft-max="95.0" data-craft-slider-max="105.0" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Raw Bird + 1 Dried Herbs + 1 Samuel's Secret Sauce" data-craft-exceptional="Não publicado na prévia" data-craft-base="0">
          <span data-craft-sim-index-name>Waku Chicken</span>
          <span data-craft-sim-index-meta>Receitas de referência · 45.0–95.0</span>
        </button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>Nenhuma receita corresponde à busca.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Voltar para receitas</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Receita selecionada</span>
          <h4 data-craft-sim-selected-name>Gingerbread Cookie</h4>
          <p data-craft-sim-selected-group>Receitas de referência</p>
        </div>
        <strong data-craft-sim-selected-range>35.0–85.0 Cooking</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <div class="dob-craft-simulator__material-field">
          <span>Material principal</span>
          <strong class="dob-craft-simulator__material-static" data-craft-sim-material-static>Ingredientes fixos</strong>
          <small data-craft-sim-material-note>A receita usa ingredientes fixos; a lista completa aparece abaixo.</small>
        </div>
        <label for="dob-craft-cooking-skill">Skill base de consulta
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-cooking-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-cooking-help dob-craft-cooking-note"><output for="dob-craft-cooking-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Materiais necessários</span><strong data-craft-sim-ingredients>1 Cookie Mix + 1 Fresh Ginger</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill usada</span><strong data-craft-sim-skill-name>Cooking</strong></div>
        <div><span>Skill mínima da receita</span><strong data-craft-sim-recipe-min>35.0</strong></div>
        <div><span>Mínimo do material</span><strong data-craft-sim-material-min>—</strong></div>
        <div><span>Chance de sucesso</span><strong data-craft-sim-chance>—</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Rolagem de qualidade separada</strong></div>
      </div>
      <p id="dob-craft-cooking-help" class="dob-craft-simulator__help">As receitas de forno usam oven; preparos de barbecue usam heat. O catálogo marca os resultados de cozinha como não-Exceptional quando essa qualidade não se aplica.</p>
      <p id="dob-craft-cooking-note" class="dob-craft-simulator__note" data-craft-sim-note>Escolha uma receita para consultar sua curva publicada.</p>
    </div>
  </div>
</section>
