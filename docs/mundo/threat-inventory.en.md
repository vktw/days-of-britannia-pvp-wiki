# Threat Inventory

!!! success "Status: Live 0.9.6"
    This catalog is generated from the creature classes available in the scripts using formula 3. It does not depend on the world's current population.

The source catalog contains **618 classes**. Static analysis resolved the Threat class of **551** of them; the remaining 67 do not declare a statically determinable MaxHits value in their script chain and stay out of the public table until runtime validation. Vendors, summons, controlled creatures, and other ineligible types still receive no Threat even when their source class can be analyzed.

Use search and filters to inspect the textual classification. The numeric MaxHits index is not published.

<div class="dob-inventory-controls">
  <label><span>Search creature</span><input id="threat-search" type="search" placeholder="E.g. Dragon, lich, daemon" autocomplete="off"></label>
  <label><span>Class</span><select id="threat-class"><option value="">All classes</option></select></label>
  <label><span>Validation</span><select id="threat-anchor"><option value="">All creatures</option><option value="anchor">Anchors only</option></select></label>
</div>

<p id="threat-count" class="dob-inventory-count">Loading inventory...</p>

<div class="dob-inventory-table" role="region" aria-label="Threat inventory" tabindex="0">
  <table><thead><tr><th>Creature</th><th>Class</th><th>Detected capabilities</th><th>Validation</th></tr></thead><tbody id="threat-body"></tbody></table>
</div>

!!! note "How to read the inventory"
    Every creature uses the same formula. A passing anchor means its calculated class matches the expected class; it has no fixed score or type override.

<script>
(() => {
  const search = document.querySelector('#threat-search');
  const classFilter = document.querySelector('#threat-class');
  const anchorFilter = document.querySelector('#threat-anchor');
  const count = document.querySelector('#threat-count');
  const body = document.querySelector('#threat-body');
  let rows = [];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

  function draw() {
    const query = search.value.trim().toLocaleLowerCase('en');
    const selectedClass = classFilter.value;
    const anchorsOnly = anchorFilter.value === 'anchor';
    const resolved = rows.filter(row => row.class !== 'Não resolvido');
    const filtered = resolved.filter(row =>
      (!query || `${row.name} ${row.abilities}`.toLocaleLowerCase('en').includes(query)) &&
      (!selectedClass || row.class === selectedClass) && (!anchorsOnly || row.anchor === true));

    count.textContent = `${filtered.length} of ${resolved.length} resolved creatures`;
    body.innerHTML = filtered.map(row => `<tr>
      <td><strong>${escapeHtml(row.name)}</strong></td>
      <td><span class="dob-threat-class dob-threat-${escapeHtml(row.class.toLowerCase().replaceAll(' ', '-'))}">${escapeHtml(row.class)}</span></td>
      <td>${escapeHtml(row.abilities === 'Nenhuma detectada' ? 'None detected' : row.abilities)}</td>
      <td>${row.anchor === true ? `${row.validation === 'pass' ? 'Passing anchor' : 'Review anchor'}: ${escapeHtml(row.expectedClass)}` : 'Formula 3'}</td></tr>`).join('');
  }

  fetch('/data/threat-inventory-v3.json').then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }).then(data => {
    rows = data;
    [...new Set(rows.filter(row => row.class !== 'Não resolvido').map(row => row.class))].forEach(value => {
      const option = document.createElement('option'); option.value = option.textContent = value; classFilter.append(option);
    });
    draw();
  }).catch(() => { count.textContent = 'Unable to load the inventory.'; });

  [search, classFilter, anchorFilter].forEach(control => control.addEventListener('input', draw));
})();
</script>
