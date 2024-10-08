var readlineSync = require('readline-sync');

console.log("\n..:: Pagamento ::..\n");

const valorProduto = readlineSync.questionFloat("Digite o valor do produto: ");

console.log("\nEscolha a forma de pagamento:");
console.log("1 - À Vista em Dinheiro ou Pix (15% de desconto)");
console.log("2 - À Vista no cartão de crédito (10% de desconto)");
console.log("3 - Parcelado no cartão em duas vezes (preço normal)");
console.log("4 - Parcelado no cartão em três vezes ou mais (10% de juros)");

const escolha = readlineSync.questionInt("Digite o codigo da forma de pagamento: ");

let valorFinal;


if (escolha === 1) {
    valorFinal = valorProduto * 0.85;  // 15% de desconto
} else if (escolha === 2) {
    valorFinal = valorProduto * 0.90;  // 10% de desconto
} else if (escolha === 3) {
    valorFinal = valorProduto;  // Sem desconto, sem juros
} else if (escolha === 4) {
    valorFinal = valorProduto * 1.10;  // 10% de juros
} else {
    console.log("Opção de pagamento inválida.");
    return;
}

console.log(`\nO valor final do produto a ser pago é: R$ ${valorFinal.toFixed(2)}`);