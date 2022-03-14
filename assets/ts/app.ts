// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log("Estoy funcionando")


class Persona {
    private name: string;
    private lastName: string;
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


    // Necesitamos  crear dos clases que llamaremos Suma y Resta que derivan de una superclase llamada Operación

    class Operacion {
        protected valorA: number;
        protected valorB: number;
        protected resultado: number;

        constructor(){
            this.valorA=0;
            this.valorB=0;
            this.resultado=0;
        }

        set ValorA(value:number){
            this.valorA=value;
        }

        set ValorB (value: number){
            this.valorB=value;
        }

        get Resultado():number {
            return this.resultado;
        }
    }

    class Suma extends Operacion {
        Sumar (){
            this.resultado = this.valorA + this.valorB;
        }
    }

    class Restar extends Operacion {
        Restar (){
            this.resultado = this.valorA + this.valorB;
        }
    }

    let operacionS = new Suma;
    operacionS.ValorA = 45;
    operacionS.ValorB = 10;
    operacionS.Sumar();
    console.log ("El resultado de la suma master, es de " + operacionS.Resultado)

    

    // Agregacion y composicion

    class Turbina {
        private numTurbinas:number = 0;
        public constructor(n:number){
            this.numTurbinas = n;
        }
        public ToString(){
            return this.numTurbinas + "Turbinas /s"
        }
    }

    class Cubierta
    {
        private cabinaTripulacion:boolean = false ;
        private cabinaVuelo:boolean = false;
        private sistemaEmergencia:boolean = false;
        private numTanquesCombustible:number = 0;
        private numPuertasSalida:number = 0;


        public constructor( pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number )
        {
            this.cabinaTripulacion = pCabinaTripulacion;
            this.cabinaVuelo = pCabinaVuelo;
            this.sistemaEmergencia = pSistemaEmergencia;
            this.numPuertasSalida = pPuertasSalida;
            this.numTanquesCombustible = pTanquesCombustible;
        }

        public ToString()
        {
            let mensaje = "Cubierta compuesta de: ";
            if (this.cabinaVuelo)
            {
                mensaje += " Cubierta de Vuelo, ";
            }
            if (this.cabinaTripulacion)
            {
                mensaje += " Cubierta de Tripulacion, ";
            }
            if (this.sistemaEmergencia)
            {
                mensaje += " Sistema de emergencia, ";
            }

            mensaje += this.numTanquesCombustible + " Tanques de Combustibles, ";
            mensaje += this.numPuertasSalida + " Puertas de salida. ";
            
            return mensaje;
        }
    }

    class Helice
    {
        private numHelices:number = 0;
        public constructor ( n:number)
        {
            this.numHelices = n;
        }
        public ToString(){
            return this.numHelices + " Helice/s, "
        }
    }

    class Alas
    {
        private numFrontAlas:number = 0;
        private numPosterAlas:number = 0;

        constructor (pFron: number, pPost: number)
        {
            this.numFrontAlas = pFron;
            this.numPosterAlas = pPost;
        }

        public ToString(){
            return this.numFrontAlas + " Alas Frontales, " + this.numPosterAlas + " Alas Posteriores, "
        }
    }

    class TrenDeAterrizaje
    {
        private numTurbinas: number = 0;
        public constructor(n: number)
        {
            this.numTurbinas = n;
        }
        public ToString()
        {
            return this.numTurbinas + " Turbina/s, "
        }
    }

    class Aeroplano
    {
        private helice: Helice;
        private trenAterrizaje: TrenDeAterrizaje;
        private alas: Alas;
        private cubierta:Cubierta;

        constructor( pHelice:Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta)
        {
            this.helice = pHelice;
            this.cubierta = pCubierta;
            this.alas = pAlas;
            this.trenAterrizaje = pTrenAterrizaje;
   
        }

        public ToString()
        {
            let mensaje = "Aeroplano Compuesto por: "
            mensaje += this.helice.ToString();
            mensaje += this.trenAterrizaje.ToString();
            mensaje += this.alas.ToString();
            mensaje += this.cubierta.ToString();
        }
    }

    let nave = new Aeroplano;

    console.log(nave.ToString());


    // INTERFACE

    interface IOperacion
    {
        Operar (a:number, b:number):number;
    }

    class Suma2 implements IOperacion
    {
        Operar (a:number, b:number):number{
            return a + b;
        }
    }