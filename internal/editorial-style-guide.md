# Guia editorial da wiki

Este guia define como agentes e mantenedores escrevem o manual público do Days
of Britannia. Ele complementa `AGENTS.md`: não autoriza publicar uma regra que
não tenha fonte aprovada.

## Público e objetivo

A wiki atende dois públicos principais:

- jogadores brasileiros que precisam começar, consultar regras e tomar decisões
  dentro do servidor;
- jogadores internacionais que precisam entender a mesma experiência em inglês.

Cada página deve ajudar o leitor a concluir uma tarefa, consultar uma regra ou
formar um modelo mental do sistema. Evite escrever para demonstrar conhecimento
interno ou para descrever implementação privada.

## Voz e tom

- Fale diretamente com o jogador, preferindo “você”.
- Use frases curtas, verbos ativos e uma ideia principal por parágrafo.
- Explique um termo na primeira vez em que ele aparecer.
- Seja preciso e neutro; não prometa vantagem, segurança ou resultado que a
  fonte não garanta.
- Prefira “Você pode...” e “O sistema faz...” a listas longas de proibições.
- Evite ironia, gírias locais, sarcasmo e referências que dependam de cultura
  brasileira.
- Mantenha o mesmo nome para o mesmo conceito em toda a wiki.

## Estrutura de uma página

Salvo uma exceção documentada, uma página deve ter:

1. um único H1 descritivo;
2. uma introdução de uma ou duas frases dizendo para quem a página serve;
3. um aviso de status ou versão quando a informação depender do estado live;
4. seções H2 organizadas pela tarefa ou decisão do jogador;
5. links para a próxima ação e para a referência canônica;
6. uma nota explícita quando algo estiver planejado, limitado ou fora do escopo.

Introduções devem orientar, não repetir o sumário. Comece pelo resultado que o
jogador procura e evite parágrafos introdutórios com mais de quatro frases.

## Tipos de página

Escolha o tipo antes de escrever. Uma página pode ter links para outros tipos,
mas deve ter uma intenção principal.

| Tipo | Necessidade do jogador | Forma recomendada | Página-piloto |
|---|---|---|---|
| Tutorial/onboarding | Aprender fazendo | passos numerados, contexto mínimo e próximo objetivo | `docs/primeiros-passos/primeira-hora.md` |
| How-to | Realizar uma tarefa | pré-requisitos, passos, resultado e solução de problemas | `docs/arena.md` |
| Referência | Consultar rapidamente | tabelas, listas, comandos e regras agrupadas | `docs/comandos.md`, `docs/itens/armas.md` |
| Explicação | Entender um sistema | conceito, motivo, consequências e exemplos | `docs/sistemas/pvm-mastery.md` |
| Landing page | Escolher uma jornada | HTML orientado a caminhos, sem duplicar regras | `docs/index.md` |

### Como escolher

- Se o leitor precisa acompanhar uma sequência, use tutorial.
- Se ele já sabe o objetivo e quer executá-lo, use how-to.
- Se ele procura um valor, nome, comando ou compatibilidade, use referência.
- Se a dúvida é “como isso funciona?” ou “quando escolher isso?”, use
  explicação.
- Se a página só encaminha para capítulos, use landing page.

## Títulos, listas e tabelas

- Use títulos que descrevam a pergunta ou a decisão do jogador.
- Não pule níveis de heading.
- Use listas para alternativas curtas e tabelas para comparar três ou mais
  atributos repetidos.
- Mantenha células de tabela curtas; mova detalhes para a seção abaixo.
- Inclua unidade, condição e versão quando um número puder ser ambíguo.
- Não esconda uma exceção importante apenas em uma nota de rodapé.

## Exemplos, comandos e termos oficiais

- Exemplos devem ser reconhecíveis e não podem sugerir que uma possibilidade não
  verificada é live.
- Comandos ficam em código, preservando pontuação e capitalização, por exemplo
  `.arena` e `.pvpcamp`.
- Nomes oficiais de skills, itens, sistemas, cidades, arenas e kits seguem o
  glossário em `internal/terminology.yml`.
- Não traduza um comando, nome oficial ou termo marcado como protegido.
- Não inclua conexão direta, implementação privada, logs ou táticas do PvP
  Trainer.

## Status, versões e escopo

- Use `Live` somente para comportamento confirmado na versão vigente.
- Use `Planned` somente em `docs/proximo-patch.md` ou em uma nota interna
  claramente marcada.
- Quando uma regra mudar, atualize a página canônica, as traduções, as notas de
  patch e os links de onboarding afetados.
- Nunca preencha uma lacuna com um valor plausível. Registre a ausência da fonte
  e peça confirmação.

## Critério de conteúdo player-friendly

Uma página atende ao padrão quando um jogador que não conhece o sistema:

- entende em poucos segundos o propósito da página;
- encontra a ação, regra ou comparação principal sem ler tudo;
- sabe quais pré-requisitos e limites se aplicam;
- consegue seguir os links para a próxima decisão;
- não precisa inferir se algo é live, planejado ou indisponível;
- encontra a mesma terminologia na versão inglesa;
- consegue ler tabelas e usar comandos em mobile.

Se a página falhar em qualquer item, ajuste a estrutura ou adicione uma
explicação; não apenas aumente a quantidade de texto.

## Revisão-piloto da Fase 1

As seis superfícies abaixo foram revisadas em 2026-08-01 quanto a intenção,
estrutura, status, links de orientação e paridade de headings PT-BR/EN. Esta
revisão não alterou regras públicas; ela estabelece o padrão para futuras
edições.

| Superfície | Tipo principal | Resultado editorial |
|---|---|---|
| `docs/index.md` | Landing page | Encaminha por jornadas; regras permanecem nos capítulos |
| `docs/primeiros-passos/primeira-hora.md` | Tutorial/onboarding | Sequência numerada e próximo objetivo explícito |
| `docs/comandos.md` | Referência | Um comando por seção, com sintaxe preservada |
| `docs/sistemas/pvm-mastery.md` | Explicação | Conceito, progressão, catálogo e builds separados |
| `docs/itens/armas.md` | Referência | Critérios, papéis, catálogo e kits separados |
| `docs/arena.md` | How-to/referência | Fluxo operacional, limites e ranking separados |

As versões `.en.md` correspondentes devem manter a mesma intenção, sequência de
seções, números, comandos e status. Diferenças de frase são permitidas quando
melhoram a naturalidade em inglês sem alterar a regra.

## Checklist editorial

- [ ] A intenção principal da página foi escolhida antes da edição.
- [ ] Há um único H1 e uma introdução orientadora.
- [ ] O status live/planned está correto e verificável.
- [ ] A ação principal, os limites e o próximo passo estão claros.
- [ ] Termos e comandos foram conferidos no glossário.
- [ ] A versão inglesa preserva seções, regras, números e links relevantes.
- [ ] A página não expõe implementação privada nem conexão direta.
- [ ] Tabelas e listas continuam utilizáveis em telas estreitas.
