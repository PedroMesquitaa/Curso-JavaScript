var readlineSync = require('readline-sync');

console.log("\n..:: Calculadora::..\n");

const valorA = readlineSync.questionFloat('Digite o valor de A: ');
const valorB = readlineSync.questionFloat('Digite o valor de B: ');
const valorC = readlineSync.questionFloat('Digite o valor de C: ');

const soma = valorA + valorB;

console.log(`\nA soma de A e B é: ${soma.toFixed(1)}`);

if (soma < valorC){
    console.log(`\nA soma de A e B é menor que o valor de C`);
}else{
    console.log(`\nA soma de A e B é maior que o valor de C`);
}