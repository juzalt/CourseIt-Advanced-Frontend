import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      avatar_url: [],
      userDescription: [],
      repoList: []
    }
  }

  async componentDidMount(){
    const userApiResponse = await fetch('https://api.github.com/users/juzalt')
    const userApiResponseJson = await userApiResponse.json()
    const repoApiResponse = await fetch('https://api.github.com/users/juzalt/repos')
    const repoApiResponseJson = await repoApiResponse.json()
    
    this.setState({
      avatar_url: userApiResponseJson.avatar_url,
      userDescription: userApiResponseJson.bio,
      repoList: repoApiResponseJson
    });
  }


  render(){
    return (
      <>
        <div id="appContainer">
          <Navbar/>
          <Bio avatar_url={this.state.avatar_url} userDescription={this.state.userDescription}/>
          <Projects projects_list={this.state.repoList}/>
        </div>
      </>
    );
  }
}

export default App;
