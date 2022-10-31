//  creo un array
let listaPersona = [];

// creo un objeto
const objPersona = {
    dni: '',
    nombre: '',
    apellido: '',
    telefono: '',
    
}

// creo una variable para dectectar cuando tiene que agregar o editar
let editando = false;


// llamo a las selectores
const formulario = document.querySelector("#formulario");
const dniInput = document.querySelector("#dni");
const nombreInput = document.querySelector("#nom");
const apellidoInput = document.querySelector("#ape");
const telefonoInput = document.querySelector("#tel");
const btnAgregar = document.querySelector("#btnAgregar");

// creo el evento para el bonton validar el formulario 
formulario.addEventListener('submit', validarFormulario);

// funcion valida formulario  
function validarFormulario(e){
    e.preventDefault();
    
    if(dniInput.value === '' || nombreInput.value === '' || apellidoInput.value === '' || telefonoInput.value === ''){
        alert("Todos los campos son obligatorios")
        return;
    }

    if(editando){
        editarPersona();
        editando = false;
    }else{  
        objPersona.dni = dniInput.value;
        objPersona.nombre  = nombreInput.value;
        objPersona.apellido  = apellidoInput.value;
        objPersona.telefono  = telefonoInput.value;

        agregarPesrona();
        
    }
}

function agregarPesrona(){
    listaPersona.push({...objPersona});
    
    mostrarPersona();

    formulario.reset();

    limpiarObjeto();

    
}

function limpiarObjeto(){
    objPersona.dni = "";
    objPersona.nombre = "";
    objPersona.apellido = "";
    objPersona.telefono = "";
}


function  mostrarPersona(){

    limpiarHtml();

    const divEmpleados = document.querySelector('.div-persona');

    listaPersona.forEach(empleado => {
        const { dni, nombre, apellido, telefono} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${dni} - ${nombre} - ${apellido} - ${telefono} - `;
        parrafo.dataset.dni = dni;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarPersona(empleado);
        editarBoton.textContent = "Editar";
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => borrarBoton(dni);
        eliminarBoton.textContent = "Borrar";
        eliminarBoton.classList.add('btn', 'btn-borrar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');
        divEmpleados.appendChild(parrafo);
        // divEmpleados.appendChild(hr);
    })
}

function cargarPersona(empleado){
    const { dni, nombre, apellido, telefono} = empleado;

    dniInput.value = dni;
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    telefonoInput.value = telefono;

    objPersona.dni = dni;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando =true;

}

function editarPersona(){

    objPersona.dni = dniInput.value;
    objPersona.nombre = nombreInput.value;
    objPersona.apellido = apellidoInput.value;
    objPersona.telefono = telefonoInput.value;

    listaPersona.map(empleado =>{
        // console.log(empleado.dni)
        // console.log(listaPersona[0].dni)
        if(empleado.dni === objPersona.dni){

            empleado.dni = objPersona.dni;
            empleado.nombre = objPersona.nombre;
            empleado.apellido = objPersona.apellido;
            empleado.telefono = objPersona.telefono;

        }
    });

    limpiarHtml();

    mostrarPersona();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = "Agregar";

    editando = false;

}

function borrarBoton(dni){
    
    listaPersona = listaPersona.filter(empleado => empleado.dni !== dni);

    limpiarHtml();
    mostrarPersona();

}

function limpiarHtml(){
    const divEmpleados = document.querySelector('.div-persona');
    while (divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}

// Funciones para ordenar contactos

let botonAscendente = document.querySelector('#btnA')
let botonDescendente = document.querySelector('#btnZ')

botonAscendente.onclick = () => {
    listaPersona.sort(function (a,b){
        if(a.apellido > b.apellido){
            return 1;
        }else if(a.apellido < b.apellido){
            return -1;
        }else{
        return 0
        };
    })
    mostrarPersona()
}

botonDescendente.onclick = () => {
    listaPersona.sort(function (a,b){
        if(a.apellido < b.apellido){
            return 1;
        }else if(a.apellido > b.apellido){
            return -1;
        }else
        return 0;
    })  
    mostrarPersona()
}