import React from 'react';
import '../stylesheets/index.css';
import Button from './Button.js';
import { Link } from 'react-router-dom';

class Cta extends React.Component {
  render() {
    return (
      <div className={ this.props.display } id="CtaWelcome">
        <div id="CtaText">
          <h1>Dave Barner</h1>
  			</div>
        <div id="CtaCallToAction">
          <div id="CtasubText"><p>React developer <br/>Rails professional experience</p>
          </div>
          <h2>React<br/> Javascript<br/> CSS/SASS/Bootstrap<br/>Ruby/Rails<br/>Python (coming soon)</h2>
        </div>
        <Link className='MainCtaButton' to='/portfolio'><Button text="Explore Portfolio" /></Link>
      </div>
    )
  }
}

export default Cta;
