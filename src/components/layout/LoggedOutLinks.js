import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => (
  <>
    <li>
      <NavLink to="/signup" className="sidenav-close">
        <i className="material-icons">description</i>
        Sign up
      </NavLink>
    </li>
    <li>
      <NavLink to="/login" className="sidenav-close">
        <i className="material-icons">login</i>
        Log In
      </NavLink>
    </li>
  </>
);

export default LoggedOutLinks;
