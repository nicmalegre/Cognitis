import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./views/WizardScreens/Login";
import Welcomescreen from "./views/WizardScreens/Welcomescreen/index";
import Product from "./views/WizardScreens/Product/index";
import Registeruser from "./views/WizardScreens/Registeruser/index";
import SelectCountry from "./views/WizardScreens/SelectCountry";
import VerificationCode from "./views/WizardScreens/VerificationCode";
import LoginUsers from "./views/LoginUsers/Login";
import SearchProducts from "./views/CatalogScreens/SearchProducts";
import ProductView from "./views/CatalogScreens/ProductView";
import NewProduct from "./views/CatalogScreens/NewProduct";
import EditProduct from "./views/CatalogScreens/EditProduct/index";
import axios from "axios";
import { IntlProvider } from "react-intl";
import { messages } from "./messages";
// import de Register companies
import Dashboard from './views/RegisterCompanyScreen/DashboardContainer'; //this components works
import CreateCompanyContainer from './views/RegisterCompanyScreen/CreateCompanyContaniener'; //this components works
import CreateSucursalContainer from './views/RegisterCompanyScreen/CreateSucursalContainer'; //this components works
import RegisterSucursalContanier from './views/RegisterCompanyScreen/RegisterSucursalContainer/RegisterSucursalContanier'; //this components works
import RegisterHeadCompany from './views/RegisterCompanyScreen/RegisterHeadCompanyContainer/RegisterHeadCompany'; //this components works
import RegisterCompanyContainer from './views/RegisterCompanyScreen/RegisterCompanyContainer/RegisterCompanyContainer';
import FormTest from './components/CatologComponents/test/formtest';
import { Provider } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import store from "./Redux/store";


const App = (props) => {

  const [user, setDatos] = useState({
    product: "",
    email: "",
    password: "",
    country: "",
    passwordExpired: false,
  });

  const [language, setLanguage] = useState("en");

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
    setLanguage(lang);
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
  
  return (
    <Provider store = {store}>
    <IntlProvider locale={language} messages={messages[language]}>
      <BrowserRouter>
        <Route path="/" exact>
          <Welcomescreen changeLanguage={handleChangeLanguage} />
        </Route>
        <Route path="/product">
          <Product changeProduct={handleChangeProduct} />
        </Route>
        <Route path="/user">
          <Registeruser
            changeEmail={handleChange}
            changeCodeTime={handleChangeCodeandTime}
            userInfo={user}
          />
        </Route>
        <Route path="/verificationcode">
          <VerificationCode codeVerification={code} userInfo={user} />
        </Route>
        <Route exact path="/login">
          <Login changePassword={handleChangePassword} userInfo={user} />
        </Route>
        <Route path="/selectcountry">
          <SelectCountry
            handleChangeCountry={handleChangeCountry}
            userInfo={user}
          />
        </Route>
        <Route path="/LoginUsers/Login">
          <LoginUsers
            changeLanguage={handleChangeLanguage}
            handleChange={handleChange}
            changePassword={handleChangePassword}
            handleChangePasswordExpired={handleChangePasswordExpired}
            user={user}
          />
        </Route>
        {/*Routes of Register Companies*/}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/createcompany" component={CreateCompanyContainer} />
        <Route path="/createsucursal" component={CreateSucursalContainer} />
        <Route path="/registersucursal" component={RegisterSucursalContanier} />
        <Route path="/registerheadcompany" component={RegisterHeadCompany} />
        <Route path="/registercompany" component={RegisterCompanyContainer} />
        <Route path="/registersucursal" component={RegisterSucursalContanier} />

        {/*Routes of Catlog*/}
  <Route path="/catalog/productview/:id" render={props => <ProductView {...props}/>}/>
  
        <Route path="/catalog/searchproducts">
          <SearchProducts />
        </Route>
        <Route path="/catalog/newproduct">
          <NewProduct />
        </Route>
        <Route path="/catalog/editproduct">
          <EditProduct />
        </Route>
        <Route path="/test" component={FormTest} />
      </BrowserRouter>
    </IntlProvider>
    </Provider>
 );
}

export default App;
