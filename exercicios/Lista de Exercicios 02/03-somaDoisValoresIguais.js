var readlineSync = require('readline-sync');

console.log("\n.:: Calculadora ::..");

const valorA = readlineSync.questionInt('Digite o valor de A: ');
const valorB = readlineSync.questionInt('Digite o valor de B: ');

if (valorA == valorB){
    const soma = valorA + valorB;
    console.log(`\nO valor de A e B são iguais. Soma dos dois valores: ${soma}`);

}else{
    console.log("\nO valor de A e B não são iguais, então não haverá soma.");
}