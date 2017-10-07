import { Link } from 'react-router-dom'
import React from 'react';
const phoneImage = require('../images/phone.png');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      display_phone: 'displayYes'
    };
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className={ this.state.display_phone }><Link to='/'>Home</Link></li>
            <li className={ this.state.display_phone }><Link to='/portfolio'>Portfolio</Link></li>
            <li className={ this.state.display_phone }><Link to='/contact'>Connect</Link></li>
            <a className='phoneImage' href='tel:+7814679961'><img className='phoneImage' src={ phoneImage } /></a>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;


// function togglePhoneImage() {
//   var currentPage = this.props.location.pathname;
//
//   if(currentPage === '/contact') {
//     this.state.display_phone = 'displayNo';
//   }
//   else {
//     this.state.display_phone = 'displayYes';
//   }
// }
