/*
A sintaxe de Classes foi criado no ES6, serve como uma simplificação da herança de protótipos e a palava chave é class.
*/

'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug); //Cachorro {qtdePatas: 4, morde: false}

// Agora utilizando classes...

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4); //super serve para instanciar os metodos aplicados na função mãe
        this.morde = morde;
    }
}

const pug = new Cachorro(false);
console.log(pug); //Cachorro {qtdePatas: 4, morde: false}

// Vamos criar os métodos movimentar e latir

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);