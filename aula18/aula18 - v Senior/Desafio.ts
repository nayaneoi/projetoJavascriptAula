// ❌ Ainda propositalmente INCORRETO — versão interativa

//import * as readline from "readline"; erro gerado pela IA
import readlinesync = require("readline-sync");

function isPalindrome(value: string | number): boolean {
  const str = value.toString();

  // Continua o erro clássico: comparar as metades do jeito errado
  const half = Math.floor(str.length / 2);
  const first = str.slice(0, half);
  const second = str.slice(half);

  return first === second;
}

// Interface para entrada via console
const rl = readlinesync.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma palavra ou número para verificar: ", (input) => {
  const result = isPalindrome(input);
  console.log(`Resultado (ainda errado): ${result}`);
  rl.close();
});
