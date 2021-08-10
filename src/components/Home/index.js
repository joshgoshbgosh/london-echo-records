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
import birdy from './../../images/birdy.jpg';
import max_martin from './../../images/max_martin.jpeg';
import bon from './../../images/bon.jpg';
import dashb from './../../images/dashb.jpg';
import zeros from './../../images/zeros.jpg';
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
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>

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
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={birdy} />
    <Card.Body>
      <Card.Title>Birdy</Card.Title>
      <Card.Text>
        Check out the live session recorded at the London Echo studio by Birdy.  Performing
        songs from her album "Young Heart", giving her fans an intimate performance.
      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
</CardGroup>
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={dashb} />
    <Card.Body>
      <Card.Title>Dashboard Confessional</Card.Title>
      <Card.Text>
        Chris wrapping up his studio sessions for Dashboard Confessional.   The album is set to be released
         early next year.  The fans are excited to hear the music.
      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={bon} />
    <Card.Body>
      <Card.Title>Bon Iver</Card.Title>
      <Card.Text>
        Bon Iver still struggling to keep his head above water.  Bon says finding the middle ground with
        his fans is getting more difficult since the colaberation with Taylor Swift.   
      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={zeros} />
    <Card.Body>
      <Card.Title>Edward Sharpe & The Magnetic Zeros</Card.Title>
      <Card.Text>
        Check out the live session recorded at the London Echo studio by Birdy.  Performing
        songs from her album "Young Heart", giving her fans an intimate performance.
      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="#"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="#"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="#"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
</CardGroup>


      </div>


    );
  }
}
export default Home;
