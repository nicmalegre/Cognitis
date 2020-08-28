import React, { useState, useEffect } from "react"; //importacion de la libreria
import { withRouter } from "react-router-dom";
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
    e.preventDefault();
    const { company_id } = props;
    console.log('company id', company_id );
    axios
      .put(`http://localhost:3000/api/company/${company_id}`, data)
      .then(() => {
        props.history.goBack();
      })
      .catch((err) => console.log(err));
    console.log('Datos del form',data);  
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

  //get country code, area code and number from company tel spliting by '-' character
  const splited_tel = props.company.company_tel.split("-");

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
                  <Label for="company_name">
                    Nombre de la Compañia {props.cantCompanies}{" "}
                  </Label>
                  <Input
                    type="text"
                    name="company_name"
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
                    <Label for="company_business_name">Razon Social</Label>
                    <Input
                      type="text"
                      name="company_business_name"
                      id="razosocial"
                      valid={input.company_business_name}
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
                    <Label for="company_cuit">CUIL o CUIT</Label>
                    <Input
                      type="text"
                      name="company_cuit"
                      id="Cuil"
                      placeholder="Ejemplo XX12345678X"
                      maxLength="11"
                      valid={input.company_cuit}
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
                      {errors?.company_cuit?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="company_country">Pais</Label>
                    <Input
                      type="select"
                      name="company_country"
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
                    <Label for="company_email">Email</Label>
                    <Input
                      type="email"
                      name="company_email"
                      id="email"
                      valid={input.company_email}
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
                      {errors?.company_email?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="company_house_industry_id">Tipo de Industria</Label>
                    <Input
                      type="select"
                      name="company_house_industry_id"
                      id="inductria"
                      placeholder="seleccione su industria"
                      innerRef={register({
                        required: "Tipo de industria requerido",
                      })}
                    >
                      {
                        //show industry slected
                        props.industries
                          .filter(
                            (industry) =>
                              industry.industry_id ==
                              props.company.company_house_industry_id
                          )
                          .map((industry) => (
                            <option
                              key={industry.industry_name}
                              value={industry.industry_id}
                            >
                              {industry.industry_name}
                            </option>
                          ))
                      }
                      {
                        //show the rest of indsutris
                        props.industries
                          .filter(
                            (industry) =>
                              industry.industry_id !=
                              props.company.company_house_industry_id
                          )
                          .map((industry) => (
                            <option
                              key={industry.industry_name}
                              value={industry.industry_id}
                            >
                              {industry.industry_name}
                            </option>
                          ))
                      }
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
                        <Label for="country_code">Cod Pais</Label>
                        <Input
                          type="text"
                          name="country_code"
                          id="codPais"
                          placeholder="+54"
                          valid={input.country_code}
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
                          defaultValue={splited_tel[0]}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.country_code?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="area_code">Cod Area</Label>
                        <Input
                          type="number"
                          name="area_code"
                          id="codArea"
                          valid={input.area_code}
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
                          defaultValue={splited_tel[1]}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.area_code?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="company_tel">Nro. Telefono</Label>
                        <Input
                          type="number"
                          name="company_tel"
                          id="nrotel"
                          valid={input.company_tel}
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
                          defaultValue={splited_tel[2]}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.company_tel?.message}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="company_fax">Fax</Label>
                    <Input
                      type="text"
                      name="company_fax"
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
                    <Label for="bank_company_name">Nombre del Banco</Label>
                    <Input
                      type="text"
                      name="bank_company_name"
                      id="bank_company_name"
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
                      defaultValue={
                        props.company.bankcompany[0].bank_company_name
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_company_name?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="bank_company_account">
                      Numero de Cuenta Bancaria
                    </Label>
                    <Input
                      defaultValue={
                        props.company.bankcompany[0].bank_company_account
                      }
                      type="text"
                      name="bank_company_account"
                      id="cuentaBancaria"
                      valid={input.bank_company_account}
                      onChange={inputChange}
                      placeholder="Ingrese su nro de cuenta bancaria"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "El número de cuenta bancaria es requerido",
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
                      {errors?.bank_company_account?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="bank_company_cbu">CBU</Label>
                    <Input
                      type="number"
                      name="bank_company_cbu"
                      id="cbu"
                      valid={input.bank_company_cbu}
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
                      defaultValue={
                        props.company.bankcompany[0].bank_company_cbu
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_company_cbu?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bank_company_alias">Alias</Label>
                    <Input
                      type="text"
                      name="bank_company_alias"
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
                      defaultValue={
                        props.company.bankcompany[0].bank_company_alias
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_company_alias?.message}
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
export default withRouter(Formulario);
