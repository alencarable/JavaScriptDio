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