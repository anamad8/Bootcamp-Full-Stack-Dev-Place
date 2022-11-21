// Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
// Mostrar por pantalla los doce nombres utilizando la función console.log().
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

console.log(meses)

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i])
}


// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una
// cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// let numero = prompt("Introduce un número entero");

// let resultado = parImpar(numero);
// alert("El número "+ numero + " es " + resultado);

// function parImpar(numero) {

//   if(numero % 2 == 0) {
//     return "par";
//   }
//   else {
//     return "impar";
//   }
// }

// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.

// let cadena = prompt ("Escribe algo con mayúsculas, minúsculas y espacios.");

// function numero(cadena){
//     let may=0;
//     let min=0;
//     let letra = cadena.split("");

//     for(let i = 0; i < cadena.length; i++){
//         if(letra[i]!= " "){
//             if(letra[i] == (letra[i].toUpperCase())) {
//                 may++;    
//             }
//             if(letra[i] == letra[i].toLowerCase()) {
//                 min++;
//             }
//         }    
//     }

//     console.log(cadena)
//     console.log("El numero de mayúsculas que hay: "+may);
//     console.log("El numero de minusculas que hay: "+min);
// }
// numero(cadena);

// El factorial de un número entero n es una operación matemática que consiste en multiplicar todos 
// los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) 
// es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120.

// let numero = prompt("Introduce un número y se mostrará su factorial");
// let resultado = 1;

// for(let i=1; i<=numero; i++) {
//   resultado *= i;
// }
// alert(resultado);





