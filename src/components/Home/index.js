import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import beatlesSlide from './../../images/beatlesSlide.jpg';
import coldplaySlide from './../../images/coldplaySlide.jpg';
import lumineersSlide from './../../images/lumineersSlide.jpg';
import utwoSlide from './../../images/utwoSlide.jpg';
import kacy from './../../images/kacy.jpeg';
import asmith from './../../images/asmith.jpg';
import max_martin from './../../images/max_martin.jpeg';
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
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={max_martin} />
    <Card.Body>
      <Card.Title>Max Martin</Card.Title>
      <Card.Text>
        London Echo is excited to add songwriter and producer Max Martin to the studio to
        work along side our up coming artist working on their forth coming projects.
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={asmith} />
    <Card.Body>
      <Card.Title>Aerosmith</Card.Title>
      <Card.Text>
        Aerosmith has spent a week in London Echo studio recording their new single
        due to be released in the fall.  Steven Tyler says it's different then anything they have
        released before.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

      </div>


    );
  }
}
export default Home;
