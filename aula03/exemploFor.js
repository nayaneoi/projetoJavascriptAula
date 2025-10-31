const leia = require("readline-sync");

let nome, contador;

// =+ pega o valor anterior da variavel, e soma mais um

for (contador = 1; contador < 4; contador++) { //operador incremento |contador = contador +1

    nome = leia.question("Digite um nome: ");
    console.log("O " + contador + "º nome digitado foi: " + nome);

}


