import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.js'
import Cta from './components/cta.js'
import Portfolio from './components/portfolio.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cta />
        <Portfolio className="hideFlag" />
      </div>
    )
  }
}


// ========================================
  ReactDOM.render(<App />, document.getElementById("root"));
