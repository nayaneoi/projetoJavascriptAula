const leia = require("readline-sync");

let vetorInteiros = new Array(5);  // este array(5) fala qual o tamanho do vetor

// Entrada da Informação
for (let indice = 0; indice < 5; indice++) {
    vetorInteiros[indice] = leia.questionInt(`Digite o numero ${indice + 1}: `);
}


// Saída 
console.log("\nOs números digitados foram: \n");

for (let indice = 0; indice < 5; indice++) {
    console.log(`${indice + 1}º número: ${vetorInteiros[indice]}`);
}
