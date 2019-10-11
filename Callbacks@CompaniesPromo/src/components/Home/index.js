import React from 'react';
import './style.css';
import Header from '../Header';
import StartupCard from '../StartupCard';

class Home extends React.Component {
  constructor(props){
    super(props)
    const data = [{
      name: "changa",
      description: "Somos una marca de zapatos de cuero. Nuestro objetivo es acompañar a nuestra clienta a que se sienta plena tanto de día como de noche..."
    },
    {
      name: "publica.la",
      description: "Con publica.la podras: transformar tus publicaciones"
    },
    {
      name: "lution bot",
      description: "Somos una startup orientada en la creacion de chatbots para incrementar..."
    },
    {
      name: "tan intensa",
      description: "Somos una empresa de indumentaria y accesorios femeninos"
    }]

    this.state = {
      companies: data,
      filteredCompanies: data
    }
  }  

  handleCallback(input){
    console.log(input, "home")
    const filteredCompanies = this.state.companies.filter((company) => {
      if (company.name.indexOf(input) > -1) {
        return company
      }
    })

    this.setState({
      filteredCompanies: filteredCompanies
    })
  }

  render(){
    return (
      <>
        <div id="pageContainer">
          <Header handleCallback={(input) => this.handleCallback(input)}/>
          <div id="startupContainer">
            {this.state.filteredCompanies.map((company, key) => {
              return(
                <StartupCard
                  key={key}
                  name={company.name}
                  description={company.description} 
                />
              )
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;