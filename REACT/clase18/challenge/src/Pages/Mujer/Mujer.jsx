import React, { useContext, useState } from 'react';
import style from './Mujer.module.css';
import datos from '../../Datos/DatosMujer'
import BtnFiltro from '../../Componets/BtnFiltros/BtnFiltro';
import Articulos from '../../Componets/Articulos/Articulos';


function Mujer() {

    const todasCategorias = [
		'Todos',
		...new Set(datos.map(articulo => articulo.categoria)),
	];

    const [categorias, setCategorias] = useState(todasCategorias);
	const [articulos, setArticulos] = useState(datos);

    const filterCategoria = (categoria) => {
        
		if (categoria === 'Todos'){
			setArticulos(datos)
			return
		}

		const filterData = datos.filter(articlulo => articlulo.categoria === categoria);
        setArticulos(filterData)
	}
    
    return (
        <div className={style.mujer}>
            
            <BtnFiltro categorias={categorias} filterCategoria={filterCategoria}/>  

            <Articulos articulos={articulos}/>

        </div>
    )
}

export default Mujer