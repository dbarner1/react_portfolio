import React from 'react';
import '../stylesheets/index.css';
const phoneImage = require('../images/phone.png');
const mailImage = require('../images/mail.png');
const linkedinImage = require('../images/linkedin.png');

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div className={ this.props.display } id="contact" className="contact">
        <div className='contactWrapper'>
          <div>
            <a href='tel:+7814679961'><img className='phoneImage' src={ phoneImage } /></a>
          </div>
          <div>
            <a href='mailto:dbarner@gmail.com'><img className='mailImage' src={ mailImage } /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/dbarner/'><img className='linkedinImage' src={ linkedinImage } /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
