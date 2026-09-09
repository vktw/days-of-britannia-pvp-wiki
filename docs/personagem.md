# Personagem

## Base inicial

Todo novo personagem humano começa com **100 STR, 100 DEX e 100 INT**, Spellbook completo, Runebook, um cavalo shrinkado, 15 Heal Potions normais e um **Starter PvP Iron kit** comum e lootável. O kit não contém joias nem bag de potions. Os livros, o cavalo e os **10.000 gold** iniciais permanecem vinculados ao personagem; o gold é concedido somente ao primeiro personagem elegível por IP.

O Starter kit e as Heal Potions são itens comuns e podem ser perdidos no loot.
O starter gold pode pagar compras de NPC, não vira gold da conta e não financia
Player Vendors.

Novos personagens começam com as seguintes skills em **100.0**:

| Combate | Suporte |
|---|---|
| Swords, Tactics, Archery, Healing | Magery, Meditation |
| Focus | Resisting Spells |

Skills específicas da profissão são atribuídas separadamente. Personagens
existentes preservam seus valores; a migração compatível nunca reduz uma skill
já salva.

Não existe skill cap global efetivo. Cada skill base de jogador é limitada
individualmente a **100.0**; bônus temporários, como os amuletos de skill,
podem elevar o valor efetivo acima desse limite conforme as regras da skill.

## Progressão de skills

As 49 skills ativas usam curvas de treino calibradas. Entre **30.0 e 100.0**, a
progressão projetada agora mira **4 ou 6 horas ativas**, conforme a skill. O
ganho protegido continua atuando somente quando a skill está atrás da curva e
mantém os limites de **8 ou 10 horas** para os perfis rápido e normal. Abaixo
de 30.0, não há progresso protegido acumulado; o progresso já salvo é mantido.

Anatomy, Evaluating Intelligence, Fencing, Wrestling, Parrying e Mace Fighting
ganham **0.2** quando um ganho normal é aprovado em combate PvM elegível, sem
alterar a chance do skillcheck. Forensic Evaluation pode ser treinada
repetidamente em qualquer cadáver enquanto ele existir, de 0.0 a 100.0.

Pets controlados ou animais já pertencentes ao mesmo domador não concedem ganho
de Animal Taming, inclusive por Combat Training. Herding entra em cooldown de
quatro segundos assim que o Shepherd's Crook é usado, mesmo com alvo cancelado
ou inválido.

No treino protegido de **Poisoning**, cada aplicação paga de poison acompanha o
progresso, mesmo quando a aplicação falha ou o veneno não é adequado ao alvo.

Personagens criados antes da versão 0.7.0 recebem Hiding, Stealth, Detect Hidden e Poisoning em 100.0 uma única vez no primeiro login após a atualização.

## Tracking

Tracking usa a **skill efetiva** para calcular o alcance da busca: chega a **43
tiles em 100.0** e a **45 tiles em 105.0**. Os filtros e os limites de
resultados permanecem os mesmos.

As ativações de Tracking respeitam um intervalo de **quatro segundos**. Entrar
em War Mode interrompe um Tracking ativo e informa que a presa foi perdida.

## Movimento entre criaturas

É possível empurrar animais, monstros, pets e NPC vendors que tenham pelo menos
**10 de stamina**. O movimento consome **10 de stamina** da criatura. Essa
exceção não altera a colisão entre jogadores.

## Stats e buffs

- Stats permanentes: máximo de 100 cada e 300 no total.
- Buffs temporários, potions e itens podem elevar cada stat até 120.
- Bless: +10 em STR, DEX e INT.
- Strength, Agility e Cunning: +15 no stat correspondente.
- Agility Potion: +10 DEX; Greater Agility Potion: +15 DEX.
- Strength Potion: +10 STR; Greater Strength Potion: +15 STR.
- Não existe uma Cunning Potion equivalente para aumentar INT no conjunto atual.
- Joias da arena concedem +5 de STR, DEX ou INT conforme a peça.

STR influencia vida e dano físico. DEX influencia stamina e velocidade das armas. INT influencia mana e participa de fórmulas mágicas.

## Raça

Human é a única raça permanente disponível para jogadores. Transformações temporárias de magia continuam sendo efeitos separados.

## Hiding e Stealth

Ao usar Hiding ou Stealth, o personagem permanece visível durante 3 segundos de
preparação. Você pode se mover durante esse período, mas precisa estar parado no
final. Dano, ataque, magia, fala, potion, bandagem, ação reveladora, morte,
logout ou troca de mapa interrompem a tentativa. Reativar Hiding ou Stealth já
oculto revela o personagem e inicia uma nova preparação.

As duas skills podem iniciar ou renovar a ocultação e compartilham o movimento
escondido. O limite é calculado por `floor((Hiding + Stealth) / 8)`, com mínimo
de 1 e máximo de 25 passos. Caminhar, inclusive montado, consome esse limite;
esgotá-lo revela o personagem e correr, inclusive montado, revela imediatamente.
Usar armadura não bloqueia nem reduz a eficácia de Stealth.

!!! success "Status: 0.42.0"
    Stats, skills, caps e raça correspondem ao servidor oficial.
