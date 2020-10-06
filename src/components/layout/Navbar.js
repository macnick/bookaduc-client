import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoggedOutLinks from './LoggedOutLinks';
import SingedInLinks from './SignedInLinks';

class Navbar extends Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Book-A-Duc
          </Link>
          {loggedIn ? <SingedInLinks /> : <LoggedOutLinks />}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.authStatus,
});

export default connect(mapStateToProps, null)(Navbar);
