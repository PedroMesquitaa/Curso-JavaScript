var readlineSync = require('readline-sync');

console.log("..:: Reajuste de Valor ::..\n");

const valor = readlineSync.questionFloat('Digite o valor que voce queira: ');

const valor2 = (valor * 0.05) + valor;

console.log("\n..:: Resultado ::..");

console.log(`O valor teve um reajuste de 5%:`);
console.log(`Valor original: ${valor.toFixed(2)}`);
console.log(`Valor reajustado: ${valor2.toFixed(2)}`);