import React from 'react';
import {Container, Button, FormGroup, Label, Input, Form, Card, Row, CustomInput} from 'reactstrap';
import { BsCheckCircle } from "react-icons/bs";
import "./index.css";




class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <Container fluid className="login-container">
                <Row className='justify-content-center Row-General'>
                        <Form>
                            <FormGroup>
                                <Label>Enter a new password for <b>'correo@correo.com'</b></Label><br/>
                                <Label>Make sure to include at least:</Label><br/>
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 8 characters</p>
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 1 uppercase letter</p>
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 1 lowercase letter</p>
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 1 number</p>
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 1 special character</p>
                            </FormGroup>
                            <FormGroup>
                                <Label>New Password</Label>
                                <Input className="input-password" type="password" name="password1" id="password1" placeholder="New password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword2">Confirm New Password</Label>
                                <Input className="input-password" type="password" name="password2" id="password2" placeholder="Confirm new password" />
                            </FormGroup>
                            <Row className='justify-content-center'>
                                <Button style={{width:'80%'}} color="primary">Create Password</Button>
                            </Row>
                            <FormGroup className="formGroup-idioma">
                                <Row className="justify-content-center">
                                    <CustomInput inline type="radio" id="exampleCustomRadio" name="customRadio" label="Español" />
                                    <CustomInput inline type="radio" id="exampleCustomRadio2" name="customRadio" label="Ingles" />
                                </Row>
                            </FormGroup>
                        </Form>
                    
                </Row>
            </Container>
        )
    }
}

export default Login;