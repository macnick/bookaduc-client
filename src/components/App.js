/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './layout/Navbar';
import BikeList from '../containers/BikeList';
import BikeDetails from './layout/BikeDetails';
import CreateBooking from '../containers/CreateBooking';
import EditBooking from './layout/EditBooking';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import UserPage from '../containers/UserPage';

const App = ({ loggedIn }) => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={loggedIn ? BikeList : SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/bikes/" component={loggedIn ? BikeList : Login} />
        <Route path="/bikes/:id" component={loggedIn ? BikeDetails : Login} />
        <Route path="/user" component={loggedIn ? UserPage : Login} />
        <Route path="/book" component={loggedIn ? CreateBooking : Login} />
        <Route
          path="/update/:id"
          component={loggedIn ? EditBooking : Login}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  loggedIn: state.auth.authStatus,
});

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
