# Personagem

## Base inicial

Todo novo personagem humano começa com **100 STR, 100 DEX e 100 INT**, Spellbook completo, Runebook, um cavalo shrinkado e um **Starter PvP Iron kit** permanente. O kit usa o catálogo oficial de equipamentos de PvP, sem duplicar o cavalo, e não pode ser vendido a vendors. Os **10.000 gold** iniciais são concedidos somente ao primeiro personagem elegível por IP.

As seguintes skills começam em **100.0**:

| Combate | Suporte |
|---|---|
| Swordsmanship, Mace Fighting, Fencing | Anatomy, Tactics, Parrying |
| Archery, Wrestling | Healing, Resisting Spells |
| Magery | Evaluating Intelligence, Meditation, Focus |
| Hiding, Stealth | Detect Hidden, Poisoning |

Não existe skill cap global efetivo. Cada skill de jogador é limitada individualmente a **100.0**.

Personagens criados antes da versão 0.7.0 recebem Hiding, Stealth, Detect Hidden e Poisoning em 100.0 uma única vez no primeiro login após a atualização.

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
preparação. Movimento, dano, ataque, magia, fala, potion, bandagem, ação
reveladora, morte, logout ou troca de mapa interrompem a tentativa. Ao final, as
condições de combate são verificadas novamente antes do teste da skill.

As duas skills podem iniciar ou renovar a ocultação e compartilham o movimento
escondido. O limite é calculado por `floor((Hiding + Stealth) / 8)`, com mínimo
de 1 e máximo de 25 passos. Caminhar consome esse limite; esgotá-lo revela o
personagem e correr revela imediatamente. Usar armadura não bloqueia nem reduz a
eficácia de Stealth.

!!! success "Status: Live 0.23.3"
    Stats, skills, caps e raça correspondem ao servidor oficial.
