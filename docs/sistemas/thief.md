---
description: Entenda Snooping, Stealing, retaliação, devolução de itens e o estado cinza do thief no servidor oficial.
---

# Thief: Snooping e Stealing

Se você joga como thief, **Snooping** permite inspecionar containers e **Stealing** permite tentar roubar outros jogadores. As duas ações têm consequências diferentes para a vítima e para o seu personagem.

## Snooping: inspecionar containers

Tentativas de Snooping têm intervalo de **4 segundos**. Se você tentar novamente antes desse prazo, verá o tempo restante e não receberá o conteúdo do container.

É possível inspecionar e abrir containers vinculados ao starter kit, inclusive quando guardam outros itens vinculados. Isso não libera o uso, movimento, troca ou roubo desses itens.

Quando a vítima detecta o Snooping, ela pode retaliar diretamente contra o snooper por **2 minutos**, sem se tornar criminal nem acionar guards. Esse direito vale somente entre os dois personagens e não persiste após sair do jogo.

## Stealing: tentar roubar um jogador

Você pode usar Stealing contra outros jogadores sem pertencer a uma guild de NPC. Em um roubo PvP, a vítima recebe o nome do ladrão. Ela pode retaliar diretamente contra ele por **2 minutos após uma tentativa falha** ou por **20 minutos após um roubo bem-sucedido**. Essa retaliação vale apenas para aquele par, sem criminalidade ou intervenção de guards.

Se o ladrão morrer dentro dos **20 minutos após um roubo bem-sucedido**, os itens empilháveis roubados retornam ao dono na quantidade que ainda existir. Itens consumidos e containers não retornam.

Em [Nujelm Safe Haven](../mundo/nujelm.md), Stealing entre jogadores é bloqueado pela proteção da região.

Na primeira vez que você usa Stealing, uma janela explica as regras de roubo;
a skill só é liberada depois que você aceita. Roubar ou espiar a mochila de um
membro da sua party ou guild não tem consequência: não soma steal count, não
deixa cinza e não gera agressão. Só contam sucessos reais contra jogadores:
falhas, monstros, NPCs e Arena não contam.

## Ser pego roubando

Cada tentativa contra um jogador pode expor o ladrão: com **100.0 de Stealing**, cerca de **1 em 3** tentativas é percebida; com **120.0**, cerca de **1 em 5**. Itens imóveis fora de containers não geram essa exposição.

Quem é pego **vira criminal na hora**, e todos num raio de **8 tiles** veem que ele tentava roubar — exceto se for da mesma guild da vítima ou a vítima não for inocente. Ser pego ou falhar não conta para os 5 roubos do estado cinza.

A vítima sempre recebe o aviso da tentativa, mesmo no furto limpo. Com um
amuleto de Stealing **+10**, o efetivo chega a **110.0** e a chance de ser
pego cai para cerca de **1 em 4**.

## Quanto dá para roubar

Nada acima de **10 stones** pode ser roubado. Em pilhas, a quantidade máxima
por tentativa é a skill dividida por 10 e pelo peso da unidade — com o teste
de skill decidindo o sucesso:

- Moedas de ouro: até **1.500** com 100.0, até **1.650** com 110.0.
- Reagentes: até **100** com 100.0, até **110** com 110.0.
- Poções de 1 stone: até **10** com 100.0, até **11** com 110.0.

Perto do limite de 10 stones, a chance de sucesso com 110.0 fica em torno de
**2 em 3**.

## Treinar em casa

Furtar itens do próprio baú **secured** em casa não gera flag criminal, não
chama guards e não conta para o estado cinza. Coloque o item de treino no baú
e repita furtar e devolver.

O ganho de skill acompanha o peso do item — use estas faixas como referência:

| Stealing | Peso ideal | Exemplos |
|---|---|---|
| 0.0–40.0 | 1 stone | Adagas, garrafas vazias |
| 40.0–60.0 | 2–3 stones | Livros, sapatos, roupas |
| 60.0–80.0 | 4–6 stones | Martelos, armaduras leves |
| 80.0–100.0 | 7–10 stones | Escudos, lingotes, pilhas de 8–10 stones |

## Estado cinza do thief

Depois de **5 roubos PvP bem-sucedidos**, o personagem fica cinza e pode ser atacado por qualquer jogador sem que o atacante se torne criminal. Guards não interferem; bancos, vendors e moongates continuam funcionando. O estado murderer tem precedência.

A contagem diminui em **1 a cada 24 horas de jogo**. No 0.51.0, todas as
contagens foram zeradas uma única vez. Para consultá-la no jogo, diga `*i
must consider my sins*`.

A [Thieving Cape](../craft/tailoring.md) pode ocultar o estado cinza de jogadores que ainda não revelaram o usuário. Ela exige **100.0 base** em Hiding, Stealth, Snooping e Stealing para criar e vestir. Forensic Evaluation revela o usuário por **10 minutos**.

A capa tem **1 hora** de disfarce, gasta somente enquanto vestida, e é
indistinguível de uma capa comum em nome, arte, peso e cor. Atacar um ladrão
de capa não deixa o atacante criminal, mesmo com o gump de confirmação. A
revelação é um duelo de **Forensics + Detect Hidden** contra **Hiding +
Stealth**: quem vence passa a ver o ladrão cinza por 10 minutos, só para si —
para os demais, ele continua azul. O ladrão recebe o aviso vermelho `You have
been revealed by [nome]!`. Só conta para o cinza o sucesso real contra jogador:
falhas, monstros, NPCs e Arena não contam, e ao 5º ponto aparece `You are now
known as a thief!`.

Para as demais regras de confronto, consulte [Como funciona o PvP](../combate/index.md). Para ocultação e movimento, consulte [Hiding e Stealth](../personagem.md).

!!! success "Status: Live 0.45.1"
    Regras de thief do servidor oficial.
