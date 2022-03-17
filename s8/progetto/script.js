//Creo la classe modello Abbigliamento
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    //Creo i 2 metodi per calcolare lo sconto e mostrare il prezzo finale scontato
    Abbigliamento.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa / 100) * this.saldo;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Abbigliamento;
}());
//Utilizzo il fetch per recuperare i capi dal file JSON
fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var abbigliamento = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(abbigliamento);
        console.log("Il prezzo del capo scontato è: " + (abbigliamento.getAcquistoCapo().toFixed(2)));
    });
});
//Creo 3 nuove istanze
var maglietta = new Abbigliamento(6, 7788, 'inverno', 't-shirt', 2314, 6, 'black', 18, 22, 'negozio', 15);
console.log(maglietta);
var jeans = new Abbigliamento(7, 6544, 'primavera', 'pantalone', 9812, 3, 'blue', 25, 31, 'magazzino', 20);
console.log(jeans);
var scarpe = new Abbigliamento(8, 5589, 'estate', 'scarpe', 3020, 2, 'white', 45, 58, 'negozio', 25);
console.log(scarpe);
