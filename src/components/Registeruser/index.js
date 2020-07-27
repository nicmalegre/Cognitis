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
    <Container className="themed-container" fluid={true}>
      <Row className="row-first mt-4 text-aling-center">
         <Base />
      </Row>
      <div>
        <Form className="form" onSubmit={sendData}>
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
        </Form>
      </div>
    </Container>
  );
};

export default Registeruser;
