function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtAno = window.document.getElementById('txtAno')
    var resultado = window.document.getElementById('resultado')

    if(txtAno.value.length == 0 || txtAno.value > ano){
        window.alert('Ano inválido! Verifique e tente novamente')
    } else {
        var sexo = window.document.getElementsByName('radSexo')
        var idade = ano - Number.parseInt(txtAno.value)
        var genero = ''
        
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')

        if(sexo[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','../imagens/manha1.jpg')
            } else if(idade < 21) {
                //jovem
            } else if(idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if(sexo[1].checked) {
            genero = 'Feminino'

            if(idade >= 0 && idade < 10){
                //criança
            } else if(idade < 21) {
                //jovem
            } else if(idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos gênero: ${genero}, idade: ${idade} anos`
        resultado.appendChild(img)
    }

}