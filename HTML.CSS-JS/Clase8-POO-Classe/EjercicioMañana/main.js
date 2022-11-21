// 1- Crea una clase NIF que se usará para mantener DNIs con su correspondiente letra.  
// Los atributos serán el número de DNI (entero largo) y la letra que le corresponde.  
// La clase dispondrá de los siguientes métodos: Constructor predeterminado que inicialice el nº de DNI a 0 y la letra 
// a espacio en blanco (será un NIF no válido). Constructor que reciba el DNI y establezca la letra que le corresponde. 
// Accedentes y mutador para el número de DNI (que ajuste automáticamente la letra). leer(): que pida el número de 
// DNI (ajustando automáticamente la letra) Método que nos permita mostrar el NIF (ocho dígitos, un guión y la letra en 
//     mayúscula; por ejemplo: 00395469-F) La letra se calculará con un método auxiliar (privado) de la siguiente forma:  
//     se obtiene el resto de la división entera del número de DNI entre 23 y se usa la siguiente tabla para obtener 
//     la letra que corresponde: 
// 0 - T    1 - R    2 - W    3 - A    4 - G    5 - M    6 – Y 7 - F    8 - P    9 - D   10 - X   11 - B   12 - N   13 – J 
// 14 - Z   15 - S   16 - Q   17 - V   18 - H   19 - L   20 – C 21 - K   22 – E.

class Nif {
    constructor (dni) {
        this.dni = dni;
        this.letra = this.calcularLetra();
    }

    calcularLetra() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras [this.dni % 23];
    }

    leer() {
        do {
            this.dni = parseInt(prompt("Ingrese un dni: "));
        } while (this.dni <= 0);
        this.letra = this.calcularLetra();
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }

    toString() {
        return "DNI: " + this.dni + "-" + this.letra;
    }
}

const nif = new Nif();
nif.leer();
alert(nif.toString());


// 2- Crea las siguientes clases (cada una en su archivo): Motor: con métodos para arrancar el motor y apagarlo. Rueda: 
// con métodos para inflar la rueda y desinflarla. Ventana: con métodos para abrirla y cerrarla. Puerta: 
// con una ventana y métodos para abrir la puerta y cerrar la puerta.Coche: con un motor, cuatro ruedas y dos puertas;  
// con los métodos que te parezcan adecuados.

class Motor {
    constructor () {}
    arrancarMotor();
    apagarMotor();
}

class Rueda {
    constructor () {}
    inflarRueda();
    desinflarRueda();
}

class Ventana {
    constructor () {}
    abrirVentana();
    cerrarVentana();
}

class Puerta {
    constructor () {
        this.ventana = new Ventana();
    }
    abrirPuerta();
    cerrarPuerta();
}

class Coche {
    constructor () {
        this.motor = new Motor();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
    }

    acelerarCoche();
    frenarCoche();
    marchaAtras();
    doblarIzq();
    doblarDer();

}

class Motor{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    prender(estadoActual){
        return estadoActual = true;
    }

    apagar(estadoActual){
        return estadoActual = false;
    }

}

class Rueda{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    inflar(estadoActual){
        return estadoActual = true;
    }

    desinflar(estadoActual){
        return estadoActual = false;
    }
}

class Ventana{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    abrir(estadoActual){
        return estadoActual = true;
    }

    cerrar(estadoActual){
        return estadoActual = false;
    }
}

// class Puerta{
//     estadoActual;
//     ventana;

//     constructor(estadoActual){
//         this.estadoActual =  false;
//         this.ventana = new Ventana();
//     }

//     abrir(estadoActual){
//         return estadoActual = true;
//     }

//     cerrar(estadoActual){
//         return estadoActual = false;
//     }
// }

// class Coche{
//     motor;
//     puerta1;
//     puerta2;
//     rueda1;
//     rueda2;
//     rueda3;
//     rueda4;

//     constructor(){
//         this.motor = new Motor();
//         this.puerta1 = new Puerta();
//         this.puerta2 = new Puerta();
//         this.rueda1 = new Rueda();
//         this.rueda2 = new Rueda();
//         this.rueda3 = new Rueda();
//         this.rueda4 = new Rueda();
//     }
// }

// let auto = new Coche();



// 3- crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. 
// Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
// mostrar(): Muestra los datos de la persona.
// esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

class Persona{

    constructor (nombre,edad,dni){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
    }

    get nombre(){
        return this.nombre
    }
    get edad(){
        return this.edad
    }
    get dni(){
        return this.dni
    }

    set nombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    set edad(nuevoEdad){
        this.edad = nuevoEdad
    }

    set dni(nuevoDni){
        this.dni = nuevoDni
    }

    mostrar() {
        return console.log(Persona.nombre)
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}


// 4- Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y 
// cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional.
// Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
// mostrar(): Muestra los datos de la cuenta.
// ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.


class Cuenta{
    titular;
    cantidad;

    constructor(){
        this.titular = "Mateo";
        this.cantidad = 0;
    }

    getTitular(){
        return this.titular 
    }

    getCantidad(){
        return this.cantidad
    }

    setTitular(titular){
        if(titular == String){
            this.titular = titular;
        }else{
            console.log("No es valido ese titular")
        }
    }

    setCantidad(cantidad){
        if(cantidad == Number){
            this.cantidad = cantidad;
        }else{
            console.log("Es un valor invalido de cantidad")
        }
    }

    mostrar(titular, cantidad){
        console.log
    }
}

