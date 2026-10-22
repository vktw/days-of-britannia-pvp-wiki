# Arena

Use `.arena` para abrir o sistema. É possível desafiar outro jogador ou, na
arena compatível, treinar contra o **PvP Trainer**.

## Arenas disponíveis

| Arena | Jogador vs jogador | PvP Trainer |
|---|:---:|:---:|
| Moonglow | Sim | Sim |
| Yew Cemetery | Sim | Sim |
| Arena NuJel'm | Sim | Sim |

Arena NuJel'm fica em Felucca. As três arenas aceitam duelos com loot do sistema
ou loot pessoal. No 0.53.0, o PvP Trainer passou a ser oferecido em todas as
arenas.

A área completa da **Yew Cemetery** é reconhecida como parte da Yew Arena. Os
participantes dentro da área oficial não são tratados como estando fora dos
limites da luta.

Durante a luta, a Arena usa as mesmas regras do PvP aberto para chance de
acerto, dano, poison, cura, bandage, cast delay e mana. As restrições próprias
da Arena ficam no fluxo de preparação, na área, no tempo da sessão e no loot;
consulte o [guia de PvP](combate/index.md) para entender como essas regras se
combinam em combate.

## Modos de duelo

Duelos entre jogadores nas arenas compatíveis oferecem dois modos:

- **System Loot:** cada participante recebe o kit Iron fixo da Arena e a
  configuração original é restaurada ao final. Não há seleção pública de tiers
  de armor ou weapons. No 1.0.0, o kit passou a incluir Bone Harvester,
  Broadsword, Viking Sword, Executioner's Axe, Scythe e Double Bladed Staff,
  em Iron.
- **Personal Loot:** o corpo, a mochila e a montaria seguem o fluxo normal de
  morte. Somente o vencedor pode saquear o corpo derrotado durante 60 segundos;
  o perdedor fica retido por 15 segundos e o conteúdo restante é perdido ao fim
  da janela.

Os dois modos têm tabelas de ranking separadas. O vencedor de cada duelo entre
jogadores é anunciado para todo o servidor.

## Taxas e fluxo da luta

No 0.52.0, a Arena ficou gratuita: duelos entre jogadores e treinos contra o
PvP Trainer não cobram mais taxa de entrada.

1. Abra `.arena`, escolha um duelo contra jogador ou um treino contra o PvP
   Trainer e, para duelos entre jogadores, escolha o modo de loot disponível.
   Quem está em combate com outros jogadores não entra na arena, nem desafia
   nem aceita desafios, até **2 minutos** após o último ataque.
2. Desafios públicos ficam disponíveis por 120 segundos para aceitação; quando
   restam 15 segundos, o lembrete é recalculado. Personagens da mesma conta não
   podem se enfrentar.
3. Quando um candidato aceita, sua vaga fica reservada por 15 segundos enquanto
   o desafiante confirma ou recusa o oponente.
4. Há 90 segundos de preparação sem movimento, ataque ou uso de potions. A
   luta dura no máximo 10 minutos.
5. Após o resultado, há 15 segundos antes do retorno. A Arena encerra casts e
   ações pendentes e limpa os estados temporários de combate.

Um item segurado no cursor quando a partida começa é guardado com os
pertences e devolvido no fim. No modo System Loot, a Arena restaura a
configuração original e os pertences do participante. No modo Personal Loot, a
devolução segue as regras do corpo e da montaria descritas acima.

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

O PvP Trainer é uma opção de treinamento disponível nas três arenas. A
entrada é gratuita e fornece o kit Iron fixo; seleção de tiers não faz
parte desse fluxo. No 0.53.0, ele passou a se mover na velocidade do jogador
(montado acompanha montado), a perseguir enquanto conjura (inclusive
finalizadoras), a recuar enquanto se cura ou se fortalece e a colidir como um
jogador (atravessar exige stamina cheia e custa 10). Esta página documenta
somente as regras observáveis de entrada, cobrança e resultado, não decisões
táticas internas do NPC.

!!! success "Status: 0.53.0"
    Estas são as regras disponíveis no servidor oficial.
