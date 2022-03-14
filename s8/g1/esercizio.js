var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var randomBtn = document.querySelector('#random');

btn1.addEventListener('click', function () {
    var valore1 = document.querySelector('#g1').value;
    let posizione = document.querySelector('#numeri');
    var div = document.createElement('div');
    div.innerHTML = valore1
    div.classList.add('item');
    posizione.append(div)
})

btn2.addEventListener('click', function () {
    var valore2 = document.querySelector('#g2').value;
    let posizione = document.querySelector('#numeri');
    var div2 = document.createElement('div');
    div2.innerHTML = valore2
    div2.classList.add('item');
    posizione.append(div2)
})

randomBtn.addEventListener('click', function () {

    function indovina(valore1, valore2) {
        //Dichiaro 2 variabili con il valore immesso dai due giocatori
        var valore1 = document.querySelector('#g1').value;
        var valore2 = document.querySelector('#g2').value;

        //Creo un numero random
        var numero = Math.floor(Math.random() * (10 - 1) + 1);

        //Dichiaro una variabile dove andare a scrivere il numero
        let posizione = document.querySelector('#numeri');
        var div3 = document.createElement('div'); //Creo un div
        div3.innerHTML = numero; //All'interno del div scrivo il valore del num random
        div3.classList.add('item'); //Aggiungo una classe al div creato
        posizione.append(div3); //Aggiungo il div creato all'interno di posizione(div creato all'interno dell'html)

        //Dichiaro 2 variabili per calcolare la differenza che c'è tra il num dato dal giocatore e il num random uscito
        var differenza1 = Math.abs(numero - valore1);
        var differenza2 = Math.abs(numero - valore2);

        //Confronto i valori e vedo chi ha vinto
        if (valore1 == numero) {
            console.log('G1: Hai vinto')
        } else if (valore2 == numero) {
            console.log('G2: hai vinto')
        } else if (differenza1 < differenza2) {
            console.log('Nessuno ha indovinato, ma il G1 si è avvicinato di più')
        } else {
            console.log('Nessuno ha indovinato, ma il G2 si è avvicinato di più')
        }

    }
    indovina();
})