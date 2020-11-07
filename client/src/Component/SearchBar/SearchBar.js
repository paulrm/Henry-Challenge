import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import { ImSearch } from "react-icons/im";

let value = "";

const SerchBar = () => {

    // const dispatch = useDispatch();

    const handlerButton = (e) => {
        console.log("VALOR 2 =", value)
    }

    const handlerSearch = (e) => {
        //setSerch(e.target.value);
        // let elemento = document.getElementById("Search");
        value = e.target.value;
        console.log("VALOR ? =", value)
        // console.log("ELEMENTO =", elemento)
        
        // if (value !== '') {
        //     dispatch(mostrarBusqueda(e.target.value));
        // }else {
        // dispatch(mostrarProductos());
        // }
    }

    return (

        <Link to={'/search'} >
            <Button type="submit" variant="light" onClick={handlerButton}  ><ImSearch/></Button>
            <input name="Search" id="Search" type="text" placeholder="Buscar productos"
                onChange={handlerSearch} />
        </Link>

    )
}

export default SerchBar;