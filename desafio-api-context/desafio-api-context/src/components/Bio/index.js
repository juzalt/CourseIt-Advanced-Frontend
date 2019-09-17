import React from 'react';
import './style.css';

class Bio extends React.Component {
  render(){
    return (
      <>
        <div id="bioContainer">
          <img id="ownerAvatar" src={avatarUrl} alt="User avatar"/>
          <p id="ownerBio">p1</p>
          <p id="ownerTitle">p2</p>
        </div>
      </>
    );
  }
}

export default Bio;
