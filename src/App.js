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
    email: ""
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


 return(
  <BrowserRouter>
      <Route path='/' exact component={Welcomescreen} />
      <Route path='/product' component = {Product} />
      {/*<Route path="/user" component={Registeruser} />*/}
      <Route path="/user"> 
        <Registeruser changeEmail={handleChangeEmail} changeCodeTime={handleChangeCodeandTime}/>   
      </Route>
      <Route path="/verificationcode"> 
        <VerificationCode codeVerification={code} />   
      </Route>
      {/*<Route  path="/verificationcode" component={VerificationCode} /> */}
      <Route exact path="/login" component={Login} />
      <Route  path="/selectcountry" component={SelectCountry} />
  </BrowserRouter>
 )
}

export default App;
