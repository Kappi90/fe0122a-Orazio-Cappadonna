//Creo la classe modello Abbigliamento
class Abbigliamento {

    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {

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
    getSaldoCapo():number{
        return (this.prezzoivainclusa/100)*this.saldo;
    }

    getAcquistoCapo():number{
        return this.prezzoivainclusa - this.getSaldoCapo();
    }

}

//Utilizzo il fetch per recuperare i capi dal file JSON
fetch('Abbigliamento.json')
.then(response => response.json())
.then(data => {
    data.forEach((item:Abbigliamento) => {
        let abbigliamento = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(abbigliamento);
        console.log("Il prezzo del capo scontato è: " + (abbigliamento.getAcquistoCapo().toFixed(2)));
    })
})

//Creo 3 nuove istanze
let maglietta = new Abbigliamento(6, 7788, 'inverno', 't-shirt', 2314, 6, 'black', 18, 22, 'negozio', 15)
console.log(maglietta);
let jeans = new Abbigliamento(7, 6544, 'primavera', 'pantalone', 9812, 3, 'blue', 25, 31, 'magazzino', 20)
console.log(jeans);
let scarpe = new Abbigliamento(8, 5589, 'estate', 'scarpe', 3020, 2, 'white', 45, 58, 'negozio', 25)
console.log(scarpe);