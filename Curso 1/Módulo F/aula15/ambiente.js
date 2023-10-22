let num = [5, 8, 2, 9, 3]

num[5] = 7

num.push(4)

//num.length

num.sort()

console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(0)

if ( pos == -1){
    console.log('[ERRO!] Valor não encontrado!')

}else{
    console.log(`O valor 8 está na posição ${pos}`)
}