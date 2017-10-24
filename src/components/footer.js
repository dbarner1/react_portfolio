import { Link } from 'react-router-dom'
import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <footer>
      <p>Barner Builds, SP</p>
      <p>dbarner@gmail.com</p>
      </footer>
    )
  }
}

export default Footer;
