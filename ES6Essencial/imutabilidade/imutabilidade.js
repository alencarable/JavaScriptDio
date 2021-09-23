const user = {
    name: 'Elon',
    lastName: 'Musk da Boticário',
};

/*
A const é imutável, desta forma, não é possível apenas colocar uma novo atributo, logo é feito uma function para alterar a const, é passar por refência. Ao final, cria-se uma nova const, um novo objeto com os mesmos atributos, mais o fullName.
*/

function getUserWithFullName (user) {
    return {
        ...user, //o que já existe na constante user
        fullName: `${user.name} ${user.lastName}` //mais o fullName, de acordo com a sintaxe
    }
}

const userWithFullName = getUserWithFullName(user); //alocou o resultado da function em uma constante
console.log(userWithFullName);