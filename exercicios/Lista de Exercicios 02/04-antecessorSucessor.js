var readlineSync = require('readline-sync');

console.log("\n..:: Número antecessor e sucessor ::..");

const valor = readlineSync.questionInt('\nDigite um numero: ');

const antecessor = valor - 1;
const sucessor = valor + 1;

console.log(`\nO número antecessor é: ${antecessor}`);
console.log(`O número sucessor é: ${sucessor}`);