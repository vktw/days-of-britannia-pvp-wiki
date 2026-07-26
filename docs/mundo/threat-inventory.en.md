# Threat Inventory

!!! info "Next scheduled patch"
    This inventory represents formula 2 calculated directly on the classes of creatures available in the scripts. It does not depend on spawns or the current population of the world.

The catalog brings together **618 classes of creatures**. Planned XP corresponds to Threat divided by 10.

`XP = Threat / 10`

Use search and filters to query a creature. The values ​​on this page are the current values ​​for the v2 formula under evaluation, not a comparison to previous formulas.

<div class="dob-inventory-controls">
  <label>
    <span>Search creature</span>
    <input id="threat-search" type="search" placeholder="Ex.: Dragon, lich, daemon" autocomplete="off">
  </label>
  <label>
    <span>Class</span>
    <select id="threat-class">
      <option value="">All classes</option>
    </select>
  </label>
  <label>
    <span>Base</span>
    <select id="threat-basis">
      <option value="">All</option>
      <option value="Ancora fixa">Fixed anchor</option>
      <option value="Perfil fixo">Fixed profile</option>
      <option value="Formula v2">Formula v2</option>
    </select>
  </label>
</div>

<p id="threat-count" class="dob-inventory-count">Loading inventory...</p>

<div class="dob-inventory-table" role="region" aria-label="Threat inventory" tabindex="0">
  <table>
    <thead>
      <tr>
        <th>Creature</th>
        <th>Threat</th>
        <th>XP</th>
        <th>Class</th>
        <th>Capabilities detected</th>
        <th>Base</th>
      </tr>
    </thead>
    <tbody id="threat-body"></tbody>
  </table>
</div>

!!! note "How to read inventory"
    Anchors and fixed profiles have values defined directly in the catalogue. The other creatures receive values ​​calculated by the v2 formula based on their attributes and capabilities declared in the scripts.

<script>
(() => {
  const search = document.querySelector('#threat-search');
  const classFilter = document.querySelector('#threat-class');
  const basisFilter = document.querySelector('#threat-basis');
  const count = document.querySelector('#threat-count');
  const body = document.querySelector('#threat-body');
  const number = new Intl.NumberFormat('en', { maximumFractionDigits: 1 });
  let rows = [];

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function draw() {
    const query = search.value.trim().toLocaleLowerCase('en');
    const selectedClass = classFilter.value;
    const selectedBasis = basisFilter.value;
    const filtered = rows.filter(row =>
      (!query || `${row.name} ${row.abilities}`.toLocaleLowerCase('en').includes(query)) &&
      (!selectedClass || row.class === selectedClass) &&
      (!selectedBasis || row.basis === selectedBasis)
    );

    count.textContent = `${filtered.length} of ${rows.length} creatures`;
    body.innerHTML = filtered.map(row => `
      <tr>
        <td><strong>${escapeHtml(row.name)}</strong></td>
        <td class="dob-number">${number.format(row.threat)}</td>
        <td class="dob-number">${number.format(row.xp)}</td>
        <td><span class="dob-threat-class dob-threat-${escapeHtml(row.class.toLowerCase().replaceAll(' ', '-'))}">${escapeHtml(row.class)}</span></td>
        <td>${escapeHtml(row.abilities === 'Nenhuma detectada' ? 'None detected' : row.abilities)}</td>
        <td>${escapeHtml(({ 'Ancora fixa': 'Fixed anchor', 'Perfil fixo': 'Fixed profile' })[row.basis] || row.basis)}</td>
      </tr>`).join('');
  }

  fetch('/data/threat-inventory-v2.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      rows = data;
      [...new Set(rows.map(row => row.class))].forEach(value => {
        const option = document.createElement('option');
        option.value = option.textContent = value;
        classFilter.append(option);
      });
      draw();
    })
    .catch(() => {
      count.textContent = 'Unable to load inventory.';
    });

  [search, classFilter, basisFilter].forEach(control => control.addEventListener('input', draw));
})();</script>
