import React from 'react';
import '../index.css';

class Cta extends React.Component {
  render() {
    return (
      <div className={ this.props.display } id="CtaWelcome">
        <div id="CtaText">
          <h1 id="CtaTextTop">Front End Development</h1>
  			  <h1><p>with backend experience.</p></h1>
  			  <h3>A React Developer who specializes in Javascript, React, SASS, CSS and Bootstrap and with developing skills of Fullstack ME(R)N solutions: MongoDB, Express, Mongoose, Webpack and node.js  </h3>
        </div>
      </div>
    )
  }
}

export default Cta;
