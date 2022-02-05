/*
O encapsulamento vai ocultar detalhes do funcionamento interno. Vejamos o método get e set do js...
*/

'use strict';

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

// Usando classes...

class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}