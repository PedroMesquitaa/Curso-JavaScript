var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

// entrada

console.log("..:: Calculadora ::.. \n");

const pi = readlineSync.question('Digite o valor de pi: \n');
const raio = readlineSync.question('Digite o valor do raio: \n');

// processamento

const quadrado = parseFloat(raio) * raio;
const area = parseFloat(pi) * quadrado;

// saida

console.log("\n");
console.log("..:: Resultado ::..");
console.log(`A área da circunferência é: ${area.toFixed(2)}`);