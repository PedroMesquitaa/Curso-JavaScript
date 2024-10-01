console.log(`\n..:: Trabalhando com condicionais::.. \n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);



const idadeComprador = 19;

if (idadeComprador >= 18){
    console.log("\nComprador maior de idade")
    listaDeDestinos.splice(1,1); // removendo item
    console.log(listaDeDestinos);

}else{
    console.log("\nProibido a venda para menores de Idade\n")
}

