var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (versamentoUno) {
        return (this.balanceInit = this.balanceInit + versamentoUno);
    };
    SonAccount.prototype.oneWithDraw = function (prelievoUno) {
        return (this.balanceInit = this.balanceInit - prelievoUno);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.twoDeposit = function (versamentoDue) {
        return this.oneDeposit(versamentoDue);
    };
    MotherAccount.prototype.twoWithDraw = function (prelievoDue) {
        return this.oneWithDraw(prelievoDue);
    };
    MotherAccount.prototype.addInterest = function () {
        return (this.balanceInit =
            this.balanceInit + (this.balanceInit / 100) * 10);
    };
    return MotherAccount;
}(SonAccount));
var figlio = new SonAccount(0);
var madre = new MotherAccount(0);
var verifica = document.getElementById('verifica-saldo');
verifica.addEventListener('click', function () {
    //Figlio
    var vUno = document.getElementById('versamento-uno');
    vUno.value;
    var dUno = Number(vUno.value);
    var pUno = document.getElementById('prelievo-uno');
    pUno.value;
    var prUno = Number(pUno.value);
    //Madre
    var vDue = document.getElementById('versamento-due');
    vDue.value;
    var dDue = Number(vDue.value);
    var pDue = document.getElementById('prelievo-due');
    pDue.value;
    var prDue = Number(pDue.value);
    //Calcola i saldi
    var sUno = document.getElementById('saldo-uno');
    var sDue = document.getElementById('saldo-due');
    figlio.oneDeposit(dUno);
    figlio.oneWithDraw(prUno);
    madre.twoDeposit(dDue);
    madre.twoWithDraw(prDue);
    madre.addInterest();
    sUno.value = figlio.balanceInit.toString();
    sDue.value = madre.balanceInit.toString();
});
