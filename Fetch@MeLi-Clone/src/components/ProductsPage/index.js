import React from 'react';
import './style.css';
import Carousel from '../Carousel';
import Header from '../Header';
import { Link } from 'react-router-dom';

class ProductsPage extends React.Component {
  
  render(){
    const siteID = this.props.match.params.site;
    return (
      <>
        <div className="pageContainer">
          <Header />
          <p className="productCategoryAbout">Relacionado con tus visitas en Televisiones<Link to="#">Ver Más</Link></p>
          <Carousel siteID={siteID}/> 
        </div>
      </>
    );
  }
}

export default ProductsPage;