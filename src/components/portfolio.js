import React from 'react';
import '../stylesheets/index.css';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const heartImage = require('../images/heart.svg');

    return (
      <div className={ this.props.display } id="portfolio" class="portfolio">
         <h3 className="section-title">I <img alt="love" className="heartImage" src={ heartImage } /> to create.  Here are some samples.</h3>
      	   <div className="portfolio-pieces">
      	 		<div className="portfolio-piece bslc">
      	 			<div className="portfolio-title">
      	 				<h4>Bay State Learning Center</h4>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<h6>React/Rails: A Beautiful Combo
      	 				<br/>Front End: React.  <br/>Backend admin panel in Rails.</h6>
      	 				<a target="_blank" href="products/bslc/index.html"><button>Visit Site</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece youtube">
      	 			<div class="portfolio-title">
      	 				<h4>Fun with APIS: YouTube</h4>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<h6>An interactive video prototype built leveraging the YouTube API.  Built entirely from scratch, with one bit of code from Youtube to call the player.</h6>
      	 				<a target="_blank" rel="noopener noreferrer" href="https:github.com/dbarner1/YouTube-API-Interactive-Video"><button class="active">View Github</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece stripe">
      	 			<div className="portfolio-title">
      	 				<h4>Fun with APIs: Stripe</h4>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<h6>Stripe is one of the best ways to receive a payment from a consumer.  This example shows how to hook up Stripe with a few lines of code.</h6>
      	 				<a target="_blank" rel="noopener noreferrer" href="https:github.com/dbarner1/Stripe-API-Prototype"><button class="active">View Github</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece blackjack">
      	 			<div className="portfolio-title">
      	 				<h4>Vanilla Js Blackjack</h4>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<h6>I built this game in vanilla JS to teach the basics of Javascript for the students at Bay State Learning Center.  While you may lose, there are never losers.  May the odds be ever in your favor.</h6>
      	 				<a target="_blank" href="products/blackjack/blackjack.html"><button class="active">Play</button></a>
      	 			</div>
      	 		</div>
          </div>
     </div>
    )
  }
}

export default Portfolio;
