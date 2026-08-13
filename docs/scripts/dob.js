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

function parseDobCraftPoints(value) {
  return String(value || "")
    .split("|")
    .map((point) => {
      const [skill, chance] = point.split(":").map(Number);
      return { skill, chance };
    })
    .filter((point) => Number.isFinite(point.skill) && Number.isFinite(point.chance))
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
          exact: "Official point at",
          between: "The selected skill is between the official points",
          aboveCap: "At and above the last official point, the chance remains at the published cap.",
          review: "The next curve point is not displayed in this preview; no interpolation was created.",
          noPoint: "No separate percentage is published for this Exceptional roll.",
        }
      : {
          belowMinimum: "Abaixo da skill mínima: a receita não está elegível.",
          exact: "Ponto oficial em",
          between: "A skill escolhida está entre os pontos oficiais",
          aboveCap: "No último ponto oficial e acima dele, a chance permanece no teto publicado.",
          review: "O próximo ponto da curva não é exibido nesta prévia; nenhuma interpolação foi criada.",
          noPoint: "Não há percentual separado publicado para esta rolagem de Exceptional.",
        };

    function pointLabel(point) {
      return `${formatDobCraftSkill(point.skill)} (${formatDobCraftChance(point.chance)})`;
    }

    function updateCraftControl() {
      const selected = recipe.options[recipe.selectedIndex];
      const selectedSkill = Number(skill.value);
      const minimumSkill = Number(selected.dataset.craftMin);
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

      if (exact) {
        chance.textContent = formatDobCraftChance(exact.chance);
        note.textContent = `${copy.exact} ${formatDobCraftSkill(exact.skill)}.`;
        return;
      }

      if (lower && upper) {
        note.textContent = `${copy.between}: ${pointLabel(lower)} → ${pointLabel(upper)}.`;
        return;
      }

      if (lower && selected.dataset.craftTail === "cap") {
        const last = points[points.length - 1];
        chance.textContent = formatDobCraftChance(last.chance);
        note.textContent = copy.aboveCap;
        return;
      }

      note.textContent = copy.review;
    }

    recipe.addEventListener("change", updateCraftControl);
    skill.addEventListener("input", updateCraftControl);
    updateCraftControl();
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
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobUi);
} else {
  document.addEventListener("DOMContentLoaded", bindDobUi);
}
