const users = ['Elon', 'Pedro', 'Barbie'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

/*
    Sempre que se for trabalhar com arrays, ao modificá-lo, crie um novo.
*/

const persons = [
    {
        name: 'Elon',
        age: 46,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 21,
        gender: gender.MAN
    },
    {
        name: 'Barbie',
        age: 200,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Itens:', persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(
    (person, index, arr) => {
        console.log(`Nome: ${person.name} index: ${index}`, arr);
    }
);

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

/*
O reduce recebe uma função, e no primeiro parâmetro ela já recebe o novo tipo a ser retornado, a variável.

Após, o item a ser iterado (person),

Por fim, o segundo parâmetro será o valor inicial da propriedade.
*/

// Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);