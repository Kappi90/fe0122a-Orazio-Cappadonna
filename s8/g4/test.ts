//Bottoni
let btnRicarica = document.querySelector('ricarica') as HTMLInputElement;
let btnChiama = document.querySelector('chiama') as HTMLInputElement;
//Input
let inpRicarica = document.querySelector('aggiungi-saldo') as HTMLInputElement;
let inpSaldo = document.querySelector('saldo') as HTMLInputElement;

//Al click
btnRicarica.addEventListener('click', function(){

})

interface iSmartphone{
    
    contratto:string;

    numberCarica:number; //quantitativo ricarica
    numberChiamate: number; //numero chiamate effettutate

}

class FirstUser implements iSmartphone{

    contratto:string;
    numberCarica: number;
    numberChiamate: number;

    constructor(contratto:string, numberCarica: number, numberChiamate: number){
        this.contratto = contratto;
        this.numberCarica = numberCarica;
        this.numberChiamate = numberChiamate;
    }

}


class SeconUser{

}


class ThirdUser{

}