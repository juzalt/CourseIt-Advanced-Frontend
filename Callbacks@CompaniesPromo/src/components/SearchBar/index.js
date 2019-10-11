import React from 'react';
import './style.css';

class SearchBar extends React.Component {

  handleChange(e){
    const input = e.target.value
    this.props.handleCallback(input);
  }

  render(){
    return(
      <>
        <form id="formSearchBar">
          <input id="inputSearchBar" onChange={(e) => this.handleChange(e)}>
          </input>
        </form>
      </>
    );
  }
}

export default SearchBar;