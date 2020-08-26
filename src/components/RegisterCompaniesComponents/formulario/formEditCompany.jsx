import React, { useState } from "react"; //importacion de la libreria
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
import { useForm } from "react-hook-form";
import axios from "axios";
import Logo from "../../WizardComponents/base/logo";
//importar css
import "./index.css";
const Formulario = (props) => {
  //clase 'Nombre' extends React.component
  const { register, trigger, handleSubmit, errors } = useForm();


  const onSubmit = (data, e) => {
    /* e.preventDefault();
    axios
      .post("http://localhost:3000/api/headcompany/company/savecompany", data)
      .then((res) => "Se cargo en la base de datos una nueva compañia")
      .catch((err) => console.log(err));
    window.location.href = "/registercompany"; */
    e.preventDefault();
    console.log(data);
  };
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

  const [input, setInput] = useState({
    company: "",
    razonsocial: "",
    cuil: "",
  });

  const inputChange = async (event) => {
    let value = "";
    let inputvalue = event.target.value;
    let length = inputvalue.length;
    let name = event.target.name;
    let noerror = await trigger(name);
    console.log(noerror);
    if (length > 0 && noerror) {
      value = errors?.name ? false : true;
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
            Ingrese datos de la Compañia {props.cantCompanies}{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card id="card-user">
            <Form onSubmit={handleSubmit(onSubmit)} id="card-user">
              <br />
              <h6 className="text">
                Datos de la Compañia {props.cantCompanies}{" "}
              </h6>
              <Row form>
                <Col md={6}>
                  <span className="text-danger font-weight-bold">*</span>{" "}
                  <Label for="company">
                    Nombre de la Compañia {props.cantCompanies}{" "}
                  </Label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="ingrese el nombre de la compañia"
                    valid={input.company}
                    onChange={inputChange}
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Nombre de sucursal es requerido",
                      },
                    })}
                    defaultValue={props.company.company_name}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.company?.message}
                  </span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="razonsocial">Razon Social</Label>
                    <Input
                      type="text"
                      name="razonsocial"
                      id="razosocial"
                      valid={input.razonsocial}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Razon Social es requerido",
                        },
                      })}
                      defaultValue={props.company.company_business_name}
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
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="Cuil">CUIL o CUIT</Label>
                    <Input
                      //type="text"
                      name="cuil"
                      id="Cuil"
                      placeholder="Ejemplo XX12345678X"
                      maxLength="11"
                      valid={input.cuil}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Cuil o Cuit es requerido",
                        },
                        minLength: {
                          value: 11,
                          message: "No menos de 11 carácteres!",
                        },
                        pattern: {
                          value: /^[0-9]{11}$/,
                          message: "invalid cuil o cuit",
                        },
                      })}
                      defaultValue={props.company.company_cuit}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuil?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
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
                      <option
                        key={props.company.company_country}
                        value={props.company.company_country}
                      >
                        {props.company.company_country}
                      </option>
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
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      valid={input.email}
                      onChange={inputChange}
                      placeholder="Ingrese su email"
                      innerRef={register({
                        required: "Email es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                      defaultValue={props.company.company_email}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.email?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="Tipo de Industria">Tipo de Industria</Label>
                    <Input
                      type="select"
                      name="industria"
                      id="inductria"
                      placeholder="seleccione su industria"
                      innerRef={register({
                        required: "Tipo de industria requerido",
                      })}
                    >
                      <option
                        key={props.company.industry.industry_name}
                        value={props.company.industry.industry_id}
                      >
                        {props.company.industry.industry_name}
                      </option>
                      <option key="Retail" value="Retail">
                        Retail{" "}
                      </option>
                      <option key="Indumentaria" value="Indumentaria">
                        Indumentaria
                      </option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.inductria?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <span className="text-danger font-weight-bold">*</span>{" "}
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
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="codArea">Cod Area</Label>
                        <Input
                          type="number"
                          name="codArea"
                          id="codArea"
                          valid={input.codArea}
                          onChange={inputChange}
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
                              value: 2,
                              message: "No menos de 2 numeros!",
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
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="nrotel">Nro. Telefono</Label>
                        <Input
                          type="number"
                          name="nrotel"
                          id="nrotel"
                          valid={input.nrotel}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Numero de Telefono es requerido",
                            },
                            maxLength: {
                              value: 11,
                              message: "No más de 11 numeros!",
                            },
                            minLength: {
                              value: 4,
                              message: "No menos de 4 numeros!",
                            },
                          })}
                          defaultValue={props.company.company_tel}
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
                      type="text"
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
                      defaultValue={props.company.company_fax}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <h6 className="text">Datos Bancarios</h6>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
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
                      defaultValue={props.company.bankcompany[0].bank_company_name}
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
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="cuentaBancaria">
                      Numero de Cuenta Bancaria
                    </Label>
                    <Input
                      defaultValue={props.company.bankcompany[0].bank_company_account}
                      type="text"
                      name="cuentaBancaria"
                      id="cuentaBancaria"
                      valid={input.cuentaBancaria}
                      onChange={inputChange}
                      placeholder="Ingrese su nro de cuenta bancaria"
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
                    <span className="text-danger font-weight-bold">*</span>{" "}
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
                      defaultValue={props.company.bankcompany[0].bank_company_cbu}
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
                      defaultValue={props.company.bankcompany[0].bank_company_alias}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.alias?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Row
                className="row justify-content-end"
                style={{ marginTop: 10 }}
              >
                <Col md={2}>
                  <Button color="primary" type="submit" active>
                    Continuar
                  </Button>
                </Col>
              </Row>
              <br />
            </Form>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
};
export default Formulario;
