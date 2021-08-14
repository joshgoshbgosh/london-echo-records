import React from 'react';
import { NavLink} from 'react-router-dom';
import headermic from './../../images/headermic.png';
import './index.css';

function Header(props){
  
  return(
    <header>
    <div className="background-social">
      <div className="icon-one">
          <a className="social eight" href="https://www.facebook.com/Str8Jacket-Designs-103512365372197"target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
        <div className="icon-two">
          <a className="social one" href="https://www.instagram.com/foofighters/"target="_blank"><i class="fab fa-instagram"></i></a>
          <a className="social two" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        <div className="icon-three">
          <a className="social three" href="https://vimeo.com/403949616"target="_blank"><i class="fab fa-vimeo-v"></i></a>
          <a className="social four" href="https://www.apple.com/itunes/"target="_blank"><i class="fab fa-itunes-note"></i></a>
        </div>
        <div className="icon-four">
          <a className="social five" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
          <a className="social six" href="https://play.google.com/store?hl=en_US&gl=US" target="_blank"><i class="fab fa-google-play"></i></a>
        </div>
        <div className="icon-five">
          <a className="social seven" href="https://us.napster.com/"target="_blank"><i class="fab fa-napster"></i></a>
      </div>
      </div>
      <nav className="menu">

        <ul  id="nav_bar"className="list-wrap">
          <li><a className="list"href="#">HOME</a></li>
          <li><a className="list"href="#">ABOUT</a></li>
          <li><a className="list"href="#">STUDIO</a></li>
          <li><a className="list"href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
