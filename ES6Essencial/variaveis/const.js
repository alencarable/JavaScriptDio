const name = 'Elon';

//Não podemos alterar o valor
//name = 'Pedro';

// Então criaremos um objeto
const user = {
    name: 'Elon',
}

// Se for um objeto, podemos trocar suas propriedades
user.name = 'Pedro';

console.log(user)

// Não pode fazer o objeto como um todo ser alterado
/*user = {
    name: 'Barbie'
};
*/
// Vamos para arrays

const people = ['Elon', 'Pedro', 'Barbie'];

// É possível adicionar novos itens
people.push('Van Gogh');

// É possível remover algum item
people.shift(); //neste caso será removido o nome na posição 0

// É possível alterar diretamente
people[1] = 'Bond';

console.log(people)

