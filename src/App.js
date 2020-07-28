import React, {useState} from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Welcomescreen from "./components/Welcomescreen/index";
import Product from './components/Product/index';
import Registeruser from './components/Registeruser/index'
import SelectCountry from "./components/SelectCountry";
import VerificationCode from "./components/VerificationCode";


const App = () => {

  const [user, setDatos] = useState({
    product: "",
    email: "",
    password: "",
    country: ""
  });


  const [code, setCode] = useState({
    codeVerification:null,
    codeTime:null,
  })

  const handleChangeEmail = (dato) => {
    setDatos({
      email: dato
    })
  }

  const handleChangeCodeandTime = (code, time) => {
    setCode({
      codeVerification: code,
      codeTime: time
    })
  }

  const handleChangeProduct = (dato) => {
    setDatos({
      product: dato
    })
  }
  const handleChangePassword = (dato) => {
    setDatos({
      password: dato
    })
  }
  const handleChangeCountry = (dato) => {
    setDatos({
      country: dato
    })
  }

 return(
  <BrowserRouter>
      <Route path='/' exact component={Welcomescreen} />
      <Route path='/product' component = {Product} changeProduct={handleChangeProduct}/>
      {/*<Route path="/user" component={Registeruser} />*/}
      <Route path="/user"> 
        <Registeruser changeEmail={handleChangeEmail} changeCodeTime={handleChangeCodeandTime}/>   
      </Route>
      <Route path="/verificationcode"> 
        <VerificationCode codeVerification={code} />   
      </Route>
      {/*<Route  path="/verificationcode" component={VerificationCode} /> */}
      <Route exact path="/login" component={Login}>
        <Login changePassword={handleChangePassword} />
      </Route>
      <Route  path="/selectcountry" >
         <SelectCountry changeCountry={handleChangeCountry}/>
      </Route>
  </BrowserRouter>
 )
}

export default App;
