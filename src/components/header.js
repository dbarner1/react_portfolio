import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <img src="https://png.icons8.com/message/ios7/25" title="Message" width="25" height="25" />
      </ul>
    </nav>
  </header>
)

export default Header;
