import React from "react";
import {Route,Switch, BrowserRouter, Redirect} from "react-router-dom";
import Login from "./components/Login";
import Welcomescreen from "./components/Welcomescreen/index";
import Product from './components/Product/index';
import Registeruser from './components/Registeruser/index'
import SelectCountry from "./components/SelectCountry";
import VerificationCode from "./components/VerificationCode";


const App = () => 
  <BrowserRouter>
<<<<<<< HEAD
      <Route path='/' exact component={Welcomescreen} />
      <Route path='/product' component = {Product} />
      <Route path="/user" component={Registeruser} />
      <Route  path="/verificationcode" component={VerificationCode} />
      <Route exact path="/login" component={Login} />
      <Route  path="/selectcountry" component={SelectCountry} />
=======
    <Switch>
      <Route path='/' exact component={Welcomescreen} />
      <Route path='/product' component = {Product} />
      <Route path="/user" component={Registeruser} />
      <Route  path="/VerificationCode" component={VerificationCode} />
      <Route exact path="/Login" component={Login} />
      <Route  path="/SelectCountry" component={SelectCountry} />
      <Redirect to="/" />
    </Switch>
>>>>>>> 3f0533bafb2e3f4167418aaadcd3bfc9bbf6aaf7
  </BrowserRouter>

export default App;
