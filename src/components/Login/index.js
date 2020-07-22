import React from 'react';
import {Container, Button, FormGroup, Label, Input, Form, Row, CustomInput, Tooltip, Card} from 'reactstrap';
import { BsInfoCircleFill} from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "./index.css";




class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tooltipOpen: false,
            newPass: '',
            newPassConfirm:null,
        }   
    }

    handleInputChange = (event) =>{ //This function is for control the input that put the user.
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    toggle = () => { //This function is for control the Tooltip specials characters.
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
        }
    
    mostrar = () =>{
        let {newPassConfirm} = this.state

        console.log(newPassConfirm)
    }
    
    render(){
        let {tooltipOpen, newPass} = this.state

        //Function for control if the password have 8 characters length.
        let controlCharacters = (newPass.length > 7) ? (
                <p className="text-rule correct" id="character-rule"><i className='icon-check'><AiFillCheckCircle/></i> 8 characters</p>
            ) : //If not
            (
                <p className="text-rule" id="character-rule"><i className='icon-check'><AiFillCloseCircle/></i> 8 characters</p>       
            )
        
        //Function for control if the password have minimium 1 uppercase
        const regexUpper = /[A-Z]/
        let controlUppercase = (regexUpper.test(newPass)) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 uppercase letter</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 uppercase letter</p>      
        )

        //Function for control if the password have minimium 1 lowercase
        const regexLower = /[a-z]/
        let controlLowercase = (regexLower.test(newPass)) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 lowercase letter</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 lowercase letter</p>     
        )

        //Function for control if the password have minimium 1 number
        const regexNumber = /[0-9]/
        let controlNumber = (regexNumber.test(newPass)) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 number</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 number</p>   
        )

        //Function for control if the password have minimium 1 number
        const regexSpecial = /[!@#$%^&*_-]/
        let controlSpecial = (regexSpecial.test(newPass)) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 special character <BsInfoCircleFill className="info-character" id="info-character"/></p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 special character <BsInfoCircleFill className="info-character" id="info-character"/></p>  
        )

        return(
            <Container fluid className="login-container">
                <Row className='justify-content-center Row-General'>
                        <Form>
                            <FormGroup>
                                <Label>Enter a new password for <b>'correo@correo.com'</b></Label><br/>
                                <Label>Make sure to include at least:</Label><br/>
                                {controlCharacters}
                                {controlUppercase}
                                {controlLowercase}
                                {controlNumber}
                                {controlSpecial}
                                <Tooltip placement="right" isOpen={tooltipOpen} target="info-character" toggle={this.toggle}>
                                    Los caracteres especiales son: ! @ # $ % ^ & * _  -
                                </Tooltip>
                            </FormGroup>
                            <FormGroup>
                                <Label><b>New Password</b></Label>
                                <Input type="password" name={"newPass"} id="newPass"  placeholder="Insert new password" onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword2"><b>Confirm New Password</b></Label>
                                <Input type="password" name={"newPassConfirm"} id="newPassConfirm"  placeholder="Confirm new password"/>
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
                            <Card>
                                <h6>{newPass}</h6>
                            </Card>
                        </Form>
                    
                </Row>
            </Container>
        )
    }
}

export default Login;