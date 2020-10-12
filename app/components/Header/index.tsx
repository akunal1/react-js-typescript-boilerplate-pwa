import * as React from 'react';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/features">Features</HeaderLink>
        <Link to="/404">404</Link>
      </NavBar>
    </div>
  );
}

export default Header;
