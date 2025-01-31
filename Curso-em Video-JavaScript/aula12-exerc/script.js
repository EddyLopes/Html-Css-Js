function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#foto img')
    var data = new Date()
    var hora = data.getHours() 
    hora = 16
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha1.jpg'
        window.document.body.style.background = '#e2cf9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde1.jpg'
        window.document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/noite1.jpg'
        window.document.body.style.background = '#515154'
    }
}