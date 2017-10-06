import { Link } from 'react-router-dom'
import React from 'react';
const phoneImage = require('../images/phone.png');

const Header = () => (


  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contact'>Connect</Link></li>
      </ul>
    </nav>
    <a href='tel:+7814679961'><img className='phoneImage' src={ phoneImage } /></a>
  </header>
)

export default Header;
