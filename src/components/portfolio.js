import React from 'react';
import '../index.css';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {

    return (
      <div className={ this.props.display } id="portfolio">
        <p>This is the portfolio</p>
     </div>
    )
  }
}

export default Portfolio;
