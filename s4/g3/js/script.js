//Range anni
function rangeAnni(){
    var annoAttuale = 2022;
    var annoNascita = 1990;
    function eta(){
        document.write(annoAttuale - annoNascita + " ");
    }
    return eta();
}
rangeAnni();


//Funzione freccia
zyber = () => 'Sono un ninja'
document.write(zyber());

//Doppia funzione
function doubleFunction(){
    var pireci = 10;
    function voto(){
        console.log(pireci - 3);
    }
    return voto();
}
doubleFunction();

//Operatori di comparazione
var num1 = 55;
var num2 = 62;

num1 == num2;
console.log(num1 == num2); //false

num1 === num2;
console.log(num1 === num2); //false

num1 != num2;
console.log(num1 != num2); //true

num1 !== num2
console.log(num1 !== num2); //true

var num3 = 55;
var num4 = '55';

num3 === num4;
console.log(num3 === num4); //false

num3 == num4;
console.log(num3 == num4); //true

num1 < num2 && num3 == num4;
document.write(num1 < num2 && num3 == num4); //true

num1 > num2 || num3 == num4;
document.write(" " + num1 > num2 || num3 == num4); //true