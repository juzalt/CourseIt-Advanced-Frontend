import React from 'react';
import './style.css';
import Searchbar from '../Searchbar';

class Header extends React.Component {

  handleCallback(input){
    this.props.sendInputToProductsPage(input);
  }

  render(){
    return (
      <>
        <div className="headerContainer">
          <img 
            className="headerLogo" 
            src="https://http2.mlstatic.com/ui/navigation/4.5.2/mercadolibre/logo__small.png"
            alt="MeLi logo"
          /> 
          <Searchbar sendInputToHeader={(input) => this.handleCallback(input)}/>
          <div id="promoText">Comprá en 12 cuotas sin tarjeta</div>
        </div>
      </>
    );
  }
}

export default Header;