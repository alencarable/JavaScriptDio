function fn () {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

/*
Percebe-se, nesse caso, que a variável text, é impressa antes de ser definida. Por sua vez, receberá o valor undefined.
Já após a sua definição, é possível imprimir o valor imputado.

Veja abaixo o que acontece para a execução da linguagem:

function fn () {
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}

fn();
*/