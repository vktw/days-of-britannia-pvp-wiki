---
description: "Instale e mantenha um Player Vendor no mercado público protegido de Nujelm."
---

# Player Vendors

O mercado público de Nujelm permite instalar um **Player Vendor** protegido em
um dos 42 bancos de madeira reservados no Safe Haven de Felucca.

## Como instalar

1. Obtenha um contrato de emprego compatível.
2. Vá até um banco de madeira reservado no mercado de Nujelm.
3. Use o contrato e confirme a instalação no local disponível.

No 1.0.0, os vendors ficaram mais simples e baratos: o contrato comum e o
**contrato de comissão**, vendido pelo banker, colocam um vendor normal em
qualquer um dos 42 spots livres do Safe Haven. O vendor comum paga só a diária
normal, sem os 1.500 Gold extras e sem reserva para instalar; o de comissão
fica com 5,25% de cada venda e não paga diária. Um vendor por conta; se ele
sair, os itens e o gold vão para o seu banco.

Cada conta e IP público pode manter **um único vendor de Nujelm**. Esse limite
não altera Player Vendors instalados em casas.

## Custos e reserva

O vendor cobra a diária normal do sistema mais **1.500 Gold**. A instalação
exige uma reserva inicial de três diárias retirada do bank:

- vendor vazio: **4.680 Gold** de reserva inicial;
- o custo real pode crescer conforme o estoque;
- o menu do vendor mostra a diária e o saldo disponível na reserva.

O vendor permanece fixo e protegido enquanto ocupa o banco reservado.

## Quando falta Gold

Saldo insuficiente inicia uma tolerância de **24 horas**. Durante esse período:

- o estoque existente continua à venda;
- novas adições ao estoque ficam bloqueadas;
- o dono pode depositar Gold do bank ao entrar.

Se a tolerância expirar, o estoque e o Gold retornam ao bank, com tratamento de
overflow. A conta precisa aguardar **sete dias** para instalar outro vendor de
Nujelm.

Consulte [Nujelm Safe Haven](../mundo/nujelm.md) para as regras de proteção e
[Royal Banking Charter](royal-banking-charter.md) para ampliar o banco.

!!! success "Status: 0.40.0"
    O mercado público de Player Vendors está ativo em Nujelm.
