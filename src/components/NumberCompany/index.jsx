import React, { useState, Link, Fragment } from "react"; //importacion de la libreria
//import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Container
} from "reactstrap"; //importar elementos
import "../RegisterHeadCompany/index.css"; //importar css
import Logo from "../base/logo";
import { useHistory } from "react-router-dom";


const NumberCompany = (props) => {
  const [cond, setCond] = useState(null)
  const[cantCompanies, setCantCompanies] = useState(0)

  const select=(condicion)=>{
    setCond(condicion)
  }

  const cantComp = (cant) => {
    setCantCompanies(cant);
  }
  
  let history = useHistory();
  const sendCant =(cant)=>{
    props.cantCompanies(cantCompanies)
    if (cantCompanies > 0) {
      history.push("/registercompany");
    }else{
      history.push("/numbersucursales");
    }
  }

  //Funcion que renderiza el componente visual jsx
  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="4" xs="10">
          <Logo />
        </Col>
      </Row>
        <FormCant cantCompanies={cantComp} name="compañia" /*sendCant={sendCant}*/ select={select}/>
      <Row className="row justify-content-end" style={{ marginTop: 10 }}>
        <Col md={3}>
          <Button color="primary" type="Submit" onClick={sendCant} active>
              Continuar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NumberCompany;
