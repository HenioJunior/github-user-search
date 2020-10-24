import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import After from './pages/After/Form';
import Before from './pages/Before';
import Home from './pages/Home';
import Form from './pages/After/Form';

const Routes = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
    <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/before">
      <Before />
      </Route>
      <Route path="/after">
          <Form />
      </Route>
    </Switch>
    
  </BrowserRouter>

);

export default Routes;