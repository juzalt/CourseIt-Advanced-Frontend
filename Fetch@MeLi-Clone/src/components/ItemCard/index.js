import React from 'react';
import './style.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props)

    this.currencyMap = {
      "ARS": "$"
    }
  }
  render(){
    return (
      <div className="productContainer">
        <img src={this.props.thumbnail} alt="A Television set" />
        <p className="priceContainer">{this.currencyMap[this.props.currency_id]} {this.props.price}</p>
      </div>
    );
  }
}

export default ItemCard;