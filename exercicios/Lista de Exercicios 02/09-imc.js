var readlineSync = require('readline-sync');

console.log("..:: IMC ::..\n");

const peso = readlineSync.questionFloat('Digite o seu peso: ');
const altura = readlineSync.questionFloat('Digite a sua altura: ');

const imc = peso / (altura * altura);

if (imc <= 18.5) {
    console.log(`\nVocê está abaixo do peso. Seu IMC: ${imc.toFixed(1)}`);
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log(`\nPARABÉNS! Você está no peso ideal. Seu IMC: ${imc.toFixed(1)}`);
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`\nVocê está levemente acima do peso. Seu IMC: ${imc.toFixed(1)}`);
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`\nVocê está com Obesidade grau I. Seu IMC: ${imc.toFixed(1)}`);
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`\nVocê está com Obesidade grau II (severa). Seu IMC: ${imc.toFixed(1)}`);
} else {
    console.log(`\nVocê está com Obesidade grau III (mórbida). Seu IMC: ${imc.toFixed(1)}`);
}