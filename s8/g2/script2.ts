class SonAccount {
    balanceInit: number;
    constructor(balanceInit: number) {
      this.balanceInit = balanceInit;
    }
    oneDeposit(versamentoUno: number): number {
      return (this.balanceInit = this.balanceInit + versamentoUno);
    }
    oneWithDraw(prelievoUno: number): number {
      return (this.balanceInit = this.balanceInit - prelievoUno);
    }
  }
  
  class MotherAccount extends SonAccount {
    constructor(balanceInit: number) {
      super(balanceInit);
    }
    twoDeposit(versamentoDue: number) {
      return this.oneDeposit(versamentoDue);
    }
    twoWithDraw(prelievoDue: number) {
      return this.oneWithDraw(prelievoDue);
    }
    addInterest(): number {
      return (this.balanceInit =
        this.balanceInit + (this.balanceInit / 100) * 10);
    }
  }

let figlio = new SonAccount(0);
let madre = new MotherAccount(0);

let verifica = document.getElementById('verifica-saldo') as HTMLInputElement;
verifica.addEventListener('click', () =>{
    
    //Figlio
    let vUno = document.getElementById('versamento-uno') as HTMLInputElement;
    vUno.value;
    let dUno: number = Number(vUno.value)

    let pUno = document.getElementById('prelievo-uno') as HTMLInputElement;
    pUno.value;
    let prUno: number = Number(pUno.value)


    //Madre
    let vDue = document.getElementById('versamento-due') as HTMLInputElement;
    vDue.value;
    let dDue: number = Number(vDue.value)

    let pDue = document.getElementById('prelievo-due') as HTMLInputElement;
    pDue.value;
    let prDue: number = Number(pDue.value)


    //Calcola i saldi
    let sUno = document.getElementById('saldo-uno') as HTMLInputElement;
    let sDue = document.getElementById('saldo-due') as HTMLInputElement;
    figlio.oneDeposit(dUno);
    figlio.oneWithDraw(prUno);
    madre.twoDeposit(dDue);
    madre.twoWithDraw(prDue);
    madre.addInterest();


    sUno.value = figlio.balanceInit.toString();
    sDue.value = madre.balanceInit.toString();

})
