/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import { checkAuth } from '../actions/loginActions';

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
  useEffect(() => {
    dispatch(checkAuth());
    // eslint-disable-next-line
  }, []);

  const loggedIn = useSelector(store => store.auth.authStatus);

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
