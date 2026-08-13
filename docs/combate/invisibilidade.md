---
description: Entenda Invisibility, o impacto de ataques contra alvos ocultos e o tempo de busca do Detect Hidden.
---

# Invisibilidade e Detect Hidden

Esta página explica o que você pode esperar ao usar Invisibility, atacar alguém invisível ou procurar personagens com Detect Hidden.

## Quando uma magia ou ataque encontra um alvo invisível

- Uma magia direcionada falha se o alvo ainda estiver invisível no momento do impacto.
- Dano periódico de poison não remove a invisibilidade da vítima.
- Fields, área e dano ambiental seguem suas próprias regras; esta página trata de ataques e magias direcionados.

## Atacar enquanto invisível

Você permanece oculto durante a preparação. Em PvP, a revelação acontece quando
sua magia, ataque melee ou disparo de Archery atinge validamente outro jogador.
Em PvM, dano direto positivo causado por você a uma criatura selvagem elegível
encerra Hiding, Stealth e efeitos ativos de invisibilidade. Misses, dano zero,
ticks de poison, pets, summons e ataques contra alvos de PvP não ativam essa
regra. Words of Power de um conjurador invisível ficam no journal, sem texto
acima da cabeça.

## Usar Detect Hidden

Detect Hidden inicia uma busca sem cursor em uma área fixa de **12 tiles**. Aguarde **2 segundos** para que ela seja resolvida; não há cooldown adicional depois da busca. A busca revela outros jogadores escondidos, inclusive em PvP, mas não afeta mobs, criaturas, pets, NPCs ou itens ocultos.

## Resumo rápido

| Situação | Resultado |
|---|---|
| Magia direcionada contra alvo invisível no impacto | Falha |
| Poison periódico em vítima invisível | Não revela |
| Ataque válido de personagem invisível contra outro jogador | Revela o atacante |
| Dano direto positivo contra criatura selvagem PvM elegível | Encerra Hiding, Stealth e invisibilidade ativa |
| Miss, dano zero ou tick de poison em PvM | Não revela |
| Detect Hidden | Área de 12 tiles; revela players após 2 s |

As regras de invisibilidade valem para jogadores, criaturas e PvP Trainer quando a ação correspondente for usada. A busca ativa de Detect Hidden revela somente outros jogadores vivos e escondidos.

!!! success "Status: Live 0.26.3"
    Invisibilidade é avaliada no impacto real de ataques e magias.
