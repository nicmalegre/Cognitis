import React, { useState, useContext } from "react"; //importacion de la libreria
import { CompanyContext } from "../../../store/CompanyContext";
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

  //DATA FROM CONTEXT
  const [dataCompany, setDataCompany] = useContext(CompanyContext);

  //DATA FOR SUBMIT
  const [data, setData] = useState({ head_house_id: props.match.params.id });

  // const changeTel = (data) => {
  //   data.company_tel = data.codPais + data.codArea + data.company_tel;
  // };

  const changeIndustry = (data) => {
    if (data.company_house_industry_id === "Retail") {
      data.company_house_industry_id = "1";
    } else {
      data.company_house_industry_id = "11";
    }
  };

  //preparing data for send
  const preparedData = (data) => {
    //changeTel(data);
    changeIndustry(data);
    data["head_house_id"] = props.match.params.id;
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    preparedData(data);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/company/newcompany",
        data
      );
      if (res.status == 200) {
        props.history.goBack();
      } else {
        console.log("error" + res);
      }
    } catch (e) {
      console.log(e);
    }
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
                    name="company_name"
                    placeholder="ingrese el nombre de la compañia"
                    valid={input.company_name}
                    onChange={inputChange}
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Nombre de sucursal es requerido",
                      },
                    })}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.company_name?.message}
                  </span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="razonsocial">Razon Social</Label>
                    <Input
                      type="text"
                      name="company_business_name"
                      valid={input.company_business_name}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Razon Social es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.company_business_name?.message}
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
                      name="company_cuit"
                      placeholder="Ejemplo: XX12345678X"
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
                          message: "cuil o cuit invalido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.company_cuit?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="pais">Pais</Label>
                    <Input
                      type="select"
                      name="company_country"
                      valid={input.company_country}
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
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="company_email"
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
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.company_email?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="Tipo de Industria">Tipo de Industria</Label>
                    <Input
                      type="select"
                      name="company_house_industry_id"
                      placeholder="seleccione su industria"
                      valid={input.company_house_industry_id}
                      onChange={inputChange}
                      innerRef={register({
                        required: "Tipo de industria requerido",
                      })}
                    >
                      <option key="Retail" value="Retail">
                        Retail{" "}
                      </option>
                      <option key="Indumentaria" value="Indumentaria">
                        Indumentaria
                      </option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.company_house_industry_id?.message}
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
                          name="country_code"
                          placeholder="+54"
                          maxLength="5"
                          valid={input.country_code}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Codigo de Pais es requerido",
                            },
                            minLength: {
                              value: 2,
                              message: "No menos de 2 carácteres!",
                            },
                            pattern: {
                              value: /^[+][0-9]{1,5}$/i,
                              message: "codigo de pais invalido",
                            },
                          })}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.country_code?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="codArea">Cod Area</Label>
                        <Input
                          type="number"
                          name="area_code"
                          valid={input.area_code}
                          onChange={inputChange}
                          innerRef={register({
                            required: {
                              value: true,
                              message: "Codigo de Area es requerido",
                            },
                            maxLength: {
                              value: 4,
                              message: "No más de 4 numeros!",
                            },
                            minLength: {
                              value: 2,
                              message: "No menos de 2 numeros!",
                            },
                          })}
                        />
                        <span className="text-danger span d-block mb-2">
                          {errors?.area_code?.message}
                        </span>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <span className="text-danger font-weight-bold">*</span>{" "}
                        <Label for="nrotel">Nro. Telefono</Label>
                        <Input
                          type="number"
                          name="company_tel"
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
                    <Label for="nroFax">Fax</Label>
                    <Input
                      type="text"
                      name="company_fax"
                      valid={input.company_fax}
                      onChange={inputChange}
                      placeholder="Ingrese el nro de fax Ejemplo +54XXXXXXXXXX"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                        maxLength: {
                          value: 20,
                          message: "No más de 20 numeros!",
                        },
                        minLength: {
                          value: 6,
                          message: "No menos de 6 numeros!",
                        },
                        pattern: {
                          value: /^[+][0-9]{6,20}$/,
                          message: "Nro de fax invalido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.company_fax?.message}
                    </span>
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
                      name="bank_company_name"
                      valid={input.bank_company_name}
                      onChange={inputChange}
                      maxLength="45"
                      placeholder="Ingrese el nombre del banco"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Nombre del banco es requerido",
                        },
                        maxLength: {
                          value: 45,
                          message: "No más de 45 caracteres!",
                        },
                        minLength: {
                          value: 3,
                          message: "No menos de 3 caracteres!",
                        },
                        pattern: {
                          value: /^[A-Z]+$/i,
                          message: "nombre del banco invalido",
                        },
                      })}
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
                    <Label for="cuentaBancaria">
                      Numero de Cuenta Bancaria
                    </Label>
                    <Input
                      name="bank_company_account"
                      valid={input.bank_company_account}
                      onChange={inputChange}
                      placeholder="Ejemplo: XXX-XXXXXX/X"
                      maxLength="12"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Numero de cuenta bancaria es requerido",
                        },
                        pattern: {
                          value: /^\d{3}-\d{6}[/]\d{1}/i,
                          message: "Numero de cuenta bancaria invalido",
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
                    <Label for="cbu">CBU</Label>
                    <Input
                      type="number"
                      name="bank_company_cbu"
                      valid={input.bank_company_cbu}
                      onChange={inputChange}
                      placeholder="Ingrese el nro de CBU"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Numero de CBU es requerido",
                        },
                        minLength: {
                          value: 22,
                          message: "No menos de 22 numeros!",
                        },
                        maxLength: {
                          value: 22,
                          message: "No más de 22 numeros!",
                        },
                        pattern: {
                          value: /^\d{22}$/i,
                          message: "Numero de cbu invalido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_company_cbu?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="alias">Alias</Label>
                    <Input
                      type="text"
                      name="bank_company_alias"
                      maxLength="20"
                      valid={input.bank_company_alias}
                      onChange={inputChange}
                      placeholder="Ingrese su alias"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                        // maxLength: {
                        //   value: 20,
                        //   message: "No más de 20 caracteres!",
                        // },
                        minLength: {
                          value: 6,
                          message: "No menos de 6 caracteres!",
                        },
                        pattern: {
                          value: /^[A-Za-z0-9.-]{6,20}$/i,
                          message: "alias invalido",
                        },
                      })}
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
                  {/*<Link to="/NumberCompanies">*/}
                  <Button color="primary" type="submit" active>
                    Continuar
                  </Button>
                  {/*</Link>*/}
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
