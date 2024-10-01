var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

console.log("..:: Quantidade de Dias Vividos ::.. \n");

// entrada

const anoNascimento = readlineSync.question('Digite seu ano de nascimento: \n');
const anoAtual = readlineSync.question('Digite o ano atual: \n');

// processamento

const diasHoje = (parseInt(anoAtual) - parseInt(anoNascimento)) * 365;

// saida

console.log("\n..:: Relatório ::..");
console.log(`Quantidade de dias vividos: ${diasHoje}`);