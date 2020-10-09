import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/loginActions';

const SingedInLinks = ({ name }) => (
  <>
    <li>
      <NavLink to="/user" className="sidenav-close">
        <i className="material-icons">person</i>
        {name}
      </NavLink>
    </li>
    <li>
      <NavLink to="/bikes" className="sidenav-close">
        <i className="material-icons">motorcycle</i>
        Bikes
      </NavLink>
    </li>
    <li className="sidenav-close">
      <a href="/" onClick={logout()}>
        <i className="material-icons">logout</i>
        Log Out
      </a>
    </li>
  </>
);

export default SingedInLinks;
