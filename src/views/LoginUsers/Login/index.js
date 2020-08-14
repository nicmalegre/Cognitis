import React, { useState} from 'react'; 
import { FormGroup, Label, Col, Button, Input,Row, Card, Form} from 'reactstrap'; 
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'; 
import "./index.css";
import imagenProductivity from "./imageProductivity.jpeg";
import Navbar from '../Base/navbar';
import axios from "axios";  
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';



const LoginUsers = (props) => {
    const [stateButton, setStateButton] = useState(false); // State for control if the login buttin was clicked
    const [incorrectCredential, setIncorrectCredential] = useState(false); // State for control if the email and password are right
    const [failedAttempts, setFailedAttempts] = useState(0); //IN THIS STATE WE'RE GOING TO SAVE THE FAILED ATTEMPTS IN EMAIL AND PASSWORD
    const [maximiumAttemptsExceeded, setMaximiumAttemptsExceeded] = useState(false);
    const [btnLogin, setBtnLogin] = useState(false) //State for control if both input aren't null the button activate

    //State for control the lenguage dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    
    
    // const changeButtonState = (mail) => {
    //     setStateButton(true)
    //     let usuario = getData(mail)
    //     console.log(usuario)
    // }

    //Function to control the Login button. If the inputs are empty the button is disabled.
    const controlButtonLogin = () =>{
        const inputEmail = document.getElementById("inputEmail").value;
        const inputPassword = document.getElementById("inputPassword").value;
        if ((inputEmail !== '') && (inputPassword !=='')){
            setBtnLogin(true)
        }else{
            setBtnLogin(false)
        }
    }

    //Arrow function to capture the email and password input from the user and set the global state of the user.
    const inputChange = (event) => {
        props.handleChange(event.target)
        controlButtonLogin()
    }

    //Function when the system will execute when the user enters an incorrect credential. Could be mail or password
    const incorrectCredentialActions = () => {
        setFailedAttempts(failedAttempts+1) //Add one faile attempts
        setIncorrectCredential(true) //Show the message to the user that the credential are incorrect
        if (failedAttempts === 3){ //The user try to login more than 3 times with an incorrect credential
            setMaximiumAttemptsExceeded(true) //Show the message than the maximium attempts exceeded

            //Set the passwordExpired field true in the database. So the user have to restart his password
            axios.put(`http://localhost:3000/api/users/updateUser/${props.user.email}`, {
                passwordExpired:true,
            }).then(console.log("User update"))
            .catch(console.log("Can't update"))         
        }
    }

    //Function to control what the user enters in the inputs
    const controlInput = (userFound) =>{
        if (userFound) { //If found an user that matched with the email from the input
            //Here we put the things when the email is right
            if ((props.user.password === userFound.password) && (!userFound.passwordExpired) ){
                //Here we put the things when the email match with the password and everything is right in the login
                //Start Session
                //Go to the next page
                console.log("Todo ok")

            }else{//The password doesn't match with the email
                incorrectCredentialActions()
                console.log("entra aca")
            }

        }else{
            //Here we put the things when the email isn't right
            incorrectCredentialActions()
        }
        //IN BOTH CASES THE USER CLICK THE BUTTON
        setStateButton(true)
    }

    const getData = async () => {       
        await axios.post('http://localhost:3000/api/users/getUser', {
            mail: props.user.email
        })
        .then(async res =>{
            const userExist = await res.data 
            if(userExist){
                controlInput(userExist)
            }else{
                //THE USER DOESN'T EXISTS SO THE SYSTEM DO THE THINGS WHEN THE CREDENTIAL ARE INCORRECT
                incorrectCredentialActions()
                console.log("Usuario no existe")      
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }


  return (  
    <div>
        <Navbar/>

        <Row>
            <Col lg="12" md="12" xs="12" id="col-naranja" style={{margin:0, padding:0}}>
                <p></p>
            </Col>
        </Row>
        <Row className="text-center">
            <Col lg="6" md="6" xs="12"> 
                    <Row className="justify-content-end">
                        <Col lg="3" xs="4" style={{marginLeft:10}}>
                            <Row className="text-center">
                            <Dropdown className="dropdown-lenguage" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret color="warning"><FormattedMessage id="app.btnLanguage"/></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => props.changeLanguage('en')}><FormattedMessage id="app.englishLanguageOPtion"/></DropdownItem>
                                    <DropdownItem onClick={() => props.changeLanguage('es')}><FormattedMessage id="app.spanishLanguageOPtion"/></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </Row>
                        </Col>
                        <Col lg="6" >
                                <Form style={{marginTop:15}}>
                                    <FormGroup>
                                        <Input type="email" name="email" id="inputEmail" placeholder="Email addres" required onChange={inputChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" name="password" id="inputPassword" placeholder="Password" required onChange={inputChange}/>
                                    </FormGroup>
                                    <FormGroup check style={{paddingBottom:"5px"}}>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            <FormattedMessage id="app.rememberMeMessage"/>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        {(btnLogin) ?
                                        (<Button color="primary" id="btn-Login" onClick={getData}><FormattedMessage id="app.btnLoginMessage"/></Button>):
                                        (<Button color="primary" id="btn-Login" onClick={getData} disabled><FormattedMessage id="app.btnLoginMessage"/></Button>)
                                        }
                                        
                                    </FormGroup>
                                    <FormGroup className="text-center">
                                        <Link><FormattedMessage id="app.forgotPasswordMessage"/></Link>
                                    </FormGroup>
                                    <FormGroup>
                                        
                                    </FormGroup>
                                    { (stateButton && incorrectCredential && (!maximiumAttemptsExceeded)) &&
                                        <FormGroup className="text-left">
                                            <Card id="card-error2">
                                                <p>
                                                    <b>Error: </b><FormattedMessage id="app.errorIncorrectCredentialMessage"/>
                                                </p>
                                            </Card>
                                        </FormGroup>
                                    }
                                    { (stateButton && maximiumAttemptsExceeded) &&
                                        <FormGroup>
                                            <Label style={{color:"red"}}>
                                                <FormattedMessage id="app.maxiumAttemptsMessage"/>
                                            </Label>
                                            <Card id="card-error2">
                                                <p>
                                                    <b><FormattedMessage id="app.securityParamountMessage"/></b><br/>
                                                    <FormattedMessage id="app.maxiumAttemptsResetPasswordMessage"/>
                                                </p>
                                            </Card>
                                        </FormGroup>
                                    }
                                    
                                </Form>
                        </Col>
                    </Row>
            </Col>
            <Col lg="6" md="6" xs="12" className="d-none d-sm-block">
                <img src={imagenProductivity} alt="Cognitis" id="img-productivity"/>
            </Col>
        </Row>
        <div id="underBackground">
        </div>
    </div>
  );
}

export default LoginUsers;
