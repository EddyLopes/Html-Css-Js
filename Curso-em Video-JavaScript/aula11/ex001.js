var idade = 23

if(idade < 16){
    console.log('Não vota.')
} else if(idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

console.log(`A velocidade do seu carro é ${vel}km/h`)

if(vel >= 60)
{
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}

console.log(`Dirija sempre usando cinto de segurança!`)


function verificar(){
    var velocidade = Number(window.document.getElementById('itxtVelocidade').value)
    var txtResultado = window.document.getElementById('resultado')

    txtResultado.innerHTML = `<p>Sua velocidade atual é de <strong>${velocidade}km/h</strong></p>`

    if(velocidade >= 60){
        txtResultado.innerHTML += `<p>Acima da velocidade permitida você está <strong>MULTADO!</strong></p>`
    } else {
        txtResultado.innerHTML += `<p>Parabéns, Você está dentro da velocidade permitida</p>`
        txtResultado.innerHTML += `Dirija sempre com cinto de segurança`
    }    
}