function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()

    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')

    msg.innerHTML = `<p>Agora são <strong>${hora}:${min}</strong> horas.</p>`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'cf8663'
    }else{
        //Boa tarde
        if(hora >= 12 && hora <= 18){
            img.src = 'imagens/dia.jpg'
            document.body.style.background = '#84B5E0'
        }else{
            //Boa noite
            img.src = "imagens/noite.jpg"
            document.body.style.background = '#1F294C'
        }
    }
}