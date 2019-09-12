import React from 'react';
import './style.css';

class Header extends React.Component {
  render(){
    return (
      <>
        <div className="headerContainer">
          <img 
            className="headerLogo" 
            src="https://http2.mlstatic.com/ui/navigation/4.5.2/mercadolibre/logo__small.png"
            alt="MeLi logo"
          /> 
          <form className="searchBar">
            <input 
              className="searchInput" 
              type="text" 
              placeholder="Buscar productos, marcas, y más..."
            />
          </form>
          <div id="promoText">Comprá en 12 cuotas sin tarjeta</div>
        </div>
      </>
    );
  }
}

export default Header;