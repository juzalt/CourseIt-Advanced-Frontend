import React, { useState, useEffect } from 'react';
import './style.css';
import ItemCard from '../ItemCard';

function Carousel(props) {
  const [products, setProducts] = useState([]);
  const [userSearched, setUserSearched] = useState(false);
  
  useEffect(() => {
    async function fetchData(){
      let data = await fetch(`https://api.mercadolibre.com/sites/${props.siteID}/search?q=${props.input.input}&limit=5`)
      let jsonData = await data.json();
      
      setProducts(jsonData.results);
    }
    fetchData();
  }, [props.input]);

  return(
    <div className="carouselContainer">
      {products.map((product, key) => {
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

export default Carousel;