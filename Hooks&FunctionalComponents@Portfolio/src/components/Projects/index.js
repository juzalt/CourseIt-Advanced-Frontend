import React from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';

function Projects(props) {
  return (
    <>
      <div id="projectsContainer">
        <p className="subtitle">Projects</p>
        {props.projects_list.map((project, key) => {
          return(
            <ProjectCard
              key={key}
              name={project.name}
              stargazers_count={project.stargazers_count}
              clone_url={project.clone_url}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;