const resp = prompt("Elegir enunciado (1, 2 o 3)");

switch (resp) {
    case '1':
        let num = parseInt(prompt("Ingrese un numero: "))

        while (num < 99) {
            console.log(num)
            num = num + 10;
            
        }
        break;

    case '2':
        let pass = prompt("Ingrese una contaseña de 4 digitos")
        
        if (pass.length === 4) {
            alert("Tu contasña es corecta")
        }else{
            alert("Valda tu contraseña")
        }

        break;

        case '3':
            let tabla = parseInt(prompt("¿Que tabla desea aprender?"))
    
            for (let i = 0; i <= 10; i++) {
    
                result = tabla*i;
                console.log(+ tabla +" x "+ i + " = " + result)
            }
    
    
            break;

    default: alert("Ingrese una opcion valida")
}