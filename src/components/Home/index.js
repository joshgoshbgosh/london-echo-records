import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
import history from './../../images/history.jpg';
import bon from './../../images/bon.jpg';
import dashb from './../../images/dashb.jpg';
import zeros from './../../images/zeros.jpg';
import afrank from './../../images/afrank.jpg';
import pink from './../../images/pink.jpg';
import shirley from './../../images/shirley.jpg';
import jones from './../../images/jones.jpg';
import lord from './../../images/lord.jpg';
import radio from './../../images/radio.jpg';
import studio from './../../images/studio.jpg';
import studiotwo from './../../images/studiotwo.jpg';
import studiothree from './../../images/studiothree.jpg';
import studiofour from './../../images/studiofour.jpg';
import studiofive from './../../images/studiofive.jpg';
import studiosix from './../../images/studiosix.jpg';
import studiobox from './../../images/studiobox.jpg';
import mic from './../../images/mic.jpg';
import marshall from './../../images/marshall.jpg';
import fender from './../../images/fender.jpg';
import standup from './../../images/standup.jpg';
import bass from './../../images/bass.jpg';
import studioboxboard from './../../images/studioboxboard.jpg';
import studioboxdrum from './../../images/studioboxdrum.jpg';
import lespaul from './../../images/lespaul.jpg';
import acoustic from './../../images/acoustic.jpg';
import studiomusicians from './../../images/studiomusicians.jpg';
import writers from './../../images/writers.jpg';
import './index.css';

class Home extends Component {
  render() {

    return (
      <div>
      <div className="dots">
      <a className="dothome sidenav d-none d-md-block"href="#section1"><i class="fas fa-home"></i></a>
      <a className="dotabout sidenav d-none d-md-block"href="#section2"><i class="far fa-address-card"></i></a>
      <a className="dotstudio sidenav d-none d-md-block"href="#section3"><i class="fas fa-guitar"></i></a>
      <a className="dotcontact sidenav d-none d-md-block"href="#section4"><i class="fas fa-envelope"></i></a>
      <a className="dothome sidenavmobile d-block d-sm-none"href="#section1"><i class="fas fa-home"></i></a>
      <a className="dotabout sidenavmobile d-block d-sm-none"href="#section2"><i class="far fa-address-card"></i></a>
      <a className="dotstudio sidenavmobile d-block d-sm-none"href="#section3"><i class="fas fa-guitar"></i></a>
      <a className="dotcontact sidenavmobile d-block d-sm-none"href="#section4"><i class="fas fa-envelope"></i></a>
      </div>
<div id="section1">
      <Carousel fade className="cara d-none d-md-block">
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
<Carousel fade className="caramobile d-block d-sm-none">
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
</div>
<div className="space">
</div>
<div id="section2">
<div className="about">
  <div className="history">
    <Image src={history} fluid/>
  </div>
 <p className="about-p">
 - <span className="special">London Echo</span> is the most famous recording studio in the world and a global music icon.
 Originally a nine-bedroom house built in 1829, it was purchased by the Gramophone Company
 in 1928 who went on to build the world’s first purpose-built recording studio. The St John’s
 Wood address was chosen for its large garden and ideal location – close enough to the
 performance spaces of the time, but away from the noise and vibrations of the traffic and trains.
The grand opening ceremony on 12 November 1931 included a performance of Land of Hope & Glory in
Studio One conducted by Sir Edward Elgar. The Gramophone Company merged with Columbia Graphophone
Company to form Electric and Musical Industries (EMI) in 1931, and the studios later became known
as EMI Recording Studios. Since EMI engineer Alan Blumlein patented stereo at <span className="special">London Echo</span> in 1931,
the studios have been famed for innovation in recording technology, largely developed by the Record
 Engineering Development Department (REDD) who were responding to the needs of the artists and
 producers using the rooms. Their innovations include the REDD and TG desks, as well as studio
 techniques such as Artificial Double Tracking (ADT), created by studio technician Ken Townsend,
 who went on to become the studios’ MD, as well as Vice President of EMI Studios Group.
While initially a venue for classical recordings, the studios’ repertoire soon embraced jazz
and big bands, too, as well as the first British rock & roll records of the 1950s, including
Sir Cliff Richard’s first single Move It.  <span className="special">London Echo</span> is of course synonymous with the legendary
work of The Beatles, who worked with EMI producer Sir George Martin and recorded 190 of their 210
songs at the studios. But <span className="special">London Echo's</span> unparalleled history spans the wild experiments of Pink Floyd
to iconic recordings from Shirley Bassey, Aretha Franklin, The Hollies and many more.
 </p>
 <CardGroup>
   <Card>
     <Card.Img variant="top" src={afrank} />


   </Card>
   <Card>
     <Card.Img variant="top" src={pink} />

   </Card>
   <Card>
     <Card.Img variant="top" src={shirley} />


   </Card>
   </CardGroup>
   <p className="about-p">
   Since those exceptional years, artists from Kate Bush, Radiohead, Oasis, Kanye West, Amy Winehouse,
   Kylie and Muse to Sam Smith, Florence + The Machine, Ed Sheeran, Frank Ocean, Lady Gaga and Adele
    have made <span className="special">London Echo</span> their creative home, producing countless landmark recordings.  As the demand
    for classical recording spaces declined, Ken Townsend found a new role for the
big rooms – movie scores, with the first major film score being Raiders of The Lost Ark in
1981. Since then, <span className="special">London Echo</span> has developed into one of the world’s premier destinations for
movie scoring. Blockbuster films such as The Lord of The Rings Trilogy, Skyfall, the Harry
Potter series and the Oscar-winning Gravity feature scores recorded here, while recent
projects include Black Panther, Solo: A Star Wars Story and the multi award winning
The Shape of Water.  The studios house a number of state-of-the-art mastering suites, with engineering
expertise spanning direct to vinyl and half-speed mastering. Recent projects mastered
or re-mastered by <span className="special">London Echo's</span> award-winning engineers include music from The Beatles,
Sam Smith, Sade, Abba, Krept & Konan, Graham Coxon, Novelist, Johnny Marr, Roxy Music
and The Rolling Stones.  In Spring 2017, in the biggest transformation since first opening,
two new contemporary studios were launched - The Gatehouse and The Front Room - making the magic
of <span className="special">London Echo</span> accessible to a whole new generation of recording artist. They have already hosted
artists from James Bay, Jess Glynne, George Ezra and Skrillex to legends like Nile Rodgers plus
 grime MCs Novelist and Jammer BBK.
   </p>
   <CardGroup>
     <Card>
       <Card.Img variant="top" src={jones} />


     </Card>
     <Card>
       <Card.Img variant="top" src={radio} />

     </Card>
     <Card>
       <Card.Img variant="top" src={lord} />


     </Card>
     </CardGroup>
</div>
<p className="about-p">
Symbolic of this new era, in March 2018, <span className="special">London Echo</span> appointed multiple Grammy
Award winning producer, guitarist, arranger and composer Nile Rodgers (of The
  CHIC Organization) to the specially created role of Chief Creative Advisor.
   The role sees Nile establish <span className="special">London Echo</span> as his primary creative base in
   the UK and serve as the studios’ global ambassador within the artist
   and creative community.  Enhancing the services to film clients, a new
   Dolby Atmos Premier accredited Mix Stage also opened in 2017, making
    <span className="special">London Echo</span> the only facility in the UK to offer both scoring and film
    sound post production.  The pioneering spirit of the REDD department’s
     innovations from the 1950s to 1970s continues with <span className="special">London Echo</span> Red –
     Europe’s first music-focused technology incubator, which supports the
     endeavours of entrepreneurs, researchers and developers. The programme
     is now expanding with in-house R&D activities within the music creation space.
<span className="special">London Echo</span> was declared an English Heritage Grade II listed site in 2010, but
the focus continues to be on the future and helping to spread the expertise and
knowledge present within the building to a new generation of musicians, engineers
and producers around the world.
</p>
</div>
<div id="section3">
<div className="studio">
 <div className="studio-heading">
  <p className="studio-name">S<span className="special">T</span>UDIO</p>
  <i class="far fa-circle circleone"></i>
  <i class="far fa-circle circletwo"></i>
  <i class="far fa-circle circlethree"></i>
  <i class="far fa-circle circlefour"></i>
 </div>
<Carousel fade>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studio}
  />

</Carousel.Item>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studiotwo}
  />


</Carousel.Item>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studiothree}
  />


</Carousel.Item>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studiofour}
  />


</Carousel.Item>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studiofive}
  />


</Carousel.Item>
<Carousel.Item interval={3000}>
  <img
    className="d-block w-100"
    src={studiosix}
  />


</Carousel.Item>
</Carousel>
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={studiobox} />
    <Card.Body>
      <Card.Title>Grand Piano</Card.Title>


    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={mic} />
    <Card.Body>
      <Card.Title>Neumann U 87</Card.Title>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={marshall} />
    <Card.Body>
      <Card.Title>JCM 800</Card.Title>

    </Card.Body>

  </Card>
</CardGroup>
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={fender} />
    <Card.Body>
      <Card.Title>Fender</Card.Title>


    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={standup} />
    <Card.Body>
      <Card.Title>Stand Up</Card.Title>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={bass} />
    <Card.Body>
      <Card.Title>Fender Jazz Bass</Card.Title>

    </Card.Body>

  </Card>
</CardGroup>
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={studioboxdrum} />
    <Card.Body>
      <Card.Title>DW Performance Series</Card.Title>


    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={studioboxboard} />
    <Card.Body>
      <Card.Title>Rupert Neve</Card.Title>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={lespaul} />
    <Card.Body>
      <Card.Title>Les Paul</Card.Title>

    </Card.Body>

  </Card>
</CardGroup>
<div className="space">
</div>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={studiomusicians} />
    <Card.Body>
      <Card.Title>Studio Musicians</Card.Title>


    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={acoustic} />
    <Card.Body>
      <Card.Title>Gibson J45</Card.Title>

    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={writers} />
    <Card.Body>
      <Card.Title>Mastering</Card.Title>

    </Card.Body>

  </Card>
</CardGroup>
</div>
</div>
<div id="section4">
<div className="contact">
 <div className="getInTouch">
  <h4 className="intouch">C<span className="special">o</span>nt<span className="special">a</span>ct</h4>
 </div>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

    <Form.Control type="email" placeholder="email address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

    <Form.Control as="textarea" rows={3} placeholder="message"/>
  </Form.Group>
</Form>
<div className="buttonDiv">

<Button variant="danger"onClick={() => window.location.reload(false)}>Send</Button>

</div>
</div>
</div>

      </div>


    );
  }
}
export default Home;
