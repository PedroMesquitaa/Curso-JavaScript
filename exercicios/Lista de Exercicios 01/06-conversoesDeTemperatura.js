var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

// entrada

console.log("..:: Conversor para Fahrenheit ::.. \n");

const grausCelsius = readlineSync.question('Digite quantos graus (Celsius) esta o dia: \n');

// processamento

const grausCelsius2 = (parseFloat(grausCelsius) / 5) * 9;
const grausFahrenheit = grausCelsius2 + 32;

// saida

console.log("\n..:: Resultado ::..");
console.log(`A temperatura em Fahrenheit: ${grausFahrenheit.toFixed(1)}`);