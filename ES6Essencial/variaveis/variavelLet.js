(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

/*
Por a variável let e const respeitarem os escopos de função, o retorno será bem definido.
*/