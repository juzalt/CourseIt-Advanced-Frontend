import React from 'react';
import './style.css';

class ProjectCard extends React.Component {
  render(){
    return (
      <>
        <p className="projectCard"><a href={this.props.clone_url}>{this.props.name} - {this.props.stargazers_count} stars</a></p>
      </>
    );
  }
}

export default ProjectCard;