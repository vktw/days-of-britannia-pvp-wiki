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

INT e Evaluating Intelligence abaixo de 100 reduzem esses valores. Embora buffs possam elevar INT até 120, **INT acima de 100 não aumenta o dano mágico**. Inscription também não modifica esse dano.

Flame Strike é a âncora do equilíbrio: consome 40 mana e causa 40 de dano nas condições máximas. Sem scroll, sua Magery mínima é 50. Magias com projétil preservam apenas o tempo necessário para sincronizar dano e impacto visual, enquanto Explosion mantém seu fuse de três segundos.

Resisting Spells participa das resistências e efeitos elegíveis, mas não recria as resistências elementais AOS.

## Buffs e controle

- Protection concede +5 a +10 AR por 60 segundos, sem penalidades modernas. Termina por morte, logout, Dispel, Purge Magic ou expiração e persiste em saves durante uma sessão válida.
- Reactive Armor pode ser ativada e exibe seu buff, mas seu bônus de Physical Resistance AOS **não reduz o dano no PvP Live**. A reflexão clássica de dano também ainda não está implementada.
- Paralyze pode ser renovado. Sua duração é `60 + (100 - Eval Int) × 0,3 + (100 - Resist) × 0,3` segundos, variando de 60 a 120 segundos dentro dos limites normais das skills.
- Poison não rompe Paralyze. Dano direto abre a possibilidade de liberação.
- Magic Arrow em si mesmo é uma forma válida de causar esse dano direto.
- Paralyze Field usa as mesmas regras do Paralyze e também pode afetar o caster. Dano direto abre uma janela de **500 ms** antes de o field poder reaplicar Paralyze; permanecer ou voltar ao tile após essa janela permite nova aplicação.
- Ataques melee e disparos de Archery já preparados continuam podendo ser liberados durante Paralyze quando suas demais condições forem atendidas.
- Wall of Stone forma cinco tiles, dura 60 segundos e pode coexistir com outros fields.
