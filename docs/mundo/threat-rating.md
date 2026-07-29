# Threat Rating

!!! success "Status: Live 0.9.12"
    A classificação usa a fórmula 3 baseada no snapshot de MaxHits. O número permanece interno; jogadores veem apenas classe, cor e variante.

O **Threat Rating** resume a resistência de cada criatura em uma classe textual e colorida. Ele permite comparar inimigos sem expor uma planilha de atributos no jogo.

[Consultar o inventário de criaturas](threat-inventory.md){ .md-button }

A classificação é calculada quando a criatura surge e fica congelada naquela instância. Saves preservam o snapshot; mudanças de versão da fórmula recalculam criaturas antigas durante o carregamento do mundo. Criaturas com múltiplas formas, como o Harrower, renovam o snapshot quando seus MaxHits mudam.

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

**Apocalyptic** é a classe mais alta. O índice interno não possui teto artificial.

## O que influencia

A fórmula 3 usa somente o **snapshot de MaxHits efetivos**, com mínimo de um. Dano, skills, Armor Rating, inteligência artificial, poison, autocura e outras habilidades não recebem pesos separados.

Hits altos representam uma criatura que permanece perigosa por mais tempo e possui mais oportunidades de pressionar, aproveitar erros e acertar sequências de dano. O índice não muda durante o combate comum.

## Âncoras de validação

As âncoras verificam se a fórmula comum produz a escala pretendida. Elas não recebem valores fixos, não ganham bônus por nome ou tipo e não são forçadas a uma classe.

| Referência | Classe esperada | Papel na validação |
| --- | --- | --- |
| Zombie | Trivial | Início da escala |
| Skeleton | Trivial | Inimigo introdutório |
| Harpy | Trivial | Degrau superior da faixa inicial |
| Troll | Trivial | Topo das referências introdutórias |
| Drake | Common | Primeiro salto relevante de combate |
| Dragon | Dangerous | Referência clássica de criatura perigosa |
| Greater Dragon | Deadly | Topo das criaturas clássicas |
| Neira | Legendary | Referência de Champion |
| Harrower | Mythic | Referência de grande chefe |

Se uma âncora cair fora da classe esperada, a validação falha e a calibração geral precisa ser revista.

## Paragons

**Paragon não é uma classe acima de Apocalyptic.** Ele aparece como variante separada. A fórmula usa o MaxHits efetivo do Paragon no momento do snapshot; não existe um segundo bônus de 10% aplicado ao score.

## Recompensas

Threat Rating não concede multiplicador próprio de XP, gold ou loot. O sistema PvM planejado para o 0.10.0 usa o mesmo snapshot de MaxHits como entrada independente, sem alterar a classe textual.

## Limites da classificação

Threat é uma comparação consistente de resistência, não uma promessa de dificuldade idêntica para todo personagem. Terreno, quantidade de inimigos, composição do grupo, resistências, habilidades e estratégia ainda podem tornar dois encontros da mesma classe muito diferentes.

Criaturas controladas, summons, vendors e o PvP Trainer não recebem Threat Rating PvM.
