# DoB Razor

!!! warning "Status: experimental"
    Use copies of your scripts during testing. Scripts that do not depend on the new functions should preserve the previous behavior, but the experimental package does not provide a universal guarantee of compatibility.

The official launcher automatically launches **DoB Razor** together with the client. There is no need to open the wizard manually.

DoB Razor is a standalone release based on Razor CE 1.10.85.0. In addition to traditional Razor features, the `1.10.85.0-dob.1` version allows you to organize extensive scripts with reusable functions.

## Reusable functions

```text
def anunciar item quantidade
    sysmsg 'Item:' item
    sysmsg 'Quantidade:' quantidade
enddef

call anunciar 'Bandage' 50
```

- `def` and `enddef` delimit the function and its local parameters.
- `call` performs the function; the number of arguments must correspond to the declared parameters.
- `return` ends the current function without producing a value.
- Functions can call each other, with a limit of 32 simultaneous calls.

Statements can appear before or after the call. Each execution keeps its parameters in a local scope, including in nested calls.

## Compatibility and diagnostics

Scripts that don't use the new functions should continue to work as before. In the project's published tests, commands such as `wait` and `target`, in addition to pausing and canceling, preserve their normal behavior within functions.

Errors continue to indicate the original lines in the editor, making it easier to find missing functions, incorrect arguments, incomplete definitions, and excessively deep calls.
