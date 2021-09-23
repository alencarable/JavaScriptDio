function fn () {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/*
Aqui o que ocorre é: mesmo a funcão log sendo chamada antes de sua definição, a linguagem irá retorná-la com sucesso.A funcão será içada como um todo, pois, neste caso, haverá uma inversão. Veja abaixo:

function fn () {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função');
}

fn();
*/