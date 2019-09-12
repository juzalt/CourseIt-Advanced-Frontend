import React from 'react';
import './style.css';
import ItemCard from '../ItemCard';

class Carousel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      loading: true
    }
  }

  async componentDidMount(){
    const data = await fetch(`https://api.mercadolibre.com/sites/${this.props.siteID}/search?q=tv&limit=5`)
    const jsonData = await data.json();

    this.setState({
      products: jsonData.results,
      loading: false
    });

  }


  render(){
    if (this.state.loading === true) {
      return ( 
        <div>LOADING</div>
      );
    } else {
      return(
        <div className="carouselContainer">
          {this.state.products.map((product, key) => {
            return(
              <ItemCard 
                key={key} 
                thumbnail={product.thumbnail}
                currency_id={product.currency_id} 
                price={product.price}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Carousel;