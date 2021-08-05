import React from 'react';
import { NavLink} from 'react-router-dom';
import headermic from './../../images/headermic.png';
import './index.css';

function Header(props){
  return(
    <header>
      <div className="social-media">
        <a className="social" href="#"><i class="fab fa-facebook-f"></i></a>
        <a className="social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="social" href="#"><i class="fab fa-vimeo-v"></i></a>
      </div>
      <nav className="menu">

        <ul className="list-wrap">
          <li><a className="list"href="#">HOME</a></li>
          <li><a className="list"href="#">ABOUT</a></li>
          <li><a className="list"href="#">GEAR</a></li>
          <li><a className="list"href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
