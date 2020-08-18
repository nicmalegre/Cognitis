/**
 *  Verification-Code is a component to validate the verification code that is sent to users.
 *
 *
 */
//Libraries and components imported to use in this component.
import React from "react";
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
import { Link, Redirect } from "react-router-dom";
import Logo from "../../../components/WizardComponents/base/logo";
import Welcome from "../../../components/WizardComponents/base/welcome";
import { FormattedMessage } from "react-intl";
import WizardLayout from '../../Layouts/WizardLayout/index'

const VerificationCode = (props) => {
  //const [band, setBand] = useState(false);

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

  //Function for control the button create password.
  let controlNextButton = true ? (
    <Link to="/Login">
      <Button className="button-verification-code" color="primary" active>
        <FormattedMessage id="app.nextButton" />
      </Button>
    </Link>
  ) : (
    <Button className="button-verification-code" color="primary" active disabled>
      <FormattedMessage id="app.nextButton" />
    </Button>
  );

  /* verify if a email is registered on user screen
  if this is not selected redirect to user screen */
  const isEmailEmpty = () => {
    return props.userInfo.email === ""
  };
  
  return (
    
  isEmailEmpty() ? <Redirect to="/user" /> :
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
                  placeholder="We send you a code to <email@entered.com> enter code:" /*onChange={expireCode}*/
                />
                <InputGroupAddon addonType="append">
                  {controlNextButton}
                </InputGroupAddon>
              </InputGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </WizardLayout>
  );
};

export default VerificationCode;
