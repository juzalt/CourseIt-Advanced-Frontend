import React from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';

class Projects extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [],
    }
  }


  componentDidMount(){

  }

  render(){
    return (
      <>
        <div id="projectsContainer">
          <p className="subtitle">Projects</p>
          {this.props.projects_list.map((project, key) => {
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
}

export default Projects;