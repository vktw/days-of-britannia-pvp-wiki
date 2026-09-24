function openDobSearch() {
  const toggle = document.querySelector("#__search");

  if (!toggle) {
    return;
  }

  toggle.checked = true;
  toggle.dispatchEvent(new Event("change", { bubbles: true }));

  window.setTimeout(() => {
    document.querySelector(".md-search__input")?.focus();
  }, 80);
}

function bindDobHome() {
  document.querySelectorAll("[data-dob-search]:not([data-dob-search-bound])").forEach((button) => {
    button.dataset.dobSearchBound = "true";
    button.addEventListener("click", openDobSearch);
  });
}

function bindDobSearchShortcut() {
  if (document.body.dataset.dobSearchShortcutBound === "true") {
    return;
  }

  document.body.dataset.dobSearchShortcutBound = "true";
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openDobSearch();
    }
  });
}

function personalizeDobSearch() {
  const input = document.querySelector(".md-search__input");

  if (input) {
    input.placeholder = document.documentElement.lang.toLowerCase().startsWith("en")
      ? "Search the codex"
      : "Buscar no códice";
  }
}

const DOB_PLAYER_REFRESH_MS = 60 * 60 * 1000;

async function fetchDobPlayerStatus(source) {
  const response = await fetch(source, {
    cache: "no-store",
    credentials: "omit",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Player count request failed: ${response.status}`);
  }

  const payload = await response.json();
  const checkedAt = typeof payload?.checkedAt === "string" ? payload.checkedAt : null;

  if (payload?.state === "offline") {
    return { state: "offline", playerCount: null, checkedAt };
  }

  const playerCount = Number(payload?.playerCount);
  if (payload?.state === "online" && Number.isSafeInteger(playerCount) && playerCount >= 0) {
    return { state: "online", playerCount, checkedAt };
  }

  return null;
}

function formatDobPlayerUpdatedAt(checkedAt) {
  const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
  if (!checkedAt) {
    return isEnglish ? "Last update: unavailable" : "Última atualização: indisponível";
  }

  const date = new Date(checkedAt);
  if (Number.isNaN(date.getTime())) {
    return isEnglish ? "Last update: unavailable" : "Última atualização: indisponível";
  }

  const time = new Intl.DateTimeFormat(isEnglish ? "en-GB" : "pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  }).format(date);

  return isEnglish ? `Last update: ${time}` : `Última atualização: ${time}`;
}

function updateDobPlayerUpdatedAt(link, checkedAt) {
  const tooltip = link.querySelector("[data-dob-player-updated]");
  if (!tooltip) {
    return;
  }

  const text = formatDobPlayerUpdatedAt(checkedAt);
  tooltip.textContent = text;
  link.setAttribute("title", text);
}

function updateDobPlayerLink(link) {
  const value = link.querySelector("[data-dob-player-value]");
  const source = link.dataset.dobPlayerSource;

  if (!value || !source || link.dataset.dobPlayerRequest === "true") {
    return;
  }

  link.dataset.dobPlayerRequest = "true";
  fetchDobPlayerStatus(source)
    .then((status) => {
      if (!status) {
        throw new Error("Player status was not found in the public sources");
      }

      link.dataset.dobPlayerState = status.state;
      const label = status.state === "offline" ? "offline" : `${status.playerCount} online`;
      value.textContent = label;
      link.setAttribute("aria-label", label);
      updateDobPlayerUpdatedAt(link, status.checkedAt);
    })
    .catch(() => {
      link.dataset.dobPlayerState = "unknown";
      if (value.textContent.trim() === "— online") {
        link.setAttribute("aria-label", "Status indisponível");
      }
    })
    .finally(() => {
      delete link.dataset.dobPlayerRequest;
    });
}

function scheduleDobPlayerRefresh() {
  if (window.dobPlayerRefreshTimer) {
    return;
  }

  window.dobPlayerRefreshTimer = window.setInterval(() => {
    document.querySelectorAll("[data-dob-player-count]").forEach(updateDobPlayerLink);
  }, DOB_PLAYER_REFRESH_MS);
}

function bindDobPlayerCount() {
  document.querySelectorAll("[data-dob-player-count]:not([data-dob-player-count-bound])").forEach((link) => {
    link.dataset.dobPlayerCountBound = "true";
    updateDobPlayerUpdatedAt(link, null);
    updateDobPlayerLink(link);
  });

  if (document.querySelector("[data-dob-player-count]")) {
    scheduleDobPlayerRefresh();
  }
}

function formatDobCraftSkill(value) {
  return Number(value).toFixed(1);
}

function formatDobCraftChance(value) {
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

const DOB_CRAFT_SKILL_LIMIT = 105.0;

function parseDobCraftPoints(value, skillLimit = DOB_CRAFT_SKILL_LIMIT) {
  return String(value || "")
    .split("|")
    .map((point) => {
      const [skill, chance] = point.split(":").map(Number);
      return { skill, chance };
    })
    .filter((point) => Number.isFinite(point.skill) && Number.isFinite(point.chance) && point.skill <= skillLimit)
    .sort((left, right) => left.skill - right.skill);
}

function bindDobCraftControls() {
  document.querySelectorAll("[data-dob-craft-control]:not([data-dob-craft-bound])").forEach((control) => {
    control.dataset.dobCraftBound = "true";

    const recipe = control.querySelector("[data-craft-recipe]");
    const skill = control.querySelector('input[data-craft-skill]');
    const skillValue = control.querySelector("[data-craft-skill-value]");
    const skillName = control.querySelector("[data-craft-skill-name]");
    const minimum = control.querySelector("[data-craft-result] [data-craft-min]");
    const chance = control.querySelector("[data-craft-result] [data-craft-chance]");
    const exceptional = control.querySelector("[data-craft-result] [data-craft-exceptional]");
    const note = control.querySelector("[data-craft-note]");

    if (!recipe || !skill || !skillValue || !skillName || !minimum || !chance || !exceptional || !note) {
      return;
    }

    const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
    const copy = isEnglish
      ? {
          belowMinimum: "Below the minimum skill: this recipe is not eligible.",
          minimum: "Base chance at the minimum skill.",
          maximum: "At the maximum skill, the base chance reaches 100%.",
          exact: "Official point at",
          interpolated: "Interpolated between",
          aboveCap: "At and above the last official point, the chance remains at the published cap.",
          review: "The official source does not publish a chance for this skill point in the preview.",
          noPoint: "No separate percentage is published for this Exceptional roll.",
        }
      : {
          belowMinimum: "Abaixo da skill mínima: a receita não está elegível.",
          minimum: "Chance-base na skill mínima.",
          maximum: "Na skill máxima, a chance-base chega a 100%.",
          exact: "Ponto oficial em",
          interpolated: "Interpolado entre",
          aboveCap: "No último ponto oficial e acima dele, a chance permanece no teto publicado.",
          review: "A fonte oficial não publica uma chance para este ponto na prévia.",
          noPoint: "Não há percentual separado publicado para esta rolagem de Exceptional.",
        };

    function pointLabel(point) {
      return `${formatDobCraftSkill(point.skill)} (${formatDobCraftChance(point.chance)})`;
    }

    function updateCraftControl() {
      const selected = recipe.options[recipe.selectedIndex];
      const selectedSkill = Number(skill.value);
      const minimumSkill = Number(selected.dataset.craftMin);
      const maximumSkill = Math.min(Number(selected.dataset.craftMax), DOB_CRAFT_SKILL_LIMIT);
      const points = parseDobCraftPoints(selected.dataset.craftPoints);
      const exact = points.find((point) => Math.abs(point.skill - selectedSkill) < 0.051);
      const lower = points.filter((point) => point.skill < selectedSkill - 0.051).pop();
      const upper = points.find((point) => point.skill > selectedSkill + 0.051);

      skillValue.textContent = formatDobCraftSkill(selectedSkill);
      skillName.textContent = selected.dataset.craftSkill || "—";
      minimum.textContent = formatDobCraftSkill(minimumSkill);
      exceptional.textContent = selected.dataset.craftExceptional || copy.noPoint;
      chance.textContent = "—";

      if (selectedSkill < minimumSkill) {
        note.textContent = copy.belowMinimum;
        return;
      }

      if (points.length > 0 && exact) {
        chance.textContent = formatDobCraftChance(exact.chance);
        note.textContent = `${copy.exact} ${formatDobCraftSkill(exact.skill)}.`;
        return;
      }

      if (points.length > 0 && lower && upper && selected.dataset.craftInterpolate === "true") {
        const scalar = (selectedSkill - lower.skill) / (upper.skill - lower.skill);
        const interpolated = lower.chance + scalar * (upper.chance - lower.chance);
        chance.textContent = formatDobCraftChance(interpolated);
        note.textContent = `${copy.interpolated}: ${pointLabel(lower)} → ${pointLabel(upper)}.`;
        return;
      }

      if (points.length > 0 && lower && selected.dataset.craftTail === "cap") {
        const last = points[points.length - 1];
        chance.textContent = formatDobCraftChance(last.chance);
        note.textContent = copy.aboveCap;
        return;
      }

      if (points.length > 0) {
        note.textContent = copy.review;
        return;
      }

      const baseChance = Number(selected.dataset.craftBase || 0);
      if (selectedSkill >= maximumSkill) {
        chance.textContent = "100%";
        note.textContent = copy.maximum;
        return;
      }

      const scalar = (selectedSkill - minimumSkill) / (maximumSkill - minimumSkill);
      const linearChance = baseChance + scalar * (100 - baseChance);
      chance.textContent = formatDobCraftChance(linearChance);
      note.textContent = selectedSkill === minimumSkill ? copy.minimum : copy.interpolated;
    }

    recipe.addEventListener("change", updateCraftControl);
    skill.addEventListener("input", updateCraftControl);
    updateCraftControl();
  });
}

function normalizeDobCraftSearchValue(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function bindDobCraftSimulator() {
  document.querySelectorAll("[data-dob-craft-simulator]:not([data-dob-craft-simulator-bound])").forEach((simulator) => {
    simulator.dataset.dobCraftSimulatorBound = "true";

    const menuScreen = simulator.querySelector("[data-craft-sim-menu-screen]");
    const layout = simulator.querySelector('[data-craft-sim-screen="recipes"]');
    const workbench = simulator.querySelector("[data-craft-sim-workbench]");
    const simulatorSkill = simulator.dataset.craftSimSkill || "Craft";
    const openSectionButtons = Array.from(simulator.querySelectorAll("[data-craft-sim-open-section]"));
    const backButtons = Array.from(simulator.querySelectorAll("[data-craft-sim-back]"));
    const search = simulator.querySelector("[data-craft-sim-search]");
    const index = simulator.querySelector("[data-craft-sim-index]");
    const items = Array.from(simulator.querySelectorAll("[data-craft-sim-item]"));
    const empty = simulator.querySelector("[data-craft-sim-empty]");
    const count = simulator.querySelector("[data-craft-sim-count]");
    const categoryTitle = simulator.querySelector("[data-craft-sim-category-title]");
    const selectedName = simulator.querySelector("[data-craft-sim-selected-name]");
    const selectedGroup = simulator.querySelector("[data-craft-sim-selected-group]");
    const selectedRange = simulator.querySelector("[data-craft-sim-selected-range]");
    const material = simulator.querySelector("[data-craft-sim-material]");
    const armsLoreField = simulator.querySelector("[data-craft-sim-arms-lore-field]");
    const armsLore = simulator.querySelector("[data-craft-sim-arms-lore]");
    const armsLoreValue = simulator.querySelector("[data-craft-sim-arms-lore-value]");
    const materialStatic = simulator.querySelector("[data-craft-sim-material-static]");
    const materialNote = simulator.querySelector("[data-craft-sim-material-note]");
    const skill = simulator.querySelector("input[data-craft-sim-skill]");
    const skillValue = simulator.querySelector("[data-craft-sim-skill-value]");
    const ingredients = simulator.querySelector("[data-craft-sim-ingredients]");
    const skillName = simulator.querySelector("[data-craft-sim-skill-name]");
    const recipeMinimum = simulator.querySelector("[data-craft-sim-recipe-min]");
    const materialMinimum = simulator.querySelector("[data-craft-sim-material-min]");
    const requirements = simulator.querySelector("[data-craft-sim-requirements]");
    const itemEffect = simulator.querySelector("[data-craft-sim-effect]");
    const chance = simulator.querySelector("[data-craft-sim-chance]");
    const exceptional = simulator.querySelector("[data-craft-sim-exceptional]");
    const result = simulator.querySelector("[data-craft-sim-result]");
    const note = simulator.querySelector("[data-craft-sim-note]");

    if (!menuScreen || !layout || !workbench || !openSectionButtons.length || !backButtons.length ||
        !search || !index || !items.length || !empty || !count || !categoryTitle || !selectedName ||
        !selectedGroup || !selectedRange || (!material && !materialStatic) || !materialNote || !skill || !skillValue ||
        !ingredients || !skillName || !recipeMinimum || !materialMinimum || !chance || !exceptional || !result || !note) {
      return;
    }

    const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
    const copy = isEnglish
      ? {
          recipeCount: (value) => `${value} ${value === 1 ? "recipe" : "recipes"}`,
          fixedMaterial: "This recipe uses fixed ingredients; there is no main material to select.",
          fixedMaterialLabel: "Fixed ingredients",
          woodMaterialLabel: "Main wood",
          woodMaterial: "Selected wood only changes the resource and minimum selection skill; it is not a chance bonus.",
          leatherMaterialLabel: "Selected leather",
          leatherMaterial: "The selected leather sets the success curve. Exceptional depends on Arms Lore, before tool bonuses.",
          leatherStandard: "Selected leather changes the resource and its minimum selection skill, not this recipe's success curve.",
          leatherCurve: "Live leather curve; the recipe minimum does not override the leather minimum.",
          metalMaterialLabel: "Selected metal",
          metalMaterial: "The metal selected in the menu is preserved in the item's material and color; the official cost is listed below.",
          metalCurve: "Live success curve for the selected metal.",
          materialEligible: (name, value) => `${name} is selectable from ${formatDobCraftSkill(value)} ${simulatorSkill}.`,
          belowRecipe: "Below the recipe minimum: this item is not eligible.",
          belowMaterial: "Below the selected material minimum: this material cannot be selected at this skill.",
          baseMinimum: "Base chance at the recipe minimum.",
          maximum: "At the recipe maximum, the base chance reaches 100%.",
          interpolated: "Interpolated between the official endpoints.",
          exact: (value) => `Official point at ${formatDobCraftSkill(value)}.`,
          aboveCap: "At and above the last official point, the chance remains at the published cap.",
          review: "No chance is published for this skill point in the preview.",
          noCurve: "This entry has no chance curve to query.",
          unavailable: "This item appears in the menu, but crafting it is disabled on the live server.",
          toolEffectLabel: "DoB Tool family effect:",
          noSearchMatch: "No recipe matches the search.",
          toolEffects: {
            Enduring: "500 uses per gathering tool.",
            Light: "Lighter tool; 500 uses.",
            Hardened: "Doubles the tool's uses; 1,000 uses.",
            Tempered: "Lighter tool with double uses; 1,000 uses.",
            Artisan: "+10% Exceptional chance on applicable crafts.",
            Reliable: "+10% success chance. For gathering tools, this affects only the final Mining or Lumberjacking roll.",
            Refined: "+10% success chance and +10% Exceptional chance on applicable crafts.",
          },
          defaultTitle: "Full index",
        }
      : {
          recipeCount: (value) => `${value} ${value === 1 ? "receita" : "receitas"}`,
          fixedMaterial: "Esta receita usa ingredientes fixos; não há material principal para selecionar.",
          fixedMaterialLabel: "Ingredientes fixos",
          woodMaterialLabel: "Madeira principal",
          woodMaterial: "A madeira só muda o recurso e a skill mínima de seleção; não é bônus de chance.",
          leatherMaterialLabel: "Couro selecionado",
          leatherMaterial: "O couro define a curva de sucesso. Exceptional depende de Arms Lore, antes de bônus de ferramenta.",
          leatherStandard: "O couro muda o recurso e a skill mínima de seleção, não a curva de sucesso desta receita.",
          leatherCurve: "Curva live do couro; a mínima da receita não substitui a mínima do couro.",
          metalMaterialLabel: "Metal selecionado",
          metalMaterial: "O metal escolhido no menu é preservado no material e na cor do item; o custo oficial aparece abaixo.",
          metalCurve: "Curva de sucesso live do metal selecionado.",
          materialEligible: (name, value) => `${name} pode ser selecionado a partir de ${formatDobCraftSkill(value)} de ${simulatorSkill}.`,
          belowRecipe: "Abaixo da skill mínima da receita: este item não está elegível.",
          belowMaterial: "Abaixo da skill mínima do material: este material não pode ser selecionado nesta skill.",
          baseMinimum: "Chance-base na skill mínima da receita.",
          maximum: "Na skill máxima da receita, a chance-base chega a 100%.",
          interpolated: "Interpolado entre os pontos oficiais.",
          exact: (value) => `Ponto oficial em ${formatDobCraftSkill(value)}.`,
          aboveCap: "No último ponto oficial e acima dele, a chance permanece no teto publicado.",
          review: "A fonte oficial não publica uma chance para este ponto na prévia.",
          noCurve: "Esta entrada não possui curva de chance para consulta.",
          unavailable: "Este item aparece no menu, mas sua fabricação está bloqueada no servidor live.",
          toolEffectLabel: "Efeito da família DoB Tool:",
          noSearchMatch: "Nenhuma receita corresponde à busca.",
          toolEffects: {
            Enduring: "500 usos por ferramenta de coleta.",
            Light: "Ferramenta mais leve; 500 usos.",
            Hardened: "Duplica os usos da ferramenta; 1.000 usos.",
            Tempered: "Ferramenta mais leve e com o dobro de usos; 1.000 usos.",
            Artisan: "+10% de chance de Exceptional em crafts aplicáveis.",
            Reliable: "+10% de chance de sucesso. Em ferramentas de coleta, afeta somente a rolagem final de Mining ou Lumberjacking.",
            Refined: "+10% de chance de sucesso e +10% de Exceptional em crafts aplicáveis.",
          },
          defaultTitle: "Índice completo",
        };

    const toolEffectField = document.createElement("div");
    toolEffectField.hidden = true;
    toolEffectField.dataset.craftSimToolEffect = "";
    const toolEffectLabel = document.createElement("span");
    toolEffectLabel.textContent = copy.toolEffectLabel;
    const toolEffectValue = document.createElement("strong");
    toolEffectField.append(toolEffectLabel, toolEffectValue);
    result.append(toolEffectField);
    empty.textContent = copy.noSearchMatch;

    const legacySectionIds = {
      materials: ["elven-fletching", "kindling", "shaft", "arrow", "bolt", "fukiya-darts"],
      bows: ["bow", "crossbow", "heavy-crossbow", "composite-bow", "repeating-crossbow", "yumi", "elven-composite-longbow", "magical-shortbow"],
      dob: ["fire-bow", "elven-bow", "blight-gripped-longbow", "faerie-fire", "silvanis-feywood-bow", "mischief-maker", "the-night-reaper", "barbed-longbow", "slayer-longbow", "frozen-longbow", "longbow-of-might", "rangers-shortbow", "lightweight-shortbow", "mystical-shortbow", "assassins-shortbow"],
    };

    const sectionIds = {};
    items.forEach((item) => {
      const sectionId = item.dataset.craftSimSection;
      if (!sectionId) {
        return;
      }

      sectionIds[sectionId] = sectionIds[sectionId] || [];
      sectionIds[sectionId].push(item.dataset.craftItemId);
    });

    if (Object.keys(sectionIds).length === 0) {
      Object.assign(sectionIds, legacySectionIds);
    }

    let selectedItem = null;
    let currentSection = "all";

    function selectedMaterialOption() {
      return material ? material.options[material.selectedIndex] || null : null;
    }

    function selectedMaterialMinimum(item) {
      if (!["wood", "leather", "metal-standard", "metal-policy"].includes(item.dataset.craftMaterialMode)) {
        return null;
      }

      const materialMinimum = Number(selectedMaterialOption()?.dataset.craftMaterialMin || 0);
      return item.dataset.craftMaterialMode === "metal-policy"
        ? Math.max(50, materialMinimum)
        : materialMinimum;
    }

    function updateIngredients(item) {
      const mode = item.dataset.craftMaterialMode;

      if (mode === "leather") {
        const selectedOption = selectedMaterialOption();
        const amount = Number(item.dataset.craftLeatherAmount || 0);
        const name = amount === 1
          ? selectedOption?.dataset.craftMaterialName
          : selectedOption?.dataset.craftMaterialPlural;
        ingredients.textContent = amount > 0 && name ? `${amount} ${name}` : "—";
        return;
      }

      if (mode === "metal-standard" || mode === "metal-policy") {
        const option = selectedMaterialOption();
        const original = item.dataset.craftMaterials || "";
        const iron = /^(\d+) Iron Ingot(?:s)?(.*)$/.exec(original);
        const amount = iron ? Number(iron[1]) : Number(item.dataset.craftMetalAmount || 0);
        const extra = iron ? iron[2] : "";
        ingredients.textContent = amount > 0 && option
          ? `${amount} ${option.dataset.craftMaterialPlural || "Ingots"}${extra}`
          : "—";
        return;
      }

      if (mode !== "wood") {
        ingredients.textContent = item.dataset.craftMaterials || "—";
        return;
      }

      const selectedOption = selectedMaterialOption();
      const amount = Number(item.dataset.craftWoodAmount || 0);
      const materialName = amount === 1
        ? selectedOption?.dataset.craftMaterialName
        : selectedOption?.dataset.craftMaterialPlural;
      const parts = [];

      if (amount > 0 && materialName) {
        parts.push(`${amount} ${materialName}`);
      }

      if (item.dataset.craftFixedMaterials) {
        parts.push(item.dataset.craftFixedMaterials);
      }

      ingredients.textContent = parts.join(" + ") || "—";
    }

    function updateMaterialState(item) {
      const materialMode = item.dataset.craftMaterialMode;
      const isWood = materialMode === "wood";
      const isMetal = materialMode === "metal-standard" || materialMode === "metal-policy";
      const isLeather = materialMode === "leather";
      const isLeatherArmor = item.dataset.craftFormula === "leather";
      if (material) {
        material.disabled = !(isWood || isLeather || isMetal);
        material.hidden = !(isWood || isLeather || isMetal);
      }

      if (armsLoreField) {
        armsLoreField.hidden = !isLeatherArmor;
      }

      if (materialStatic) {
        materialStatic.textContent = isWood
          ? copy.woodMaterialLabel
          : isLeather
            ? copy.leatherMaterialLabel
          : isMetal
            ? copy.metalMaterialLabel
            : copy.fixedMaterialLabel;
      }

      materialNote.textContent = isWood
        ? copy.woodMaterial
        : isLeather
          ? (isLeatherArmor ? copy.leatherMaterial : copy.leatherStandard)
        : isMetal
          ? copy.metalMaterial
          : copy.fixedMaterial;
    }

    function updateSliderLimit(item) {
      const sliderMaximum = Number(item.dataset.craftSliderMax || simulator.dataset.craftSimSliderMax || DOB_CRAFT_SKILL_LIMIT);
      const currentSkill = Math.min(Number(skill.value), sliderMaximum);

      skill.max = String(sliderMaximum);
      skill.value = currentSkill.toFixed(1);
    }

    function updateSearchResults() {
      const query = normalizeDobCraftSearchValue(search.value);
      const allowedIds = currentSection === "all" ? null : new Set(sectionIds[currentSection] || []);
      let visible = 0;

      items.forEach((item) => {
        const searchableMaterials = item.dataset.craftMaterialMode === "wood"
          ? "Board Boards Oak Board Oak Boards Ash Board Ash Boards Yew Board Yew Boards Heartwood Board Heartwood Boards Bloodwood Board Bloodwood Boards Frostwood Board Frostwood Boards"
          : "";
        const searchText = normalizeDobCraftSearchValue([
          item.dataset.craftItemName,
          item.dataset.craftGroup,
          item.dataset.craftMaterials,
          item.dataset.craftFixedMaterials,
          item.dataset.craftRequirements,
          item.dataset.craftEffect,
          searchableMaterials,
          item.textContent,
        ].join(" "));
        const matchesSection = !allowedIds || allowedIds.has(item.dataset.craftItemId);
        const matches = matchesSection && (!query || searchText.includes(query));

        item.hidden = !matches;
        if (matches) {
          visible += 1;
        }
      });

      count.textContent = copy.recipeCount(visible);
      empty.hidden = visible > 0;
    }

    function setScreen(screen) {
      menuScreen.hidden = screen !== "menu";
      layout.hidden = screen === "menu";
      workbench.hidden = screen !== "workbench";
      layout.classList.toggle("has-workbench", screen === "workbench");
    }

    function openSection(button) {
      currentSection = button.dataset.craftSimOpenSection || "all";
      categoryTitle.textContent = button.dataset.craftSimSectionTitle || copy.defaultTitle;
      search.value = "";
      updateSearchResults();
      setScreen("recipes");
    }

    function updateSimulator() {
      if (!selectedItem) {
        return;
      }

      const family = selectedItem.dataset.craftSimSection === "dob-tools"
        ? (selectedItem.dataset.craftItemName || "").trim().split(/\s+/, 1)[0]
        : "";
      const effect = copy.toolEffects[family];
      toolEffectField.hidden = !effect;
      toolEffectValue.textContent = effect || "";
      const selectedSkill = Number(skill.value);
      skillValue.textContent = formatDobCraftSkill(selectedSkill);

      const minimumSkill = Number(selectedItem.dataset.craftMin);
      const maximumSkill = Number(selectedItem.dataset.craftMax);
      const selectedMaterialMin = selectedMaterialMinimum(selectedItem);
      const points = parseDobCraftPoints(selectedItem.dataset.craftPoints, Number(skill.max));
      const exact = points.find((point) => Math.abs(point.skill - selectedSkill) < 0.051);
      const lower = points.filter((point) => point.skill < selectedSkill - 0.051).pop();
      const upper = points.find((point) => point.skill > selectedSkill + 0.051);

      skillValue.textContent = formatDobCraftSkill(selectedSkill);
      const skillLabel = selectedItem.dataset.craftSkill || simulatorSkill;
      skillName.textContent = skillLabel;
      recipeMinimum.textContent = formatDobCraftSkill(minimumSkill);
      materialMinimum.textContent = selectedMaterialMin === null
        ? "—"
        : formatDobCraftSkill(selectedMaterialMin);
      const updateExceptional = (successChance) => {
        if (selectedItem.dataset.craftExceptionalMode === "fifty-minus-ten") {
          exceptional.textContent = successChance === null
            ? "—"
            : formatDobCraftChance(Math.max(0, Math.min(100, successChance * 50 - 10)));
          return;
        }

        if (selectedItem.dataset.craftExceptionalMode === "chance-minus-sixty") {
          exceptional.textContent = successChance === null
            ? "—"
            : formatDobCraftChance(Math.max(0, Math.min(100, (successChance - 0.60) * 100)));
          return;
        }

        if (selectedItem.dataset.craftExceptionalMode === "chance-minus-sixty-to-fourty-five") {
          if (successChance === null) {
            exceptional.textContent = "—";
            return;
          }

          let offset = 0.60 - (selectedSkill - 95.0) * 0.03;
          offset = Math.max(0.45, Math.min(0.60, offset));
          exceptional.textContent = formatDobCraftChance(Math.max(0, Math.min(100, (successChance - offset) * 100)));
          return;
        }

        exceptional.textContent = selectedItem.dataset.craftExceptional || "—";
      };

      updateExceptional(null);
      updateIngredients(selectedItem);
      if (requirements) {
        const value = selectedItem.dataset.craftRequirements || "";
        requirements.textContent = value;
        requirements.parentElement.hidden = !value;
      }
      if (itemEffect) {
        const value = selectedItem.dataset.craftEffect || "";
        itemEffect.textContent = value;
        itemEffect.parentElement.hidden = !value;
      }
      chance.textContent = "—";

      if (selectedItem.dataset.craftUnavailable === "true") {
        note.textContent = copy.unavailable;
        return;
      }

      if (selectedItem.dataset.craftFormula === "leather") {
        const option = selectedMaterialOption();
        const required = Number(option?.dataset.craftMaterialMin);
        const at100 = Number(option?.getAttribute("data-craft-leather-at-100"));
        const full = Number(option?.dataset.craftLeatherFull);
        const lore = Math.max(0, Math.min(150, Number(armsLore?.value || 0)));
        if (armsLoreValue) armsLoreValue.textContent = formatDobCraftSkill(lore);
        selectedRange.textContent = `${formatDobCraftSkill(required)}–${formatDobCraftSkill(Math.min(full, Number(skill.max)))} ${skillLabel}`;
        if (!option || selectedSkill < required) {
          note.textContent = copy.belowMaterial;
          return;
        }
        const success = selectedSkill <= 100
          ? 20 + (selectedSkill - required) / (100 - required) * (at100 - 20)
          : selectedSkill >= full
            ? 100
            : at100 + (selectedSkill - 100) / (full - 100) * (100 - at100);
        const exceptionalChance = lore <= 100 ? lore * 0.75 : 75 + (lore - 100) * 0.30;
        chance.textContent = formatDobCraftChance(success);
        exceptional.textContent = formatDobCraftChance(exceptionalChance);
        note.textContent = copy.leatherCurve;
        return;
      }

      if (selectedItem.dataset.craftFormula === "metal-policy") {
        const option = selectedMaterialOption();
        const required = selectedMaterialMinimum(selectedItem);
        const full = Number(option?.dataset.craftMetalFull);
        selectedRange.textContent = `${formatDobCraftSkill(required)}–${formatDobCraftSkill(full)} ${skillLabel}`;
        if (!option || selectedSkill < required) {
          note.textContent = copy.belowMaterial;
          return;
        }
        const success = selectedSkill >= full ? 100 : (selectedSkill - required) / (full - required) * 100;
        chance.textContent = formatDobCraftChance(success);
        updateExceptional(success / 100);
        note.textContent = copy.metalCurve;
        return;
      }

      if (selectedSkill < minimumSkill) {
        note.textContent = copy.belowRecipe;
        return;
      }

      if (selectedMaterialMin !== null && selectedSkill < selectedMaterialMin) {
        note.textContent = copy.belowMaterial;
        return;
      }

      if (selectedItem.dataset.craftFormula === "fixed") {
        note.textContent = copy.noCurve;
        return;
      }

      if (selectedItem.dataset.craftFormula === "review") {
        note.textContent = copy.review;
        return;
      }

      if (points.length > 0 && exact) {
        chance.textContent = formatDobCraftChance(exact.chance);
        updateExceptional(exact.chance / 100);
        note.textContent = copy.exact(exact.skill);
        return;
      }

      if (points.length > 0 && lower && upper && selectedItem.dataset.craftInterpolate === "true") {
        const scalar = (selectedSkill - lower.skill) / (upper.skill - lower.skill);
        const interpolated = lower.chance + scalar * (upper.chance - lower.chance);
        chance.textContent = formatDobCraftChance(interpolated);
        updateExceptional(interpolated / 100);
        note.textContent = copy.interpolated;
        return;
      }

      if (points.length > 0 && lower && selectedItem.dataset.craftTail === "cap") {
        const last = points[points.length - 1];
        chance.textContent = formatDobCraftChance(last.chance);
        updateExceptional(last.chance / 100);
        note.textContent = copy.aboveCap;
        return;
      }

      if (points.length > 0) {
        note.textContent = copy.review;
        return;
      }

      const baseChance = Number(selectedItem.dataset.craftBase || 0);
      if (selectedSkill >= maximumSkill) {
        chance.textContent = "100%";
        updateExceptional(1);
        note.textContent = copy.maximum;
        return;
      }

      const scalar = (selectedSkill - minimumSkill) / (maximumSkill - minimumSkill);
      const linearChance = baseChance + scalar * (100 - baseChance);
      chance.textContent = formatDobCraftChance(linearChance);
      updateExceptional(linearChance / 100);
      note.textContent = selectedSkill === minimumSkill ? copy.baseMinimum : copy.interpolated;
    }

    function selectItem(item) {
      selectedItem = item;
      items.forEach((candidate) => {
        const isSelected = candidate === item;
        candidate.setAttribute("aria-selected", isSelected ? "true" : "false");
        candidate.classList.toggle("is-selected", isSelected);
      });

      selectedName.textContent = item.dataset.craftItemName || "—";
      selectedGroup.textContent = item.dataset.craftGroup || "—";
      const skillLabel = item.dataset.craftSkill || simulatorSkill;
      selectedRange.textContent = `${formatDobCraftSkill(item.dataset.craftMin)}–${formatDobCraftSkill(Math.min(Number(item.dataset.craftMax), Number(item.dataset.craftSliderMax || DOB_CRAFT_SKILL_LIMIT)))} ${skillLabel}`;
      updateSliderLimit(item);
      updateMaterialState(item);
      updateSimulator();
    }

    openSectionButtons.forEach((button) => button.addEventListener("click", () => openSection(button)));
    backButtons.forEach((button) => button.addEventListener("click", () => {
      if (button.dataset.craftSimBack === "menu") {
        setScreen("menu");
        return;
      }

      setScreen("recipes");
    }));
    items.forEach((item) => item.addEventListener("click", () => {
      selectItem(item);
      setScreen("workbench");
    }));
    search.addEventListener("input", updateSearchResults);
    material?.addEventListener("change", updateSimulator);
    skill.addEventListener("input", updateSimulator);
    armsLore?.addEventListener("input", updateSimulator);

    items.forEach((item) => {
      item.hidden = true;
      item.setAttribute("aria-selected", "false");
    });
    categoryTitle.textContent = copy.defaultTitle;
    setScreen("menu");
  });
}

function bindDobNavigation() {
  document.body.classList.remove("dob-atlas-nav-open");

  const nav = document.querySelector(".dob-atlas-nav");

  if (!nav) {
    return;
  }

  const triggers = Array.from(nav.querySelectorAll("[data-dob-nav-target]"));
  const panels = Array.from(nav.querySelectorAll("[data-dob-nav-panel]"));
  const panelContainer = nav.querySelector("[data-dob-nav-panels]");

  function closeNavigation() {
    document.body.classList.remove("dob-atlas-nav-open");
    if (panelContainer) {
      panelContainer.hidden = true;
    }
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    panels.forEach((panel) => {
      panel.hidden = true;
    });
  }

  triggers.forEach((trigger) => {
    if (trigger.dataset.dobAtlasBound === "true") {
      return;
    }

    trigger.dataset.dobAtlasBound = "true";
    trigger.addEventListener("click", () => {
      const targetId = trigger.dataset.dobNavTarget;
      const target = document.getElementById(targetId);
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";

      closeNavigation();

      if (!shouldOpen || !target) {
        return;
      }

      document.body.classList.add("dob-atlas-nav-open");
      if (panelContainer) {
        panelContainer.hidden = false;
      }
      trigger.setAttribute("aria-expanded", "true");
      target.hidden = false;
    });
  });

  nav.querySelectorAll("[data-dob-nav-close]").forEach((button) => {
    if (button.dataset.dobAtlasBound === "true") {
      return;
    }

    button.dataset.dobAtlasBound = "true";
    button.addEventListener("click", closeNavigation);
  });

  nav.querySelectorAll(".dob-atlas-mobile details").forEach((details) => {
    if (details.dataset.dobAtlasBound === "true") {
      return;
    }

    details.dataset.dobAtlasBound = "true";
    details.addEventListener("toggle", () => {
      if (!details.open) {
        return;
      }

      const parentList = details.parentElement?.parentElement;

      if (!parentList) {
        return;
      }

      Array.from(parentList.children).forEach((item) => {
        const other = item.firstElementChild;

        if (other?.tagName === "DETAILS" && other !== details) {
          other.open = false;
        }
      });
    });
  });

  if (document.body.dataset.dobNavEscapeBound !== "true") {
    document.body.dataset.dobNavEscapeBound = "true";
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const drawerToggle = document.querySelector("#__drawer");

        if (drawerToggle?.checked) {
          drawerToggle.checked = false;
          drawerToggle.dispatchEvent(new Event("change", { bubbles: true }));
        }

        document.body.classList.remove("dob-atlas-nav-open");
        document.querySelectorAll("[data-dob-nav-target]").forEach((trigger) => {
          trigger.setAttribute("aria-expanded", "false");
        });
        document.querySelectorAll("[data-dob-nav-panel]").forEach((panel) => {
          panel.hidden = true;
        });
        document.querySelectorAll("[data-dob-nav-panels]").forEach((container) => {
          container.hidden = true;
        });
        document.querySelectorAll(".dob-atlas-mobile details[open]").forEach((details) => {
          details.open = false;
        });
      }
    });
  }
}

function bindDobUi() {
  const homeMockup = new URLSearchParams(window.location.search).get("mockup");
  if (["cinema", "hud", "cronica"].includes(homeMockup)) {
    document.documentElement.dataset.dobHomeMockup = homeMockup;
  } else {
    delete document.documentElement.dataset.dobHomeMockup;
  }

  bindDobHome();
  bindDobSearchShortcut();
  personalizeDobSearch();
  bindDobPlayerCount();
  bindDobNavigation();
  bindDobCraftControls();
  bindDobCraftSimulator();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobUi);
} else {
  document.addEventListener("DOMContentLoaded", bindDobUi);
}
