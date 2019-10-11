import React from 'react';
import './style.css';
import Carousel from '../Carousel';
import Header from '../Header';
import { Link } from 'react-router-dom';

class ProductsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: ""
    }
  }

  handleCallback(input){
    this.setState({
      input: input
    })
  }
  
  render(){
    const siteID = this.props.match.params.site;
    return (
      <>
        <div className="pageContainer">
          <Header sendInputToProductsPage={(input) => this.handleCallback(input)}/>
          <p className="productCategoryAbout">Relacionado con tus visitas en Televisiones<Link to="#">Ver Más</Link></p>
          <Carousel siteID={siteID} input={this.state.input} /> 
        </div>
      </>
    );
  }
}

export default ProductsPage;