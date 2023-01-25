function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 2){
                // Bebê
                img.setAttribute('src', 'imagens/bebe-M.jpg')
            }else if(idade >= 3 && idade <= 11){
                // Criança
                img.setAttribute('src', 'imagens/garoto-M-2.jpg')
            }else if(idade >= 12 && idade <= 21){
                // Jovem
                img.setAttribute('src', 'imagens/Jovem-M-2.jpg')
            }else if(idade >= 22 && idade <= 70){
                // Adulto
                img.setAttribute('src', 'imagens/adulto-M-2.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'imagens/Idoso-M-2.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2){
                // Bebê
                img.setAttribute('src', 'imagens/bebe-F-2.jpg')
            }else if(idade >= 3 && idade <= 11){
                // Criança
                img.setAttribute('src', 'imagens/garota-F.jpg')
            }else if(idade >= 12 && idade <= 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-F-2.jpg')
            }else if(idade >= 22 && idade <= 70){
                // Adulto
                img.setAttribute('src', 'imagens/adulta-F-2.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'imagens/idosa-F-2.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}