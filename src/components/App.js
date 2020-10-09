import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './layout/Home';
import BikeList from '../containers/BikeList';
import BikeDetails from './layout/BikeDetails';
import CreateBooking from '../containers/CreateBooking';
import EditBooking from './layout/EditBooking';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import UserPage from '../containers/UserPage';

const App = ({ loggedIn }) => {
  console.log('logged:', loggedIn);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/bikes/" component={loggedIn ? BikeList : Login} />
          <Route path="/bikes/:id" component={loggedIn ? BikeDetails : Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={loggedIn ? UserPage : Login} />
          <Route path="/book" component={loggedIn ? CreateBooking : Login} />
          <Route
            path="/update/:id"
            component={loggedIn ? EditBooking : Login}
          />
          <Route path="/" component={loggedIn ? BikeList : Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.authStatus,
});

export default connect(mapStateToProps, null)(App);
