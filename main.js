class Persona {
     constructor(dni, nombre, apellido, telefono){
         this.dni = dni;
         this.nombre = nombre;
         this.apellido = apellido;
         this.telefono = telefono;
     }
 }
 
 
 const agenda = [];
 
  
 
 //  se visualiza en el HTML
  const contenedorAgenda = document.querySelector('.tabla tbody');
  
  function agendaHTML() {
 
     vaciar();
  
     agenda.forEach(contacto => {
           const row = document.createElement('tr')
 
           row.innerHTML = `
                <td>${contacto.dni}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.telefono}</td>
                <td><button>Editar</button></td>
                <td><button id="${contacto.dni}" onclick="borrar(${contacto.dni})">Borrar</button></td>
                `
           ;
           contenedorAgenda.appendChild(row);
  
      });
  
  
  }
  
  agendaHTML()
 
     function agregarContacto() {
 
         let dni = parseInt(prompt('DNI del contacto'));
         let nombre = prompt('Nombre del contacto');
         let apellido = prompt('Apellido del contacto')
         let telefono = prompt('Telefono del contacto');
 
         let contacto = new Persona(dni, nombre, apellido, telefono);
 
         agenda.push(contacto);
         console.log(agenda)
 
         agendaHTML()
     };
  
 
  function vaciar() {
 
     contenedorAgenda.innerHTML = '';
 }
 
 function borrar(dni) {
     let persona = agenda.find( ele => ele.dni === dni );
     let indiceAEliminar = agenda.indexOf(persona);
     agenda.splice(indiceAEliminar, 1);
     agendaHTML();
 }



















// const agenda = []

// const contenedorAgenda = document.querySelector('.tabla tbody');
 
// function agendaHTML() {

//      vaciar();
 
//      agenda.forEach(contacto => {
//           const row = document.createElement('tr')
//           row.className = `dni`
//           row.innerHTML = `
//                <td>${contacto.dni}</td>
//                <td>${contacto.nombre}</td>
//                <td>${contacto.apellido}</td>
//                <td>${contacto.telefono}</td>
//                <td><button>Editar</button></td>
//                <td><button class="borrar" onclick=""borrar(${contacto.dni})" >Borrar</button></td>
//                `
//           ;
//           contenedorAgenda.appendChild(row);
          
//      });

//      // <td><button id="${contacto.dni}" onclick="borrar()">Borrar</button></td>
 
 
// }

 
// agendaHTML()


// function mostrarDatos() {
     
//      let dni = document.getElementById("dni").value;
//      let nombre = document.getElementById("nom").value;
//      let apellido = document.getElementById("ape").value;
//      let telefono = document.getElementById("tel").value;

//      agenda.push({dni,nombre,apellido,telefono})
     
//      agendaHTML()
// }
 
// function vaciar() {
//      // forma lenta
//      contenedorAgenda.innerHTML = '';
// }



// // Cuando se elimina un contacto de la lista
// contenedorAgenda.addEventListener('click', eliminarCurso);
// function eliminarCurso() {
//      let dni = 1
//      console.log(dni)
//      let contactoAEliminar = agenda.find( ele => console.log(ele.dni) );
//      // let contactoAEliminar = agenda.find( ele => ele.dni === dni );
//      // console.log(contactoAEliminar)
//      // let indiceAEliminar = agenda.indexOf(contactoAEliminar);
//      // agenda.splice(indiceAEliminar, 1);
     
     

     
     
// }


//  function borrar() {
     
//      document.querySelector("tbody").removeChild(this)


//      // let doc = document.querySelector(`.d1`)
//      // doc.innerHTML = '';

//      // const idDni = this.id
     
//      // console.log(this.borrar)


//      // let dniDato = agenda.map(dni=> dni.dni)
//      // console.log(dniDato)
//      // let borra = agenda.filter(dato => console.log(dato.dni === agenda[0].dni))
     
//      // const keys = Object.keys(agenda)
//      // const userCleaned = {}

//      // keys.forEach(key => {
//      //      if(key !== 0){
//      //           userCleaned[key] = agenda[key]
//      //      }
//      // })

//      // console.log(userCleaned)
     
// }



 
