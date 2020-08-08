import React, { useState, Link } from "react"; //importacion de la libreria
//import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "reactstrap"; //importar elementos
import "../RegisterHeadCompany/index.css"; //importar css
import FormCant from "../formulario/formCant";
import Logo from "../base/logo";
import { useHistory } from "react-router-dom";

const NumberSuc = (props) => {
  const [cond, setCond] = useState(null);
  const [cantSuc, setCantSuc] = useState(0);

  const cantSucursales = (cant) => {
    setCantSuc(
      cant);
  };
  
  //store in components father(app) data of number of branches
  let history = useHistory();
  const sendCant = (cant, event) => {
    console.log(event)
    props.cantSuc(cantSuc);
    if (cantSuc > 0) {
      history.push("/registersucursal");
    }else{
      history.push("/fin");
    }
  };
  //Funcion que renderiza el componente visual jsx
  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="4" xs="10">
          <Logo />
        </Col>
      </Row>
      <FormCant cantSuc={cantSucursales} name="sucursales" /*sendCant={sendCant}*/ />
      <Row className="row justify-content-end" style={{ marginTop: 10 }}>
        <Col md={3}>
          <Button color="primary" onClick={sendCant} active>
            Continuar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NumberSuc;
