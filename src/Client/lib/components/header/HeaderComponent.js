import React from 'react';
import {
  Link
} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>category list</Link></li>
        <li><Link to='/category'>manage category</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;