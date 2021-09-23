function soma (a) {
    return function (b) {
        return a + b;
    }
}

const soma2 = soma(2); //aqui foi definido o a como sendo sempre o valor 2

console.log(soma2(2)); //4
console.log(soma2(4)); //6
console.log(soma2(10)); //12