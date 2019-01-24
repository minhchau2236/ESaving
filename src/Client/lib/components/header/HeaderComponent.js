import React from 'react';
import {
  Link
} from 'react-router-dom';

const Header = (onSignOut) => (
  <header className="header">
    <nav className="navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="nav-item" ><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to='/categories'>category list</Link></li>
        <li className="nav-item"><Link to='/category'>manage category</Link></li>
        <li className="nav-item"><Link to='/outcomeItems'>outcome item list</Link></li>
        <li className="nav-item"><Link to='/outcomeItem'>manage outcome item</Link></li>
        <li className="nav-item"><Link to='/outcomes'>outcome list</Link></li>
        <li className="nav-item"><Link to='/outcome'>manage outcome</Link></li>
        <li className="nav-item"><Link to='/login'>Log in</Link></li>
      </ul>
      {/* <div className="form-inline my-2 my-lg-0">
        <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Login</Link>        
      </div> */}
    </nav>

  </header>
);

export default Header;