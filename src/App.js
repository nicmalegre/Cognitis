import React, { useState,useRef } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Welcomescreen from "./components/Welcomescreen/index";
import Product from "./components/Product/index";
import Registeruser from "./components/Registeruser/index";
import SelectCountry from "./components/SelectCountry";
import VerificationCode from "./components/VerificationCode";
import axios from "axios";
import RegisterSucursalContainer from "./views/RegisterSucursalContainer/RegisterSucursalContanier";
import CreateSucursalContainer from "./views/CreateSucursalContainer";
import RegisterCompanyContainer from "./views/RegisterCompanyContainer/RegisterCompanyContainer";
import CreateCompanyContainer from "./views/CreateCompanyContaniener";
import RegisterHeadCompany from "./views/RegisterHeadCompanyContainer/RegisterHeadCompany";
import Catalogo from './views/Catalogo/index'
import DashboardContainer from "./views/DashboardContainer";


const App = () => {
  const [user, setDatos] = useState({
    product: "",
    email: "",
    password: "",
    country: "",
  });

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
  const handleChangeEmail = (dato) => {
    setDatos({
      email: dato,
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
  const postData = () => {
    console.log(user);
    axios
      .post("http://localhost:3000/api/users/saveuser", {
        product: user.product,
        mail: user.mail,
        password: user.password,
        country: user.country,
      })
      .then((res) => "Se cargo en la base de datos tu usuario")
      .catch((err) => console.log(err));
  };

  //Dotos de la compañia matriz, compañia y sucursal
  const [companyHead, setCompanyHead] = useState([]);

  const dataCompanyHead = (data) => {
    setCompanyHead([...companyHead, data]);
  };
  const [company, setCompany] = useState([]);

  const dataCompany = (data) => {
    setCompany([...company, data]);
  };
  const [sucur, setSucur] = useState([]);
  const dataSucur = (data) => {
    setSucur([...sucur, data]);
  };
  const [cantsuc, setCantSuc] = useState(0);
  

  const setcantSuc = (cant) => {
    setCantSuc(cant);
  };
  const [cantCompanies, setCantComp] = useState(0);
 

  const setcantCompanies = (cant) => {
    setCantComp(cant);
  };

  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcomescreen} />
      <Route path="/product">
        <Product handleChangeProduct={handleChangeProduct} />
      </Route>
      <Route path="/user">
        <Registeruser
          handlerChangeUser={handleChange}
          changeCodeTime={handleChangeCodeandTime}
        />
      </Route>
      <Route path="/verificationcode">
        <VerificationCode codeVerification={code} />
      </Route>
      {/*<Route  path="/verificationcode" component={VerificationCode} /> */}
      <Route exact path="/login">
        <Login changePassword={handleChangePassword} />
      </Route>
      <Route path="/selectcountry">
        <SelectCountry
          handleChangeCountry={handleChangeCountry}
          postData={postData}
        />
      </Route>
      <Route path="/registerheadcompany" component={RegisterHeadCompany} />
      <Route path="/registersucursal" component={RegisterSucursalContainer}/>
      <Route path="/createsucursal" component={CreateSucursalContainer} />
      <Route path="/registercompany" component={RegisterCompanyContainer} />
      <Route path="/createcompany" component={CreateCompanyContainer} />
      <Route path="/catalogo" component={Catalogo} />
      <Route path="/dashboard" component={DashboardContainer} />
    </BrowserRouter>
  );
};

export default App;
