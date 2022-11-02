// Realizar un programa que simule una calculadora, donde realice las operaciones 
// básicas (suma, resta, multiplicación, división), el usuario debe primero ingresar dos valores, y especificar 
// con un carácter la operación a realizar, para el uso del ejercicio debe usar la sentencia switch.

document.querySelector('#calcular2').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n11').value);
    const n2 = parseInt(document.querySelector('#n22').value);
    const op2 = document.querySelector('#op').value;
    let r;
    if(op2 == '+'){
        r = n1 + n2;
    }else if( op2 == '-'){
        r = n1 - n2;
    }else if(op2 == '*'){
        r = n1 * n2;
    }else if(op2 == '/'){
        r = n1 / n2;
    }
    document.querySelector('#r2').innerHTML = r;
});


//Realizar un programa que permita ingresar por teclado 10 números en un array debe:
// Mostrar el número mayor
// Mostrar el número menor
// Mostrar los números pares
// Mostrar los números impares
// Ordenarlos de manera Ascendente
// Ordenarlos de manera Descendente







// Se quiere simular un juego en el que participan N jugadores y otra persona que hace de árbitro. 
// Cada jugador elige 4 números en el rango [1, 10], pudiendo estar repetidos. A continuación, el árbitro, 
// sin conocer los números que ha elegido cada jugador, selecciona 2 números A y B.
//     El programa debe ser capaz de calcular cuántos números de los seleccionados por cada jugador están 
//     comprendidos entre los valores A y B. Ganará el jugador que más números tenga en dicho intervalo.
//     Se pide implementar un programa modular que simule el juego para 3 jugadores, teniendo en cuenta que:
//     Tanto los 4 datos de cada jugador, como los valores para A y B se introducirán por teclado. En todos los casos, 
//     el programa detectará la entrada de números erróneos, solicitando nuevamente el dato hasta que sea válido.
//     Se deben mostrar por pantalla no solo los aciertos de cada jugador sino los datos que ha introducido cada 
//     jugador y los que ha seleccionado el árbitro. Por último, hay que imprimir la media aritmética de los aciertos 
//     de todos los jugadores





// Crear un programa para implementa una pila utilizando una lista enlazada como estructura de datos, 
// Dicha pila deberá almacenar cualquier tipo de objeto, y deberás implementar métodos para ellos como por ejemplo:
//     Insertar un objeto en la pila (push).
//     Recuperar un objeto de la pila (pop).
//     Obtener el objeto de la cima (top) de la pila, sin extraerlo.
//     Averiguar si hay algún objeto almacenado en la pila.
//     Devolver el número de objetos almacenados en la pila.




// Crear un programa que sume los elementos de una lista de enteros recursivamente.


// Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y 
// cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. 
// Construye los siguientes métodos para la clase:
//      Un constructor, donde los datos pueden estar vacíos.
//      mostrar(): Muestra los datos de la cuenta.
//      ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
//      retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos




// DOM. Utilizando el sitio web hecho en el bootcamp, devolver por consola una clase de HTML creada a eleccion. 
// Me tendra que devolver un array con todos los nodos que tengan el mismo parametro. Tambien me tiene que devolver su longitud.




// DOM. Crear una variable que devuelva el Id de un elemento. Crear tambien una variable






