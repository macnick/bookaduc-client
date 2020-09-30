import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Nav';
import TeamList from '../containers/TeamList';
import BikeList from '../containers/BikeList';
import BikeDetails from './layout/BikeDetails';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/bikes/:id" component={BikeDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/teams" component={TeamList} />
        <Route path="/" component={BikeList} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
