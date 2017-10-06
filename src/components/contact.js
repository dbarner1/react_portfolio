import React from 'react';
import '../index.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div className={ this.props.display } id="contact" class="contact">
        <div class='wrapper'>
          <div>Call
          </div>
          <div>Email
          </div>
          <div>LinkedIn
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
