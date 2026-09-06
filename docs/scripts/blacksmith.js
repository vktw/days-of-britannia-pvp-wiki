/* Player-facing Blacksmithy simulator. Published points are bounded to 0–105. */
(() => {
  function bindBlacksmith() {
    document.querySelectorAll("[data-smith-simulator]").forEach((root) => {
      if (root.dataset.bound) return;
      root.dataset.bound = "true";
      const q = (name) => root.querySelector("[data-smith-" + name + "]");
      const en = document.documentElement.lang.toLowerCase().startsWith("en");
      const say = (pt, english) => en ? english : pt;
      const items = Array.from(root.querySelectorAll("[data-smith-item]"));
      const metal = q("metal"), skill = q("skill"), lore = q("lore");
      let category = "all", selected = null;
      const points = (text) => text.split("|").filter(Boolean).map((p) => p.split(":").map(Number));
      const percent = (value) => Number(value.toFixed(2)) + "%";
      function interpolate(curve, value) {
        if (value < curve[0][0]) return 0;
        for (let i = 1; i < curve.length; i++) {
          if (value <= curve[i][0]) {
            const [x0, y0] = curve[i - 1], [x1, y1] = curve[i];
            return y0 + (value - x0) / (x1 - x0) * (y1 - y0);
          }
        }
        return curve[curve.length - 1][1];
      }
      function screen(name) {
        q("menu").hidden = name !== "menu";
        q("submenu").hidden = name !== "submenu";
        q("layout").hidden = name === "menu" || name === "submenu";
        q("workbench").hidden = name !== "workbench";
        q("layout").classList.toggle("has-workbench", name === "workbench");
      }
      function filter() {
        const query = q("search").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let count = 0;
        items.forEach((item) => {
          const data = item.dataset;
          const materials = data.selectMetal === "true" ? Array.from(metal.options).map((o) => o.value).join(" ") : data.metal;
          const text = (data.name + " " + data.group + " " + materials).toLowerCase();
          item.hidden = (category !== "all" && data.section !== category) || !text.includes(query);
          if (!item.hidden) count++;
        });
        q("count").textContent = count + (count === 1 ? say(" receita", " recipe") : say(" receitas", " recipes"));
        q("empty").hidden = count !== 0;
      }
      function update() {
        if (!selected) return;
        const data = selected.dataset;
        const value = Math.max(0, Math.min(105, Number(skill.value)));
        const arms = Math.max(0, Math.min(105, Number(lore.value)));
        const option = metal.options[metal.selectedIndex];
        const special = data.selectMetal === "true" && metal.value !== "Iron";
        const curve = points(special ? option.dataset.points : data.points);
        const chance = interpolate(curve, value);
        q("skill-value").textContent = value.toFixed(1);
        q("lore-value").textContent = arms.toFixed(1);
        q("min").textContent = curve[0][0].toFixed(1);
        q("ingredients").textContent = data.amount + " " + metal.value + " Ingots";
        q("chance").textContent = percent(chance);
        const exceptional = arms <= 100 ? arms * 0.75 : 75 + (arms - 100) * 0.3;
        q("exceptional").textContent = percent(exceptional);
        q("material-note").textContent = data.selectMetal === "true"
          ? say("Iron usa a curva da peça. Metais especiais usam a curva do metal para todas as peças.", "Iron uses the piece's curve. Special metals use the metal curve for all pieces.")
          : say("Esta receita utiliza somente o material indicado.", "This recipe only uses the indicated material.");
        q("note").textContent = value < curve[0][0]
          ? say("Skill insuficiente para este material e receita.", "Insufficient skill for this material and recipe.")
          : say("Exceptional é uma segunda rolagem, feita somente após produzir o item com sucesso.", "Exceptional is a second roll, made only after successfully producing the item.");
      }
      root.querySelectorAll("[data-smith-category]").forEach((button) => {
        button.addEventListener("click", () => {
          category = button.dataset.smithCategory;
          if (category === "dob-weapons") {
            screen("submenu");
            return;
          }
          q("category-title").textContent = category === "all"
            ? say("Índice completo", "Full index")
            : button.querySelector("strong").textContent;
          q("search").value = "";
          filter();
          screen("recipes");
          q("search").focus({ preventScroll: true });
        });
      });
      items.forEach((item) => {
        item.addEventListener("click", () => {
          selected = item;
          items.forEach((other) => {
            other.setAttribute("aria-selected", String(other === item));
            other.classList.toggle("is-selected", other === item);
          });
          q("name").textContent = item.dataset.name;
          q("group").textContent = item.dataset.group;
          metal.disabled = item.dataset.selectMetal !== "true";
          if (metal.disabled) metal.value = item.dataset.metal;
          update();
          screen("workbench");
        });
      });
      root.querySelectorAll("[data-smith-back]").forEach((button) => {
        button.addEventListener("click", () => {
          const dest = button.dataset.smithBack;
          screen(dest === "menu" ? "menu" : dest === "recipes" ? "recipes"
            : ["bloodrock", "blackrock"].includes(category) ? "submenu" : "menu");
        });
      });
      q("search").addEventListener("input", filter);
      [skill, lore, metal].forEach((control) => control.addEventListener("input", update));
      root.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          screen("menu");
          root.querySelector("[data-smith-category]").focus();
        }
      });
    });
  }
  if (typeof document$ !== "undefined") document$.subscribe(bindBlacksmith);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindBlacksmith);
  else bindBlacksmith();
})();
