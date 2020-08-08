import React, { useState, Link, Fragment } from "react"; //importacion de la libreria
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
  CustomInput,
} from "reactstrap"; //importar elementos
import "../RegisterHeadCompany/index.css"; //importar css

const FormCant = (props) => {
  const [cond, setCond] = useState(null);
  const [cant, setCant] = useState(0);

  const sendCant = (e) => {
    const value= parseInt(e.target.value, 10)
    setCant(value);
    {(props.name == "compañia")?(props.cantCompanies(value)):(props.cantSuc(value));
    }
  };

  //Funcion que renderiza el componente visual jsx
  return (
    <Fragment>
      {/*<Row>
        <Col lg="8" md="4" xs="10">
          <Logo />
        </Col>
      </Row>*/}
      <Row>
        <Col className="text-center" xs="12">
          <h3 className="mt-5 text text-center" style={{ marginBottom: 30 }}>
            Por favor complete los siguientes campos
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card id="card-product" md="12" body style={{ marginTop: 50 }}>
            <Form id="card-user" /*body*/onSubmit={sendCant}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCheckbox">
                      Cuenta con mas de una {props.name}
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        label="Si"
                        onClick={() => setCond(1)}
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio2"
                        name="customRadio"
                        label="No"
                        onClick={() => setCond(0)}
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                {cond == 1 && (
                  <Col md={6}>
                    <Label for="cant">Cantidad de {props.name}</Label>
                    <Input
                      type="text"
                      name="cant"
                      id="cant"
                      placeholder={"ingrese la cantidad de" + " " + props.name}
                      onChange={sendCant}
                      required
                    />
                  </Col>
                )}
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default FormCant;
