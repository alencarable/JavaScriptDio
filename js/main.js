/*

Introducão do JavaScript

var nome = "Pedro Alencar";
var n1 = 20;
var n2 = 4;
var frase = "Japão é o melhor time do mundo"

//alert("Seja bem-vindo " + nome + "!");

console.log(nome);
console.log(n1 / n2);
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase());
console.log(frase.toLowerCase);
*/

//Array e Dicionário

/*
var lista = ["maça", "pêra", "laranja"];

lista.push("uva");
//lista.pop("laranja");
//console.log(lista.reverse());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
*/

/*
var fruta = {nome: "Maça", cor:"vermelha"};
console.log(fruta.nome);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]

console.log(frutas);
alert(frutas[1].nome);
*/

//Condicionais, Laços de Repetição e Date

/*
var idade = parseInt(prompt("Qual sua idade? "));

if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
}

var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}


for (var i = 0; i <= 5; i ++) {
    console.log(i);
}

var d = new Date();
console.log(d.getDay);
console.log(d.getMonth()+1);
console.log(d.getHours);
*/

/*
Desenvolva páginas web com JavaScript

function soma(n1, n2) {
    return n1 + n2
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))


function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = parseInt(prompt("Qual a sua idade?"));
console.log(validaIdade(idade));
*/

// Manipulando elementos da página

function clicou () {
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar!</strong>";
}

function redirecionar () {
    window.open("https://www.google.com");
    /*
    Esse parâmetro permite a abertura do site na mesma aba
    window.location.href = "https://www.google.com.br";
    */

}

// Para isso funcionar você deve usar o parâmetro this ao escrever a função no html
function trocar(elemento) {
    //document.getElementById("mousemuver").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltarDoTrocar(elemento) {
    //document.getElementById("mousemuver").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange (elemento) {
    console.log(elemento.value);
}