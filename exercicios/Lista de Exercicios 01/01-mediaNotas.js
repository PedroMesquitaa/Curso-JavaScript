var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

// entrada

console.log("..:: Calculadora ::.. \n");

const n1 = readlineSync.question('Digite a primeira nota:\n');
const n2 = readlineSync.question('Digite a segunda nota:\n');
const n3 = readlineSync.question('Digite a terceira nota:\n');


// processamento

const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

//saída

console.log(`A média final é: ${media.toFixed(1)}`);