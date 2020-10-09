import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedOutLinks from './LoggedOutLinks';
import SingedInLinks from './SignedInLinks';

class Navbar extends Component {
  render() {
    const { loggedIn, name } = this.props;

    return (
      <div className="container section">
        <ul id="menu-side" className="sidenav right">
          {loggedIn ? <SingedInLinks name={name} /> : <LoggedOutLinks />}
        </ul>
        <div
          type="button"
          href="#"
          className="sidenav-trigger"
          data-target="menu-side"
        >
          <i className="material-icons">menu</i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.authStatus,
  name: state.book.name,
});

export default connect(mapStateToProps, null)(Navbar);
