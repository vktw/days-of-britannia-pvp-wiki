# Magery

!!! success "Status: Live 0.9.12"
    Fluxo, delays e efeitos correspondem ao servidor oficial.

## Fluxo de cast

Magery usa o fluxo **alvo → cast delay → revalidação → efeito**. O cursor aparece imediatamente após a ativação. Selecionar inicialmente um alvo inválido ou cancelar o cursor não consome recursos.

- É permitido mover-se durante o cast.
- Frozen ou Paralyzed, isoladamente, não impedem iniciar ou concluir Magery.
- Um personagem paralisado com arma ou escudo nas mãos não consegue conjurar nem desequipar esses itens manualmente.
- Com as mãos vazias, um personagem paralisado pode conjurar e usar bandage.
- Fora desse bloqueio específico, ativar Magery envia automaticamente os itens das mãos para a mochila.
- Itens podem ser equipados depois da ativação.
- Dano comum não causa fizzle, exceto em Teleport, Recall e Gate Travel.
- Iniciar outra magia durante o delay de cast faz a magia interrompida falhar e consumir seu mana escalado e reagentes antes de a substituta começar. Uma tentativa de substituição rejeitada preserva o cast atual.
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

Recall e Gate Travel são exceções de viagem: ambos usam **4,0 segundos reais** depois da escolha de um destino válido, independentemente do círculo, de Faster Casting ou de Faster Cast Recovery. A regra vale para Spellbook, scroll, Runebook, Runic Atlas e demais fontes suportadas. Dano durante esse período pode causar fizzle; cancelar antes de escolher um destino válido continua sem custo.

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
| Harm | 15 |
| Fireball | 17 |
| Lightning | 25 |
| Mind Blast | 26 |
| Explosion | 35 |
| Energy Bolt | 27 |
| Flame Strike | 40 |
| Chain Lightning | 40 |
| Meteor Swarm | 40 |
| Earthquake | Reserva de 40 dividida entre os alvos PvP |

INT e Evaluating Intelligence abaixo de 100 reduzem esses valores. Embora buffs possam elevar INT até 120, **INT acima de 100 não aumenta o dano mágico**. Inscription também não modifica esse dano.

Flame Strike é a âncora do equilíbrio: consome 40 mana, causa 40 de dano nas condições máximas e usa 3,5 segundos de cast. Harm usa 2,0 segundos, Fireball 2,5 e Paralyze 2,5. Sem scroll, a faixa normal de sucesso de Flame Strike começa em aproximadamente 65,7 Magery. Magias com projétil preservam apenas o tempo necessário para sincronizar dano e impacto visual, enquanto Explosion mantém seu fuse de três segundos.

Harm causa seu dano integral em qualquer distância válida. Chain Lightning e Meteor Swarm dividem a reserva máxima de 40 pontos entre os alvos atingidos.

Earthquake é uma exceção: não usa cursor, tem cast de 4,5 segundos e atinge uma área ao redor do caster. Em PvP, possui uma reserva máxima de 40 pontos, dividida entre os jogadores atingidos. Contra NPCs e outros alvos fora do PvP Sphere, causa metade dos hits atuais, limitada entre 15 e 100, mais 0 a 15 pontos.

Resisting Spells pode impedir a aplicação de Poison mágico e participa da duração de Paralyze. Magic Reflection não utiliza essa skill no sistema de uma carga. Resisting Spells não recria as cinco resistências elementais AOS nem reduz diretamente o dano mágico Sphere.

## Buffs e controle

- Protection concede de 5% a 10% de absorção adicional no PvP por 90 segundos, aplicada depois da armor, do shield ou do bônus de região descoberta. Não possui as penalidades modernas. Termina por morte, logout, Dispel, Purge Magic ou expiração e persiste em saves durante uma sessão válida.
- Reactive Armor dura 90 segundos. Ao receber dano melee, devolve 20% do dano final ao atacante e reduz o dano recebido pelo mesmo valor, preservando o mínimo de 1 ponto. Seu bônus de Physical Resistance AOS não participa separadamente do dano PvP.
- Magic Reflection possui uma carga e reflete integralmente a próxima magia ou field nocivo elegível. Se atacante e defensor estiverem protegidos, as duas cargas são consumidas e a magia é anulada sem dano. Não existe reserva por círculo nem reposição automática em 30 segundos. Os modificadores de resistências AOS exibidos não reduzem o dano mágico Sphere, e Inscription não participa do cálculo.
- Paralyze pode ser renovado. Sua duração é `60 + (100 - Eval Int) × 0,3 + (100 - Resist) × 0,3` segundos, variando de 60 a 120 segundos dentro dos limites normais das skills.
- Poison não rompe Paralyze. Dano direto abre a possibilidade de liberação.
- Magic Arrow em si mesmo é uma forma válida de causar esse dano direto.
- Em PvP, Dispel remove somente Reactive Armor, Protection/Arch Protection, Magic Reflection, Bless e buffs de stats, Curse e curses individuais de stats, Paralyze e poison cuja aplicação atual veio da magia Poison. Poison de arma, efeitos de potion, Young, Arena e estados de outros sistemas não são removidos.
- Paralyze Field usa as mesmas regras do Paralyze e também pode afetar o caster. Dano direto abre uma janela de **500 ms** antes de o field poder reaplicar Paralyze; permanecer ou voltar ao tile após essa janela permite nova aplicação.
- Ataques melee e disparos de Archery já preparados continuam podendo ser liberados durante Paralyze quando suas demais condições forem atendidas.
- Wall of Stone forma cinco tiles, dura 60 segundos e pode coexistir com outros fields.

### Fields

Os fields de jogadores e do PvP Trainer usam o alcance padrão de Magery de 12 tiles, formam sete tiles e duram 1,5 vez a duração anterior. Os limites da Arena não cortam segmentos em terreno válido fora dela.

| Field | Efeito | Duração com Magery 100.0 |
|---|---|---:|
| Fire Field | Causa 2 pontos ao atravessar o tile e nas verificações periódicas enquanto o alvo permanece nele | 79,5 s |
| Poison Field | Aplica ou reinicia poison ao atravessar o tile e enquanto o alvo permanece nele | 64,5 s |
| Energy Field | Bloqueia a passagem do participante PvP adversário em todos os segmentos | 45 s |

Paralyze Field segue as regras de Paralyze descritas acima. Wall of Stone também possui cinco tiles, mas usa suas regras próprias de posicionamento, sobreposição e duração de 60 segundos.

### Curses de stats

- Clumsy reduz DEX em 15, Feeblemind reduz INT em 15 e Weaken reduz STR em 15.
- Curse reduz STR, DEX e INT em 10; Mass Curse aplica a mesma lógica em área.
- As curses direcionadas possuem alcance 12.
- Resisting Spells não altera a magnitude fixa dessas reduções.
- Uma curse individual de 15 pontos prevalece temporariamente sobre o componente correspondente de Curse, que retorna quando o efeito individual termina.
- Com Evaluating Intelligence 100.0, a duração é de 121 segundos.

### Resurrection

Resurrection, ou An Corp, usa alcance 12. A faixa de sucesso pelo spellbook começa em 60.0 Magery e chega a 100% em 100.0. Ao aceitar, o ressuscitado perde 10% da Fame atual. Se estiver no mesmo mapa e a até um tile do próprio corpse, seus itens móveis retornam para a mochila; itens sem espaço permanecem no corpo.

## Alvos benéficos e summons

Create Food, Reactive Armor, Protection, Magic Reflection, Incognito e Polymorph aceitam qualquer `Mobile` vivo e válido em alcance 12, incluindo o próprio caster, jogadores e NPCs. Polymorph aplica ao alvo a forma previamente escolhida pelo caster, e Create Food entrega o alimento à mochila do alvo.

Summon Creature, Summon Daemon e os elementais de Air, Earth, Fire e Water aceitam como referência o chão ou um `Mobile` em alcance 12. Na liberação, a criatura surge no ponto válido mais próximo da posição atual do alvo e permanece pertencendo e obedecendo ao caster. Summons de jogadores continuam impedidos de causar dano a outros jogadores.

## Viagem em Trammel

Felucca é a única faceta pública. Recall, Mark, Gate Travel, scrolls, Runebooks e outros meios de viagem não permitem que jogadores acessem outras facetas. Trammel permanece disponível somente nas áreas controladas das arenas oficiais. Teleport continua disponível dentro da faceta atual, fora das restrições específicas de uma sessão de arena.
