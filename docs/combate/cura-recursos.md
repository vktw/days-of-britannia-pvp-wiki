# Cura e recursos

## Faixas de cura

Com as skills relevantes em 100.0:

| Recurso | Cura | Uso |
| --- | ---: | --- |
| Heal | 9–12 | Até 10 tiles |
| Greater Heal | 30–40 | Até 10 tiles |
| Bandage | 30–40 | Até 2 tiles |
| Greater Heal Potion | 40 | Uso próprio |

Poison não impede Heal, Greater Heal ou Greater Heal Potion.

Bandage remove poison imediatamente, sem recuperar vida nessa aplicação. Sem poison, a cura termina após **3,5 segundos**. Usar bandage libera as mãos automaticamente; se o personagem estiver paralisado, elas já precisam estar vazias.

Uma bandage limpa usada com sucesso vira Bloody Bandage. Uma fonte de água usa uma unidade para lavar o stack inteiro; se a mochila não comportar o resultado, ele cai no chão.

Iniciar uma magia aceita pelo servidor cancela a bandage que ainda estiver em andamento. A bandage não é devolvida e não completa a cura depois. O tratamento imediato de poison não é afetado.

## Potions

Potions bebíveis compartilham cooldown global de **15 segundos** e não exigem mãos livres.

- Greater Heal recupera 40 hits.
- Total Mana recupera 40 mana.
- Total Refresh recupera stamina.
- Invisibility torna o personagem invisível imediatamente.

Total Mana Potion não é consumida quando a mana já está cheia.

Explosion Potions usam cursor e contagem regressiva. Podem atingir uma área, então posição e tempo importam mais que tentar decorar o cálculo de dano.

## Mana

Focus, Meditation e INT ajudam na recuperação de mana. Equipamento moderno desativado não concede vantagem adicional.

Com Focus 100.0, Meditation 100.0, INT 100 e sem Mana Regen de itens:

- recuperação passiva: aproximadamente **0,76 mana por segundo**;
- Meditation ativa: aproximadamente **1,51 mana por segundo**.

Meditation ativa é mais rápida, mas não duplica integralmente a recuperação. Planeje janelas seguras antes de depender dela no combate.

!!! success "Status: Live 0.23.3"
    Valores e restrições que afetam decisões durante o combate.
