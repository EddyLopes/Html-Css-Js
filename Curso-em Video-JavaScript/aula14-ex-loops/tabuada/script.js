function calcular() {
    var num = Number.parseInt(window.document.getElementById('txtNum').value)

    if(Number.isNaN(num)){
        alert("Favor informar o número para prosseguir!")
        return
    }

    var resultado = window.document.getElementById('txtResultado');
    resultado.value = `Tabuada do ${num}:\n\n`;

    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''

    for(let i = 1; i <= 10; i++) {
        let texto = `${num} * ${i} = ${i*num}`
        resultado.value += `${texto}\n`

        let item = document.createElement('option')
        item.text = texto
        item.value = i
        tabuada.appendChild(item)
    }
}