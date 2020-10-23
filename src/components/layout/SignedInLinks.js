import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/loginActions';

const SingedInLinks = ({ name }) => (
  <>
    <li>
      <NavLink to="" className="sidenav-close">
        <i className="material-icons">person</i>
        {name}
      </NavLink>
    </li>
    <li>
      <NavLink to="/user" className="sidenav-close">
        <i className="material-icons">date_range</i>
        Appointments
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
/* eslint-disable react/require-default-props */
SingedInLinks.propTypes = {
  name: PropTypes.string,
};

export default SingedInLinks;
