import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Componets/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import Mujer from './Pages/Mujer/Mujer';
import Hombre from './Pages/Hombre/Hombre';


function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Mujer" element={<Mujer/>} />
        <Route exact path="/Hombre" element={<Hombre/>} />
      </Routes>
    </>
     
   
   
  );
}

export default App;
