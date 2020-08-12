import React, { useState } from "react";
import { Route, BrowserRouter} from "react-router-dom";
import Login from "./views/WizardScreens/Login";
import Welcomescreen from "./views/WizardScreens/Welcomescreen/index";
import Product from "./views/WizardScreens/Product/index";
import Registeruser from "./views/WizardScreens/Registeruser/index";
import SelectCountry from "./views/WizardScreens/SelectCountry";
import VerificationCode from "./views/WizardScreens/VerificationCode";
import LoginUsers from "./views/LoginUsers/Login";
import TestCatalogo from './views/CatalogScreens/TestCatalogo'
import ProductView from './views/CatalogScreens/ProductView'
import NewProduct from './views/CatalogScreens/NewProduct'

import axios from 'axios'
import { IntlProvider } from "react-intl";
import { messages } from './messages';


const App = () => {
  const [user, setDatos] = useState({
    product: "",
    email: "",
    password: "",
    country: "",
    passwordExpired: false,
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
  const handleChangePasswordExpired = () => {
    setDatos({
      ...user,
      passwordExpired: true,
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
          country: user.country,
          passwordExpired: user.passwordExpired

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
        <Registeruser changeEmail={handleChange} changeCodeTime={handleChangeCodeandTime} userInfo={user}/>   
      </Route>
      <Route path="/verificationcode">
        <VerificationCode codeVerification={code} userInfo={user}/>
      </Route>
      <Route exact path="/login">
        <Login changePassword={handleChangePassword } userInfo={user}/>
      </Route>
      <Route path="/selectcountry">
        <SelectCountry handleChangeCountry={handleChangeCountry} postData={postData} userInfo={user}/>
      </Route>
      <Route path="/LoginUsers/Login">
        <LoginUsers changeLanguage={handleChangeLanguage} handleChange={handleChange} changePassword={handleChangePassword } handleChangePasswordExpired={handleChangePasswordExpired} user={user} />
      </Route>
      <Route path="/catalog/productview">
        <ProductView/>
      </Route>
      <Route path="/catalog/test">
        <TestCatalogo/>
      </Route>
      <Route path="/catalog/newproduct">
        <NewProduct/>
      </Route>
    </BrowserRouter>
  </IntlProvider>
 )
}

export default App;
