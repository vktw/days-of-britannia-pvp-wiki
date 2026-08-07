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

## Compatibilidade e diagnóstico

Scripts que não usam as novas funções devem continuar funcionando como antes. Nos testes publicados do projeto, comandos como `wait` e `target`, além de pausa e cancelamento, preservam seu comportamento normal dentro das funções.

Os erros continuam indicando as linhas originais no editor, facilitando localizar funções ausentes, argumentos incorretos, definições incompletas e chamadas excessivamente profundas.

!!! warning "Status: experimental"
    Use cópias dos seus scripts durante os testes. Scripts que não dependem das novas funções devem preservar o comportamento anterior, mas o pacote experimental não oferece garantia universal de compatibilidade.
