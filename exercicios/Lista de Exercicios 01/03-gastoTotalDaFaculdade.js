var readlineSync = require('readline-sync'); // configuração para o node.js receber entrada de dados do usuario

// entrada

console.log("..:: Sistema ::..\n");

const mensalidadeFacul = readlineSync.question('Digite o valor da sua mensalidade na faculdade: \n');
const transporte = readlineSync.question('Digite o seu custo com transporte: \n');
const alimentacao = readlineSync.question('Digite o seu gasto com alimentacao na faculdade: \n');

// processamento

const valorTotalMensal = parseFloat(mensalidadeFacul) + parseFloat(transporte) + parseFloat(alimentacao);
const valorAnualMensalidade = mensalidadeFacul * 12;
const valorAnualTransporte = transporte * 12;
const valorAnualAlimentacao = alimentacao * 12;
const gastoTotalAnual = valorAnualMensalidade + valorAnualTransporte + valorAnualAlimentacao;

// saida

console.log("\n");
console.log("..:: Relatório ::..\n");

console.log(`Seu gasto total no mês: ${valorTotalMensal.toFixed(2)}`);
console.log(`Seu gasto anual com a mensalidade da faculdade: ${valorAnualMensalidade.toFixed(2)}`);
console.log(`Seu gasto anual com transporte: ${valorAnualTransporte.toFixed(2)}`);
console.log(`Seu gasto anual com alimentação: ${valorAnualAlimentacao.toFixed(2)}`);
console.log(`\nSeu gasto total anual: ${gastoTotalAnual.toFixed(2)}`);