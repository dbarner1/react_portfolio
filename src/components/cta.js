import React from 'react';
import '../index.css';
import NavButton from './NavButton.js';

class Cta extends React.Component {
  render() {
    return (
      <div className={ this.props.display } id="CtaWelcome">
        <div id="CtaText">
          <h1 id="CtaTextTop">Because, it's more than just 'UI'</h1>
  			</div>
        <div id="CtaCallToAction">
          <h1 id="CtasubText"><p>A React developer <br/> with Rails experience.</p></h1>
          <h3>A React Developer who specializes in Javascript, React, SASS, CSS and Bootstrap and with developing skills of Fullstack ME(R)N solutions: MongoDB, Express, Mongoose, Webpack and node.js  </h3>
          <NavButton text="Explore Portfolio" />
        </div>
      </div>
    )
  }
}

export default Cta;
