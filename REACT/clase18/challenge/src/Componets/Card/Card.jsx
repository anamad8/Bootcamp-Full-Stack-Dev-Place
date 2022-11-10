import React,{ useContext, useState } from 'react';
import Contador from '../Contador/Contador';
import style from './Card.module.css';
import { DataContext } from '../../Contex/DataContex';
import ModalComprar from '../ModalComprar/ModalComprar';


function Card({genero,categoria,img,img2}) {

  const {guardarArticulos} = useContext(DataContext )

  const [modal,setModal] = useState(false);

  function guardar(categoria) {
    const prenda = categoria.target.value
    guardarArticulos(prenda)
    console.log(prenda)

  }

  return (
    <div className={style.card}>
        <img className={style.img1} src={img} alt="" />
        <img className={style.img2} src={img2} alt="" />
        <h3>{genero}</h3>
        <p>{categoria}</p>
        {/* <Contador stock={4} initial={0} /> */}
        <div className={style.btn}>
          <button value={categoria} onClick={guardar}>Comprar</button>
          <button value={categoria} onClick={guardar}>Ver más</button>
        </div>
       
      <ModalComprar img1={img} img2={img2}/>
        

    </div>
  )
}

export default Card;