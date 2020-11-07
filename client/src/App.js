import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import SearchBar from '../src/Component/SearchBar/SearchBar.js';

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
  <Route path='/' render={()=> <SearchBar/>} />
  </Router>
    );
}    

}
export default App;