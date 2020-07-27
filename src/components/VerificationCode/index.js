/**
 *  Verification-Code is a component to validate the verification code that is sent to users.
 * 
 * 
 */
//Libraries and components imported to use in this component.
import React from 'react'; 
import { Form,InputGroup, InputGroupAddon, Button, Input,Row, Col, Container, Card } from 'reactstrap'; 
import "./verificationcode.css";
import { Link } from 'react-router-dom';
import Logo from '../base/logo';
import Welcome from '../base/welcome';



const VerificationCode = (props) => {


    // const inputChange = (e) => {
    //     console.log(e.target.value);
    // }

  return (
 
    <Container fluid>
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
                <Card id="card-verificationCode" body>
                    <InputGroup className="inputgroup-verification-code">
                        <Input className="input-verification-code" maxLength='5'  placeholder="We send you a code to <email@entered.com> enter code:"/>
                        <InputGroupAddon addonType="append">
                            <Link to="/Login">
                                <Button  class="button-verification-code" color="primary" active >Next</Button>
                            </Link>
                        </InputGroupAddon>
                    </InputGroup> 
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default VerificationCode;
