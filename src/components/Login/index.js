import React from 'react';
import {Container, Button, FormGroup, Label, Input, Form} from 'reactstrap';


const Login = () =>{
    return(
        <Container fluid>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        </Container>
  )
}

export default Login;