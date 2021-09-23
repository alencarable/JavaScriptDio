const students = [
    {
        name: 'Pedro',
        grade: 4
    },
    {
        name: 'Elon',
        grade: 9
    },
    {
        name: 'Barbie',
        grade: 8
    }
]

/*
O array de alunos recebe dois atributos, para retornar os alunos que foram aprovados, é feito um filtro relacionado ao parâmetro, em que se filtram apenas os alunos com nota maior ou igual ao 7.
*/

function getApprovedStudents (studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);