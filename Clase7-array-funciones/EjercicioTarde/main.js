// La agenda va a tener 4 posiciones. La primera posicion, DNI, la segunda, NOMBRE, la tercera APELLIDO y 
// la cuarta TELEFONO

// A la agenda debemos poder agrega, eliminar, y consultar datos sobre las personas agendadas.

let agenda = [
    [123456,"marta", "lopez", 1236456],
    [654321, "lucas", "ramires", 654123],
    
]

let menu = prompt(" 1 Ver la matriz. \n 2 Agregar datos a la matriz. \n 3 eliminar datos de la matriz. \n 4 Buscar datos por dni.")

switch(menu){
    case "1":
        window.alert(agenda)
        break;

    case "2":
        let agregarDni = parseInt(prompt("agraga tu dni.."))
        let agregarNom =prompt("agraga tu Nombre..")
        let agregarApe =prompt("agraga tu Apellido..")
        let agregarTel = parseInt(prompt("agraga tu Telefono.."))

        agenda.push([agregarDni, agregarNom, agregarApe, agregarTel]) 
        window.alert(agenda)
        break;

    case "3":
        let elementoEliminado = prompt(agenda + " cocloca la fila que desee eliminar ")
        agenda.splice(elementoEliminado, 1)
        window.alert(agenda)
        break;

    case "4":
        let buscarDni  = parseInt(prompt(agenda + " escribi el DNI que vas a buscar..."))

        agenda.forEach(element => {
            element.forEach(elem => {

                if (elem === buscarDni) {
                    window.alert( `es igual al dni que buscate ${elem} \n ${element}`)
                    
                }
                else{
                    window.alert("el dni no fue encontrado")
                    
                }
                
            });
           
        });
        break;

        default: alert("Ingrese una opcion valida")


}







// let agenda = [
//     [123456,"marta", "lopez", 1236456], 
//     [654321, "lucas", "ramires", 654123],

// ]



// do{
//     let menu =(prompt(" 1 Ver la matriz. \n 2 Agregar datos a la matriz. \n 3 eliminar datos de la matriz. \n 4 Buscar datos por dni."))
//     switch(menu){
//         case "1":
//             window.alert(agenda)
//             break;

//         case "2":
//             let agregarDni = parseInt(prompt("agraga tu dni.."))
//             let agregarNom =prompt("agraga tu Nombre..")
//             let agregarApe =prompt("agraga tu Apellido..")
//             let agregarTel = parseInt(prompt("agraga tu Telefono.."))

//             let agregar = agenda.push([agregarDni, agregarNom, agregarApe, agregarTel]) 
//             window.alert(agenda)
//             break;

//         case "3":
//             let elementoEliminado = prompt(agenda + " cocloca la fila que desee eliminar ")
//             let eliminado = agenda.splice(elementoEliminado, 1)
//             window.alert(agenda)
//             break;

//             case "4":
//             let buscarDni  = parseInt(prompt(agenda + " escribi el DNI que vas a buscar..."))

//             agenda.forEach(element => {
//                 element.forEach(elem => {

//                     if (elem === buscarDni) {
//                         window.alert( `es igual al dni que buscate ${elem} \n ${element}`)
                        
//                     }
//                     else{
//                         window.alert("el dni no fue encontrado")
                        
//                     }
                    
//                 });
            
//             });
//             break;


//             default: alert("Ingrese una opcion valida")
//             break;

//         }
// }while(menu != "1" ||  menu != "2" || menu != "3" || menu != "4" )













    // var BreakException = {};

    // try {
    // [1, 2, 3].forEach(function(el) {
    //     console.log(el);
    //     if (el === 2) throw BreakException;
    // });
    // } catch (e) {
    //     if (e !== BreakException) throw e;
    // }


