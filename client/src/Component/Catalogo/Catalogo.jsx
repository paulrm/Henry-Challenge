import {mostrarProductos} from '../../actions/products'
import axios from "axios";
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import React,{useState} from 'react';
import style from './Catalogo.module.css'
import ProductCard from '../ProductCard/ProductCard';

// El catalogo va a tener una accion que se llame CArgar catalogo, que se va a 
// disparar cuando ya tengo la data, (dispatch)
//La accion recargar catalogo va a tener un loop que reccora la data 
// y por cada item de data, voy a crear un product card


// console.log("mostrarProductos = ", mostrarProductos)
let value = ""

export default function Catalogo () {


    // axios.get(`http://localhost:3000/api/search/${value}`)
    // .then(result => {
    //     console.log("Result = " , result)
    // }).catch(console.log())

    // const [product, setProduct] = useState([])


    // useEffect(() =>{
    //     console.log("useEffect")
    //     mostrarProductos()
    // },[])



    // const mostrarProductos = async () => {
    //   const data = await fetch (`http://localhost:3000/api/search${value}`)
    //   const products =  await data.json()
    //   console.log(products)

    // }

    // useEffect(() => {
    //     dispatch(mostrarProductos())
    //     console.log("mostrarProductos", mostrarProductos)
    // },[])
    // const dispatch = useDispatch();
    

    


    return (
        
        <div> 
          <h1>HOLA soy el catalogo</h1>
          <ProductCard/>
            <ul>
            {/* {
                product.map( item => (
                    <li key= {item.id}> {item.title} </li>
                ))

            } */}
            </ul>


        </div>
        
        

    )
}