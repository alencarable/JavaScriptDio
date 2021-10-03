// in
something in somethingItens

// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'eucalipto');

0 in arvores;           // retorna true
3 in arvores;           // retorna true
6 in arvores;           // retorna false (não existe a sexta posição no array arvores)
'cedro' in arvores;     // retorna false (deve ser especificado o número do índice, não o valor contido no índice)
'cedro' in arvores[2];  // retorna true
'length' in arvores;    // retorna true (uma vez que length é uma propriedade de Array)

// Objetos predefinidos
'PI' in Math;           // retorna true
var minhaString = new String('coral');
'length' in minhaString; // retorna true

// Objetos personalizados
var meuCarro = {
    marca: 'Honda',
    modelo: 'Accord',
    ano: 1998
};
'marca' in meuCarro;        // retorna true
'modelo' in meuCarro;       // retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 10, 03);

if (dia instanceof Date) {
    //code here
}