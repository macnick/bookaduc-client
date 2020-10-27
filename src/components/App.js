/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { logged } from '../actions/loginActions';
import { useDispatch } from 'react-redux';

import Navbar from './layout/Navbar';
import BikeList from '../containers/BikeList';
import BikeDetails from './layout/BikeDetails';
import CreateBooking from '../containers/CreateBooking';
import EditBooking from './layout/EditBooking';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import UserPage from '../containers/UserPage';

const App = () => {
  const dispatch = useDispatch();
  let loggedIn = useSelector((store) => store.auth.authStatus);

  if (loggedIn) {
    let user = localStorage.getItem('user');
    dispatch(logged(user));
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          {loggedIn ? (
            <>
              <Route exact path="/" component={BikeList} />
              <Route path="/bikes/:id" component={BikeDetails} />
              <Route exact path="/bikes/" component={BikeList} />
              <Route path="/user" component={UserPage} />
              <Route path="/book" component={CreateBooking} />
              <Route path="/update/:id" component={EditBooking} />
              <Redirect to="/" />
            </>
          ) : (
            <>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Redirect to="/" />
            </>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
