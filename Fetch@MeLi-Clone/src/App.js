import React from 'react';
import './App.css';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/carousel/:site" component={ProductsPage}/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
