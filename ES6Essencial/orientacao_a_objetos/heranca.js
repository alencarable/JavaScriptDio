/*
Herança

É baseada em um constructor é criado um prototype e nessa variável a gente armazena a referencia dela no __proto__.
A herança é baseada em protótipos.

*/

'use strict';

const myText = 'Hello prototype!';
myText.split(''); // <- de onde vem esse split?

// é igual a

const myText = String('Hello prototype!');
console.log(myText.__proto__.split); //f split() {[native code]}

console.log(myText.__proto__.split === String.prototype.split); //true

console.log(myText.constructor === String);
/*
Logo, temos que:
__proto__ -> prototype -> constructor
*/

/*
const myText = 'Hello prototype!';
myText.constructor -> String
myText.__proto__ -> String.prototype
*/

function Animal () {}
console.log(Animal.constructor); // f Function() {[native code]}

/*
Cadeia de prototype

f Animal.constructor -> f Function -> Function.prototype.constructor -> f Object() {} -> Object.prototype = null;
*/

function Animal () {
    this.qtdePatas = 4;
}

const cachorro = new Animal(); // o new faz criar o objeto e herda o proptotype
console.log(cachorro.qtdePatas);

/*
Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado previamente.
*/

console.log(cachorro.__proto__ === Animal.prototype); //true
console.log(Animal.__proto__ === Function.prototype); //true
console.log(cachorro instanceof Animal); //true
console.log(cachorro instanceof Function); //false


function Animal (qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug) //Cachorro {qtdePatas: 4, morde: false}

//Adicionando novos métodos

function Animal (qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false); //não morde
const pitbull = new Cachorro(true); //morde

// A função latir e movimentar vão ser recriadas de forma recorrente quando eu instanciar um novo objeto Cachorro. Logo podemos colocar no prototype.

function Animal () {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro (morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal); //Eu falo que o prototype de cachorro é derivado do prototype de Animal, herança.
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false); //não morde
const pitbull = new Cachorro(true); //morde

/*
ATENÇÃO!

Não é recomendado trocar a implementação de um tipo nativo, mas é possível. Vejamos...
*/

String.prototype.split //f split() {[native code]}
'132456'.split('') //(6) ["1", "3", "2", "4", "5", "6"]
String.prototype.split = function() { console.log('ixi...'); } //f () { console.log('ixi...'); }
'132456'.split('') //ixi...