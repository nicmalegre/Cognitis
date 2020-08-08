import React, { useState } from "react"; //importacion de la libreria
//import { Link } from "react-router-dom";
import {
  FormGroup,
  Input,
  Row,
  Container,
  Col,
  Label,
  Card,
  Form,
  Button,
} from "reactstrap"; //importar elementos
import "../RegisterHeadCompany/index.css"; //importar css
import { useForm } from "react-hook-form";
import Logo from "../base/logo";

const Formsuc = (props) => {
  //clase 'Nombre' extends React.component
  const { register, trigger, handleSubmit, errors } = useForm();

  
  
  
  const onSubmit = (data,e) => {
    e.preventDefault();
    descontar();
    props.dataSucur(data);
    e.target.reset();
    setInput({
      });
  };
  
  const descontar = async () => {
    const formvalid = await trigger();
    if (formvalid) {
      props.contador();
    }
  };
  
  const [input, setInput] = useState({
    company:'',
    razonsocial:'',
    cuil:'',
    
  });

  const inputChange =async (event) => {
    let value = "";
    let inputvalue = event.target.value;
    let length = inputvalue.length;
    let name = event.target.name
    let noerror= await trigger(name)
    console.log(noerror)
    if ((length > 0) && (noerror)) {
      value = errors?.name? false : true;
    } else {
      value = false;
    }
    setInput({
      ...input,
      [name]: value,
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
            Ingrese datos de la Sucursal {props.cantSuc}{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card id="card-password">
            <Form onSubmit={handleSubmit(onSubmit)} id="card-user" /*body*/>
              <h6 className="text">
                Datos de la Sucursal {props.cantSuc}{" "}
              </h6>
              <Row form>
                <Col md={6}>
                  <Label for="Sucursal">Nombre de la Sucursal</Label>
                  <Input
                    type="text"
                    name="sucursal"
                    id="sucursal"
                    placeholder="ingrese el nombre de la sucursal"
                    valid={input.company}
                    onChange={inputChange}
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Nombre de sucursal es requerido",
                      },
                    })}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.sucursal?.message}
                  </span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="razonsocial">Razon Social</Label>
                    <Input
                      type="text"
                      name="razonsocial"
                      id="razosocial"
                      valid={input.razonsocial}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          //value: true,
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
                      type="text"
                      name="cuil"
                      id="Cuil"
                      placeholder="Ejemplo XX12345678X"
                      valid={input.cuil}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          //value: true,
                          message: "Cuil o Cuit es requerido",
                        },
                        minLength: {
                          value: 11,
                          message: "No menos de 11 carácteres!",
                        },
                        pattern: {
                          value: /^[0-9]{11}$/,
                          message: "invalid cuil o cuit"
                        }
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuil?.message}
                    </span>
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
                      valid={input.email}
                      onChange={inputChange}
                      placeholder="Ingrese su email"
                      innerRef={register({
                        //required: "Email es requerido",
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
                          valid={input.codPais}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                             // value: true,
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
                          valid={input.codArea}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                             // value: true,
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
                          valid={input.nrotel}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                             // value: true,
                              message: "Numero de Telefono es requerido",
                            },
                            maxLength: {
                              value: 11,
                              message: "No más de 11 numeros!",
                            },
                            minLength: {
                              value: 7,
                              message: "No menos de 7 numeros!",
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
                      valid={input.fax}
                      onChange={inputChange}
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
                      valid={input.nameBank}
                      onChange={inputChange}
                      placeholder="Ingrese el nombre del banco"
                      innerRef={register({
                        required: {
                          //value: true,
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
                      valid={input.cuentaBancaria}
                      onChange={inputChange}
                      placeholder="Ingrese su nro de cuenta bancaria"
                      innerRef={register({
                        required: {
                        //  value: true,
                          message: "Numero de cuenta bancaria es requerido",
                        },
                        maxLength: {
                          value: 15,
                          message: "No más de 15 numeros!",
                        },
                        minLength: {
                          value: 12,
                          message: "No menos de 12 numeros!",
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
                      valid={input.cbu}
                      onChange={inputChange}
                      placeholder="Ingrese el nro de CBU"
                      innerRef={register({
                        required: {
                         // value: true,
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
                      valid={input.alias}
                      onChange={inputChange}
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
                  <Button
                    color="primary"
                    type="submit"
                    active
                  >
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
export default Formsuc;
