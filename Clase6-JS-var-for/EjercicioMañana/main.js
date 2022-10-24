//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total 
// que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y 
// dividir por 100.

// var precio= parseInt(prompt("¿Cual es el precio?"));
// var iva = 21;
// var precioTotal = precio + precio*21/100
// alert("El precio total es: "+precioTotal);



// En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, 
// Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 
// solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

// let creditos;
// let acceso ='Salas: ';

// creditos = parseInt(prompt("¿Cuántos créditos vas a pagar?"));

// switch (creditos){
//     case 4:
//         acceso += "Realidad Virtual, ";
//     case 3:
//         acceso += "Juegos 3D, ";
//     case 2:
//         acceso += "Juegos 2D, ";
//     case 1:
//         acceso += "Consolas, ";
//         break;
//     default:
//         acceso += "Ninguna";
// }

// alert(acceso);

// En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. 
// Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 
// y si elige electrico o 3 se le enviará a la ofician 300.

// let tipo;
// let oficina;
// let msg;
// tipo = prompt("Elija el tipo de coche");

// switch(tipo){
//     case 'gasolina':
//     case '1':
//         oficina ="100, gasolina";
//         break;
//     case 'diesel':
//     case '2':
//         oficina = "200, diesel";
//         break;
//     case 'electrico':
//     case '3':
//         oficina = "300, electrico";
//         break;
//     default:
//         oficina='x';
// }

// msg = (oficina == 'x') ?  "Opción inválida": ("Oficina "+oficina);

// alert(msg);

// Un comerciante hace descuentos a sus clientes de la siguiente forma:
// Si ha comprado menos de 100 euros no hay descuento
// Si la compra está entre 100 y 300 euros le descuenta un 5%
// Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
// Si la compra supera los 400 euros le descuenta un 15%


// let factura;
// let total;

// factura = parseInt(prompt('¿Cuánto ha comprado?') );
// switch (true){
//     case (factura >=100 && factura <= 300):
//         descuento = 5;
//         break
//     case (factura >300 && factura <=400):
//         descuento = 10;
//         break
//     case (factura >400):
//         descuento = 15;
//         break
//     default:
//         descuento = 0;
//    }

// total = factura*(1 - descuento/100);

// alert("Debe pagar: " + total + "€");

// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números 
// desde el 0 al valor tecleado. Los números se separarán por comas. 

// let contar;  
// let max = parseInt(prompt("Teclear un número entero"));
// let msg='';

// for(contar = 0; contar < max;  contar++){
//     msg += contar + ", ";
// }

// msg += contar;   //Evita la coma al final

// alert(msg);

// En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script 
// imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
// Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

// let max = parseInt(prompt("Número máximo "));
// let control;

// for (control = 0; control < max; control++){
//     if( control % 3 == 2){
//         console.log(control);
//     }
// }

// Programa un script que pida al usuario que teclee 4 números (uno cada vez). 
// Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4


// let numero;
// let suma = 0; 
// let veces; 
// let media;
// for (veces = 0; veces < 4; veces++)
// {
//     numero = parseInt(prompt("Teclear numero "));
//     suma += numero;
// }
// media = suma/4;
// alert("La media es " + media);
