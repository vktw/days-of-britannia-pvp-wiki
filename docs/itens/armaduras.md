# Armaduras clássicas

## Metais do Live 0.13.0

O catálogo de craft inclui **Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril e Brittanium**. O metal define de 0 a 8 pontos adicionais de proteção física para armaduras e shields; a qualidade Low, Normal ou Exceptional mantém a mesma proteção e altera somente a durabilidade.

Equipamentos mágicos de PvM permanecem em Iron.

## Metais e peças Chain

Blacksmithy permite escolher entre **Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril e Brittanium**. O metal escolhido mantém o custo da receita e contribui com o bônus de material no `Armor Rating` conforme o tier. A qualidade Low, Normal ou Exceptional muda a durabilidade, mas não a proteção calculada pelo material.

As principais peças de **Chain** usam estes custos e faixas nativas de Blacksmithy:

| Peça | Custo | Blacksmithy |
|---|---:|---:|
| **Chain Coif** | 10 ingots | 14.5–64.5 |
| **Chain Legs** | 18 ingots | 36.7–86.7 |
| **Chain Chest** | 20 ingots | 39.1–89.1 |

Essas peças continuam sendo armaduras clássicas; não fazem parte das linhas temáticas **DoB Weapons** da Blacksmithy.

## Kits, couro e Ringmail no 0.43.0

Bankers vendem o **Royal Armorer's Charter** por **10.000 account gold**. Com
o charter, a Blacksmithy pode produzir o **Platemail Armor Kit Deed** por 118
ingots e o **Chainmail Armor Kit Deed** por 100 ingots; ambos exigem **75.0 de
Inscription**. Cada deed libera sete peças, preservando o material e o hue do
kit. Uma falha elegível consome 10 ingots.

Cada peça de **Leather Armor** passa a ter exatamente o mesmo `Armor Rating` da
peça correspondente de Chain, Ringmail ou Gorget no mesmo material. Misturar
Leather com metal não gera mais vantagem sobre o kit; a curva de Blacksmithy e
a rolagem separada de **Arms Lore** para Exceptional permanecem inalteradas.

**Ringmail Chest** custa **20 ingots** e **Ringmail Legs** custa **18 ingots**.
Um kit completo de Ringmail, com Gorget e Coif, custa **82 ingots** e iguala o
kit de Chainmail no `Armor Rating` de cada peça.

## Armor Rating no 0.40.0

Armaduras e shields exibem **Armor Rating: N**. Para peças apoiadas por uma
receita de craft, o valor considera o custo de ingots, o bônus do material e o
tier de proteção. Em golpes diretos contra jogadores, o servidor agrega o
Armor Rating das peças equipadas e aplica uma absorção global; o valor não é um
percentual por região corporal.

Qualidade altera a durabilidade, enquanto o material e o tier definem a
proteção usada no cálculo do Armor Rating.

## Durabilidade máxima

Depois que uma arma, armadura, roupa, joia, talismã ou spellbook é criado, sua
durabilidade máxima não pode aumentar. Desgaste, morte ou outra redução pode
diminuir esse teto; quando isso acontece, a durabilidade atual também fica
limitada ao novo máximo.

## Qualidades

As qualidades defensivas seguem esta ordem:

| Qualidade | Proteção |
| --- | --- |
| Regular | Base |
| Defense | Baixa |
| Guarding | Moderada |
| Hardening | Alta |
| Fortification | Muito alta |
| Invulnerability | Máxima |

O `Armor Rating` exibido na peça mostra sua proteção prática. Resistências
elementais modernas não entram separadamente no PvP do shard.

Equipamentos novos ou alterados dos tiers Invulnerability usam hue `2483`;
itens salvos não são migrados.

## Cobertura e slots

- Chest, Legs, Arms, Head, Hands e Neck são slots de equipamento independentes.
- A peça ocupada continua definindo a cobertura visual; não há uma rolagem
  pública por região nem dano adicional automático por uma região descoberta.
- Roupas comuns e joias não substituem armor.
- Shields funcionam por Parrying e ocupam a segunda mão.
- Plate corporal impede Archery; Plate Gorget e shields são permitidos.

Veja [Armor e Parrying](../combate/armor-parrying.md).

!!! success "Status: 0.43.0"
    O cálculo de golpes diretos usa o Armor Rating global das peças equipadas.
