import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import strdesign from './../../images/strdesign.png';

import './index.css';

class Footer extends Component {

  render() {
    return(

      <div>

      <footer>
        <div className="footerpic">
          <a href="https://www.linkedin.com/in/josh-lanier-155481200/"target="_blank"><img className="strd"src={strdesign}/></a>
        </div>
      </footer>

      </div>
    );
  }

}
export default Footer;
