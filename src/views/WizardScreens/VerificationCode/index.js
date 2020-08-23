/**
 *  Verification-Code is a component to validate the verification code that is sent to users.
 *
 *
 */
//Libraries and components imported to use in this component.
import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Col,
  Container,
  Card,
} from "reactstrap";
import "./verificationcode.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import Logo from "../../../components/WizardComponents/base/logo";
import Welcome from "../../../components/WizardComponents/base/welcome";
import { FormattedMessage } from "react-intl";
import WizardLayout from "../../Layouts/WizardLayout/index";

const VerificationCode = (props) => {
  //const [band, setBand] = useState(false);
  const [code, setCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  /*const expireCode = (event) => {
        const expireTime =  new Date(props.codeVerification.codeTime); 
        if (expireTime >= new Date() ) {
            if (props.codeVerification.codeVerification != event.target.value ) {
                console.log('Error')
                setBand(false);
            } else { console.log('Iguales');
                      setBand(true);  
                    }
        } else {console.log('tiempo expiro');
                    setBand(false);
                }
    }*/

  const checkCodeEntered = () => {
    if (props.codeVerification.codeVerification === code) {
      props.history.push("/login");
    } else {
      setInvalidCode(true);
    }
  };

  /* function to change the code value. This function is executed each time that code input 
  is updated */

  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };

  /* Function for control the button create password. If the code entered length is < return a disactive button
  but if entered length is >= 4 return a active button */
  const controlNextButton =
    code.length >= 5 ? (
      <Button className="button-verification-code" color="primary" active onClick={ () => checkCodeEntered() }>
        <FormattedMessage id="app.nextButton" />
      </Button>
    ) : (
      <Button
        className="button-verification-code"
        color="primary"
        active
        disabled
      >
        <FormattedMessage id="app.nextButton" />
      </Button>
    );

  /* verify if a email is registered on user screen
  if this is not selected redirect to user screen */
  const isEmailEmpty = () => {
    return props.userInfo.email === "";
  };

  return isEmailEmpty() ? (
    <Redirect to="/user" />
  ) : (
    <WizardLayout>
      <Container fluid>
        <Row>
          <Col lg="6" md="3" xs="10">
            <Logo />
          </Col>
        </Row>
        <Row className="text-center" style={{ marginBottom: 30 }}>
          <Col lg="12" xs="12">
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Card id="card-verificationCode" body>
              <InputGroup className="inputgroup-verification-code">
                <Input
                  className="input-verification-code"
                  maxLength="5"
                  placeholder={ `We send you a code to ${ props.userInfo.email }. Please enter code:` } /*onChange={expireCode}*/
                  onChange={handleChangeCode}
                />
                <InputGroupAddon addonType="append">
                  {controlNextButton}
                </InputGroupAddon>
              </InputGroup>
              { invalidCode && (
                <span >
                  Invalid code. Please check your email and try again
                </span>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </WizardLayout>
  );
};

export default withRouter(VerificationCode);
