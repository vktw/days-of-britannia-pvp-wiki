# Leilão

O **leilão global** negocia itens entre jogadores com o comando **.auction**:
liste qualquer item negociável da mochila por **24**, **48** ou **72** horas,
com o lance inicial e o incremento que você escolher (até **10** leilões por
conta).

O lance sai do gold do banco e volta se for superado; um lance nos últimos
**5 minutos** estende o leilão em **5 minutos**. Ninguém vê quem vende nem
quem dá lance. Depois do primeiro lance o leilão não pode ser cancelado; a
venda paga o preço menos **10%** de comissão, e o item não vendido volta ao
seu banco.

Na janela, a imagem, o nome, o lance, o tempo e o botão de cada lote ficam
alinhados na mesma linha. Também dá para leiloar itens do banco: com o banco
aberto, use o comando e escolha o item direto dele, inclusive de dentro de
uma bolsa. Commodity deeds preenchidas também entram: a deed vai a leilão com
a mercadoria dentro (vazia é recusada). A janela ficou mais larga para caber
lances de até **100.000.000**.

Os leilões têm canal próprio no Discord: cada leilão é anunciado ao abrir,
com novo aviso no máximo uma vez por hora quando recebe lances novos, e ao
terminar. Nenhum anúncio mostra quem vende ou dá lance.

## Continue explorando

Consulte [Comandos](../comandos.md) para o `.auction` e [Kharag](kharag.md) para
as encomendas que terminam em leilão.

!!! success "Status: 2.2.0"
    Leilão global de itens entre jogadores.
