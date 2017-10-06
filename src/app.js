import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.js'
import Main from './components/main.js'

class App extends React.Component {
  constructor() {
    super();
    this.handleClickPortfolio = this.handleClickPortfolio.bind(this)
    this.handleClickHome = this.handleClickHome.bind(this)
    this.state = {
      ctaDisplay: 'displayYes',
      portfolioDisplay: 'displayNo'
    };
  }

  handleClickPortfolio() {
    this.setState({
      portfolioDisplay: 'displayYes',
      ctaDisplay: 'displayNo'
    })
  }

  handleClickHome() {
    this.setState({
      portfolioDisplay: 'displayNo',
      ctaDisplay: 'displayYes'
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
