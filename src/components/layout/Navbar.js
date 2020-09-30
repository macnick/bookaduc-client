import React from 'react';
import { Link } from 'react-router-dom';
import LoggedOutLinks from './LoggedOutLinks';
import SingedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Book-A-Duc
        </Link>
        <SingedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
