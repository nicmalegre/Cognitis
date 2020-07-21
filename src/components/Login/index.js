import React from 'react';
import {Container, Button, FormGroup, Label, Input, Form, Card, Row} from 'reactstrap';
import { BsCheckCircle } from "react-icons/bs";




const Login = () =>{
    return(
        <Container fluid>
            <Row className='justify-content-center'>
                <Card style={{width:'50%'}}>
                    <Form>
                        <FormGroup>
                            <Label>Enter a new password for 'correo@correo.com'</Label><br/>
                            <Label>Make sure to include at least:</Label><br/>
                            <p><i style={{fontSize:25}}><BsCheckCircle/></i> 8 Characters</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>New Password</Label>
                            <Input type="password" name="password1" id="password1" placeholder="New password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword2">Confirm New Password</Label>
                            <Input type="password" name="password2" id="password2" placeholder="Confirm new password" />
                        </FormGroup>
                        <Row className='justify-content-center'>
                            <Button style={{width:'80%'}} color="primary">Submit</Button>
                        </Row>
                    </Form>
                </Card>
            </Row>
        </Container>
  )
}

export default Login;