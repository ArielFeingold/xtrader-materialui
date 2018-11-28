import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

import bg from './assets/images/5150.jpg';

import indexRoutes from "./routes/routeIndex";

const App = () => {


  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
    </React.Fragment>
  );
}

export default App;
