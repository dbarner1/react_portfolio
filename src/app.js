import React from 'react';
import './stylesheets/index.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Main from './components/main.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main className='main' />
        <Footer />
      </div>
    )
  }
}

export default App;
