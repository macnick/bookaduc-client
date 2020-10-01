import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './layout/Home';
import BikeList from '../containers/BikeList';
import BikeDetails from './layout/BikeDetails';
import CreateBooking from '../containers/CreateBooking';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import UserPage from '../containers/UserPage';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/bikes/:id" component={BikeDetails} />
        <Route path="/bikes/" component={BikeList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={UserPage} />
        <Route path="/book" component={CreateBooking} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
