import React, { useState } from "react"; //importacion de la libreria
import { Link } from "react-router-dom";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Container,
} from "reactstrap"; //importar elementos
import Base from "../base/base";
import "./index.css"; //importar css
import axios from "axios";

const Registeruser = (props) => {
  //clase 'Nombre' extends React.component

  
  const [user] = useState({
    email: "",
  });
  
  
  const handleInputChange = (event) => {
    props.changeEmail(event.target.value);
  };

  const sendData = (event) => {
    //event.preventDefault();

    axios.post('http://localhost:3000/api/verificationcode', {
      mail: 
    })
    .then( res => { 
      props.changeCodeTime(res.data.verificationCode, res.data.expireAt)
          
    } ).catch(err => console.log(err));
    
  };

  //Funcion que renderiza el componente visual jsx
  return (
    
    <Container className="themed-container" fluid={true}>
      <Row className="row-first mt-4 text-aling-center">
         <Base />
      </Row>
      <div>
        <Form className="form" >
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Enter mail"
              onChange={handleInputChange}
              required
            />
            <InputGroupAddon addonType="append">
              <Link to="/VerificationCode">
                <Button
                  className="button-verification-code"
                  color="primary"
                  active
                  onClick={sendData}
                >
                  Next
                </Button>
              </Link>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    </Container>
  );
};

export default Registeruser;
