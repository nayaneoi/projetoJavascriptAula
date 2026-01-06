const readlineSync = require("readline-sync");

// Função simples para verificar palíndromo
function isPalindrome(texto: string): boolean {
    const cleaned = texto.toLowerCase();         // deixa tudo minúsculo
    const reversed = cleaned.split("").reverse().join(""); // inverte
    return cleaned === reversed;                 // compara
}

// Entrada do usuário
const entrada = readlineSync.question("Digite uma palavra ou número: ");

if (isPalindrome(entrada)) {
    console.log("É palíndromo!");
} else {
    console.log("Não é palíndromo.");
}
