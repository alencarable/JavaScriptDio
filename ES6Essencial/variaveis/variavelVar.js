var test = 'examples';

//Função de execução imediata
(() => {
    console.log(`Valor dentro da função "${test}"`);// referencia à var test dentro do if

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`); //referencia à var test dentro do if
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

/*
O var não respeita o escopo de bloco, logo o var declarado no if será o aceito pela função.
Logo, a var test dentro do if será içada para a primera linha após a declaração da função, tendo como retorno, o primeiro console log, undefined.

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`);// referencia à var test dentro do if

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`); //referencia à var test dentro do if
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

*/