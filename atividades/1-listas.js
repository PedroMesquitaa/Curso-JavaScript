console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // adicionando u mitem na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);