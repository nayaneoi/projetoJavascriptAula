// verificador incorreto com entrada do usuário (CommonJS)
const readlineSync = require("readline-sync");

const verificarPalindromo = (texto: string): boolean => {
    let invertido = "";

    // ❌ ERRO: isso aqui não inverte nada, só copia igual
    for (let i = 0; i < texto.length; i++) {
        invertido += texto[i];
    }

    // ❌ ERRO: não trata maiúsculas/minúsculas, espaços ou acentos
    if (invertido == texto) {
        return true;
    } else {
        return false;
    }
};

// ❌ Entrada do usuário
const entrada = readlineSync.question("Digite um texto para verificar se é palíndromo: ");

// ❌ Resultado vai dar errado para a maioria dos casos
if (verificarPalindromo(entrada)) {
    console.log("É palíndromo!");
} else {
    console.log("Não é palíndromo.");
}
