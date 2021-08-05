import React from 'react';
import { NavLink} from 'react-router-dom';

import './index.css';

function Header(props){
  return(
    <header>
      <div className="social-media">
        <a className="social" href="#"><i class="fab fa-facebook-f"></i></a>
        <a className="social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="social" href="#"><i class="fab fa-youtube"></i></a>
        <a className="social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="social" href="#"><i class="fab fa-vimeo-v"></i></a>
      </div>
    </header>
  );
}
export default Header;
