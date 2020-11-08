import SearchBar from '../SearchBar/SearchBar'
// import {BiHome} from 'react-icons/bi';

import Logo from './logo__small.png';
import styles from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import { NavDropdown} from 'react-bootstrap';



export default function NavBar () {
 
    // const dispatch=useDispatch();


    return (
    
        <nav className={styles.nav}>
            <div>        
                <Link to={'/'}>
                    <img className={styles.logotech} src={Logo} width="44" height="32" alt="" />
                </Link>
               
            </div>
            <div className={styles.search}>
                <SearchBar/>
            </div>
        </nav>
     )
}