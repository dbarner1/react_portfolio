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
      <div className={ this.props.display } id="portfolio" className="portfolio">
         <h3 className="section-title">I <img alt="love" className="heartImage" src={ heartImage } /> to create.  Here are some samples.</h3>
      	   <div className="portfolio-pieces">
      	 		<div className="portfolio-piece bslc">
      	 			<div className="portfolio-title">
      	 				<h2>React/Rails Marketplace</h2>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<h6>React/Rails: A Beautiful Combo
      	 				<br/>Front End: React.  <br/>Backend admin panel and microservices in Rails.</h6>
      	 				<a target="_blank" href="http://barner-marketplace.herokuapp.com"><button>Visit Site</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece youtube">
      	 			<div className="portfolio-title">
      	 				<h2>Fun with APIS: YouTube</h2>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<p>An interactive video prototype built leveraging the YouTube API.  Built entirely from scratch, with one bit of code from Youtube to call the player.</p>
      	 				<a target="_blank" rel="noopener noreferrer" href="https:github.com/dbarner1/YouTube-API-Interactive-Video"><button className="active">View Github</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece stripe">
      	 			<div className="portfolio-title">
      	 				<h2>Fun with APIs: Stripe</h2>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<p>Stripe is one of the best ways to receive a payment from a consumer.  This example shows how to hook up Stripe with a few lines of code.</p>
      	 				<a target="_blank" rel="noopener noreferrer" href="https:github.com/dbarner1/Stripe-API-Prototype"><button className="active">View Github</button></a>
      	 			</div>
      	 		</div>
      	 		<div className="portfolio-piece blackjack">
      	 			<div className="portfolio-title">
      	 				<h2>Vanilla Js Blackjack</h2>
      	 			</div>
      	 			<div className="portfolio-middle">
      	 			</div>
      	 			<div className="portfolio-description">
      	 				<p>I built this game in vanilla JS to teach the basics of Javascript for the students at Bay State Learning Center.  While you may lose, there are never losers.  May the odds be ever in your favor.</p>
      	 				<a target="_blank" href="products/blackjack/blackjack.html"><button className="active">Play</button></a>
      	 			</div>
      	 		</div>
          </div>
     </div>
    )
  }
}

export default Portfolio;
