import React from 'react';
import './style.css';

class StartupCard extends React.Component {
  render(){
    return (
      <>
        <div className="startupCardContainer">
          <div className="startupName">{this.props.name}</div>
          <div className="startupDescription">{this.props.description}</div>
        </div>
      </>
    );
  }
}

export default StartupCard;