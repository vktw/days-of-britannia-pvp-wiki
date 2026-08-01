# Guia de localização PT-BR e inglês

Este documento define como manter as versões brasileira e inglesa da wiki. A
localização serve o jogador internacional sem criar uma segunda interpretação
das regras do servidor.

## Fonte editorial

O PT-BR é a fonte editorial primária do projeto. Isso significa que a intenção,
a ordem da explicação e a aprovação de uma regra nascem na versão brasileira.
A versão inglesa deve ser produzida ou atualizada no mesmo trabalho quando a
página pública tiver par correspondente.

Isso não permite que a versão inglesa fique semanticamente atrás: uma alteração
live deve alcançar os dois idiomas antes de ser considerada concluída.

> A tradução pode adaptar a linguagem, mas não pode alterar a regra do servidor.

## Paridade obrigatória

Uma página PT-BR e sua correspondente em inglês devem preservar:

- intenção e tipo de página;
- headings e sequência de decisões;
- comandos, nomes oficiais e links internos equivalentes;
- números, unidades, percentuais, tempos e versões;
- status Live, Planned ou indisponível;
- pré-requisitos, exceções e limites;
- tabelas e exemplos que sustentam uma decisão.

O inglês pode alterar ordem de palavras, comprimento de frase e idiomatismo.
Não pode omitir uma condição para ficar mais curto.

## Fluxo de tradução

1. Atualize primeiro a página canônica PT-BR com fonte aprovada.
2. Procure todas as páginas secundárias, patch notes e referências duplicadas.
3. Atualize a versão `.en.md` correspondente na mesma alteração.
4. Compare headings, comandos, números, versões, links e termos protegidos.
5. Leia o inglês como inglês natural, sem traduzir palavra por palavra.
6. Confirme que a adaptação não mudou força, condição ou escopo da regra.
7. Rode auditoria, build estrito e revisão dos links.

Para uma nova página pública, crie os dois idiomas antes de adicioná-la à
navegação, salvo uma exceção aprovada e registrada no diff.

## Termos protegidos

Consulte `internal/terminology.yml` antes de traduzir. Termos marcados como
`protected: true` devem permanecer idênticos nos dois idiomas, salvo instrução
explícita nas notas do glossário.

Sempre preserve:

- comandos, incluindo o ponto inicial;
- nomes de skills, sistemas, itens, arenas, kits e cidades oficiais;
- nomes de arquivos e âncoras quando aparecem como código;
- valores numéricos e unidades;
- nomes de versões e patches.

Quando um termo não tiver tradução oficial, mantenha o original e explique seu
papel na primeira ocorrência. Não crie uma tradução ad hoc para uma única página.

## Adaptação cultural e de estilo

- Use inglês claro e direto para leitores internacionais.
- Evite regionalismos, piadas, referências locais e metáforas difíceis de
  traduzir.
- Converta a frase, não a regra: “Abra o Compendium” pode virar “Open the
  Compendium”, mas não “Check the menu” se isso mudar a ação.
- Mantenha nomes brasileiros de lugares quando forem nomes oficiais do mundo.
- Prefira `you` e voz ativa em inglês.

## Quando a tradução não estiver pronta

Não marque uma tradução parcial como atualizada. Até que a versão inglesa esteja
revisada:

- mantenha o trabalho local e não adicione a página incompleta à navegação;
- registre a exceção no PR ou commit;
- indique quais seções estão pendentes;
- priorize comandos, status, números e instruções acionáveis;
- não copie texto PT-BR mecanicamente para parecer paridade.

Uma exceção só é aceitável quando o responsável pelo conteúdo a aprovar e a
pendência tiver um próximo passo claro.

## Revisão de localização

Para cada par revisado, verifique:

- [ ] o H1 e os headings representam a mesma estrutura;
- [ ] comandos e termos protegidos estão idênticos;
- [ ] números, versões, percentuais e tempos coincidem;
- [ ] condições e exceções não foram resumidas fora de contexto;
- [ ] links apontam para a página do idioma correto quando houver par;
- [ ] o inglês é natural e fala diretamente com o jogador;
- [ ] nenhuma informação privada ou especulativa entrou na tradução.
