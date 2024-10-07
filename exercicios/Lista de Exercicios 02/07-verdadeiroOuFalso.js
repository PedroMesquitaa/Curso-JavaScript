var readlineSync = require('readline-sync');

console.log("..:: Verdadeiro ou Falso ::..\n");

let valor1 = readlineSync.question('Digite um valor: ').toLocaleLowerCase();
let valor2 = readlineSync.question('Digite um outro valor: ').toLocaleLowerCase();

valor1 = valor1	 === 'true';
valor2 = valor2	 === 'true';

console.log("\n..:: Resultado ::..");

if (valor1 === true && valor2 === true) {
    console.log("Ambos os valores são VERDADEIROS!");
} else if(valor1 === false && valor2 === false) {
    console.log("Ambos os valores são FALSOS!");
}else {
    console.log("Os valores são diferentes!");
}