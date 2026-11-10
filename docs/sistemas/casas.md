# Casas

## Fronteira de casas privadas

Jogadores autorizados dentro de casas privadas ficam protegidos de ações hostis
externas e também não podem atacar através da fronteira da casa. Casas públicas
permanecem inalteradas.

## Conteúdo visível em casas privadas

O conteúdo da casa também pode mostrar os objetos posicionados em uma casa
privada. Essa visibilidade não libera interação externa: containers, mapas e
outros objetos não estruturais continuam protegidos contra retirada, uso ou
transferência por quem não tem acesso.

## Interações entre pisos

Pisos estruturais não bloqueiam interações no mesmo andar quando estão abaixo
da linha de visão. Paredes, portas, outros andares e regras de acesso continuam
protegidos.

## Ações de co-owners no 0.45.0

Co-owners podem abrir e soltar baús locked down ou secured pelo dono, exceto
quando a segurança do baú está definida como **Owner**. Também podem usar Moving
Crates, alternar teleporters e o estado público/privado, customizar ou converter
a casa, mudar a placa e usar addons e decorações.

Transferir ou demolir a casa, mudar seu modelo, administrar vendors ou a lista
de co-owners e acessar baús com segurança **Owner** continuam sendo ações
exclusivas do dono.

No 0.51.0, **Wooden boxes** (e caixas de recompensa do tipo) só entram no chão
de casa da qual você é dono ou co-dono. Caixas já colocadas continuam onde
estão.

## Magincia no 0.49.0

Posicionar uma casa em **Magincia** não derruba mais o servidor, mas a
tentativa continua recusada: construir casas na cidade não é permitido.

## Itens no chão e linha de visão no 2.1.0

No 2.1.0, itens largados no chão da casa não somem mais com o tempo, mesmo sem
lock down. Em troca, eles contam no limite de itens da casa (o storage da
placa), com o que tiverem dentro; casa cheia não aceita mais nada no chão.

Dentro de casa, a linha de visão respeita a altura real: paredes e portas do
andar de cima, degraus e grades não bloqueiam a visão de um baú no andar de
baixo; quem está num arco ou batente enxerga normal. Mexa nos baús trancados
de qualquer ponto ao alcance, em todas as casas; parede de verdade continua
bloqueando.

## Commodity Deed Box

Bankers vendem a **Commodity Deed Box por 20.000 Gold**. Para operar Commodity
Deeds, a caixa precisa estar **secured dentro de uma casa**; mantê-la na mochila
não é suficiente.

## Arsenal da casa no 2.4.0

O **Arsenal da casa (Armory)** é um addon vendido pelo Architect por
**250.000** gold: **1** por casa. O dono e os co-donos usam o mesmo
armazenamento e **5** loadouts. Ele guarda armas, armaduras, joias, roupas,
poções, reagentes, flechas, bolts, bandagens e bolsas vazias. O loadout grava
o tipo, o material e o tier das peças, e depois de uma morte veste peças iguais
que estiverem guardadas. No 2.5.0, o loadout também grava as armas, arcos e
escudos que você leva na mochila, inclusive dentro de bolsas; ao equipar,
peças iguais guardadas voltam para a mochila, sem repetir as que você já
carrega. Ao guardar a si mesmo ou um container, uma lista deixa
você desmarcar o que não quer guardar. Ao retirar uma pilha (poções,
reagentes, flechas, bandagens), uma janela pergunta a quantidade, com a pilha
inteira já preenchida. Um campo de busca com o botão Buscar filtra os itens
pelo nome (maiúsculas e acentos não importam), na categoria escolhida, cada um
com seu Retirar; campo vazio e Buscar mostram tudo de novo. Não funciona em
combate (**30** segundos).

!!! success "Status: 0.45.0"
    As permissões de co-owners correspondem às notas de produção.
