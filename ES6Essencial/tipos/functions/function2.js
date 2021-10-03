(() => {
    
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn, // igual a getNameArrowFn : getNameArrowFn
        getName         // igual a getName : getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());

})();

/*

O this vai referenciar o escopo da função, mesmo chamando o this dentro do objeto, ela vai sempre apontar pro this.name = 'arrow function' (a global)

No caso da função, dependerá de onde ela foi executada, perceba no segundo console.log

Essa é a principal diferença entre arrow function e a função normal.
*/