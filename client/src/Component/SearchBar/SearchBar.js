import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import { ImSearch } from "react-icons/im";
import axios from "axios";
import styles from './searchbar.module.css';
import {mostrarProductos} from '../../actions/products'

let value = "";

const SearchBar = () => {

    // const dispatch = useDispatch();

    const handlerButton = (e) => {
        console.log("VALOR 2 =", value);
        
        axios.get(`http://localhost:3000/api/search/${value}`)
        .then((response) => {
          console.log(response);
        //   this.setState({
        //     body: response.data.body,
        //     title: response.data.title,
        //   });
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    const handlerSearch = (e) => {
        //setSerch(e.target.value);
        // let elemento = document.getElementById("Search");
        value = e.target.value;
        console.log("VALOR ? =", value)
        // console.log("ELEMENTO =", elemento)
        
    //     if (value !== '') {
    //         dispatch(mostrarProductos(e.target.value));
    // //     }else {
    // //     dispatch(mostrarProductos());
    //     }
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