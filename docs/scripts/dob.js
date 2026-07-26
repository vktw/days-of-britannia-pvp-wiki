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
    input.placeholder = "Buscar no códice";
  }
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
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobUi);
} else {
  document.addEventListener("DOMContentLoaded", bindDobUi);
}
