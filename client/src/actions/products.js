
import axios from "axios";


export const MOSTRAR_PRODUCTOS = "MOSTRAR_PRODUCTOS";

export function mostrarProductos(value){
    return function(dispatch){
        return axios.get(`http://localhost:3000/api/search/${value}`)

                .then(json=>{
                    dispatch({
                        type:MOSTRAR_PRODUCTOS,
                        productos:json
                    })
                })
                .catch(err=>{console.log(err)})

    }
}