import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";


const App = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/Login" component={Login} />


 
      <Redirect to="/Login" />
    </Switch>
  </BrowserRouter>

export default App;

