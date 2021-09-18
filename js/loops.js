//Condicionais, Laços de Repetição e Date

var idade = parseInt(prompt("Qual sua idade? "));

if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
}

var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}


for (var i = 0; i <= 5; i ++) {
    console.log(i);
}

var d = new Date();
console.log(d.getDay);
console.log(d.getMonth()+1);
console.log(d.getHours);