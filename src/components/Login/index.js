import React from 'react';
import {Container, Button, FormGroup, Label, Input, InputGroup, InputGroupAddon, Form, Row, CustomInput, Tooltip, Card, Col} from 'reactstrap';
import { Link } from "react-router-dom";
import { BsInfoCircleFill} from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { FaEye } from 'react-icons/fa';
import "./index.css";

import Logo from '../base/logo';
import Welcome from '../base/welcome';


const eye = <FaEye/>;

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tooltipOpen: false,
            newPass: '',
            newPassConfirm:null,
            passwordShown: false,
            goodMessage: false,
            matchMessage: false,
        }   
    }

    handleInputChange = (event) =>{ //This function is for control the input that put the user.
        this.setState({
            [event.target.name]: event.target.value,
            
        })
    }

    togglePasswordVisiblity = () => {
        console.log('clickeando')
        this.setState({
            passwordShown: !this.state.passwordShown});
    };

    toggle = () => { //This function is for control the Tooltip specials characters.
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
        }
    
    mostrar = () =>{
        let {newPassConfirm} = this.state
    }
    
    handleClick = () =>{
       this.props.changePassword(this.state.newPass)
    
    }
    render(){
        //const props = this.props.changePassword
        //console.log(changePassword);
        let {tooltipOpen, newPass, newPassConfirm} = this.state

        //Function for control if the password have 8 characters length.
        const lengthRight = (newPass.length > 7)
        let controlCharacters = (lengthRight) ? (
                <p className="text-rule correct" id="character-rule"><i className='icon-check'><AiFillCheckCircle/></i> 8 characters</p>
            ) : //If not
            (
                <p className="text-rule" id="character-rule"><i className='icon-check'><AiFillCloseCircle/></i> 8 characters</p>       
            )
        
        //Function for control if the password have minimium 1 uppercase
        const regexUpper = /[A-Z]/
        const upperRight = regexUpper.test(newPass)
        let controlUppercase = (upperRight) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 uppercase letter</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 uppercase letter</p>      
        )

        //Function for control if the password have minimium 1 lowercase
        const regexLower = /[a-z]/
        const lowerRight = regexLower.test(newPass)
        let controlLowercase = (lowerRight) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 lowercase letter</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 lowercase letter</p>     
        )

        //Function for control if the password have minimium 1 number
        const regexNumber = /[0-9]/
        const numberRight = regexNumber.test(newPass)
        let controlNumber = (numberRight) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 number</p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 number</p>   
        )

        //Function for control if the password have minimium 1 special character
        const regexSpecial = /[!@#$%^&*_-]/
        const specialRight = regexSpecial.test(newPass)
        let controlSpecial = (specialRight) ? (
            <p className="text-rule correct"><i className='icon-check'><AiFillCheckCircle/></i> 1 special character <BsInfoCircleFill className="info-character" id="info-character"/></p>
        ) : //If not
        (
            <p className="text-rule"><i className='icon-check'><AiFillCloseCircle/></i> 1 special character <BsInfoCircleFill className="info-character" id="info-character"/></p>  
        )

        //Function for change the border color of the input if the password follows the defined criteria.
        let controlInputPass = ((lengthRight) && (upperRight) && (lowerRight) && (numberRight) && (specialRight) ) ? (
            <input  required="" className="input-correct" type={this.state.passwordShown ? "text" : "password"} name={"newPass"} id="newPass"  placeholder="Insert new password" onChange={this.handleInputChange}/> 
        ) : //if not
        (
            <input type={this.state.passwordShown ? "text" : "password"} name={"newPass"} id="newPass"  placeholder="Insert new password" onChange={this.handleInputChange}/> 
        )
        

        //Function for show the good message if the password follows the defined criteria.
        let controlGoodMessage = ((lengthRight) && (upperRight) && (lowerRight) && (numberRight) && (specialRight) ) && (
            <p className="message-password">Good</p> 
        )

        //Function for change the border color of the second input if the password match with the first input.
        let controlInputPassConfirm = ((newPassConfirm == newPass) && (newPassConfirm != '') ) ? (
            <input className="input-correct" type={this.state.passwordShown ? "text" : "password"} name={"newPassConfirm"} id="newPassConfirm"  placeholder="Confirm new password" onChange={this.handleInputChange}/>  
        ) : //If not
        (
            <input type={this.state.passwordShown ? "text" : "password"} name={"newPassConfirm"} id="newPassConfirm"  placeholder="Confirm new password" onChange={this.handleInputChange}/>
        )

        //Function for show the good message if the password follows the defined criteria.
        let controlMatchMessage = ((newPassConfirm == newPass) && (newPassConfirm != '') ) && (
            <p className="message-password">Match</p> 
        )

        //Function for control the button create password.
        let controlCreatePassButton = ((newPassConfirm == newPass) && (newPassConfirm != '') ) ? (
            <Button  color="primary">Create Password</Button>
        ):
        (
            <Button  color="secondary" disabled>Create Password</Button>
        )

        return(
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
                        <Card id="card-password">
                            <div className="div-password">
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
                                    <div>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {controlInputPass}
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="row-password">
                                            <Col>
                                                <i style={{justifyContent:"left"}} onClick={this.togglePasswordVisiblity} style={{cursor:"pointer"}}>{eye}</i> 
                                            </Col>
                                            <Col>
                                                {controlGoodMessage}
                                            </Col>
                                        </Row>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword2"><b>Confirm New Password</b></Label>
                                    <div>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {controlInputPassConfirm}
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="row-password">
                                            <Col>
                                                <i style={{justifyContent:"left"}} onClick={this.togglePasswordVisiblity} style={{cursor:"pointer"}}>{eye}</i> 
                                            </Col>
                                            <Col>
                                                {controlMatchMessage}
                                            </Col>
                                        </Row>
                                    </div> 
                                </FormGroup>
                                <Row className='justify-content-center'>
                                    <Link to="SelectCountry">
                                        <Button  color="primary" onClick={this.handleClick}>Create Password</Button>
                                    </Link>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;