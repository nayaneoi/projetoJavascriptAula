import { logar, somar, transformarNumeroEmExtenso } from "./Exemplo1"

// chamada das funções
let valor: number = somar(7,12)
let valor1: number = somar(6,11)


console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar("roberta@generation")


let numeroEmTexto: string = transformarNumeroEmExtenso(8);
console.log(numeroEmTexto)
