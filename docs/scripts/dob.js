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

if (typeof document$ !== "undefined") {
  document$.subscribe(bindDobHome);
} else {
  document.addEventListener("DOMContentLoaded", bindDobHome);
}
