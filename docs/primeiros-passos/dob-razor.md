# DoB Razor

O launcher oficial inicia automaticamente o **DoB Razor** junto com o cliente. Não é necessário abrir o assistente manualmente.

O DoB Razor é uma versão independente baseada no Razor CE 1.10.85.0. Além dos recursos tradicionais do Razor, a versão `1.10.85.0-dob.1` permite organizar scripts extensos com funções reutilizáveis.

## Funções reutilizáveis

```text
def anunciar item quantidade
    sysmsg 'Item:' item
    sysmsg 'Quantidade:' quantidade
enddef

call anunciar 'Bandage' 50
```

- `def` e `enddef` delimitam a função e seus parâmetros locais.
- `call` executa a função; a quantidade de argumentos deve corresponder aos parâmetros declarados.
- `return` encerra a função atual sem produzir um valor.
- As funções podem chamar umas às outras, com limite de 32 chamadas simultâneas.

As declarações podem aparecer antes ou depois da chamada. Cada execução mantém seus parâmetros em um escopo local, inclusive em chamadas aninhadas.

### Exemplo com rota e parâmetros

```text
def ir_para x y
    walkto x y any 1 run
enddef

call ir_para 2574 478
```

Os parâmetros existem apenas dentro da função. A função só é executada por
`call`; `return` encerra imediatamente a execução da função atual.

## Rotas automáticas

### `walkto`

Calcula uma rota usando o pathfinding do Razor:

```text
walkto X Y [Z ou any] [distância] [run]
```

- `X` e `Y` indicam o destino.
- `Z` exige o nível exato; `any` ignora a altura e busca apenas `X` e `Y`.
- `distância` define quantos tiles do destino ainda contam como chegada.
- `run` solicita movimento correndo no ClassicUO.

```text
walkto 2558 504 0 1 run
walkto 2548 501 any 1 run
```

`walk` envia somente um passo em uma direção, como `walk 'North'`. `walkto`
calcula uma rota completa e contorna obstáculos conhecidos pelo cliente. Em
pontes, rampas, rios ou mudanças de altura, prefira vários `walkto` como
waypoints.

### `walkstop`

Cancela uma rota de `walkto` em andamento:

```text
walkstop
```

## Coordenadas e loops booleanos

As expressões `x`, `y` e `z` retornam a posição atual do personagem no
ClassicUO e podem ser usadas em `if` e `while`:

```text
if y > 499
    sysmsg 'O personagem saiu da área da mina.'
    walkto 2574 478 any 1 run
endif
```

`while true` repete continuamente até `break`, `return` ou `stop`. Também são
aceitos `while false`, `not true` e `not false`.

```text
while true
    say 'Executando macro'
    wait 1000
endwhile
```

## Comandos da dob.9

!!! info "Download opcional disponível"
    A **dob.9** já está disponível como download opcional. Depois de instalar
    essa versão, os comandos desta seção podem ser usados nos scripts.

### `findtypein`

Procura um tipo de item somente dentro do container informado:

```text
findtypein container graphic [hue] [recursive]
```

Ao encontrar, retorna `true` e salva o serial no alias `found`. `hue -1` aceita
qualquer cor; `recursive true` inclui containers internos.

```text
if findtypein resource_chest 0x1BF2 0 true
    sysmsg "Encontrei ingots"
endif
```

### `counttypein`

Conta a quantidade total do item no container informado e soma pilhas:

```text
counttypein container graphic [hue] [recursive]
```

```text
if counttypein backpack 0x1BF2 0 true < 100
    sysmsg "Tenho menos de 100 ingots"
endif
```

### `moveitem`

Transfere um item de forma controlada:

```text
moveitem item destination [amount] [timeout]
```

```text
if findtypein resource_chest 0x1BF2 0 true
    moveitem found backpack 100 30000
endif
```

O comando espera a fila compartilhada, executa um único `lift` seguido de
`drop`, aguarda a liberação do cursor e aplica 150 ms de intervalo antes de
continuar. Ele não interfere em Dress, Restock ou Organizer.

### `log`

Acrescenta uma linha com data e hora em um arquivo de texto dentro de
`Scripts\Logs`:

```text
log "arquivo.txt" "mensagem" [outros valores]

log "blacksmith.txt" "Quantidade de ingots:" counttypein backpack 0x1BF2 0 true
```

Somente arquivos `.txt` são aceitos. Caminhos absolutos, `..\` e gravação fora
de `Scripts\Logs` são bloqueados; o conteúdo anterior do arquivo não é apagado.

### Limites de segurança da dob.9

- `findtypein` e `counttypein` não procuram no chão, em corpses ou no mundo.
- Containers externos precisam estar abertos, conhecidos e próximos.
- `moveitem` não permite autoloot, corpses, itens soltos no chão nem
  transferência direta entre dois containers externos.
- Pelo menos um lado da transferência precisa pertencer ao jogador.
- A atualização não substitui login, senha, perfis, scripts, macros, hotkeys ou
  configurações do jogador.

## Compatibilidade e diagnóstico

Scripts que não usam as novas funções devem continuar funcionando como antes. Nos testes publicados do projeto, comandos como `wait` e `target`, além de pausa e cancelamento, preservam seu comportamento normal dentro das funções.

Os erros continuam indicando as linhas originais no editor, facilitando localizar funções ausentes, argumentos incorretos, definições incompletas e chamadas excessivamente profundas.

!!! warning "Status: dob.9 opcional"
    A dob.9 está disponível para download opcional. Use cópias dos seus scripts
    durante os primeiros testes e preserve seus perfis e configurações atuais.
