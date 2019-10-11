import React from 'react';
import './style.css';
import SearchBar from '../SearchBar';

class Header extends React.Component {

  handleCallback(input){
    this.props.handleCallback(input)
  }

  render(){
    return (
      <>
        <div id="headerContainer">
          <div id="logo">STARTUP ARGENTINA</div>
          <SearchBar handleCallback={(input) => this.handleCallback(input)}/>
        </div>
      </>
    );
  }
}

export default Header;