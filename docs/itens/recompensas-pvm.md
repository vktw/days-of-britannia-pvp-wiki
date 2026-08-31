# Recompensas PvM

No PvM customizado do shard, derrotar uma criatura elegível pode conceder experiência de Maestria PvM a participantes próximos com direito ao loot. Gold, chance de Loot Pack e outras recompensas acompanham a resistência do encontro; a classe de Threat ajuda a comparar o risco, mas não garante um item específico.

O gold PvM centralizado usa atualmente fator **1,9** em vez de 2,3. A alteração não muda as regras de XP, Loot Packs ou bônus de Newcomer.

## Loot Packs

Um Loot Pack personalizado entrega um item de uma destas categorias:

- equipamento clássico disponível para jogadores;
- joia mágica de atributos;
- amuleto mágico de skill;
- utilidades, como Bag of Sending ou Powder of Translocation.

Criaturas mais resistentes oferecem mais oportunidades de Loot Pack. A seleção continua aleatória, e nem toda morte produz um pack ou Scroll of Knowledge.

Animais, criaturas atuais ou anteriormente domadas e summons não concedem gold,
XP ou loot de morte gerado pelo sistema.

## Tomes of Expertise

Criaturas PvM elegíveis, exceto animais, têm **7,5% de chance** de deixar um
Tome of Expertise. O item concede progresso permanente a uma das 49 skills;
ganhos altos são raros, e as famílias Craft e Harvesting concedem no máximo
1.0. Consulte [Tomes of Expertise](../sistemas/tomes-expertise.md) para uso e
limites.

## Eyes of Newt

NPCs com **Magery acima de 50,0** podem carregar de 1 até `Magery/10` Eyes of
Newt no loot da morte e também podem fornecer o recurso ao serem esculpidos.
Nesse carving, Forensics faz o teste normal e acrescenta
`ceil((Forensics - 60) / 2)`% sem teto; o resultado é informado por uma mensagem
do sistema. O contrato especial entrega somente Eyes of Newt, sem liberar o
conjunto de recursos normais de carving.

## Joias mágicas

Earrings, bracelets e rings mágicos podem aumentar STR, DEX ou INT enquanto estiverem equipados. As joias usam a aparência clássica de seu tipo e possuem durabilidade.

Golpes físicos podem desgastar uma das joias de atributos equipadas. Elas podem ser reparadas pelo fluxo normal de **Tinkering**, sujeito ao desgaste próprio de reparos repetidos.

## Joias da Arena e bônus de Maestria no 0.40.0

Na categoria **DoB Jewelry** de Tinkering, o 0.40.0 inclui somente três peças com os bônus fixos das joias da Arena:

- **Magic Earrings:** +5 INT.
- **Magic Ring:** +5 STR.
- **Magic Bracelet:** +5 DEX.

Novas joias mágicas vindas de Loot Packs podem receber um bônus de Maestria PvM entre **+1,00% e +7,50%**, em incrementos de **0,25%**. Ao equipar a peça, a Maestria correspondente fica ativa temporariamente e o Compendium exibe o bônus. Retirar a joia remove somente essa ativação temporária; ela não substitui os cinco espaços da build normal.

## Amuletos de skill

Amuletos podem elevar temporariamente uma skill disponível, inclusive acima de 100 de valor efetivo, sem alterar sua base permanente. Cada amuleto mostra seus usos restantes.

Uma ação relacionada à skill equipada consome um uso. O último uso ainda beneficia a ação e depois quebra o amuleto. Consultar propriedades, equipar ou guardar o item não consome cargas.

## Newcomer

Personagens com o benefício Young elegível recebem **100% adicionais de
experiência de Maestria PvM** e **25% adicionais de gold de criaturas**. As regras
normais de participação, proximidade e direito ao loot continuam valendo.

Veja também [Maestria PvM](../sistemas/pvm-mastery.md) e [Threat Rating](../mundo/threat-rating.md).

!!! success "Status: 0.40.0"
    Criaturas elegíveis recompensam o grupo conforme a escala do encontro.
