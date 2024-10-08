var readlineSync = require('readline-sync');

console.log("..:: Média Final ::..\n");

const nota1 = readlineSync.questionFloat('Digite qual foi sua nota 1: ');
const nota2 = readlineSync.questionFloat('Digite qual foi sua nota 2: ');
const nota3 = readlineSync.questionFloat('Digite qual foi sua nota 3: ');

const media = (nota1 + nota2 + nota3) / 3;

console.log(`\nSua média final é de: ${media.toFixed(1)}`);