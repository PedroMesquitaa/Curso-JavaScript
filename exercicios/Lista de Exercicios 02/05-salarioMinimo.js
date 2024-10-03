var readlineSync = require('readline-sync');

console.log("\n..:: Contador Salários ::..");

const salarioUsuario = readlineSync.questionFloat('\nDigite o valor do seu salario atual: ');

const salarioMinimo = 1293.20;

const qtdSalarios = salarioUsuario / salarioMinimo;

console.log(`\nVocê recebe aproximadamente ${qtdSalarios.toFixed(2)} salários mínimos.`);