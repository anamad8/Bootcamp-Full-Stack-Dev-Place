import React, {createContext, useState} from "react";
import datosMuejer from '../Datos/DatosMujer.js';


export const DataContext = createContext({});

export const DataProveder = ({children}) => {

    // el estado para el dato de ropa
    const [dataMujer,setDataMujer] = useState(datosMuejer);

    // el estado para los articulos guardados
    const [artiduloGuardado, setArtiduloGuardado] = useState([])

    // creo el estado para el conrador
    const [cantidad, setCantidad] = useState([])  

    // funcion para guardar los articulos----------------------------------------------------
    const guardarArticulos =(prenda)=> {
        setArtiduloGuardado(
            prenda
        );
    }


    // ----Funcion para agregar cantidad-----------------------------------------------------
    const cantidadRompa =(cantidad)=> {
        setCantidad(
            
            cantidad
        );
    }

    console.log(artiduloGuardado)

    return(
        <DataContext.Provider value={{dataMujer,setDataMujer,cantidad,cantidadRompa,
                                    artiduloGuardado,guardarArticulos}}>
            {children}
        </DataContext.Provider>
    )
}