/*
Os modificadores de acesso servem para se ter um controle do que é privado e do que é público. Basicamente usa-se os modificadores de acesso getters e setters.
*/

'use strict';

// Usando prototype

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Vandersson');

console.log(p); // Person {getName: f, setName: f}

p.getName();        // "Vandersson"
p.name;             // undefined
p.setName('Pablo');
p.getName();        // "Pablo"

/* 

Agora usando Classes...
Eu digo que é private quando uso a serquila "#"

*/

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

console.log(p); // Person {}

p.getName();        // "Vandersson"
p.name;             // undefined
p.setName('Pablo');
p.getName();        // "Pablo"