
import axios from "axios";

export const BUSCAR_PRODUCTOS = "BUSCAR_PRODUCTOIDS";
export const MOSTRAR_PRODUCTOS = "MOSTRAR_PRODUCTOS";

export function mostrarProductos(value){
    return function(dispatch){
        return axios.get(`http://localhost:3000/api/search/${value}`)

                .then(response =>{
                    dispatch(cambiarQuery(response.data))
                   
                })
                .catch(err=>{console.log(err)})

    }
}

export function cambiarQuery() {
    return {
        type: "CAMBIAR_QUERY",
        query : ""
    }
}

export function mostrarBusqueda(value){
    return function(dispatch){
        return axios.get(`http://localhost:3000/search/?query=${value}`)

                .then(json=>{   
                    dispatch({
                        type:BUSCAR_PRODUCTOS,
                        producto:json
                    })
                })
                .catch(err=>{console.log(err)})

    }
}

