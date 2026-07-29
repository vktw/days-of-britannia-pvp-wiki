# Inventário de Threat

!!! success "Status: Live 0.9.12"
    Este catálogo é gerado sobre as classes disponíveis nos scripts usando a fórmula 3. Ele não depende da população atual do mundo.

O catálogo-fonte contém **618 classes**, todas resolvidas pela análise estática. Vendors, summons, criaturas controladas e outros tipos inelegíveis continuam sem Threat mesmo quando a classe-fonte pode ser analisada.

Use a busca e os filtros para consultar a classificação textual. O índice numérico de MaxHits não é publicado.

<div class="dob-inventory-controls">
  <label>
    <span>Buscar criatura</span>
    <input id="threat-search" type="search" placeholder="Ex.: Dragon, lich, daemon" autocomplete="off">
  </label>
  <label>
    <span>Classe</span>
    <select id="threat-class"><option value="">Todas as classes</option></select>
  </label>
  <label>
    <span>Validação</span>
    <select id="threat-anchor">
      <option value="">Todas as criaturas</option>
      <option value="anchor">Somente âncoras</option>
    </select>
  </label>
</div>

<p id="threat-count" class="dob-inventory-count">Carregando inventário...</p>

<div class="dob-inventory-table" role="region" aria-label="Inventário de Threat" tabindex="0">
  <table>
    <thead><tr><th>Criatura</th><th>Classe</th><th>Capacidades detectadas</th><th>Validação</th></tr></thead>
    <tbody id="threat-body"></tbody>
  </table>
</div>

!!! note "Como ler o inventário"
    Todas as criaturas usam a mesma fórmula. Uma âncora aprovada significa que sua classe calculada corresponde à classe esperada; ela não possui score fixo nem override por tipo.

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
    const query = search.value.trim().toLocaleLowerCase('pt-BR');
    const selectedClass = classFilter.value;
    const anchorsOnly = anchorFilter.value === 'anchor';
    const resolved = rows.filter(row => row.class !== 'Não resolvido');
    const filtered = resolved.filter(row =>
      (!query || `${row.name} ${row.abilities}`.toLocaleLowerCase('pt-BR').includes(query)) &&
      (!selectedClass || row.class === selectedClass) && (!anchorsOnly || row.anchor === true));

    count.textContent = `${filtered.length} de ${resolved.length} criaturas resolvidas`;
    body.innerHTML = filtered.map(row => `<tr>
      <td><strong>${escapeHtml(row.name)}</strong></td>
      <td><span class="dob-threat-class dob-threat-${escapeHtml(row.class.toLowerCase().replaceAll(' ', '-'))}">${escapeHtml(row.class)}</span></td>
      <td>${escapeHtml(row.abilities)}</td>
      <td>${row.anchor === true ? `${row.validation === 'pass' ? 'Âncora aprovada' : 'Revisar âncora'}: ${escapeHtml(row.expectedClass)}` : 'Fórmula 3'}</td></tr>`).join('');
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
  }).catch(() => { count.textContent = 'Não foi possível carregar o inventário.'; });

  [search, classFilter, anchorFilter].forEach(control => control.addEventListener('input', draw));
})();
</script>
