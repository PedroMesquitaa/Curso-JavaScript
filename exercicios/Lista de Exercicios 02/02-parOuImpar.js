var readlineSync = require('readline-sync');

console.log("\n..:: Par ou Ímpar ::..");

const valor = readlineSync.questionFloat('\nDigite um numero qualquer para saber se e par ou impar: ');

if (valor % 2 === 0){
    console.log(`\nO número ${valor} é par!`);

}else{
    console.log(`\nO número ${valor} é ímpar.`);
}