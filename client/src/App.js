import {BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import SearchBar from '../src/Component/SearchBar/SearchBar.js';
import NavBar from '../src/Component/NavBar/NavBar'
import Catalogo from '../src/Component/Catalogo/Catalogo'

//ACTIONS
import {mostrarProductos} from './actions/products.js'


class App extends Component {
constructor(props) {
  super(props);
  this.state = { apiResponse: "HOLA" };
}

callAPI() {
  fetch("http://localhost:3000/api/search")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
  this.callAPI();
}

render() {
    return (
  <Router>
  <BrowserRouter>
  <Route path='/' render={()=> <NavBar/>} />
  {/* <Route path='/' render={()=> <SearchBar/>} /> */}
  <Route path='/' render={() => <Catalogo/>} />
  </BrowserRouter>
  </Router>
    );
}    

}
export default App;
