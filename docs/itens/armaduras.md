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
| **Chain Hatsuburi** | 20 ingots | 30.0–80.0 |

Essas peças continuam sendo armaduras clássicas; não fazem parte das linhas temáticas **DoB Weapons** da Blacksmithy.

## Armor Rating no Beta 0.32.0

Armaduras e shields exibem **Armor Rating: N**. Para peças apoiadas por uma
receita de craft, o valor considera o custo de ingots, o bônus do material e o
tier de proteção. Em golpes diretos contra jogadores, o servidor agrega o
Armor Rating das peças equipadas e aplica uma absorção global; o valor não é um
percentual por região corporal.

Qualidade altera a durabilidade, enquanto o material e o tier definem a
proteção usada no cálculo do Armor Rating.

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

!!! success "Status: Beta 0.32.0"
    O cálculo de golpes diretos usa o Armor Rating global das peças equipadas.
