import React, { useState } from "react"; //importacion de la libreria
import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Container,
  Col,
  Card
} from "reactstrap"; //importar elementos
import "./index.css"; //importar css
import axios from "axios";

import Logo from '../base/logo';
import Welcome from '../base/welcome';

const Registeruser = () => {
  //clase 'Nombre' extends React.component

  const [user, setDatos] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    //console.log(user);  //for example
    axios.post("http://localhost:4000/api/verificationcode", user);
    //window.location.href = '/verification';  // redirect to verification path
  };

  //Funcion que renderiza el componente visual jsx
  return (
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
                  <Card id="card-user" body>
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
                          >
                            Next
                          </Button>
                        </Link>
                      </InputGroupAddon>
                    </InputGroup>
                  </Card>
                </Col>
              </Row>
      </Container>
  );
};

export default Registeruser;
