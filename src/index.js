import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cta from './components/cta.js'
import Portfolio from './components/portfolio.js'
import NavButton from './components/NavButton.js'

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      ctaDisplay: 'displayYes',
      portfolioDisplay: 'displayNo'
    };
  }


  handleClick() {
    var Portfoliovalue
    var CTAvalue

    if(this.state.portfolioDisplay === 'displayYes') {
      Portfoliovalue = 'displayNo'
    } else {
      Portfoliovalue = 'displayYes'
    }

    if(this.state.ctaDisplay === 'displayYes') {
      CTAvalue = 'displayNo'
    } else {
      CTAvalue = 'displayYes'
    }

    this.setState({
      portfolioDisplay: Portfoliovalue,
      ctaDisplay: CTAvalue
    })
  }

  render() {
    return (
      <div>
          <header>
            <nav>
              <ul>
                <NavButton handleClick= { this.handleClick } name='Home' />
                <NavButton handleClick= { this.handleClick } name='Portfolio' />
                <NavButton  name='GitHub' />
                <NavButton  name='Resume' />
                <NavButton  name='jsFiddles' />
              </ul>
              <img id="daveCartoon" alt="A cartoon of Dave" src={require("./images/man-me.svg")} />
            </nav>
          </header>
          <Cta display={ this.state.ctaDisplay }  />
          <Portfolio display={ this.state.portfolioDisplay }  />
      </div>
    )
  }
}





// ========================================
  ReactDOM.render(<App />, document.getElementById("root"));
