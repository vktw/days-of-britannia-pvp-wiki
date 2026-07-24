# Magery

## Fluxo de cast

Magery usa o fluxo **alvo → cast delay → revalidação → efeito**. O cursor aparece imediatamente após a ativação. Selecionar inicialmente um alvo inválido ou cancelar o cursor não consome recursos.

- É permitido mover-se durante o cast.
- Frozen ou Paralyzed, isoladamente, não impedem iniciar ou concluir Magery.
- Um personagem paralisado com arma ou escudo nas mãos não consegue conjurar nem desequipar esses itens manualmente.
- Com as mãos vazias, um personagem paralisado pode conjurar e usar bandage.
- Fora desse bloqueio específico, ativar Magery envia automaticamente os itens das mãos para a mochila.
- Itens podem ser equipados depois da ativação.
- Dano comum não causa fizzle, exceto em Teleport, Recall e Gate Travel.
- FC, FCR, LRC e LMC não afetam Magery.
- Earthquake é a única magia sem cursor.

## Delays por círculo

| Círculo | Delay | Círculo | Delay |
|---:|---:|---:|---:|
| 1 | 1,0 s | 5 | 3,0 s |
| 2 | 1,5 s | 6 | 3,5 s |
| 3 | 2,0 s | 7 | 4,0 s |
| 4 | 2,5 s | 8 | 4,5 s |

Protection possui exceção própria de 1,4 segundo.

## Dano e mana

| Círculo | Mana | Círculo | Mana |
|---:|---:|---:|---:|
| 1 | 4 | 5 | 14 |
| 2 | 6 | 6 | 20 |
| 3 | 9 | 7 | 40 |
| 4 | 11 | 8 | 50 |

Mana Phasing, Mind Rot, Purge Magic e Arcane Gems continuam sendo exceções válidas ao consumo normal. LRC e LMC permanecem sem efeito.

### Dano máximo em PvP

Os valores abaixo consideram **100 INT e 100.0 Evaluating Intelligence**:

| Magia | Dano máximo |
|---|---:|
| Magic Arrow | 10 |
| Harm | 16 |
| Fireball | 18 |
| Lightning | 20 |
| Mind Blast | 25 |
| Explosion | 34 |
| Energy Bolt | 34 |
| Flame Strike | 40 |
| Chain Lightning | 40 |
| Meteor Swarm | 40 |
| Earthquake | 50% dos hits atuais + 0-15 |

INT e Evaluating Intelligence abaixo de 100 reduzem esses valores. Embora buffs possam elevar INT até 120, **INT acima de 100 não aumenta o dano mágico**. Inscription também não modifica esse dano.

Flame Strike é a âncora do equilíbrio: consome 40 mana e causa 40 de dano nas condições máximas. Sem scroll, sua Magery mínima é 50. Magias com projétil preservam apenas o tempo necessário para sincronizar dano e impacto visual, enquanto Explosion mantém seu fuse de três segundos.

Harm causa seu dano integral a um tile, 50% a dois tiles e 25% além disso. Chain Lightning e Meteor Swarm dividem a reserva máxima de 40 pontos entre os alvos atingidos.

Earthquake é uma exceção: não usa cursor, tem cast de 4,5 segundos e atinge uma área ao redor do caster. Contra jogadores, causa metade dos hits atuais mais 0 a 15 pontos, sem limite intermediário. Contra NPCs e outros alvos, a metade dos hits é limitada entre 15 e 100 antes do adicional aleatório. Por depender da vida atual, seu dano contra jogadores diminui conforme o alvo perde vida e pode superar o de Flame Strike quando o alvo ainda está saudável.

Resisting Spells pode impedir a aplicação de Poison mágico, participa da duração de Paralyze e integra a reserva de Magic Reflection. Ela não recria as cinco resistências elementais AOS nem reduz diretamente o dano mágico Sphere.

## Buffs e controle

- Protection concede +5 a +10 AR por 60 segundos, sem penalidades modernas. Termina por morte, logout, Dispel, Purge Magic ou expiração e persiste em saves durante uma sessão válida.
- Reactive Armor pode ser ativada e exibe seu buff, mas seu bônus de Physical Resistance AOS **não reduz o dano no PvP Live**. A reflexão clássica de dano também ainda não está implementada.
- Magic Reflection usa uma reserva calculada por Magery e Resisting Spells para refletir magias elegíveis. A reserva é `min(100, floor[(Magery / 20) × (1 + floor[Resisting Spells × 0,075])])`; com ambas as skills em 100.0, ela começa em 40. Cada reflexão consome `10 × círculo` e falha se a reserva for insuficiente. Ao esgotar, o efeito entra em cooldown; sua reposição usa uma janela de 30 segundos. Os modificadores de resistências AOS exibidos não reduzem o dano mágico Sphere, e Inscription não participa do cálculo.
- Paralyze pode ser renovado. Sua duração é `60 + (100 - Eval Int) × 0,3 + (100 - Resist) × 0,3` segundos, variando de 60 a 120 segundos dentro dos limites normais das skills.
- Poison não rompe Paralyze. Dano direto abre a possibilidade de liberação.
- Magic Arrow em si mesmo é uma forma válida de causar esse dano direto.
- Paralyze Field usa as mesmas regras do Paralyze e também pode afetar o caster. Dano direto abre uma janela de **500 ms** antes de o field poder reaplicar Paralyze; permanecer ou voltar ao tile após essa janela permite nova aplicação.
- Ataques melee e disparos de Archery já preparados continuam podendo ser liberados durante Paralyze quando suas demais condições forem atendidas.
- Wall of Stone forma cinco tiles, dura 60 segundos e pode coexistir com outros fields.

### Fields

Os fields abaixo usam target de até 15 tiles e formam cinco tiles:

| Field | Efeito | Duração com Magery 100.0 |
|---|---|---:|
| Fire Field | Causa 2 pontos ao atravessar o tile e nas verificações periódicas enquanto o alvo permanece nele | 53 s |
| Poison Field | Aplica ou reinicia poison ao atravessar o tile e enquanto o alvo permanece nele | 43 s |
| Energy Field | Bloqueia passagem | 30 s |

Paralyze Field segue as regras de Paralyze descritas acima. Wall of Stone também possui cinco tiles, mas usa suas regras próprias de posicionamento, sobreposição e duração de 60 segundos.

### Curses de stats

- Clumsy reduz DEX, Feeblemind reduz INT e Weaken reduz STR.
- Curse reduz STR, DEX e INT do alvo; Mass Curse aplica essa lógica em área.
- As curses direcionadas possuem alcance 10.
- Evaluating Intelligence do caster aumenta o percentual, enquanto Resisting Spells do alvo o reduz. Com ambas em 100.0, a redução calculada é de 8%.
- Com Evaluating Intelligence 100.0, a duração é de 121 segundos.

## Alvos benéficos e summons

Create Food, Reactive Armor, Protection, Magic Reflection, Incognito e Polymorph aceitam qualquer `Mobile` vivo e válido em alcance 10, incluindo o próprio caster, jogadores e NPCs. Polymorph aplica ao alvo a forma previamente escolhida pelo caster, e Create Food entrega o alimento à mochila do alvo.

Summon Creature, Summon Daemon e os elementais de Air, Earth, Fire e Water aceitam como referência o chão ou um `Mobile` em alcance 10. Na liberação, a criatura surge no ponto válido mais próximo da posição atual do alvo e permanece pertencendo e obedecendo ao caster. Summons de jogadores continuam impedidos de causar dano a outros jogadores.

## Viagem em Trammel

Recall, Mark e Gate Travel são bloqueados para jogadores quando a origem ou o destino está em Trammel. A regra também alcança scrolls, Runebooks e outros meios que utilizam o mesmo validador de viagem. Teleport continua disponível fora das restrições específicas de uma sessão de arena.
