import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import { ImSearch } from "react-icons/im";
import axios from "axios";
import styles from './searchbar.module.css';
import {productReducer} from '../../actions/products'
import {useEffect,useState} from 'react';
import Error from '../Error.js'

let value = "";
let data = "";
const SearchBar = () => {

  const [value, guardarValue] = useState({});
  const [error, guardarError] = useState(false);
  useEffect(() => {

    if(value === "") {
      guardarError(true);
         return;
    }
      const consultarAPI = async () => {

          const url = `http://localhost:3000/api/search/${value}`

          //Consultar la URL
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          guardarValue(resultado);
          guardarError(false);
      }

    consultarAPI()
  }, []);

    console.log("data =" , value )

  //Cargar un componente condicionalmente
    let componente;
    if (error){
      // Hay un error
      componente = <Error mensaje = "Hay un error" />
    } else {
      //Mostrar la data
      componente = null 
    }

    

    // // const [value, setValue] = useState();
    // console.log("VALUEdata =" , value)
    // // const dispatch = useDispatch();

    const handlerButton = (e) => {
        // console.log("VALOR 2 =", value);
        

        // axios.get(`http://localhost:3000/api/search/${value}`)
        // .then((response) => {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });

    }

    const handlerSearch = (e) => {
        //setSerch(e.target.value);
        // let elemento = document.getElementById("Search");
        for (let i = 0; i < value.length; i++) {
          const data = value [i];
          
        }
        data = e.target.value;
        console.log("VALOR ? =", data)

        
        
        // console.log("ELEMENTO =", elemento)
        
    // //     if (value !== '') {
    // //         dispatch(productReducer(e.target.value));
    // // //     }else {
    // // //     dispatch(mostrarProductos());
    //     // }
    }

    return (
        
        
        <Link to={'/search'} className={styles.container} >
            <Button type="submit" variant="light" className={styles.boton} onClick={handlerButton}  ><ImSearch/></Button>
            <input className={styles.buscador} name="Search" id="Search" type="text" placeholder="Buscar productos"
                onChange={handlerSearch} />
        </Link>
      
    )
}

export default SearchBar;