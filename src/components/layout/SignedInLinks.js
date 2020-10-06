import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/loginActions';

// const logOut = () => {
//   dispatch(logout());
// };

const SingedInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/bikes">Bikes</NavLink>
    </li>
    <li>
      <a href="/" onClick={logout()}>
        Log Out
      </a>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        NH
      </NavLink>
    </li>
  </ul>
);

export default SingedInLinks;
