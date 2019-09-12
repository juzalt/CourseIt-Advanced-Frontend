import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class RegionContainer extends React.Component {

  render(){
    return (
      <>
        <div id="regionContainer">
          <div className="country">
            <img 
              src="http://www.sclance.com/pngs/argentina-flag-png/argentina_flag_png_54594.png"
              alt="Argentina\'s flag"
              className="flag"
            />
            <Link to="/carousel/MLA">Argentina</Link>
          </div>
          <div className="country">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bolivia-44-297603.png"
              alt="Bolivia\'s flag"
              className="flag"
            />
            <Link to="/carousel/MBO">Bolivia</Link>
          </div>
          <div className="country">
            <img
              src="https://oec.world/static/img/icons/country/country_sabra.png"
              alt="Brasils flag"
              className="flag"
            />
            <Link to="/carousel/MLB">Brasil</Link>
          </div>
          <div className="country">
            <img
              src="https://intersearch.org/wp-content/uploads/flags/colombia-flag-256-150x150.png"
              alt="Colombia\'s flag"
              className="flag"
            />
            <Link to="/carousel/MCO">Colombia</Link>
          </div>
        </div>
      </>
    );
  }
}

export default RegionContainer;