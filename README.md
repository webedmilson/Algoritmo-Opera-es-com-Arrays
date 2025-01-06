# Algoritmo de Manipulação de Arrays em JavaScript

Este projeto demonstra o uso básico de arrays em JavaScript com operações comuns como adicionar, remover, ordenar, filtrar e iterar elementos.

## Descrição

O script implementa um conjunto de operações em um array de números. É uma introdução simples para quem deseja aprender a trabalhar com arrays em JavaScript.

### Funcionalidades

1. **Adicionar elementos** ao final do array.
2. **Remover elementos** do final do array.
3. **Encontrar o maior número** presente no array.
4. **Ordenar os números** em ordem crescente.
5. **Inserir elementos** em posições específicas.
6. **Percorrer o array** e exibir os elementos.
7. **Filtrar números maiores que um valor especificado.**

## Requisitos

- Node.js (opcional, para executar o script no terminal)
- Navegador com suporte para JavaScript (alternativamente, use o console do navegador)

## Como Usar

1. Clone este repositório ou copie o código fornecido.
2. Salve o arquivo com a extensão `.js` (exemplo: `array-manipulation.js`).
3. Execute o script:
   - No navegador: Insira o código no console (F12).
   - No terminal: Execute usando Node.js:
     ```bash
     node array-manipulation.js
     ```

## Código de Exemplo

```javascript
// Criando um array inicial
let numeros = [10, 5, 8, 20, 15];

// Adicionando um número ao final do array
numeros.push(25);
console.log("Array após adicionar um número:", numeros);

// Removendo o último número do array
let removido = numeros.pop();
console.log("Número removido:", removido);
console.log("Array após a remoção:", numeros);

// Encontrando o maior número no array
let maiorNumero = Math.max(...numeros);
console.log("Maior número no array:", maiorNumero);

// Ordenando o array em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", numeros);

// Adicionando um número na posição 2 (índice 1)
numeros.splice(1, 0, 12);
console.log("Array após inserir o número 12 na posição 2:", numeros);

// Iterando sobre os elementos do array
numeros.forEach((numero, index) => {
    console.log(`Elemento ${index + 1}:`, numero);
});

// Filtrando números maiores que 10
let maioresQueDez = numeros.filter(num => num > 10);
console.log("Números maiores que 10:", maioresQueDez);
