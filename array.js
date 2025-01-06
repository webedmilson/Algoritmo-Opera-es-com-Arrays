// 1. Criando um array inicial
let numeros = [10, 5, 8, 20, 15];

// 2. Adicionando um número ao final do array
numeros.push(25);
console.log("Array após adicionar um número:", numeros);

// 3. Removendo o último número do array
let removido = numeros.pop();
console.log("Número removido:", removido);
console.log("Array após a remoção:", numeros);

// 4. Encontrando o maior número no array
let maiorNumero = Math.max(...numeros);
console.log("Maior número no array:", maiorNumero);

// 5. Ordenando o array em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", numeros);

// 6. Adicionando um número na posição 2 (índice 1)
numeros.splice(1, 0, 12); // Insere o número 12 na posição 2
console.log("Array após inserir o número 12 na posição 2:", numeros);

// 7. Iterando sobre os elementos do array
numeros.forEach((numero, index) => {
    console.log(`Elemento ${index + 1}:`, numero);
});

// 8. Filtrando números maiores que 10
let maioresQueDez = numeros.filter(num => num > 10);
console.log("Números maiores que 10:", maioresQueDez);
