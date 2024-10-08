var readlineSync = require('readline-sync');

console.log("..:: Média Final ::..\n");

const nome = readlineSync.question('Qual o seu nome: ');
const nota1 = readlineSync.questionFloat('Digite qual foi sua nota 1: ');
const nota2 = readlineSync.questionFloat('Digite qual foi sua nota 2: ');
const nota3 = readlineSync.questionFloat('Digite qual foi sua nota 3: ');
const nota4 = readlineSync.questionFloat('Digite qual foi sua nota 4: ');

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7.0) {
    console.log("\nAPROVADO!");
    console.log(`O aluno ${nome} foi aprovado com uma média de: ${media.toFixed(1)}`);

} else {
    console.log("\nREPROVADO!");
    console.log(`O aluno ${nome} foi reprovado com uma média de: ${media.toFixed(1)}`);
}