import React from "react";
import {Route,Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import Welcomescreen from "./components/Welcomescreen/index";
import Product from './components/Product/index';
import Registeruser from './components/Registeruser/index'


const App = () => 
      <Router>
            <Route path='/' exact component={Welcomescreen} />
            <Route path='/product' component = {Product} />
            <Route path="/user" component={Registeruser} />
            <Switch>
                  <Route exact path="/Login" component={Login} />
            </Switch>
        </Router>

export default App;

