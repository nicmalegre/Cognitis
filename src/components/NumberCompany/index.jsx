import React, { useState } from "react"; //importacion de la libreria
//import { Link } from "react-router-dom";
import {
  FormGroup,
  Button,
  Input,
  Row,
  Container,
  Col,
  Label,
  Card,
  Form,
} from "reactstrap"; //importar elementos
import "../RegisterHeadCompany/index.css"; //importar css
import { useForm } from "react-hook-form";

import Logo from "../base/logo";

const NumberCompany = (props) => {



    //Funcion que renderiza el componente visual jsx
  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="4" xs="10">
          <Logo />
        </Col>
      </Row>
      <Row>
      <Col lg="8" xs="10">
          <h3 className="mt-5 text" style={{ marginBottom: 30 }}>
            Ingrese datos de la Compañia Matriz
          </h3>
        </Col>
    </Row>
      </Container>


}