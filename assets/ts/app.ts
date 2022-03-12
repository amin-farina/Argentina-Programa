// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log("Estoy funcionando")


class Persona {
    private name: string;
    private lastName: string;
    private añoNac:number;
    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }
    
    getName():string {
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }

    getlastName():string {
        return this.lastName;
    }
    setlastName(lastName:string){
        this.lastName = lastName;
    }
}

  // Para definir un objeto de una clase, se realiza de manera similar a la definición de una variable
  // de un tipo en particular, con la diferencia de la ejecución de su constructor.
  const Edison: Persona = new Persona('Edison', 'DosSantos');

console.log(Edison); 

