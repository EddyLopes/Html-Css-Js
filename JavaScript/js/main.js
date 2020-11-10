function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar()
{
    window.open("https://www.instagram.com/edi.lopes10/?hl=pt-br");
    //window.location.href = "https://www.instagram.com/edi.lopes10/?hl=pt-br";
}

function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar p mouse";
    elemento.innerHTML = "Obrigado por passar p mouse";
}

function voltar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load()
{
    alert("Página carregada");
}

function funcaoChange(pElemento)
{
    console.log(pElemento.value);
}

/* var validar;
function validaIdade(idade)
{
    //var validar;

    if(idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe a idade:");
validaIdade(idade)
console.log(validar); */


/* function soma(n1,n2)
{
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome)
{
    return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japão","Japão","Brasil")); */

/*
var count = 0;
for(count=0; count<=5; count++)
{
    console.log(count);
}
*/

/*
var count = 0;
while(count <= 5)
{
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Informe a sua idade:");
if(idade >= 18)
{
    alert("maior de idade");
}
else
{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
*/

/*
//var lista = ["maça","banana","abacate","mamão"];
//console.log(lista);
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
*/

/*
var nome = "Edimar Lopes";
var idade = 33;
var idade2 = 10;
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
*/
