function contar() {
    var inicio = Number.parseInt(window.document.getElementById('txtInicio').value)
    var fim =  Number.parseInt(window.document.getElementById('txtFim').value)
    var passo =  Number.parseInt(window.document.getElementById('txtPasso').value)

    if(Number.isNaN(inicio) || Number.isNaN(fim) || Number.isNaN(passo)){
        alert('Favor informar os valores para prosseguir!')
        return
    }

    if(passo <= 0){
        alert('Passo inválido!')
        return
    }

    if(inicio == fim) {
        alert('O valor de "Inicio" e "Fim" não podem ser iguais!')
        return
    }

    var resultado = window.document.getElementById('resultado')
    //var mao = '&#x1F449;'
    var mao = `\u{1F449}`
    //var chegada = '&#x1F3C1;'
    var chegada = `\u{1F3C1}`
    resultado.innerHTML = ''
    var espaco = ''

    if(inicio < fim){
        for(inicio; inicio <= fim; inicio+=passo){
        
            resultado.innerHTML += `${espaco}${inicio} ${mao}`
    
            if(espaco == '')
                espaco = ' '
        }
    } else {
        for(inicio; inicio >= fim; inicio-=passo){
        
            resultado.innerHTML += `${espaco}${inicio} ${mao}`
    
            if(espaco == '')
                espaco = ' '
        }
    }


    resultado.innerHTML += ` ${chegada}`
}