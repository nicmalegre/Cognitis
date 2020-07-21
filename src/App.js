import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";


const App = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Login} />
 
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>

export default App;

