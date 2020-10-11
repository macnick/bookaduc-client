import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoggedOutLinks from './LoggedOutLinks';
import SingedInLinks from './SignedInLinks';

const Navbar = ({ loggedIn, name }) => (
  <div className="container section">
    <ul id="menu-side" className="sidenav right">
      {loggedIn ? <SingedInLinks name={name} /> : <LoggedOutLinks />}
    </ul>
    <button
      type="button"
      href="#"
      className="sidenav-trigger"
      data-target="menu-side"
    >
      <i className="material-icons small">menu</i>
    </button>
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.auth.authStatus,
  name: state.book.name,
});
/* eslint-disable react/require-default-props */
Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default connect(mapStateToProps, null)(Navbar);
