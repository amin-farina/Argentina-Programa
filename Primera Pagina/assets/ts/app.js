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
// Write TypeScript code!
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>TypeScript Starter</h1>";
console.log("Estoy funcionando");
var Persona = /** @class */ (function () {
    function Persona(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    Persona.prototype.getlastName = function () {
        return this.lastName;
    };
    Persona.prototype.setlastName = function (lastName) {
        this.lastName = lastName;
    };
    return Persona;
}());
// Para definir un objeto de una clase, se realiza de manera similar a la definición de una variable
// de un tipo en particular, con la diferencia de la ejecución de su constructor.
var Edison = new Persona('Edison', 'DosSantos');
console.log(Edison);
// Necesitamos  crear dos clases que llamaremos Suma y Resta que derivan de una superclase llamada Operación
var Operacion = /** @class */ (function () {
    function Operacion() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    Object.defineProperty(Operacion.prototype, "ValorA", {
        set: function (value) {
            this.valorA = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "ValorB", {
        set: function (value) {
            this.valorB = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Resultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suma.prototype.Sumar = function () {
        this.resultado = this.valorA + this.valorB;
    };
    return Suma;
}(Operacion));
var Restar = /** @class */ (function (_super) {
    __extends(Restar, _super);
    function Restar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Restar.prototype.Restar = function () {
        this.resultado = this.valorA + this.valorB;
    };
    return Restar;
}(Operacion));
var operacionS = new Suma;
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.Sumar();
console.log("El resultado de la suma master, es de " + operacionS.Resultado);
// Agregacion y composicion
var Turbina = /** @class */ (function () {
    function Turbina(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    Turbina.prototype.ToString = function () {
        return this.numTurbinas + "Turbinas /s";
    };
    return Turbina;
}());
var Cubierta = /** @class */ (function () {
    function Cubierta(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 0;
        this.numPuertasSalida = 0;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numPuertasSalida = pPuertasSalida;
        this.numTanquesCombustible = pTanquesCombustible;
    }
    Cubierta.prototype.ToString = function () {
        var mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cubierta de Tripulacion, ";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustibles, ";
        mensaje += this.numPuertasSalida + " Puertas de salida. ";
        return mensaje;
    };
    return Cubierta;
}());
var Helice = /** @class */ (function () {
    function Helice(n) {
        this.numHelices = 0;
        this.numHelices = n;
    }
    Helice.prototype.ToString = function () {
        return this.numHelices + " Helice/s, ";
    };
    return Helice;
}());
var Alas = /** @class */ (function () {
    function Alas(pFron, pPost) {
        this.numFrontAlas = 0;
        this.numPosterAlas = 0;
        this.numFrontAlas = pFron;
        this.numPosterAlas = pPost;
    }
    Alas.prototype.ToString = function () {
        return this.numFrontAlas + " Alas Frontales, " + this.numPosterAlas + " Alas Posteriores, ";
    };
    return Alas;
}());
var TrenDeAterrizaje = /** @class */ (function () {
    function TrenDeAterrizaje(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    TrenDeAterrizaje.prototype.ToString = function () {
        return this.numTurbinas + " Turbina/s, ";
    };
    return TrenDeAterrizaje;
}());
var Aeroplano = /** @class */ (function () {
    function Aeroplano(pHelice, pTrenAterrizaje, pAlas, pCubierta) {
        this.helice = pHelice;
        this.cubierta = pCubierta;
        this.alas = pAlas;
        this.trenAterrizaje = pTrenAterrizaje;
    }
    Aeroplano.prototype.ToString = function () {
        var mensaje = "Aeroplano Compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.cubierta.ToString();
    };
    return Aeroplano;
}());
var nave = new Aeroplano;
console.log(nave.ToString());
var Suma2 = /** @class */ (function () {
    function Suma2() {
    }
    Suma2.prototype.Operar = function (a, b) {
        return a + b;
    };
    return Suma2;
}());
var Compass;
(function (Compass) {
    Compass[Compass["North"] = 0] = "North";
    Compass["East"] = "1";
    Compass[Compass["South"] = 2] = "South";
    Compass["West"] = "3";
})(Compass || (Compass = {}));
