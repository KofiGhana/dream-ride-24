// src/components/App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import VehicleList from './VehicleList';
import VehicleDetails from './VehicleDetails';
import Booking from './Booking';
import Auth from './Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/vehicles/:id" component={VehicleDetails} />
        <Route path="/booking" component={Booking} />
        <Route path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
