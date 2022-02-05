/*
Static permite que a gente acesse métodos ou atributos sem instanciar uma determinada classe
*/

'use strict';

// Declarando como funções...

function Person() {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk()); // "walking..."

// Declarando como Classes

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk()); // "walking..."