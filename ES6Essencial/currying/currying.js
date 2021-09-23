// É transformar uma função que recebe vários parâmtreos em apenas uma funcão, que receberá um parâmtero apenas. E, desta forma, cada parâmetro retornará uma função.

function soma (a, b) {
    return a + b;
}

soma (2, 2);
soma (2, 3);
soma (2, 4);
soma (2, 5);

//Aqui a técnica ainda não foi aplicada, veja o próximo arquivo currying2.js