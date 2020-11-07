import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import { ImSearch } from "react-icons/im";


const SerchBar = () => {

    // const dispatch = useDispatch();

    const handlerSearch = (e) => {
        //setSerch(e.target.value);
        let value = e.target.value;
        // if (value !== '') {
        //     dispatch(mostrarBusqueda(e.target.value));
        // }else {
        // dispatch(mostrarProductos());
        // }
    }

    return (

        <Link to={'/search'} >
            <Button type="submit" variant="light" ><ImSearch/></Button>
            <input  type="text" placeholder="Buscar productos"
                onChange={handlerSearch} />
        </Link>

    )
}

export default SerchBar;