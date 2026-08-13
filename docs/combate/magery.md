# Magery

## Fluxo de cast

Magery segue o fluxo **escolher alvo → aguardar o cast → aplicar o efeito**.

- O cursor aparece ao ativar a magia.
- Cancelar antes de escolher um alvo válido não consome recursos.
- É permitido mover-se durante a maioria dos casts.
- Frozen ou Paralyzed não impedem Magery por si só, mas mãos ocupadas podem bloquear um personagem paralisado.
- Ativar Magery normalmente envia arma e shield para a mochila.
- Dano comum não interrompe a maioria das magias; Teleport, Recall e Gate Travel são exceções.
- Trocar de magia durante o cast faz a anterior falhar e consumir seus recursos.
- Iniciar uma magia aceita cancela uma bandage pendente; o tratamento imediato de poison não cria essa espera.
- FC, FCR, LRC e LMC não modificam este ruleset.

## Delays importantes

| Magia | Delay |
| --- | ---: |
| Harm | 1,0 s |
| Fireball | 2,5 s |
| Paralyze | 2,5 s |
| Flame Strike | 3,5 s |
| Recall e Gate Travel | 4,0 s após escolher destino válido |

Protection é uma exceção rápida, com 1,4 segundo. Earthquake não usa cursor.

## Dano e mana

Com 100 INT e 100.0 Evaluating Intelligence, os principais danos máximos de PvP são:

| Magia | Dano máximo |
| --- | ---: |
| Magic Arrow | 10 |
| Harm | 5–7 no PvP |
| Fireball | 17 |
| Lightning | 25 |
| Mind Blast | 26 |
| Energy Bolt | 27 |
| Explosion | 35 |
| Flame Strike | 40 |

INT ou Evaluating Intelligence abaixo de 100 reduzem o dano. Valores acima de 100 não aumentam o máximo. Chain Lightning, Meteor Swarm e Earthquake dividem seu dano entre os alvos PvP atingidos.

No PvP, Harm causa de 5 a 7 de dano por conjuração. No PvM, o dano nativo e sua faixa permanecem inalterados.

## Buffs e controle

- Protection dura 90 segundos e reduz parte do dano restante.
- Reactive Armor dura 90 segundos e devolve parte do dano melee ao atacante.
- Protection e Reactive Armor usam os efeitos visuais e sons de conjuração históricos do Sphere 0.51a. Durante o reflexo, Reactive Armor mostra apenas o efeito vermelho histórico no atacante.
- Magic Reflection possui uma carga contra a próxima magia ou field nocivo elegível.
- Paralyze pode ser renovado; dano direto pode libertar o alvo.
- Poison não rompe Paralyze.
- Dispel remove apenas efeitos mágicos clássicos compatíveis; não remove poison de arma, efeitos de potion, Young ou estados da Arena.
- Magic Arrow usada no próprio personagem aplica efeito e dano juntos ao terminar o cast. Contra outros alvos, mantém o projétil e a espera normal do impacto.

## Fields

Fields de jogadores e do PvP Trainer usam alcance de 12 tiles e formam sete tiles. Fire Field causa dano, inclusive no próprio caster; o primeiro tick ocorre em 0,5 segundo e os seguintes a cada 1,6 segundo. Poison Field aplica poison e Energy Field bloqueia o participante PvP adversário.

Paralyze Field pode reaplicar Paralyze depois de uma breve janela. Wall of Stone dura 60 segundos e segue regras próprias de posicionamento.

## Viagem e alvos

Magias podem ser conjuradas em cidades. Restrições específicas de arena, viagem, geometria e elegibilidade do alvo continuam valendo.

Magias direcionadas usam normalmente alcance 12. Felucca é a única faceta pública; Trammel permanece restrita às arenas oficiais. Recall, Mark e Gate Travel não permitem sair da faceta pública.

Resurrection pode devolver os itens móveis do corpse quando o ghost está próximo e aceita a ressurreição.

!!! success "Status: Live 0.26.3"
    Delays, alcance e efeitos necessários para jogar e planejar combates.
