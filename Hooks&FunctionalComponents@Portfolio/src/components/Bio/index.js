import React from 'react';
import './style.css';

function Bio(props) {
  return (
    <>
      <div id="bioContainer">
        <img id="ownerAvatar" src={props.avatar_url} alt="User avatar"/>
        <p id="ownerBio">{props.userDescription}</p>
        <p id="ownerTitle">Employee @ FakeCompany123</p>
      </div>
    </>
  );
}

export default Bio;
