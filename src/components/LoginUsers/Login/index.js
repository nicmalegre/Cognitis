import React, { useState, useEffect } from 'react'; 
import { FormGroup, Label, Col, Button, Input,Row, Container, Card, Form, Alert} from 'reactstrap'; 
import "./index.css";
import imagenProductivity from "./imageProductivity.jpeg";
import Navbar from '../Base/navbar';
import axios from "axios";  
import { Link } from 'react-router-dom';
import { get } from 'react-hook-form';
import { FaUserSecret } from 'react-icons/fa';


const LoginUsers = (props) => {
    const [email, setEmail] = useState("");
    const [stateButton, setStateButton] = useState(false);
    const [usuarios, setUsuarios] = useState()

    //Here we do the GET Method to the API for get all the users. 
    useEffect(() =>{
        axios({
            method:'GET',
            url:'http://localhost:3000/api/users/'
        }).then(res => {
            setUsuarios(res.data)
        })
    })

    const handleInputChange = (event) => {
        //setEmail(event.target.value)
        //bandera=false;
    }

    const changeButtonState = (mail) => {
        setStateButton(true)
        let usuario = getData(mail)
        console.log(usuario)

    }

    //Arrow function to capture the email input from the user.
    const inputEmailChange = (event) => {
        props.changeEmail(event.target)
    }

    const getData =  () => {
        setStateButton(true)
        //axios.get('http://localhost:3000/api/users/').then(res => 
        //setUsuarios(res.data))
        console.log(usuarios)

        //usuarios.map(user => <h1>user.id</h1>)
        
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
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Email addres" required onChange={inputEmailChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" name="password" id="examplePassword" placeholder="Password" required/>
                                        </FormGroup>
                                        <FormGroup check style={{paddingBottom:"5px"}}>
                                            <Label check>
                                                <Input type="checkbox" />{' '}
                                                Remember me
                                            </Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button color="primary" id="btn-Login" onClick={getData}>Login</Button>
                                        </FormGroup>
                                        <FormGroup className="text-center">
                                            <Link>Forgot your password?</Link>
                                        </FormGroup>
                                        <FormGroup>
                                          
                                        </FormGroup>
                                        { stateButton && 
                                        <FormGroup className="text-left">
                                            {usuarios.map(user => <h6>{user.mail}</h6>)}
                                            {/*<Card id="card-error2">
                                                <p>
                                                    <b>Error: </b> You have entered an invalid email address or password. Please try again.
                                                </p>
                                            </Card>*/}
                                        </FormGroup>
                                        }
                                        { stateButton &&
                                        <FormGroup>
                                            <Label style={{color:"red"}}>
                                                Maximium Login Attempts Exceeded!
                                            </Label>
                                        </FormGroup>
                                        }
                                        { stateButton &&
                                            <FormGroup>
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
