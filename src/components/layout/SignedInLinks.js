import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/loginActions';

const SingedInLinks = ({ name }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout()(dispatch);
  };

  return (
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
      <li>
        <NavLink to="/logout" className="sidenav-close" onClick={handleLogout}>
          <i className="material-icons">logout</i>
          Log Out
        </NavLink>
      </li>
    </>
  );
};
/* eslint-disable react/require-default-props */
SingedInLinks.propTypes = {
  name: PropTypes.string,
};

export default SingedInLinks;
