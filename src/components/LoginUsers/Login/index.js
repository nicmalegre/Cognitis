import React, { useState, useEffect } from 'react'; 
import { FormGroup, Label, Col, Button, Input,Row, Container, Card, Form, Alert} from 'reactstrap'; 
import "./index.css";
import imagenProductivity from "./imageProductivity.jpeg";
import Navbar from '../Base/navbar';
import axios from "axios";  
import { Link } from 'react-router-dom';
import { get } from 'react-hook-form';
import { FaUserSecret } from 'react-icons/fa';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const LoginUsers = (props) => {
    const [email, setEmail] = useState("");
    const [stateButton, setStateButton] = useState(false); // State for control if the login buttin was clicked
    const [incorrectCredential, setIncorrectCredential] = useState(false); // State for control if the email and password are right
    const [failedAttempts, setFailedAttempts] = useState(0); //IN THIS STATE WE'RE GOING TO SAVE THE FAILED ATTEMPTS IN EMAIL AND PASSWORD
    const [maximiumAttemptsExceeded, setMaximiumAttemptsExceeded] = useState(false);
    const [isRender, setIsRender] = useState(false);
    const [btnLogin, setBtnLogin] = useState(false) //State for control if both input aren't null the button activate

    
    
    const changeButtonState = (mail) => {
        setStateButton(true)
        let usuario = getData(mail)
        console.log(usuario)

    }

    //Function to control the Login button. If the inputs are empty the button is disabled.
    const controlButtonLogin = () =>{
        const inputEmail = document.getElementById("inputEmail").value;
        const inputPassword = document.getElementById("inputPassword").value;
        if ((inputEmail != '') && (inputPassword !='')){
            setBtnLogin(true)
        }else{
            setBtnLogin(false)
        }
        console.log(btnLogin)
    }

    //Arrow function to capture the email and password input from the user and set the global state of the user.
    const inputChange = (event) => {
        props.handleChange(event.target)
        controlButtonLogin()
    }

    //Function to control what the user enters in the inputs
    const controlInput = (userFound) =>{
        if (userFound) { //If found an user that matched with the email from the input
            //Here we put the things when the email is right
            if ((props.user.password==userFound.password) && (!userFound.passwordExpired) ){
                //Here we put the things when the email match with the password and everything is right in the login
                //Start Session
                //Go to the next page
                console.log("Todo ok")

            }else{//The password doesn't match with the email
                setFailedAttempts(failedAttempts+1) //Add one faile attempts
                setIncorrectCredential(true)
                if (failedAttempts == 3){ //The user try to login more than 3 times with an incorrect password
                    setMaximiumAttemptsExceeded(true) //Show the message than the maximium attempts exceeded

                    axios.put(`http://localhost:3000/api/users/updateUser/${props.user.email}`, {
                        passwordExpired:true,
                    }).then(console.log("User update"))
                    .catch(console.log("Can't update"))         
                }
            }

        }else{
            //Here we put the things when the email isn't right
            setFailedAttempts(failedAttempts+1)
            setIncorrectCredential(true)
            if (failedAttempts == 3){ //When the user try more than 3 times we let him know than the maximium attemtps exceeded and he has to restart him password.
                setMaximiumAttemptsExceeded(true)
            }

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
        <Container fluid>
            <Row>
                <Col lg="12" md="12" xs="12" id="col-naranja" style={{margin:0, padding:0}}>
                   <p></p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col lg="6" md="6" xs="12"> 
                        <Row className="justify-content-end">
                            <Col lg="8" >
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
                                                Remember me
                                            </Label>
                                        </FormGroup>
                                        <FormGroup>
                                            {(btnLogin) ?
                                            (<Button color="primary" id="btn-Login" onClick={getData}>Login</Button>):
                                            (<Button color="primary" id="btn-Login" onClick={getData} disabled>Login</Button>)
                                            }
                                            
                                        </FormGroup>
                                        <FormGroup className="text-center">
                                            <Link>Forgot your password?</Link>
                                        </FormGroup>
                                        <FormGroup>
                                          
                                        </FormGroup>
                                        { (stateButton && incorrectCredential && (!maximiumAttemptsExceeded)) &&
                                            <FormGroup className="text-left">
                                                <Card id="card-error2">
                                                    <p>
                                                        <b>Error: </b> You have entered an invalid email address or password. Please try again.
                                                    </p>
                                                </Card>
                                            </FormGroup>
                                        }
                                        { (stateButton && maximiumAttemptsExceeded) &&
                                            <FormGroup>
                                                <Label style={{color:"red"}}>
                                                    Maximium Login Attempts Exceeded!
                                                </Label>
                                                <Card id="card-error2">
                                                    <p>
                                                        <b>Security is Paramount at Cognitis360</b><br/>
                                                        When you have exceeded the maximium login attempts, the user record
                                                        in the database is flagged as password expired. Please reset your password
                                                        via <b>"Forgot your password?"</b>.
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
        </Container>
        <div id="underBackground">
        </div>
    </div>
  );
}

export default LoginUsers;
