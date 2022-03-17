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
var Tasse = /** @class */ (function () {
    function Tasse() {
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        var _this = _super.call(this) || this;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        _this.tasseInps = tasseInps;
        _this.tasseIrpef = tasseIrpef;
        return _this;
    }
    Lavoratore.prototype.getTasseInps = function () {
        return (this.redditoAnnuoLordo / 100) * this.tasseInps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return (this.redditoAnnuoLordo / 100) * this.tasseIrpef;
    };
    Lavoratore.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    };
    return Lavoratore;
}(Tasse));
var orazio = new Lavoratore(20000, 10, 2);
console.log(orazio.getRedditoAnnuoNetto());
