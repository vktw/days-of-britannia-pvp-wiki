# Arena

Use `.arena` para abrir o sistema. É possível desafiar outro jogador ou, na
arena compatível, treinar contra o **PvP Trainer**.

## Arenas disponíveis

| Arena | Jogador vs jogador | PvP Trainer |
|---|:---:|:---:|
| Moonglow | Sim | Sim |
| Yew Cemetery | Sim | Não |
| Arena NuJel'm | Sim | Não |

Arena NuJel'm fica em Felucca. Ela aceita somente duelos entre jogadores no modo
**Personal Loot**. O PvP Trainer continua disponível exclusivamente na Arena
Moonglow.

Durante a luta, a Arena usa as mesmas regras do PvP aberto para chance de
acerto, dano, poison, cura, bandage, cast delay e mana. As restrições próprias
da Arena ficam no fluxo de preparação, na área, no tempo da sessão e no loot;
consulte o [guia de PvP](combate/index.md) para entender como essas regras se
combinam em combate.

## Modos de duelo

Duelos entre jogadores nas arenas compatíveis oferecem dois modos:

- **System Loot:** cada participante recebe o kit Iron fixo da Arena e a
  configuração original é restaurada ao final. Não há seleção pública de tiers
  de armor ou weapons.
- **Personal Loot:** o corpo, a mochila e a montaria seguem o fluxo normal de
  morte. Somente o vencedor pode saquear o corpo derrotado durante 60 segundos;
  o perdedor fica retido por 15 segundos e o conteúdo restante é perdido ao fim
  da janela.

NuJelm oferece somente Personal Loot. O modo escolhido também determina o
ranking: System Loot e Personal Loot têm tabelas separadas.

## Taxas e fluxo da luta

1. Abra `.arena`, escolha um duelo contra jogador ou um treino contra o PvP
   Trainer e, para duelos entre jogadores, escolha o modo de loot disponível.
2. A Arena verifica antecipadamente o gold necessário antes de preparar a
   sessão. A cobrança ocorre no início da luta: 5.000 gold por participante em
   duelos entre jogadores e 1.000 gold no treino contra o Trainer.
3. Desafios públicos ficam disponíveis por um minuto para aceitação;
   personagens da mesma conta não podem se enfrentar.
4. Quando um candidato aceita, sua vaga fica reservada por 15 segundos enquanto
   o desafiante confirma ou recusa o oponente.
5. Há 60 segundos de preparação sem movimento, ataque ou uso de potions. A
   luta dura no máximo 10 minutos.
6. Após o resultado, há 15 segundos antes do retorno. A Arena encerra casts e
   ações pendentes e limpa os estados temporários de combate.

No modo System Loot, a Arena restaura a configuração original e os pertences do
participante. No modo Personal Loot, a devolução segue as regras do corpo e da
montaria descritas acima.

## Desconexão

- Durante a preparação, a desconexão cancela a luta sem resultado.
- Durante o combate, o jogador desconectado perde por desistência.
- A recuperação da sessão e dos pertences é verificada quando necessário no
  próximo login.

## Ranking

- Vitória: 3 pontos.
- Empate: 1 ponto.
- A primeira luta pontuável contra determinado IP conta na temporada.
- Lutas entre o mesmo IP não pontuam.
- A temporada dura 15 dias.
- System Loot e Personal Loot usam rankings separados.
- O ranking do PvP Trainer considera o menor tempo de vitória e permanece em sua
  própria tabela.
- Ao final da season, campeões únicos do PvP Trainer, System Loot e Personal
  Loot recebem no banco um **Days of Britannia Arena Trophy**. Empates restantes
  não geram campeão.

## PvP Trainer

O PvP Trainer é uma opção de treinamento disponível pela Arena Moonglow. A
entrada custa 1.000 gold e fornece o kit Iron fixo; seleção de tiers não faz
parte desse fluxo. Esta página documenta somente as regras observáveis de
entrada, cobrança e resultado, não decisões táticas internas do NPC.

!!! success "Status: 0.40.0"
    Estas são as regras disponíveis no servidor oficial.
