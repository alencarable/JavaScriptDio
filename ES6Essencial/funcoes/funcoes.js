function getName () {
    return 'Elon Musk da Silva';
}

function logFn (fn) {
    console.log(fn());
}

const logFnResult = logFn; // é possível atribuir uma função à uma variável
logFnResult(getName); //e também passá-la como argumento

