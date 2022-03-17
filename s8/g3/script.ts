abstract class Tasse {

    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;

}

class Lavoratore extends Tasse {

    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number){
        super();
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }

    getTasseInps(){
        return (this.redditoAnnuoLordo/100)*this.tasseInps;
    }

    getTasseIrpef(){
        return (this.redditoAnnuoLordo/100)*this.tasseIrpef;
    }

    getUtileTasse(){
        return this.getTasseInps() + this.getTasseIrpef();
    }

    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo - this.getUtileTasse();
    }

}

let orazio = new Lavoratore(0, 0, 0);

let bottone = document.getElementById('calcola') as HTMLInputElement;
bottone.addEventListener('click', () => {

    let lordoAnnuo = document.getElementById('lordo-annuo') as HTMLInputElement;
    lordoAnnuo.value;
    let lordo1: number = Number(lordoAnnuo.value);

    let inps = document.getElementById('inps') as HTMLInputElement;
    inps.value;
    let inps1: number = Number(inps.value);

    let irpef = document.getElementById('irpef') as HTMLInputElement;
    irpef.value;
    let irpef1: number = Number(irpef.value);

    let importoNetto = document.getElementById('importo-netto') as HTMLInputElement;
    


})
