# Inventário de Threat

!!! info "Próximo patch programado"
    Este inventário representa a fórmula 2 calculada diretamente sobre as classes de criaturas disponíveis nos scripts. Ele não depende dos spawns ou da população atual do mundo.

O catálogo reúne **618 classes de criaturas**. O XP planejado corresponde ao Threat dividido por 10.

`XP = Threat / 10`

Use a busca e os filtros para consultar uma criatura. Os valores desta página são os valores atuais da fórmula v2 em avaliação, e não uma comparação com fórmulas anteriores.

<div class="dob-inventory-controls">
  <label>
    <span>Buscar criatura</span>
    <input id="threat-search" type="search" placeholder="Ex.: Dragon, lich, daemon" autocomplete="off">
  </label>
  <label>
    <span>Classe</span>
    <select id="threat-class">
      <option value="">Todas as classes</option>
    </select>
  </label>
  <label>
    <span>Base</span>
    <select id="threat-basis">
      <option value="">Todas</option>
      <option value="Ancora fixa">Âncora fixa</option>
      <option value="Perfil fixo">Perfil fixo</option>
      <option value="Formula v2">Fórmula v2</option>
    </select>
  </label>
</div>

<p id="threat-count" class="dob-inventory-count">Carregando inventário...</p>

<div class="dob-inventory-table" role="region" aria-label="Inventário de Threat" tabindex="0">
  <table>
    <thead>
      <tr>
        <th>Criatura</th>
        <th>Threat</th>
        <th>XP</th>
        <th>Classe</th>
        <th>Capacidades detectadas</th>
        <th>Base</th>
      </tr>
    </thead>
    <tbody id="threat-body"></tbody>
  </table>
</div>

!!! note "Como ler o inventário"
    Âncoras e perfis fixos possuem valores definidos diretamente no catálogo. As demais criaturas recebem valores calculados pela fórmula v2 a partir de seus atributos e capacidades declarados nos scripts.

<script>
(() => {
  const search = document.querySelector('#threat-search');
  const classFilter = document.querySelector('#threat-class');
  const basisFilter = document.querySelector('#threat-basis');
  const count = document.querySelector('#threat-count');
  const body = document.querySelector('#threat-body');
  const number = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 });
  let rows = [];

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function draw() {
    const query = search.value.trim().toLocaleLowerCase('pt-BR');
    const selectedClass = classFilter.value;
    const selectedBasis = basisFilter.value;
    const filtered = rows.filter(row =>
      (!query || `${row.name} ${row.abilities}`.toLocaleLowerCase('pt-BR').includes(query)) &&
      (!selectedClass || row.class === selectedClass) &&
      (!selectedBasis || row.basis === selectedBasis)
    );

    count.textContent = `${filtered.length} de ${rows.length} criaturas`;
    body.innerHTML = filtered.map(row => `
      <tr>
        <td><strong>${escapeHtml(row.name)}</strong></td>
        <td class="dob-number">${number.format(row.threat)}</td>
        <td class="dob-number">${number.format(row.xp)}</td>
        <td><span class="dob-threat-class dob-threat-${escapeHtml(row.class.toLowerCase().replaceAll(' ', '-'))}">${escapeHtml(row.class)}</span></td>
        <td>${escapeHtml(row.abilities)}</td>
        <td>${escapeHtml(row.basis)}</td>
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
      count.textContent = 'Não foi possível carregar o inventário.';
    });

  [search, classFilter, basisFilter].forEach(control => control.addEventListener('input', draw));
})();
</script>
