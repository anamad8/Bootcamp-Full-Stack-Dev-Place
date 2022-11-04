import { useState } from 'react';
import './App.css';

function App() {

  const titulo = <h1>Hola JSX</h1>

// creo el array
  const users = [
    { name: "Jorge Oredoñez", id: 1 },
    { name: "Maria Lopez", id: 2 },
    { name: "Jose Torres", id: 3 }
  ];


// creo el estado para sumar los numeros y el estado para el total 
  const [state, setState] = useState({
    num1:"",
    num2:""
  });
  const [total, setTotal] = useState(0);

// creo la funcion donde me lee el valor de los input y me la guarda en el useState
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

// console.log(state.num1)
// console.log(state.num2)

// creo una variable para que se sumen los valore 
  let suma = parseInt(state.num1) + parseInt(state.num2)

// esta funcion guarda en el estado el resultado de la suma
  function sumar() {
    return setTotal(suma)
  }
  
  return (
    <div className="App">
      {titulo}
      <h3>Nombres de Usuarios</h3>
      <div>
        <ul>
          {users.map(usuario => (
              <li key={usuario.id}>{usuario.name}</li>
            )
          )}
        </ul>
      </div>

      <div>
        <h2>Sumar dos números</h2>
        <input placeholder="Primer número" type="number" name="num1" onChange={e => handleChange(e)}/>
        <input placeholder="Segundo número" type="number" name="num2" onChange={e => handleChange(e)} />

        <button onClick={sumar}>Sumar</button>
        <p>Total:{total}</p>
    </div>


    </div>
  );
}

export default App;
