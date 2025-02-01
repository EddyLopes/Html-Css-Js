function contar() {
    var inicio = Number.parseInt(window.document.getElementById('txtInicio').value)
    var fim =  Number.parseInt(window.document.getElementById('txtFim').value)
    var passo =  Number.parseInt(window.document.getElementById('txtPasso').value)

    if(passo <= 0){
        alert('Passo inválido!')
        return
    }

    if(fim <= inicio) {
        alert('O valor de "Fim" não pode ser menor ou igual ao início!')
        return
    }

    var resultado = window.document.getElementById('resultado')
    var mao = '&#x1F449;'
    var chegada = '&#x1F3C1;'
    resultado.innerHTML = ''
    var espaco = ''

    for(inicio; inicio <= fim; inicio+=passo){
        
        resultado.innerHTML += `${espaco}${inicio} ${mao}`

        if(espaco == '')
            espaco = ' '
    }

    resultado.innerHTML += ` ${chegada}`
}