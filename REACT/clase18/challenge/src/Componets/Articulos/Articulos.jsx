import React from 'react';
import Card from '../Card/Card';
import style from './Articulos.module.css';

function Articulos({ articulos }) {
    
  return (
    <div className={style.container}>

        {
            articulos.map(dato => (
                <Card  key={dato.id} genero={dato.genero} img={dato.img} categoria={dato.categoria} img2={dato.img2}/>
            ))    
        }
    </div>
  )
}

export default Articulos