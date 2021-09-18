function consultaCep() {

    var cep = document.getElementById("cep").value;
    console.log(cep);

    var url = "https://viacep.com.br/ws/" + cep.replace("-", "") + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET", //tipo de requisição do navegador, ler sobre biblioteca de requests
        success: function(response) {
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro + " - " + response.bairro;
            
            //Usando apenas JQuery
            $("#rua").html(response.logradouro);
        }
    })
}