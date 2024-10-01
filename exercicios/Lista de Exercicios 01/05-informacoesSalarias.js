var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

// entrada

console.log("..:: Sistema ::.. \n");

const salarioPorAula = readlineSync.question('Digite quanto voce ganha por hora/aula: \n');
const diasTrabalhado = readlineSync.question('Digite quantos dias na semana voce trabalha: \n');
const horasAulaDia = readlineSync.question('Digite quantas horas voce trabalha por dia: \n');

// processamento

const horasAulaSemanal = parseFloat(horasAulaDia) * parseInt(diasTrabalhado);
const salarioBrutoMensal = 1.1 * horasAulaSemanal * 4 * parseFloat(salarioPorAula);
const acrescimo = salarioBrutoMensal - salarioBrutoMensal / 1.1;
const irDesconto = (salarioBrutoMensal / 1.05) - salarioBrutoMensal;
const inssDesconto = (salarioBrutoMensal / 1.07) - salarioBrutoMensal;
const salarioLiquidoMensal = (salarioBrutoMensal - Math.abs(irDesconto)) - Math.abs(inssDesconto); // Math.abs() serve para transformar numeros negativos em positivos

//saida

console.log("\n ..:: Sistema ::.. \n");
console.log(`Salário bruto mensal: ${salarioBrutoMensal.toFixed(2)}`);
console.log(`Acréscimo de 10%: ${acrescimo.toFixed(2)}`);
console.log(`Desconto de IR de 5%: ${irDesconto.toFixed(2)}`);
console.log(`Desconto de INSS de 7%: ${inssDesconto.toFixed(2)}`);
console.log(`\nSalário líquido: ${salarioLiquidoMensal.toFixed(2)}`);