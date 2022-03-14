//Dichiaro le variabili giocatori
var g1Numero = 3;
var g2Numero = 6;
//Funzione per confrontare i parametri
function risultato() {
    //creo il numero random
    var numero = Math.floor(Math.random() * (10 - 1) + 1);
    //Lo mostro in console
    console.log(numero);
    //Creo 2 variabile per fare la differenza tra il numero del giocatore e il numero random per vedere chi si è avvicinato di più
    var diffe1 = Math.abs(numero - g1Numero);
    var diffe2 = Math.abs(numero - g2Numero);
    //Confronto i risultati e dichiaro chi ha vinto o cmq avvicinato di più
    if (numero == g1Numero) {
        console.log('Giocatore 1 ha vinto');
    }
    else if (numero == g2Numero) {
        console.log('Giocatore 2 ha vinto');
    }
    else if (diffe1 < diffe2) {
        console.log('Nessuno ha vinto, ma il giocatore 1 si è avvicinato di più');
    }
    else {
        console.log('Nessuno ha vinto, ma il giocatore 2 si è avvicinato di più');
    }
}
risultato();
