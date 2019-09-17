import React from 'react';
import './style.css';

class Bio extends React.Component {
  render(){
    return (
      <>
        <div id="bioContainer">
          <img id="ownerAvatar" src={this.props.avatar_url} alt="User avatar"/>
          <p id="ownerBio">{this.props.userDescription}</p>
          <p id="ownerTitle">Employee @ FakeCompany123</p>
        </div>
      </>
    );
  }
}

export default Bio;
