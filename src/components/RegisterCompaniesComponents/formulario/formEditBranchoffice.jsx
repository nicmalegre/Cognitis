import React, { useState, useContext } from "react"; //importacion de la libreria
import { CompanyContext } from "../../../store/CompanyContext";
import { BRANCHOFFICEHOUSE_URL } from '../../../urls/url'
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
import "./index.css"; //importar css
import { useForm } from "react-hook-form";
import axios from "axios";
import Logo from "../../WizardComponents/base/logo";

const Formulario = (props) => {
  //clase 'Nombre' extends React.component
  const { register, trigger, handleSubmit, errors } = useForm();

  //DATA FROM CONTEXT
  const [dataCompany, setDataCompany] = useContext(CompanyContext);

  //preparing data for send
  const preparedData = (data) => {
    //data["company_id"] = props.match.params.id;
    data["address"] = "calle 123";
    data["country"] = "argentina";
    data["id"] = props.branch_office_id;
  };

  //function in charge of sending the data to the server
  const onSubmit = async (data, e) => {
    e.preventDefault();
    preparedData(data);
    //console.log(data);
    try {
      const res = await axios.put(
        `${BRANCHOFFICEHOUSE_URL}/update`, 
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

  //state in charge of controlling if each input is valid
  const [input, setInput] = useState({
    company: "",
    razonsocial: "",
    cuil: "",
  });

  //function that checks if each input is valid
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

  //function that breaks down the tel into country.code, area.code, number.tel
  const splited_tel = props.branchoffice.branch_tel.split("-");

  //Funcion que renderiza el componente visual jsx
  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="4" xs="10">
          <Logo />
        </Col>
        <Col lg="8" xs="10">
          <h3 className="mt-5 text" style={{ marginBottom: 30 }}>
            Edite los datos de la Sucursal {props.cantSuc}{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card id="card">
            <Form onSubmit={handleSubmit(onSubmit)} id="card-user">
              <br />
              <h6 className="text">Datos de la Sucursal {props.cantSuc} </h6>
              <Row form>
                <Col md={6}>
                  <span className="text-danger font-weight-bold">*</span>{" "}
                  <Label for="Sucursal">Nombre de la Sucursal</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="ingrese el nombre de la sucursal"
                    valid={input.name}
                    onChange={inputChange}
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Nombre de sucursal es requerido",
                      },
                    })}
                    defaultValue={props.branchoffice.branch_office_name}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.name?.message}
                  </span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <span className="text-danger font-weight-bold">*</span>{" "}
                    <Label for="razonsocial">Razon Social</Label>
                    <Input
                      type="text"
                      name="business_name"
                      id="razosocial"
                      valid={input.business_name}
                      onChange={inputChange}
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Razon Social es requerido",
                        },
                      })}
                      defaultValue={
                        props.branchoffice.branch_office_business_name
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.business_name?.message}
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
                      type="text"
                      name="cuit"
                      id="Cuil"
                      placeholder="Ejemplo XX12345678X"
                      maxLength="11"
                      valid={input.cuit}
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
                      defaultValue={props.branchoffice.branch_office_cuit}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuit?.message}
                    </span>
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
                      defaultValue={props.branchoffice.branch_office_email}
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
                        <Label for="nrotel">Nro. Telefono</Label>
                        <Input
                          type="number"
                          name="tel"
                          valid={input.tel}
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
                          {errors?.tel?.message}
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
                      valid={input.fax}
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
                      defaultValue={props.branchoffice.branch_office_fax}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.fax?.message}
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
                      name="bank_name"
                      maxLength="45"
                      valid={input.bank_name}
                      onChange={inputChange}
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
                      defaultValue={
                        props.branchoffice.bankbranch[0].bank_branch_office_name
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_name?.message}
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
                      defaultValue={
                        props.branchoffice.bankbranch[0]
                          .bank_branch_office_account
                      }
                      name="bank_account"
                      valid={input.bank_account}
                      maxLength="12"
                      onChange={inputChange}
                      placeholder="Ejemplo: XXX-XXXXXX/X"
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
                      {errors?.bank_account?.message}
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
                      name="bank_cbu"
                      id="cbu"
                      valid={input.bank_cbu}
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
                        pattern: {
                          value: /^\d{22}$/i,
                          message: "Numero de cbu invalido",
                        },
                      })}
                      defaultValue={
                        props.branchoffice.bankbranch[0].bank_branch_office_cbu
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_cbu?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="alias">Alias</Label>
                    <Input
                      type="text"
                      name="bank_alias"
                      maxLength="20"
                      valid={input.bank_alias}
                      onChange={inputChange}
                      placeholder="Ingrese su alias"
                      innerRef={register({
                        required: {
                          value: false,
                        },
                        minLength: {
                          value: 6,
                          message: "No menos de 6 caracteres!",
                        },
                        pattern: {
                          value: /^[A-Za-z0-9.-]{6,20}$/i,
                          message: "alias invalido",
                        },
                      })}
                      defaultValue={
                        props.branchoffice.bankbranch[0]
                          .bank_branch_office_alias
                      }
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bank_alias?.message}
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
