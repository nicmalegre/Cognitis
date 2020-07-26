import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import SelectCountry from "./components/SelectCountry";
import VerificationCode from "./components/VerificationCode";

const App = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/Login" component={Login} />

      <Route  path="/VerificationCode" component={VerificationCode} />
      <Route  path="/SelectCountry" component={SelectCountry} />

 
      <Redirect to="/Login" />
    </Switch>
  </BrowserRouter>

export default App;

