import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';


function App() {
  const [avatar_url, setAvatar] = useState([]);
  const [userDescription, setUserDesc] = useState([]);
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const userApiResponse = await fetch('https://api.github.com/users/juzalt')
      const userApiResponseJson = await userApiResponse.json()
      const repoApiResponse = await fetch('https://api.github.com/users/juzalt/repos')
      const repoApiResponseJson = await repoApiResponse.json()

      setAvatar(userApiResponseJson.avatar_url);
      setUserDesc(userApiResponseJson.bio);
      setRepoList(repoApiResponseJson);
    }
    if (avatar_url == false){
      fetchData();
    }
  })

  return (
    <>
      <div id="appContainer">
        <Navbar/>
        <Bio avatar_url={avatar_url} userDescription={userDescription}/>
        <Projects projects_list={repoList}/>
      </div>
    </>
  );
}

export default App;
