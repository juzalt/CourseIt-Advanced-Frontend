import React from 'react';
import './style.css';

class Searchbar extends React.Component {

  handleChange(e){
    this.props.sendInputToHeader({
      input: e.target.value
    });
  }
  
  render(){
    return(
      <form className="searchBar">
        <input 
          className="searchInput" 
          type="text" 
          placeholder="Buscar productos, marcas, y más..."
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    );
  }
}

export default Searchbar;