# Bowcraft

<section class="dob-craft-simulator" data-dob-craft-simulator data-craft-sim-skill="Fletching" aria-labelledby="dob-craft-simulator-title">
  <div class="dob-craft-simulator__heading">
    <span class="dob-craft-simulator__eyebrow">Menu da skill</span>
    <h3 id="dob-craft-simulator-title">Bowcraft / Fletching</h3>
    <p>0.40.0 · escolha um menu para começar.</p>
  </div>
  <div class="dob-craft-simulator__menu-screen" data-craft-sim-menu-screen>
    <span class="dob-craft-simulator__screen-label">Menu principal</span>
    <h4>Escolha uma categoria</h4>
    <div class="dob-craft-simulator__menu">
      <button type="button" data-craft-sim-open-section="materials" data-craft-sim-section-title="Materiais e munição"><span><strong>Materiais e munição</strong><small>Flechas, shafts e materiais de base</small></span><b>4 receitas&nbsp; →</b></button>
      <button type="button" data-craft-sim-open-section="bows" data-craft-sim-section-title="Arcos e bestas"><span><strong>Arcos e bestas</strong><small>Receitas nativas de Bowcraft</small></span><b>8 receitas&nbsp; →</b></button>
      <button type="button" data-craft-sim-open-section="dob" data-craft-sim-section-title="DoB Weapons"><span><strong>DoB Weapons</strong><small>Armas temáticas e materiais especiais</small></span><b>2 receitas&nbsp; →</b></button>
      <button type="button" data-craft-sim-open-section="all" data-craft-sim-section-title="Índice completo"><span><strong>Buscar receita</strong><small>Pesquisar em todo o menu de Bowcraft</small></span><b>14 receitas&nbsp; →</b></button>
    </div>
  </div>
  <div class="dob-craft-simulator__layout" data-craft-sim-screen="recipes" hidden>
    <div class="dob-craft-simulator__index">
      <div class="dob-craft-simulator__screen-top">
        <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="menu">← Menu principal</button>
        <div><span class="dob-craft-simulator__screen-label">Menu aberto</span><h4 data-craft-sim-category-title>Índice completo</h4></div>
      </div>
      <label class="dob-craft-simulator__search" for="dob-craft-bowcraft-search">Buscar no índice
        <input id="dob-craft-bowcraft-search" type="search" data-craft-sim-search aria-controls="dob-craft-bowcraft-index" placeholder="Nome, grupo ou material">
      </label>
      <p class="dob-craft-simulator__count" data-craft-sim-count aria-live="polite">29 receitas</p>
      <div id="dob-craft-bowcraft-index" class="dob-craft-simulator__list" data-craft-sim-index role="listbox" aria-label="Receitas de Bowcraft">
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="kindling" data-craft-item-name="Kindling" data-craft-group="Materiais" data-craft-min="0.0" data-craft-max="0.0" data-craft-slider-max="105.0" data-craft-formula="fixed" data-craft-material-mode="wood" data-craft-wood-amount="1" data-craft-exceptional="Não há curva de chance para consultar"><span data-craft-sim-index-name>Kindling</span><span data-craft-sim-index-meta>Materiais · 0.0–0.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="shaft" data-craft-item-name="Shaft" data-craft-group="Materiais" data-craft-min="0.0" data-craft-max="40.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="1" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Shaft</span><span data-craft-sim-index-meta>Materiais · 0.0–40.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="arrow" data-craft-item-name="Arrow" data-craft-group="Munição" data-craft-min="0.0" data-craft-max="40.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Shaft + 1 Feather" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Arrow</span><span data-craft-sim-index-meta>Munição · 0.0–40.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="bolt" data-craft-item-name="Bolt" data-craft-group="Munição" data-craft-min="0.0" data-craft-max="40.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="1 Shaft + 1 Feather" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Bolt</span><span data-craft-sim-index-meta>Munição · 0.0–40.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="bow" data-craft-item-name="Bow" data-craft-group="Arcos e bestas" data-craft-min="30.0" data-craft-max="70.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="7" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Bow</span><span data-craft-sim-index-meta>Arcos e bestas · 30.0–70.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="fire-bow" data-craft-item-name="Fire Bow" data-craft-group="DoB Weapons" data-craft-min="75.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-points="75:0|100:75" data-craft-formula="points" data-craft-interpolate="true" data-craft-tail="review" data-craft-material-mode="fixed" data-craft-materials="30 Fire Feathers + 30 Ash Logs" data-craft-exceptional="Percentual separado não publicado"><span data-craft-sim-index-name>Fire Bow</span><span data-craft-sim-index-meta>DoB Weapons · 75.0–100.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="elven-bow" data-craft-item-name="Elven Bow" data-craft-group="DoB Weapons" data-craft-min="65.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-points="65:0|100:100" data-craft-formula="points" data-craft-interpolate="true" data-craft-tail="cap" data-craft-material-mode="fixed" data-craft-materials="30 Heartwood Logs" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Elven Bow</span><span data-craft-sim-index-meta>DoB Weapons · 65.0–100.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="crossbow" data-craft-item-name="Crossbow" data-craft-group="Arcos e bestas" data-craft-min="60.0" data-craft-max="100.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="7" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Crossbow</span><span data-craft-sim-index-meta>Arcos e bestas · 60.0–100.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="heavy-crossbow" data-craft-item-name="Heavy Crossbow" data-craft-group="Arcos e bestas" data-craft-min="80.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="10" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Heavy Crossbow</span><span data-craft-sim-index-meta>Arcos e bestas · 80.0–105.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="composite-bow" data-craft-item-name="Composite Bow" data-craft-group="Arcos e bestas" data-craft-min="70.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="7" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Composite Bow</span><span data-craft-sim-index-meta>Arcos e bestas · 70.0–105.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="repeating-crossbow" data-craft-item-name="Repeating Crossbow" data-craft-group="Arcos e bestas" data-craft-min="90.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="10" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Repeating Crossbow</span><span data-craft-sim-index-meta>Arcos e bestas · 90.0–105.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="yumi" data-craft-item-name="Yumi" data-craft-group="Arcos e bestas" data-craft-min="90.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="10" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Yumi</span><span data-craft-sim-index-meta>Arcos e bestas · 90.0–105.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="elven-composite-longbow" data-craft-item-name="Elven Composite Longbow" data-craft-group="Arcos e bestas" data-craft-min="95.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="20" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Elven Composite Longbow</span><span data-craft-sim-index-meta>Arcos e bestas · 95.0–105.0</span></button>
        <button type="button" role="option" data-craft-sim-item data-craft-item-id="magical-shortbow" data-craft-item-name="Magical Shortbow" data-craft-group="Arcos e bestas" data-craft-min="85.0" data-craft-max="105.0" data-craft-slider-max="105.0" data-craft-base="50" data-craft-formula="linear" data-craft-tail="cap" data-craft-material-mode="wood" data-craft-wood-amount="15" data-craft-exceptional="Rolagem de qualidade separada"><span data-craft-sim-index-name>Magical Shortbow</span><span data-craft-sim-index-meta>Arcos e bestas · 85.0–105.0</span></button>
      </div>
      <p class="dob-craft-simulator__empty" data-craft-sim-empty hidden>Nenhuma receita encontrada para esta busca.</p>
    </div>
    <div class="dob-craft-simulator__workbench" data-craft-sim-workbench hidden>
      <button type="button" class="dob-craft-simulator__back" data-craft-sim-back="recipes">← Voltar para receitas</button>
      <div class="dob-craft-simulator__selected">
        <div>
          <span class="dob-craft-simulator__label">Receita selecionada</span>
          <h4 data-craft-sim-selected-name>Bow</h4>
          <p data-craft-sim-selected-group>Arcos e bestas</p>
        </div>
        <strong data-craft-sim-selected-range>30.0–70.0 Fletching</strong>
      </div>
      <div class="dob-craft-simulator__fields">
        <label for="dob-craft-bowcraft-material">Material principal
          <select id="dob-craft-bowcraft-material" data-craft-sim-material>
            <option value="board" data-craft-material-name="Board" data-craft-material-plural="Boards" data-craft-material-min="0.0">Board — 0.0</option>
            <option value="oak" data-craft-material-name="Oak Board" data-craft-material-plural="Oak Boards" data-craft-material-min="65.0">Oak Board — 65.0</option>
            <option value="ash" data-craft-material-name="Ash Board" data-craft-material-plural="Ash Boards" data-craft-material-min="75.0">Ash Board — 75.0</option>
            <option value="yew" data-craft-material-name="Yew Board" data-craft-material-plural="Yew Boards" data-craft-material-min="85.0">Yew Board — 85.0</option>
            <option value="heartwood" data-craft-material-name="Heartwood Board" data-craft-material-plural="Heartwood Boards" data-craft-material-min="95.0">Heartwood Board — 95.0</option>
            <option value="bloodwood" data-craft-material-name="Bloodwood Board" data-craft-material-plural="Bloodwood Boards" data-craft-material-min="95.0">Bloodwood Board — 95.0</option>
            <option value="frostwood" data-craft-material-name="Frostwood Board" data-craft-material-plural="Frostwood Boards" data-craft-material-min="95.0">Frostwood Board — 95.0</option>
          </select>
          <small data-craft-sim-material-note>A madeira só muda o recurso e a skill mínima de seleção; não é bônus de chance.</small>
        </label>
        <label for="dob-craft-bowcraft-skill">Skill base de consulta
          <span class="dob-craft-simulator__range-line"><input id="dob-craft-bowcraft-skill" type="range" min="0" max="105" step="0.1" value="100.0" data-craft-sim-skill aria-describedby="dob-craft-bowcraft-help dob-craft-bowcraft-note"><output for="dob-craft-bowcraft-skill" data-craft-sim-skill-value>100.0</output></span>
        </label>
      </div>
      <div class="dob-craft-simulator__ingredients"><span>Materiais necessários</span><strong data-craft-sim-ingredients>7 Boards</strong></div>
      <div class="dob-craft-simulator__result" data-craft-sim-result role="status" aria-live="polite">
        <div><span>Skill usada</span><strong data-craft-sim-skill-name>Fletching</strong></div>
        <div><span>Skill mínima da receita</span><strong data-craft-sim-recipe-min>30.0</strong></div>
        <div><span>Mínima do material</span><strong data-craft-sim-material-min>0.0</strong></div>
        <div><span>Chance de sucesso</span><strong data-craft-sim-chance>100%</strong></div>
        <div><span>Exceptional</span><strong data-craft-sim-exceptional>Rolagem de qualidade separada</strong></div>
      </div>
      <p id="dob-craft-bowcraft-help" class="dob-craft-simulator__help">A consulta usa Fletching base. Para receitas comuns, a chance parte de 50% na skill mínima e chega a 100% na máxima; curvas especiais usam os pontos publicados.</p>
      <p id="dob-craft-bowcraft-note" class="dob-craft-simulator__note" data-craft-sim-note>O Board selecionado é elegível desde 0.0 de Fletching.</p>
    </div>
  </div>
</section>
