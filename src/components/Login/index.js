import React from 'react';
import {Container, Button, FormGroup, Label, Input, Form, Row, CustomInput, Tooltip} from 'reactstrap';
import { BsCheckCircle, BsInfoCircleFill } from "react-icons/bs";
import "./index.css";




class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tooltipOpen: false
        }   
    }

    toggle = () => {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
        }
    
    render(){
        let {tooltipOpen} = this.state
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
                                <p className="text-rule"><i className='icon-check'><BsCheckCircle/></i> 1 special character <BsInfoCircleFill className="info-character" id="info-character"/></p>
                                <Tooltip placement="right" isOpen={tooltipOpen} target="info-character" toggle={this.toggle}>
                                    Los caracteres especiales son: !,@,#,$,%,^,&,*
                                </Tooltip>
                            </FormGroup>
                            <FormGroup>
                                <Label><b>New Password</b></Label>
                                <Input className="input-password" type="password" name="password1" id="password1" placeholder="New password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword2"><b>Confirm New Password</b></Label>
                                <Input className="input-password" type="password" name="password2" id="password2" placeholder="Confirm new password" />
                            </FormGroup>
                            <Row className='justify-content-center'>
                                <Button className="btn-createPass" color="primary">Create Password</Button>
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