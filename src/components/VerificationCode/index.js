/**
 *  Verification-Code is a component to validate the verification code that is sent to users.
 * 
 * 
 */
<<<<<<< HEAD
//Libraries and components imported to use in this component.
import React from 'react'; 
import { Form,InputGroup, InputGroupAddon, Button, Input,Row } from 'reactstrap'; 
import "./verificationcode.css";
import { Link } from 'react-router-dom';
import Base from '../base/base';
=======


//Libraries and components imported to use in this component.
import React from 'react'; 
import { Form,InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'; 
import "./verificationcode.css";
import { Link } from 'react-router-dom';
>>>>>>> 3f0533bafb2e3f4167418aaadcd3bfc9bbf6aaf7


const VerificationCode = (props) => {


    // const inputChange = (e) => {
    //     console.log(e.target.value);
    // }

  return (
 
    <div className="div-verification-code">
<<<<<<< HEAD
        <Row className="mt-4 text-aling-center">
                < Base />
        </Row>
=======

>>>>>>> 3f0533bafb2e3f4167418aaadcd3bfc9bbf6aaf7
        <Form className="form-verification-code">
            <InputGroup className="inputgroup-verification-code">
                <Input className="input-verification-code" maxLength='5'  placeholder="We send you a code to <email@entered.com> enter code:"/>
                <InputGroupAddon addonType="append">
                    <Link to="/Login">
                        <Button  class="button-verification-code" color="primary" active >Next</Button>
                    </Link>
                </InputGroupAddon>
            </InputGroup>       
        </Form>

    </div>
  );
}

export default VerificationCode;
