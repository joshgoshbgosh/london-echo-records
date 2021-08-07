import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import beatlesSlide from './../../images/beatlesSlide.jpg';
import coldplaySlide from './../../images/coldplaySlide.jpg';
import lumineersSlide from './../../images/lumineersSlide.jpg';
import utwoSlide from './../../images/utwoSlide.jpg';
import kacy from './../../images/kacy.jpeg';
import './index.css';

class Home extends Component {
  render() {

    return (
      <div>
      <div className="space">
      </div>
      <Carousel fade>
<Carousel.Item interval={4000}>
  <img
    className="d-block w-100"
    src={coldplaySlide}
    alt="First slide"
  />

</Carousel.Item>
<Carousel.Item interval={4000}>
  <img
    className="d-block w-100"
    src={beatlesSlide}
    alt="Second slide"
  />


</Carousel.Item>
<Carousel.Item interval={4000}>
  <img
    className="d-block w-100"
    src={lumineersSlide}
    alt="Third slide"
  />


</Carousel.Item>
<Carousel.Item interval={4000}>
  <img
    className="d-block w-100"
    src={utwoSlide}
    alt="Fourth slide"
  />


</Carousel.Item>
</Carousel>

      </div>


    );
  }
}
export default Home;
