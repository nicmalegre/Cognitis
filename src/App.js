import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Welcomescreen from "./components/Welcomescreen/index";
import Product from "./components/Product/index";
import Registeruser from "./components/Registeruser/index";
import SelectCountry from "./components/SelectCountry";
import VerificationCode from "./components/VerificationCode";
import LoginUsers from "./components/LoginUsers/Login";

import axios from 'axios'
import { IntlProvider } from "react-intl";
import { messages } from './messages';


const App = () => {
  const [user, setDatos] = useState({
    product: "",
    email: "",
    password: "",
    country: "",
  });

  const [ language, setLanguage ] = useState('en')

  const [code, setCode] = useState({
    codeVerification: null,
    codeTime: null,
  });

  const handleChange = (dato) => {
    setDatos({
      ...user,
      [dato.name]: dato.value,
    });
  };
  const handleChangeLanguage = (lang) => {
    setLanguage(lang)
  }

  const handleChangeEmail = (dato) => {
    setDatos({
      ...user,
      [dato.email]: dato.value,
    });
  };

  const handleChangeCodeandTime = (code, time) => {
    setCode({
      codeVerification: code,
      codeTime: time,
    });
  };

  const handleChangeProduct = (dato) => {
    setDatos({
      ...user,
      product: dato,
    });
  };
  const handleChangePassword = (dato) => {
    setDatos({
      ...user,
      password: dato,
    });
  };
  const handleChangeCountry = (dato) => {
    setDatos({
      ...user,
      country: dato,
    });
  };
  const postData = () =>{
        console.log(user);
        axios.post('http://localhost:3000/api/users/saveuser', {
          product: user.product,
          mail: user.email,
          password: user.password,
          country: user.country
        })
        .then( res => ('Se cargo en la base de datos tu usuario'))
        .catch(err => console.log(err));
        
      };

 return(
  <IntlProvider locale={ language } messages={ messages[language]}>
    <BrowserRouter>
      <Route path='/' exact>
        <Welcomescreen changeLanguage={handleChangeLanguage}/>
      </Route>
      <Route path="/product"> 
        <Product changeProduct={handleChangeProduct}/>   
      </Route>
      <Route path="/user"> 
        <Registeruser changeEmail={handleChange} changeCodeTime={handleChangeCodeandTime}/>   
      </Route>
      <Route path="/verificationcode">
        <VerificationCode codeVerification={code} />
      </Route>
      <Route exact path="/login">
        <Login changePassword={handleChangePassword } />
      </Route>
      <Route path="/selectcountry">
        <SelectCountry handleChangeCountry={handleChangeCountry} postData={postData}/>
      </Route>
    </BrowserRouter>
  </IntlProvider>
 )
}

export default App;
