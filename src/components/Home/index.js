import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import sboard from './../../images/sboard.jpeg';
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
        <a className="card-social" href="https://www.instagram.com/aerosmith/"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
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
        <a className="card-social" href="https://www.instagram.com/aerosmith/"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
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
        <a className="card-social" href="https://www.instagram.com/birdymusic/"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
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
        <a className="card-social" href="https://www.instagram.com/dashboardconfessional"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
      </div>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={bon} />
    <Card.Body>
      <Card.Title>Bon Iver</Card.Title>
      <Card.Text>
        Bon Iver collaberates with Taylor Swift again.  The new track recorded in London Echo will debute
        on Taylors next release.  Excited to collaberate again since the prior single got positive reviews.

      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="https://www.instagram.com/boniver/"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={zeros} />
    <Card.Body>
      <Card.Title>Edward Sharpe & The Magnetic Zeros</Card.Title>
      <Card.Text>
        Ready to get back on the road since the reopening of the music scene,  Edward Sharpe & The
        Magnetic Zeros are getting tour ready for the upcoming festivals.
      </Card.Text>
      <div className="card-icons">
        <a className="card-social" href="https://www.instagram.com/esmzeros/"target="blank"><i class="fab fa-instagram"></i></a>
        <a className="card-social" href="https://twitter.com/?lang=en"target="_blank"><i class="fab fa-twitter"></i></a>
        <a className="card-social" href="https://www.spotify.com/us/"target="_blank"><i class="fab fa-spotify"></i></a>
      </div>
    </Card.Body>

  </Card>
</CardGroup>
<div className="space">
</div>



      </div>


    );
  }
}
export default Home;
