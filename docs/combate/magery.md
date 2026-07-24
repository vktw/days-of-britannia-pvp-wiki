# Magery

## Fluxo de cast

Magery usa o fluxo **alvo → cast delay → revalidação → efeito**. O cursor aparece imediatamente após a ativação. Selecionar inicialmente um alvo inválido ou cancelar o cursor não consome recursos.

- É permitido mover-se durante o cast.
- Frozen ou Paralyzed não impedem iniciar ou concluir Magery.
- Ao ativar a magia, itens nas mãos são enviados para a mochila.
- Itens podem ser equipados depois da ativação.
- Dano comum não causa fizzle, exceto em Teleport, Recall e Gate Travel.
- FC, FCR, LRC e LMC não afetam Magery.
- Earthquake é a única magia sem cursor.

## Delays por círculo

| Círculo | Delay | Círculo | Delay |
|---:|---:|---:|---:|
| 1 | 1,0 s | 5 | 3,0 s |
| 2 | 1,5 s | 6 | 3,5 s |
| 3 | 2,0 s | 7 | 4,0 s |
| 4 | 2,5 s | 8 | 4,5 s |

Protection possui exceção própria de 1,4 segundo.

## Dano e mana

Flame Strike é a âncora do equilíbrio: com 100 INT e 100.0 Evaluating Intelligence, consome **40 mana** e causa **40 de dano** em PvP. Inscription não modifica dano mágico. Lightning causa 20; magias com projétil preservam apenas o tempo necessário para sincronizar dano e impacto visual, enquanto Explosion mantém seu fuse de três segundos.

Resisting Spells participa das resistências e efeitos elegíveis, mas não recria as resistências elementais AOS.

## Buffs e controle

- Protection concede +5 a +10 AR por 60 segundos, sem penalidades modernas. Termina por morte, logout, Dispel, Purge Magic ou expiração e persiste em saves durante uma sessão válida.
- Reactive Armor permanece como um efeito alternável de proteção física. Sua conversão para reflexão clássica de dano ainda não faz parte da versão Live.
- Paralyze pode ser renovado e tem duração mínima de 60 segundos no confronto 100 Eval Int contra 100 Resisting Spells; skills menores do alvo aumentam a duração.
- Poison não rompe Paralyze. Dano direto abre a possibilidade de liberação.
- Magic Arrow em si mesmo é uma forma válida de causar esse dano direto.
- Paralyze Field usa as mesmas regras do Paralyze e também pode afetar o caster.
- Wall of Stone forma cinco tiles, dura 60 segundos e pode coexistir com outros fields.
