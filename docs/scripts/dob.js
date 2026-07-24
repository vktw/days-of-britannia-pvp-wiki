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

function bindDobNavigation() {
  const selector = ".md-nav--primary > .md-nav__list > .md-nav__item--nested > .md-nav__toggle";
  const toggles = Array.from(document.querySelectorAll(selector));

  toggles.forEach((toggle) => {
    if (toggle.dataset.dobAccordionBound === "true") {
      return;
    }

    toggle.dataset.dobAccordionBound = "true";
    toggle.addEventListener("change", () => {
      if (!toggle.checked) {
        return;
      }

      toggles.forEach((other) => {
        if (other !== toggle) {
          other.checked = false;
        }
      });
    });
  });
}

function bindDobUi() {
  bindDobHome();
  bindDobNavigation();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobUi);
} else {
  document.addEventListener("DOMContentLoaded", bindDobUi);
}
