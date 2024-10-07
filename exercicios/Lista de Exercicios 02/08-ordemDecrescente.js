var readlineSync = require('readline-sync');

console.log("..:: Ordem Crescente ::..\n");

const valor1 = readlineSync.questionInt('Digite o primeiro valor: ');
const valor2 = readlineSync.questionInt('Digite o segundo valor: ');
const valor3 = readlineSync.questionInt('Digite o terceiro valor: ');

// Colocando os valores em um array
let valores = [valor1, valor2, valor3];

// Ordenando os valores em ordem decrescente
valores.sort(function(a, b) {
    return b - a;  // Ordena de forma decrescente
});

console.log(`\nOs valores em ordem descrescente são: ${valores.join(", ")}`); //O método join(", ") transforma o array em uma string, unindo os elementos com uma vírgula e um espaço entre eles.