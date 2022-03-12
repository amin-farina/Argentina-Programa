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
