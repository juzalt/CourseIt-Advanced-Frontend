import React from "react";
import "./style.css";
import RegionContainer from '../RegionContainer';

class Home extends React.Component {
  render(){
    return(
      <>
        <div id="pageContainer">
          <img 
            id="HomeLogo" 
            src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo.png?v=3.0" 
            alt="MeLi logo"/>
          <RegionContainer />
        </div>
      </>
    );
  }
}

export default Home;