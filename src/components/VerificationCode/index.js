/**
 *  Verification-Code is a component to validate the verification code that is sent to users.
 * 
 * 
 */
//Libraries and components imported to use in this component.
import React, {useState} from 'react'; 
import { Form,InputGroup, InputGroupAddon, Button, Input,Row } from 'reactstrap'; 
import "./verificationcode.css";
import { Link } from 'react-router-dom';
import Base from '../base/base';
import axios from "axios";


const VerificationCode = (props) => {

    
    const expireCode = (event) => {

        event.preventDefault();


        const { verificationCode, expireAt } = props

        console.log(verificationCode);
        console.log(expireAt);
        
        // const expireTime =  new Date(expireAt); 
                
        // if (expireTime >= new Date() ) {
            
        //     if (verificationCode != event.target.value ) {

        //         console.log('Error')

        //     } else { console.log('Iguales')}

        // } 

    }



    
  return (
    
    <div className="div-verification-code">
        <Row className="mt-4 text-aling-center">
                < Base />
        </Row>
        <Form className="form-verification-code">
            <InputGroup className="inputgroup-verification-code">
                <Input className="input-verification-code" maxLength='5'  placeholder="We send you a code to <email@entered.com> enter code:"/>
                <InputGroupAddon addonType="append">
                    <Link to="/Login">
                        <Button  class="button-verification-code" color="primary" active  onClick={expireCode}>Next</Button>
                    </Link>
                </InputGroupAddon>
            </InputGroup>       
        </Form>
        
    </div>
  );

  
}

export default VerificationCode;
