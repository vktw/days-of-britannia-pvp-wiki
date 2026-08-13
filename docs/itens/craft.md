# Craft

Consulte nesta página as receitas especiais que estão ativas no **Live 0.26.3**. As tabelas separam material, custo, skill mínima, pontos de chance de sucesso e a regra de Exceptional para cada família.

!!! success "Status: Live 0.26.3"
    Os números de skill mínima e os pontos de chance abaixo foram consultados diretamente no catálogo oficial de craft do servidor e reconciliados com o estado de produção.

!!! info "Como ler as chances"
    O controle desta página exibe somente pontos de referência publicados pela fonte oficial. Ele não inventa uma porcentagem entre dois pontos e não substitui a rolagem do servidor. `Skill mínima` é o primeiro requisito da receita; a chance de sucesso e a chance de Exceptional são rolagens diferentes quando a fonte as separa.

## Receitas especiais

| Sistema | Receita | Material e custo | Skill mínima | Pontos de chance exibidos | Exceptional |
|---|---|---|---:|---|---|
| **Blacksmithy** | Bloodrock — seis DoB Weapons | 30 Bloodrock Ingots | 75.0 | 0% em 75.0; 50% em 92.5; ponto final em revisão | Arms Lore em rolagem separada |
| **Blacksmithy** | Blackrock — seis DoB Weapons | 30 Blackrock Ingots | 75.0 | 0% em 75.0; 50% em 92.5; ponto final em revisão | Arms Lore em rolagem separada |
| **Bowcraft** | Fire Bow | 30 Fire Feathers + 30 Ash Logs | 75.0 | 75% em 100.0 | Percentual separado não publicado nesta tabela |
| **Bowcraft** | Elven Bow | 30 Heartwood Logs | 65.0 | 0% em 65.0; 100% em 100.0 | Percentual separado não publicado nesta tabela |
| **Tinkering** | Magic Earrings, Magic Ring e Magic Bracelet | 20 Gold Ingots por peça | 65.0 | Curva nativa de 65.0 a 100.0 | Exceptional aceita; bônus fixos não mudam |
| **Alchemy** | Total Mana Potion | 5 Eyes of Newt + 1 Bottle | 65.0 | 100% em 105.0 | Não se aplica a um resultado funcional |
| **Blacksmithy** | Chain Coif, Chain Legs, Chain Chest e Chain Hatsuburi | Metais públicos; 10, 18, 20 e 20 ingots | 14.5, 36.7, 39.1 e 30.0 | Faixas nativas até 64.5, 86.7, 89.1 e 80.0 | Arms Lore em rolagem separada |

As linhas Bloodrock e Blackrock têm seis armas nomeadas cada e aparecem dentro de **DoB Weapons**. A página de [Armas clássicas](armas.md) mantém os nomes e os bônus de dano sem duplicar o catálogo inteiro aqui. Para Chain, o metal escolhido preserva o custo da peça e altera sua proteção física dentro do catálogo público.

## DoB Tools

As seis famílias especiais de Tinkering usam a ferramenta ativa para alterar peso, usos ou uma rolagem aplicável. O material da família e a skill mínima vêm da receita; o bônus não é concedido pelo item que está sendo produzido.

| Família | Material | Skill mínima | Custo | Efeito ou bônus da ferramenta ativa |
|---|---|---:|---:|---|
| **Light** | Bronze Ingots | 65.0 | 100 ingots | Ferramenta mais leve |
| **Hardened** | Shadow Ingots | 67.0 | 100 ingots | Duplica os usos |
| **Tempered** | Silver Ingots | 60.0 | 100 ingots | Mais leve e com o dobro de usos |
| **Artisan** | Gold Ingots | 70.0 | 50 ingots | +10 pontos percentuais de Exceptional em crafts aplicáveis |
| **Reliable** | Bloodrock Ingots | 80.0 | 50 ingots | +10 pontos percentuais de sucesso; na coleta, somente a rolagem final |
| **Refined** | Blackrock Ingots | 90.0 | 50 ingots | Combina +10 pontos percentuais de sucesso e +10 de Exceptional |

As curvas abaixo são da **criação da própria ferramenta**, antes do bônus de uma ferramenta já ativa. O bônus de chance só entra depois que a skill mínima foi atendida e nunca ultrapassa o teto da ação. Artisan e Refined não aplicam Exceptional à coleta; Reliable Pickaxe, Shovel e Hatchet alteram somente o sucesso final de Mining ou Lumberjacking.

| Família | Primeiro ponto oficial | Segundo ponto oficial | Terceiro ponto oficial | Bônus na ferramenta pronta |
|---|---|---|---|---|
| **Artisan** | 20% em 70.0 | 85% em 100.0 | 100% em 130.0 | +10 p.p. de Exceptional em crafts aplicáveis |
| **Reliable** | 30% em 80.0 | 90% em 100.0 | 100% em 140.0 | +10 p.p. de sucesso |
| **Refined** | 30% em 90.0 | 75% em 100.0 | 95% em 150.0 | +10 p.p. de sucesso e +10 p.p. de Exceptional |

## Controle de skill

Use o seletor para escolher uma receita ou família e mova a skill efetiva para consultar o ponto oficial mais próximo. Quando a skill ficar entre dois pontos, o resultado mostra os dois pontos sem fabricar uma interpolação.

<section class="dob-craft-control" data-dob-craft-control aria-labelledby="dob-craft-control-title">
  <h3 id="dob-craft-control-title">Consulta de chance por skill</h3>
  <div class="dob-craft-control__fields">
    <label for="dob-craft-recipe">
      Receita ou família
      <select id="dob-craft-recipe" data-craft-recipe>
        <option value="artisan" data-craft-skill="Tinkering" data-craft-min="70.0" data-craft-points="70:20|100:85|130:100" data-craft-tail="cap" data-craft-exceptional="+10 p.p. em crafts aplicáveis">Artisan · DoB Tools</option>
        <option value="reliable" data-craft-skill="Tinkering" data-craft-min="80.0" data-craft-points="80:30|100:90|140:100" data-craft-tail="cap" data-craft-exceptional="Não altera Exceptional">Reliable · DoB Tools</option>
        <option value="refined" data-craft-skill="Tinkering" data-craft-min="90.0" data-craft-points="90:30|100:75|150:95" data-craft-tail="review" data-craft-exceptional="+10 p.p. em crafts aplicáveis">Refined · DoB Tools</option>
        <option value="elven-bow" data-craft-skill="Bowcraft" data-craft-min="65.0" data-craft-points="65:0|100:100" data-craft-tail="cap" data-craft-exceptional="Percentual separado não publicado nesta prévia">Elven Bow · DoB Weapons</option>
        <option value="fire-bow" data-craft-skill="Bowcraft" data-craft-min="75.0" data-craft-points="75:0|100:75" data-craft-tail="review" data-craft-exceptional="Percentual separado não publicado nesta prévia">Fire Bow · DoB Weapons</option>
        <option value="bloodrock" data-craft-skill="Blacksmithy" data-craft-min="75.0" data-craft-points="75:0|92.5:50" data-craft-tail="review" data-craft-exceptional="Arms Lore em rolagem separada">Bloodrock · DoB Weapons</option>
        <option value="blackrock" data-craft-skill="Blacksmithy" data-craft-min="75.0" data-craft-points="75:0|92.5:50" data-craft-tail="review" data-craft-exceptional="Arms Lore em rolagem separada">Blackrock · DoB Weapons</option>
      </select>
    </label>
    <label for="dob-craft-skill">
      Skill efetiva de consulta
      <span class="dob-craft-control__range-line">
        <input id="dob-craft-skill" type="range" min="60" max="150" step="0.1" value="100.0" data-craft-skill aria-describedby="dob-craft-help dob-craft-note">
        <output for="dob-craft-skill" data-craft-skill-value>100.0</output>
      </span>
    </label>
  </div>
  <div class="dob-craft-control__result" data-craft-result role="status" aria-live="polite">
    <div><span>Skill usada</span><strong data-craft-skill-name>Tinkering</strong></div>
    <div><span>Skill mínima</span><strong data-craft-min>70.0</strong></div>
    <div><span>Chance de sucesso</span><strong data-craft-chance>85%</strong></div>
    <div><span>Exceptional</span><strong data-craft-exceptional>+10 p.p. em crafts aplicáveis</strong></div>
  </div>
  <p id="dob-craft-help" class="dob-craft-control__help">A chance exibida é um ponto oficial de referência. A skill efetiva pode incluir bônus permitidos pelo servidor.</p>
  <p id="dob-craft-note" class="dob-craft-control__note" data-craft-note>Ponto oficial em 100.0.</p>
</section>

## Sucesso e Exceptional

Na Blacksmithy, a skill determina se a peça é produzida. Depois de um sucesso, **Arms Lore** faz a rolagem separada de Exceptional; a qualidade altera a durabilidade, não a proteção ou o dano. O controle acima mantém essas duas coisas separadas.

Artisan e Refined aumentam a chance de Exceptional somente em crafts aplicáveis quando a ferramenta pronta está ativa. Reliable aumenta a chance de sucesso; na coleta, seu bônus fica restrito à rolagem final de Mining ou Lumberjacking. A família do item que está sendo produzido não ativa o bônus da própria ferramenta.

Para os efeitos completos de armas e armaduras, veja [Armas clássicas](armas.md) e [Armaduras clássicas](armaduras.md). Para recursos, potions e ferramentas básicas, veja [Consumíveis, ferramentas e utilidades](consumiveis.md).

!!! warning "Prévia local"
    Esta página foi criada na branch de trabalho para revisão visual. Nenhum commit, merge, push ou deploy acompanha esta prévia.
