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

function formatDobCraftSkill(value) {
  return Number(value).toFixed(1);
}

function formatDobCraftChance(value) {
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

const DOB_CRAFT_SKILL_LIMIT = 105.0;

function parseDobCraftPoints(value) {
  return String(value || "")
    .split("|")
    .map((point) => {
      const [skill, chance] = point.split(":").map(Number);
      return { skill, chance };
    })
    .filter((point) => Number.isFinite(point.skill) && Number.isFinite(point.chance) && point.skill <= DOB_CRAFT_SKILL_LIMIT)
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
    const materialStatic = simulator.querySelector("[data-craft-sim-material-static]");
    const materialNote = simulator.querySelector("[data-craft-sim-material-note]");
    const skill = simulator.querySelector("input[data-craft-sim-skill]");
    const skillValue = simulator.querySelector("[data-craft-sim-skill-value]");
    const ingredients = simulator.querySelector("[data-craft-sim-ingredients]");
    const skillName = simulator.querySelector("[data-craft-sim-skill-name]");
    const recipeMinimum = simulator.querySelector("[data-craft-sim-recipe-min]");
    const materialMinimum = simulator.querySelector("[data-craft-sim-material-min]");
    const chance = simulator.querySelector("[data-craft-sim-chance]");
    const exceptional = simulator.querySelector("[data-craft-sim-exceptional]");
    const note = simulator.querySelector("[data-craft-sim-note]");

    if (!menuScreen || !layout || !workbench || !openSectionButtons.length || !backButtons.length ||
        !search || !index || !items.length || !empty || !count || !categoryTitle || !selectedName ||
        !selectedGroup || !selectedRange || (!material && !materialStatic) || !materialNote || !skill || !skillValue ||
        !ingredients || !skillName || !recipeMinimum || !materialMinimum || !chance || !exceptional || !note) {
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
          materialEligible: (name, value) => `${name} is selectable from ${formatDobCraftSkill(value)} Fletching.`,
          belowRecipe: "Below the recipe minimum: this item is not eligible.",
          belowMaterial: "Below the selected material minimum: this material cannot be selected at this skill.",
          baseMinimum: "Base chance at the recipe minimum.",
          maximum: "At the recipe maximum, the base chance reaches 100%.",
          interpolated: "Interpolated between the official endpoints.",
          exact: (value) => `Official point at ${formatDobCraftSkill(value)}.`,
          aboveCap: "At and above the last official point, the chance remains at the published cap.",
          review: "No chance is published for this skill point in the preview.",
          noCurve: "This entry has no chance curve to query.",
          defaultTitle: "Full index",
        }
      : {
          recipeCount: (value) => `${value} ${value === 1 ? "receita" : "receitas"}`,
          fixedMaterial: "Esta receita usa ingredientes fixos; não há material principal para selecionar.",
          fixedMaterialLabel: "Ingredientes fixos",
          woodMaterialLabel: "Madeira principal",
          woodMaterial: "A madeira só muda o recurso e a skill mínima de seleção; não é bônus de chance.",
          materialEligible: (name, value) => `${name} pode ser selecionado a partir de ${formatDobCraftSkill(value)} de Fletching.`,
          belowRecipe: "Abaixo da skill mínima da receita: este item não está elegível.",
          belowMaterial: "Abaixo da skill mínima do material: este material não pode ser selecionado nesta skill.",
          baseMinimum: "Chance-base na skill mínima da receita.",
          maximum: "Na skill máxima da receita, a chance-base chega a 100%.",
          interpolated: "Interpolado entre os pontos oficiais.",
          exact: (value) => `Ponto oficial em ${formatDobCraftSkill(value)}.`,
          aboveCap: "No último ponto oficial e acima dele, a chance permanece no teto publicado.",
          review: "A fonte oficial não publica uma chance para este ponto na prévia.",
          noCurve: "Esta entrada não possui curva de chance para consulta.",
          defaultTitle: "Índice completo",
        };

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
      if (item.dataset.craftMaterialMode !== "wood") {
        return null;
      }

      return Number(selectedMaterialOption()?.dataset.craftMaterialMin || 0);
    }

    function updateIngredients(item) {
      const mode = item.dataset.craftMaterialMode;

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
      const isWood = item.dataset.craftMaterialMode === "wood";
      if (material) {
        material.disabled = !isWood;
      }

      if (materialStatic) {
        materialStatic.textContent = isWood ? copy.woodMaterialLabel : copy.fixedMaterialLabel;
      }

      materialNote.textContent = isWood ? copy.woodMaterial : copy.fixedMaterial;
    }

    function updateSliderLimit(item) {
      const configuredMaximum = Math.min(Number(item.dataset.craftSliderMax || simulator.dataset.craftSimSliderMax || 150), DOB_CRAFT_SKILL_LIMIT);
      const sliderMaximum = Math.min(DOB_CRAFT_SKILL_LIMIT, Math.max(configuredMaximum, Number(item.dataset.craftMax || 0)));
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

      const selectedSkill = Number(skill.value);
      const minimumSkill = Number(selectedItem.dataset.craftMin);
      const maximumSkill = Number(selectedItem.dataset.craftMax);
      const selectedMaterialMin = selectedMaterialMinimum(selectedItem);
      const points = parseDobCraftPoints(selectedItem.dataset.craftPoints);
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
      exceptional.textContent = selectedItem.dataset.craftExceptional || "—";
      updateIngredients(selectedItem);
      chance.textContent = "—";

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
        note.textContent = copy.exact(exact.skill);
        return;
      }

      if (points.length > 0 && lower && upper && selectedItem.dataset.craftInterpolate === "true") {
        const scalar = (selectedSkill - lower.skill) / (upper.skill - lower.skill);
        const interpolated = lower.chance + scalar * (upper.chance - lower.chance);
        chance.textContent = formatDobCraftChance(interpolated);
        note.textContent = copy.interpolated;
        return;
      }

      if (points.length > 0 && lower && selectedItem.dataset.craftTail === "cap") {
        const last = points[points.length - 1];
        chance.textContent = formatDobCraftChance(last.chance);
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
        note.textContent = copy.maximum;
        return;
      }

      const scalar = (selectedSkill - minimumSkill) / (maximumSkill - minimumSkill);
      const linearChance = baseChance + scalar * (100 - baseChance);
      chance.textContent = formatDobCraftChance(linearChance);
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
      selectedRange.textContent = `${formatDobCraftSkill(item.dataset.craftMin)}–${formatDobCraftSkill(Math.min(Number(item.dataset.craftMax), DOB_CRAFT_SKILL_LIMIT))} ${skillLabel}`;
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

      nav.querySelectorAll(".dob-atlas-mobile details").forEach((other) => {
        if (other !== details) {
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
      }
    });
  }
}

function bindDobUi() {
  bindDobHome();
  bindDobSearchShortcut();
  personalizeDobSearch();
  bindDobNavigation();
  bindDobCraftControls();
  bindDobCraftSimulator();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobUi);
} else {
  document.addEventListener("DOMContentLoaded", bindDobUi);
}
