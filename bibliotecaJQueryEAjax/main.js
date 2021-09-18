function consultaCep() {

    $(".barraProgresso").show();

    var cep = document.getElementById("cep").value;
    console.log(cep);

    var url = "https://viacep.com.br/ws/" + cep.replace("-", "") + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET", //tipo de requisição do navegador, ler sobre biblioteca de requests
        success: function(response) {
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            
            //Usando apenas JQuery
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#tituloCep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barraProgresso").hide();
            
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barraProgresso").hide();
});
