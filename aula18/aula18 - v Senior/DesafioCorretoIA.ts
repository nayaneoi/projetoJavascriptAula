// ✔️ Versão correta e legível
import * as readline from "readline";

function isPalindrome(value: string | number): boolean {
  const str = value.toString().toLowerCase().replace(/\s+/g, "");
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite algo para verificar se é palíndromo: ", (input) => {
  console.log(`É palíndromo? ${isPalindrome(input)}`);
  rl.close();
});


// O * as readline significa: “Importa tudo dentro desse módulo e chama de readline