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

const RegisterHeadCompany = (props) => {
  //clase 'Nombre' extends React.component
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [input, setInput] = useState({
    value: false,
  });

  // const of countries
  const countries = [
    "Argentina",
    "Australia",
    "Bolivia",
    "Canada",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "New Zealand",
    "Paraguay",
    "Peru",
    "Surinam",
    "USA",
    "Uruguay",
    "Venezuela",
  ];

  const inputChange = (event) => {
    let value = "";
    let inputvalue = event.target.value;
    let length = inputvalue.length;
    if (length > 0) {
      value = errors?.nameHeadCompany ? false : true;
    } else {
      value = false;
    }
    setInput({
      ...input,
      value: value,
    });
  };

  //Funcion que renderiza el componente visual jsx
  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="4" xs="10">
          <Logo />
        </Col>
        <Col lg="8" xs="10">
          <h3 className="mt-5 text" style={{ marginBottom: 30 }}>
            Ingrese datos de la Compañia Matriz
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
        <Card id="card-password">
          <Form onSubmit={handleSubmit(onSubmit)} id="card-user" /*body*/> 
              <h6 className="text">Datos de la Compañia Matriz</h6>
              <Row form>
                <Col md={6}>
                  <Label for="nameHeadCompany">
                    Nombre de la Compañia Matriz
                  </Label>
                  <Input
                    type="text"
                    name="nameHeadCompany"
                    id="nameHeadCompany"
                    placeholder="ingrese el nombre de la compañia matriz"
                    valid={input.value}
                    onChange={inputChange}
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Compañia Matriz es requerido",
                      },
                    })}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.nameHeadCompany?.message}
                  </span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="razonsocial">Razon Social</Label>
                    <Input
                      type="text"
                      name="razonsocial"
                      id="razosocial"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Razon Social es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.razonsocial?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Cuil">CUIL o CUIT</Label>
                    <Input
                      type="number"
                      name="cuil"
                      id="Cuil"
                      placeholder="Ejemplo XX-12345678-X"
                      //max='99'
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Cuil o Cuit es requerido",
                        },
                        maxLength: {
                          value: 11,
                          message: "No más de 11 carácteres!",
                        },
                        minLength: {
                          value: 11,
                          message: "No menos de 11 carácteres!",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuil?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="pais">Pais</Label>
                    <Input
                      type="select"
                      name="pais"
                      id="pais"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                      })}
                      onChange={inputChange}
                    >
                      {/* Function to insert the countries of the array like items in dropdown menu */}
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Ingrese su email"
                      innerRef={register({
                        required: "Email es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.email?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="codPais">Cod Pais</Label>
                        <Input
                          type="text"
                          name="codPais"
                          id="codPais"
                          placeholder="+54"
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Codigo de Pais es requerido",
                            },
                            maxLength: {
                              value: 5,
                              message: "No más de 5 carácteres!",
                            },
                            minLength: {
                              value: 3,
                              message: "No menos de 3 carácteres!",
                            },
                          })}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.codPais?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="codArea">Cod Area</Label>
                        <Input
                          type="number"
                          name="codArea"
                          id="codArea"
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Codigo de Area es requerido",
                            },
                            maxLength: {
                              value: 6,
                              message: "No más de 6 numeros!",
                            },
                            minLength: {
                              value: 4,
                              message: "No menos de 4 numeros!",
                            },
                          })}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.codArea?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="nrotel">Nro. Telefono</Label>
                        <Input
                          type="number"
                          name="nrotel"
                          id="nrotel"
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Numero de Telefono es requerido",
                            },
                            maxLength: {
                              value: 11,
                              message: "No más de 6 numeros!",
                            },
                            minLength: {
                              value: 7,
                              message: "No menos de 4 numeros!",
                            },
                          })}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.nrotel?.message}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="nroFax">Fax</Label>
                    <Input
                      type="number"
                      name="fax"
                      id="nroFax"
                      placeholder="Ingrese el nro de fax de la compañia"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                      })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h6 className="text">Datos Bancarios</h6>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="nameBank">Nombre del Banco</Label>
                    <Input
                      type="text"
                      name="nameBank"
                      id="nameBank"
                      placeholder="Ingrese el nombre del banco"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Nombre del banco es requerido",
                        },
                        maxLength: {
                          value: 100,
                          message: "No más de 100 caracteres!",
                        },
                        minLength: {
                          value: 3,
                          message: "No menos de 3 caracteres!",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.nameBank?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cuentaBancaria">
                      Numero de Cuenta Bancaria
                    </Label>
                    <Input
                      type="number"
                      name="cuentaBancaria"
                      id="cuentaBancaria"
                      placeholder="Ingrese su nro de cuenta bancaria"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Numero de cuenta bancaria es requerido",
                        },
                        maxLength: {
                          value: 15,
                          message: "No más de 6 numeros!",
                        },
                        minLength: {
                          value: 12,
                          message: "No menos de 4 numeros!",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuentaBancaria?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cbu">CBU</Label>
                    <Input
                      type="number"
                      name="cbu"
                      id="cbu"
                      placeholder="Ingrese el nro de CBU"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Numero de CBU es requerido",
                        },
                        maxLength: {
                          value: 22,
                          message: "No más de 22 numeros",
                        },
                        minLength: {
                          value: 22,
                          message: "No menos de 22 numeros",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cbu?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="alias">Alias</Label>
                    <Input
                      type="text"
                      name="alias"
                      id="alias"
                      placeholder="Ingrese su alias"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                        maxLength: {
                          value: 20,
                          message: "No más de 20 caracteres!",
                        },
                        minLength: {
                          value: 6,
                          message: "No menos de 6 caracteres!",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.alias?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row
                className="row justify-content-end"
                style={{ marginTop: 10 }}
              >
                <Col md={3}>
                  {/*<Link to="/NumberCompanies">*/}
                  <Button color="primary" type="Submit" active>
                    Continuar
                  </Button>
                  {/*</Link>*/}
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterHeadCompany;
