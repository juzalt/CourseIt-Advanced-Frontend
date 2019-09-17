import React from 'react';
import './App.css';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state.avatar_url = {}
  }

  async componentDidMount(){
    const response = await fetch('https://api.github.com/users/juzalt')
    const responseJson = response.json()
    this.setState({avatar_url: responseJson.avatar_url});
    console.log(this.state.avatar_url);
  }


  render(){
    return (
      <>
        <div id="appContainer">
          <Navbar/>
        </div>
      </>
    );
  }
}

export default App;
