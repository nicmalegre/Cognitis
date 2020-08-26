import React, {useState} from "react"; //importacion de la libreria
import { Redirect, withRouter } from "react-router-dom";
import { InputGroup, InputGroupAddon, Button, Input, Row, Col, Card, Spinner } from "reactstrap"; //importar elementos
import "./index.css"; //importar css
import axios from "axios";
import Logo from '../../../components/WizardComponents/base/logo';
import Welcome from '../../../components/WizardComponents/base/welcome';
import { FormattedMessage } from 'react-intl';
import WizardLayout from '../../Layouts/WizardLayout/index'



const Registeruser = (props) => {

  const [verifyingEmail, setVerifyingEmail] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const [mailEntered] = useState({
    adress:null,
  })


  const handleInputChange = (event) => {
    props.changeEmail(event.target)
  };

  /* verify if entered mail is already used for another user.
  if the email entered is not used yet call to sendData function */
  const verifyEmail = (email) => {

    setVerifyingEmail(true)

    axios.post('https://cognitis-360.herokuapp.com/api/users/emailverification', {
      user_mail: email
    })
    .then( async res => {
      const isEmailAlreadyUsed =  await res.data.alreadyUsed

      if(isEmailAlreadyUsed){
        setShowErrorMessage(true)
        setVerifyingEmail(false)
      }else{
        sendData(email)
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  }

  /* SenData send a email to email address entered ànd return the verification cede and the expiration time */
  const sendData = (email) => {
    
    axios.post('https://cognitis-360.herokuapp.com/api/verificationcode', {
      user_mail: email
    })
    .then(async  res => { 
    /* store the result (verification code) on global state */
     await props.changeCodeTime(res.data.verificationCode, res.data.expireAt)
    
    }).catch(err => console.log(err));

    if (document.querySelector("#input-email").value !== ""){
      props.history.push('/verificationcode')
    }
    
  };

  /* verify if a product type is selected on product screen
  if this is not selected redirect to product screen */
  const isProductSelected = () => {
    return props.userInfo.product === ""
  }

  //Funcion que renderiza el componente visual jsx
  return (
    isProductSelected() ? <Redirect to="/product"/> :
    <WizardLayout>
              <Row>
                <Col lg="6" md="3" xs="10">
                  < Logo />
                </Col>
              </Row>
              <Row className="text-center" style={{marginBottom:30}}>
                <Col lg="12" xs="12">
                  < Welcome />
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card id="card-user" body>
                    <InputGroup>
                      <Input
                        id="input-email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                        required
                      />
                      <InputGroupAddon addonType="append">
                          <Button
                            className="button-verification-code"
                            color="primary"
                            active
                            onClick={() => verifyEmail(document.querySelector('#input-email').value)}
                            type="submit"
                          >
                           { verifyingEmail ? <Spinner size="sm" color="light" /> : <FormattedMessage id="app.nextButton"/> }
                          </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    { showErrorMessage && <span>Email already used for another user</span>}
                  </Card>
                </Col>
              </Row>
      </WizardLayout>
  );
};

export default withRouter(Registeruser);