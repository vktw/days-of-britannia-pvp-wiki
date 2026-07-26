# Threat Rating

!!! info "Próximo patch programado"
    A fórmula 2 está em avaliação no servidor local e ainda não está ativa no shard oficial. Esta página publica antecipadamente o catálogo planejado para revisão do conselho.

O **Threat Rating** resume a ameaça de cada criatura em uma classe textual e colorida. Ele ajuda a comparar inimigos rapidamente sem transformar o jogo em uma planilha de atributos.

[Consultar o inventário completo de 618 criaturas](threat-inventory.md){ .md-button }

O rating é calculado quando a criatura surge e fica congelado nela. Reinícios e saves preservam a classificação; quando a fórmula muda, criaturas antigas são recalculadas durante o carregamento do mundo.

## Classes

| Classe | Cor | Leitura prática |
| --- | --- | --- |
| Trivial | Cinza | Criaturas muito fracas ou introdutórias |
| Common | Branco | Ameaça comum para aventureiros preparados |
| Dangerous | Verde | Exige atenção e equipamento adequado |
| Deadly | Amarelo | Combate perigoso e com pouca margem para erro |
| Legendary | Laranja | Inimigos de elite e grandes chefes |
| Mythic | Vermelho | Ameaça excepcional |
| Cataclysmic | Magenta | Encontro de altíssimo risco |
| World Threat | Azul | Ameaça capaz de exigir resposta coletiva |
| Apocalyptic | Roxo | Faixa aberta para os maiores desafios do shard |

As classes superiores permanecem abertas para o crescimento futuro do mundo. **Apocalyptic** é a classe mais alta; não existe limite artificial para o score interno.

## O que influencia

O cálculo considera, em conjunto:

- vida máxima e Armor Rating;
- dano físico, skill de ataque e chance de acerto;
- Magery, Evaluating Intelligence e reserva de mana;
- inteligência artificial de Mage ou NecroMage;
- poison, imunidades, Auto Dispel e teleportes;
- habilidades especiais, Dragon Breath e capacidade explícita de autocura;
- dificuldade do encontro quando uma criatura representa ou integra uma luta maior.

A curva é contínua: melhorar os atributos ou mecânicas de uma criatura nunca reduz sua ameaça apenas por atravessar uma faixa de classificação.

## Catálogo de referências

Nove criaturas possuem perfis fixos no catálogo do servidor e servem como referências para manter a escala coerente. Elas fazem parte do catálogo mesmo quando não estão spawnadas no mundo. Outras criaturas usam a fórmula geral, salvo quando receberem um perfil revisado no futuro.

| Referência | Threat | XP | Classe calibrada | Papel na escala |
| --- | ---: | ---: | --- | --- |
| Zombie | 100 | 10 | Trivial | Início da escala |
| Skeleton | 120 | 12 | Trivial | Inimigo introdutório |
| Harpy | 250 | 25 | Trivial | Degrau superior da faixa inicial |
| Troll | 400 | 40 | Trivial | Topo das âncoras introdutórias |
| Drake | 900 | 90 | Common | Primeiro salto relevante de combate |
| Dragon | 2.300 | 230 | Dangerous | Referência clássica de criatura perigosa |
| Shadow Wyrm | 5.000 | 500 | Deadly | Referência de alto risco |
| Greater Dragon | 5.800 | 580 | Deadly | Topo das criaturas clássicas usadas na calibração |
| Harrower | 12.950–15.650 | 1.295–1.565 | Legendary | Encontro variável de grande chefe |

O intervalo do **Harrower** representa a variação calculada para o encontro. Em todos os casos, o XP corresponde a `Threat / 10`.

## Exemplos práticos

- Um **Zombie** e um **Skeleton** aparecem como `Threat: Trivial`.
- Um **Drake** aparece como `Threat: Common`.
- Um **Dragon** aparece como `Threat: Dangerous`.
- Um **Shadow Wyrm** e um **Greater Dragon** aparecem como `Threat: Deadly`.
- O **Harrower** aparece como `Threat: Legendary`.
- Se uma criatura elegível virar Paragon, sua propriedade também mostra `Variant: Paragon`; a classe pode subir caso o bônus atravesse a próxima faixa.

O score exato das criaturas calculadas pela fórmula geral, o Threat Level e o Encounter Score permanecem internos. A wiki publica os valores das referências fixas para tornar a escala compreensível ao jogador.

## Paragons

**Paragon não é uma classe acima de Apocalyptic.** Ele aparece como uma variante separada junto ao Threat Rating da criatura.

Ao se tornar Paragon, a criatura recebe um aumento de 10% em seu score de ameaça e pode mudar de classe se ultrapassar o próximo limite. A propriedade continua mostrando separadamente a classe e a variante `Paragon`.

## Recompensas

No próximo patch, cada criatura concederá XP equivalente ao seu Threat dividido por 10:

`XP = Threat / 10`

Por exemplo, um Zombie com Threat 100 concede 10 XP, enquanto um Dragon com Threat 2.300 concede 230 XP.

O Threat Rating não aumenta loot ou gold por si só. Essas recompensas continuam seguindo as regras próprias da criatura e da economia do servidor.

## Limites da classificação

O rating é uma comparação consistente, não uma promessa de dificuldade idêntica para todo personagem. Terreno, quantidade de inimigos, composição do grupo, resistências e estratégia ainda podem tornar dois encontros da mesma classe muito diferentes.

Criaturas controladas, summons, vendors e o PvP Trainer não recebem Threat Rating PvM.
