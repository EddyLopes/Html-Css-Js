let _lstNumerosAdicionados = []
var resultado = window.document.getElementById('resultado');

function adicionar() {
    let txtNum = document.getElementById('txtNum')
    let num = Number.parseInt(txtNum.value)

    if(Number.isNaN(num)){
        alert('Favor informar um número!')
        return
    }

    if(!(num>=1 && num<=100)){
        alert('Número inválido!\nInforme um número entre 1 e 100 para continuar')
        return
    }

    if(_lstNumerosAdicionados.indexOf(num) != -1){
        alert('Número já adicionado, informe outro para prosseguir!')
        return
    }
    /*
    if(_lstNumerosAdicionados.includes(num)){
        alert('Número já adicionado, informe outro para prosseguir!')
        return
    }*/

    _lstNumerosAdicionados.push(num)

    let lstNumeros = document.getElementById('lstNumeros')

    let item = document.createElement('option')
    item.text = `Número ${num} adicionado`
    item.value = num
    lstNumeros.appendChild(item)
    txtNum.value = ""
    resultado.innerHTML = ''
    txtNum.focus()
}

function finalizar(){
    if(_lstNumerosAdicionados.length == 0) {
        alert('Adicione valores para poder finalizar!')
        return
    }

    let qtdeNumeros = _lstNumerosAdicionados.length
    let maiorNumero = Math.max(..._lstNumerosAdicionados);
    let menorNumero = Math.min(..._lstNumerosAdicionados);
    let soma = _lstNumerosAdicionados.reduce((acumulador, valor) => acumulador + valor, 0);
    let media = soma / _lstNumerosAdicionados.length;

    resultado.innerHTML = `
        <p>Ao todo temos <strong>${qtdeNumeros}</strong> números cadastrados</p>
        <p>📈 Maior número:<strong> ${maiorNumero}</strong></p>
        <p>📉 Menor número: <strong>${menorNumero}</strong></p>
        <p>➕ Soma de todos os números: <strong>${soma}</strong></p>
        <p>📊 Média dos números digitados:<strong> ${media.toFixed(2)}</strong></p>
    `;

    //_lstNumerosAdicionados.length = 0
    //document.getElementById('lstNumeros').innerHTML = ''
}
