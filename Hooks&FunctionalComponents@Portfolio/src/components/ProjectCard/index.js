import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <>
      <p className="projectCard"><a href={props.clone_url}>{props.name} - {props.stargazers_count} stars</a></p>
    </>
  );
}

export default ProjectCard;