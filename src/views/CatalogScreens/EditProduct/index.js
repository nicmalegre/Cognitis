//imports of all required libraries and components
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  ButtonToggle,
  UncontrolledCollapse,
  Button,
  Alert,
} from "reactstrap";
import CatalogLayout from "../../Layouts/CatalogLayout";
import axios from "axios";
import CarouselComponent from "./carousel";
import { useForm } from "react-hook-form";
import IndumentaryProduct from './indumentaryProduct'
import RetailProduct from './retailProduct'

// EditProduct Component
const EditProduct = (props) => {
  //imitating api data
  const listproducts = [
    {
      codProduct: 1,
      nameProduct: "product1",
      Descripción: "this is a test",
      Marca: "Marca1",
      Dolarizado: "si",
      Categoria: "categoria 1",
      Estado: "Estado 1",
      Proveedor: "Proveedor 1",
      CódProveedor: "22",
      Unidad: "L",
      Volumen: 23,
      Bultos: 41,
      BultoCliente: 25,
      margenMinimo: 15,
      margenMaximo: 20,
      costoNetoRepo: 23,
      Bonificaciones: 56,
      CostoBonificacion: 25,
      CostoFlete: 23,
      tasaPais: 10,
      costoActualConImp: 12,
      precioLista: 120,
      tipoContable: "Tipo 2",
      cuentaContable: "Cuenta 3",
      fabricante: "nombredelfabricante1",
      garantia:"nombredelagarantia",
      material:"nombredelmaterial",
      origen:"origendelprod",
      envio:"enviodelprod",
      codbarra:"codbarradelprod",
      linea:"ejemplolinea",
      segmento:"ejemplosegmento",
      service:"ejemploservice",
      serie:"ejemploserie",
      modelo:"ejemplomodelo",
      ntecnico:"ejemplo ntecnico",
      datostecnicos:'esto seria un ejemplo de datos tecnicos del producto si tuviese datos tecnicos'


    },

    {
      codProduct: 2,
      nameProduct: "product2",
      Descripción: "test2",
      Marca: "Marca2",
      Dolarizado: "no",
      Categoria: "categoria 2",
      Tipo: "tipo 2",
      Estado: "Estado 2",
      Proveedor: "Provedor 2",
      CódProveedor: "335",
      Unidad: "L",
      Volumen: "",
      Bulto: "",
    },
    {
      codProduct: 3,
      nameProduct: "product3",
      Descripción: "test3",
      Marca: "Marca3",
      Dolarizado: "si",
      Categoria: "categoria 3",
      Tipo: "tipo 2",
      Estado: "Estado 3",
      Proveedor: "Proveedor 3",
      CódProveedor: "336",
      Unidad: "B",
      Volumen: "",
      Bulto: "",
    },
    {
      codProduct: 4,
      nameProduct: "product4",
      Descripción: "test4",
      Marca: "Marca1",
      Dolarizado: "no",
      Categoria: "categoria 1",
      Tipo: "tipo 3",
      Estado: "Estado 1",
      Proveedor: "Proveedor 1",
      CódProveedor: "256",
      Unidad: "B",
      Volumen: "",
      Bulto: "",
    },
  ];
  //Imitating the selected product
  const id = 1;

  const datosRetail = {
      linea:"ejemplolinea",
      segmento:"ejemplosegmento",
      service:"ejemploservice",
      serie:"ejemploserie",
      modelo:"ejemplomodelo",
      ntecnico:"ejemplo ntecnico",
      datostecnicos:'esto seria un ejemplo de datos tecnicos del producto si tuviese datos tecnicos'

  }

  //using the react hook form library for validations
  const { register, handleSubmit, errors } = useForm();

  //product status and selected product
  const [productselect, setProductSelect] = useState({
  });
  const [prodCod,setProdCod] = useState("");
  const [products, setProducts] = useState([]);

  //this function gets the data from the server
  useEffect(() => {
    setProducts(listproducts);
    const arrayEdit = listproducts.map((item) =>
      item.codProduct === id
        ? setProductSelect(item)
        : console.log("product not found")
    );
    setProducts(arrayEdit);
  }, []);

  //This function prepared the data to be sent to the server. transforming the input to integer or float
  const transformToNumber = (data) => {
    //transform to integer
    data.codproduct = parseInt(data.codproduct);
    data.bultos = parseInt(data.bultos);
    data.volumen = parseInt(data.volumen);
    data.bultosClientes = parseInt(data.bultosClientes);
    data.margenMinimo = parseInt(data.margenMinimo);
    data.margenMaximo = parseInt(data.margenMaximo);
    //transform to float
    data.costoNetoReposicion = parseFloat(data.costoNetoReposicion);
    data.bonificaciones = parseFloat(data.bonificaciones);
    data.costoConBonificacion = parseFloat(data.costoConBonificacion);
    data.costoFlete = parseFloat(data.costoFlete);
    data.tasaPais = parseFloat(data.tasaPais);
    data.costoActualConImp = parseFloat(data.costoActualConImp);
    data.precioLista = parseFloat(data.precioLista);
  };

  /*const notification = (err) => {
    alert = (err)?(<Alert color="danger">This is a success alert — check it out!</Alert>)
    :(<Alert color="success">This is a success alert — check it out!</Alert>)
    setNotification({
      notificacion: true
    })
  };*/

  //Sending data to the server
  const onSubmit = (data, e) => {
    transformToNumber(data);
    axios
      .put("http://localhost:3000/api/catalog/editproduct/" + id, data)
      .then((res) => "producto editado con exito")
      .catch((err) => console.log(err));
    onDismiss();
    e.preventDefault();
  };

  //status to control the visibility of the alert
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(!visible);
  
  const handleChange = (e) => {
    const {value,name} = e.target;
    console.log(value);
    console.log(name);
    let stateProd = productselect;
    stateProd[name] = value;
    setProductSelect({
      stateProd,
    });
  }

  
  //Variable que indica la industria en este momento
  const industry = 'retail'; //se va setear con una propiedad que se pase en props 
 

  //Funcion que controla el dinamismo de los campos de acuerdo a la industria
  let industryMannage = industry === 'retail' ? (
    <RetailProduct datos = {datosRetail}/>
  ) : (
    <IndumentaryProduct />
  );


  return (
    <CatalogLayout>
      <Container>
        <span>
          <Alert color="primary" isOpen={visible} toggle={onDismiss}>
            Producto editado exitosamente!
          </Alert>
        </span>
        <Row>
          <Col lg="12" xs="12" style={{ marginTop: 20 }}>
            <h3>Editar Producto</h3>
          </Col>

          <Col lg="12" xs="12" style={{ marginTop: 25 }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row>
                <Label for="codproduct" sm={3}>
                  Código de Producto
                </Label>
                <Col sm={9}>
                  <Input
                    type="number"
                    name="codProduct"
                    value={productselect.codProduct}
                    //value = {prodCod}
                    onChange = {
                      handleChange
                    }
                    innerRef={register({
                      required: {
                        value: true,
                        message: "codigo del producto es requerido",
                      },
                    })}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.codproduct?.message}
                  </span>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={3}>
                  Nombre de Producto
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    name="nameProduct"
                    value={productselect.nameProduct}
                    onChange = {
                      handleChange
                    }
                    placeholder="Ingresar el nombre de producto"
                    innerRef={register({
                      required: {
                        value: true,
                        message: "Nombre del producto es requerido",
                      },
                    })}
                  />
                  <span className="text-danger span d-block mb-2">
                    {errors?.nameproduct?.message}
                  </span>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="" sm={3}>
                  Descripción
                </Label>
                <Col sm={9}>
                  <Input
                    type="textarea"
                    name="Descripción"
                    value={productselect.Descripción}
                    onChange = {
                      handleChange
                    }
                    placeholder="Ingrese una descripcion"
                    innerRef={register}
                  />
                </Col>
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Marca</Label>
                    <Input
                      type="select"
                      name="Marca"
                      value={productselect.Marca}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "marca es requerido",
                        },
                      })}
                    >
                      <option>Marca 1</option>
                      <option>Marca 2</option>
                      <option>Marca 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.marca?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Dolarizado</Label>
                    <Input
                      type="select"
                      name="Dolarizado"
                      value={productselect.Dolarizado}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "dolarizado es requerido",
                        },
                      })}
                    >
                      <option>No</option>
                      <option>Si</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.dolarizado?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Categoria</Label>
                    <Input
                      type="select"
                      name="Categoria"
                      value={productselect.Categoria}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "categoria es requerido",
                        },
                      })}
                    >
                      <option>Categoria 1</option>
                      <option>Categoria 2</option>
                      <option>Categoria 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.dolarizado?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Tipo</Label>
                    <Input
                      type="select"
                      name="Tipo"
                      value={productselect.Tipo}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "categoria es requerido",
                        },
                      })}
                    >
                      <option>Tipo 1</option>
                      <option>Tipo 2</option>
                      <option>Tipo 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.tipo?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Estado</Label>
                    <Input
                      type="select"
                      name="Estado"
                      value={productselect.Estado}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Estado es requerido",
                        },
                      })}
                    >
                      <option>Estado 1</option>
                      <option>Estado 2</option>
                      <option>Estado 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.estado?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Proveedor</Label>
                    <Input
                      type="select"
                      name="Proveedor"
                      value={productselect.Proveedor}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Proveedor es requerido",
                        },
                      })}
                    >
                      <option>Proveedor 1</option>
                      <option>Proveedor 2</option>
                      <option>Proveedor 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.proveedor?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Código de Proveedor</Label>
                    <Input
                      type="number"
                      name="CódProveedor"
                      value={productselect.CódProveedor}
                      onChange = {
                        handleChange
                      }
                    />{" "}
                    {/*why??*/}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="ecommerce" style={{ display: "inline" }}>
                  Publicado en E-Commerce
                </Label>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomRadio"
                    name="ecommerce"
                    value={productselect.ecommerce}
                    onChange = {
                      handleChange
                    }
                    innerRef={register}
                  />
                </div>
              </FormGroup>
              <Row>
                <Col md={8}>
                  <CarouselComponent></CarouselComponent>
                </Col>
                <Col md={4}>
                  <ButtonToggle
                    type="file"
                    color="primary"
                    style={{ marginTop: 10 }}
                  >
                    Añadir Imagen
                  </ButtonToggle>{" "}
                  <br />
                  <ButtonToggle color="danger" style={{ marginTop: 10 }}>
                    Remover Imagen
                  </ButtonToggle>{" "}
                  <br />
                  <ButtonToggle color="danger" style={{ marginTop: 10 }}>
                    Remover Todo
                  </ButtonToggle>{" "}
                  <br />
                </Col>
              </Row>

              <Label/>

              {/* Campos no comunes, cada industria tendra sus campos adicionales */}
              <hr style={{color: 'gray', border:'1px solid'}}/>
              <Col id="togglerCampos" lg="12" xs="12"  style={{marginTop:20, cursor:"pointer"}}>
                  <h4>Agregar Más Características</h4>
              </Col>
              <UncontrolledCollapse toggler="#togglerCampos">
                  <br/>
                  {industryMannage}
                  <Row form>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Material</Label>
                          <Input
                          type="text"
                          name="material"
                          value={productselect.material}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.material?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Origen</Label>
                          <Input
                          type="text"
                          name="origen"
                          value={productselect.origen}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.origen?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Fabricante</Label>
                          <Input
                          type="text"
                          name="fabricante"
                          value={productselect.fabricante}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.fabricante?.message}
                          </span>
                      </FormGroup>
                      </Col>
                  </Row>
                  <Row form>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Envio</Label>
                          <Input
                          type="text"
                          name="envio"
                          value={productselect.envio}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.envio?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Garantia</Label>
                          <Input
                          type="text"
                          name="garantia"
                          value={productselect.garantia}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.garantia?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Codigo de Barra</Label>
                          <Input
                          type="text"
                          name="codbarra"
                          value={productselect.codbarra}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          ></Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.codbarra?.message}
                          </span>
                      </FormGroup>
                      </Col>
                  </Row> 
                </UncontrolledCollapse>

              {/* Caracteristicas de Stock */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col id="togglerStock" lg="12" xs="12" style={{ marginTop: 20, cursor:"pointer"}}>
                <h4>Editar Caracteristicas de Stock</h4>
              </Col>
              <UncontrolledCollapse toggler="#togglerStock">
              <br/>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="">Unidad</Label>
                    <Input
                      type="select"
                      name="Unidad"
                      value={productselect.Unidad}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Proveedor es requerido",
                        },
                      })}
                    >
                      <option>U</option>
                      <option>L</option>
                      <option>B</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.unidad?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Volumen</Label>
                    <Input
                      type="number"
                      name="Volumen"
                      value={productselect.Volumen}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Volumen es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.volumen?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bultos</Label>
                    <Input
                      type="number"
                      name="Bultos"
                      value={productselect.Bultos}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bultos es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bultos?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bultos al Cliente</Label>
                    <Input
                      type="number"
                      name="BultoCliente"
                      value={productselect.BultoCliente}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bultos es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bultosClientes?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Minimo</Label>
                    <Input
                      type="number"
                      name="margenMinimo"
                      value={productselect.margenMinimo}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Margen minimo es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.margenMinimo?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Maximo</Label>
                    <Input
                      type="number"
                      name="margenMaximo"
                      value={productselect.margenMaximo}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Margen maximo es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.margenMaximo?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              </UncontrolledCollapse>

              {/* Costos y Precios */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col id="togglerCostosyPrecios" lg="12" xs="12" style={{ marginTop: 20 , cursor:"pointer"}}>
                <h4>Costos y Precios</h4>
              </Col>
              <UncontrolledCollapse toggler="#togglerCostosyPrecios">
              <br/>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo Neto/Reposicion</Label>
                    <Input
                      type="number"
                      name="costoNetoRepo"
                      value={productselect.costoNetoRepo}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Costo Neto de reposicion es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.costoNetoReposicion?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bonificaciones</Label>
                    <Input
                      type="number"
                      name="Bonificaciones"
                      value={productselect.Bonificaciones}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bonificaciones es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.bonificaciones?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo con Bonificacion</Label>
                    <Input
                      type="number"
                      name="CostoBonificacion"
                      value={productselect.CostoBonificacion}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Costo con Bonificacion es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.costoConBonificacion?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo Flete %</Label>
                    <Input
                      type="number"
                      name="CostoFlete"
                      value={productselect.CostoFlete}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Costo flete % es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.costoFlete?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Tasa Pais %</Label>
                    <Input
                      type="number"
                      name="tasaPais"
                      value={productselect.tasaPais}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Margen maximo es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.tasaPais?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo actual con impuestos</Label>
                    <Input
                      type="number"
                      name="costoActualConImp"
                      value={productselect.costoActualConImp}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Costo actual con impuesto es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.costoActualConImp?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Precio de Lista</Label>
                    <Input
                      type="number"
                      name="precioLista"
                      value={productselect.precioLista}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Precio de Lista es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.precioLista?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Button
                    style={{
                      marginTop: 32,
                      backgroundColor: "rgb(247, 147, 1)",
                    }}
                  >
                    Agregar Lista al Producto
                  </Button>{" "}
                  <Button
                    style={{
                      marginTop: 32,
                      backgroundColor: "rgb(247, 147, 1)",
                    }}
                  >
                    Otras Bonificaciones
                  </Button>{" "}
                </Col>
              </Row>
              </UncontrolledCollapse>

              {/* Contables */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col id="togglerContables" lg="12" xs="12" style={{ marginTop: 20 , cursor:"pointer"}}>
                <h4>Editar Contables</h4>
              </Col>
              <UncontrolledCollapse toggler="#togglerContables">
              <br/>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Tipo</Label>
                    <Input
                      type="select"
                      name="tipoContable"
                      value={productselect.tipoContable}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Tipo es requerido",
                        },
                      })}
                    >
                      <option>Bienes de cambio</option>
                      <option>Tipo 2</option>
                      <option>Tipo 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.tipoContable?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Cuenta</Label>
                    <Input
                      type="select"
                      name="cuentaContable"
                      value={productselect.cuentaContable}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Cuenta es requerido",
                        },
                      })}
                    >
                      <option>Venta de Mercaderia</option>
                      <option>Cuenta 2</option>
                      <option>Cuenta 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.cuenta?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Label/>
              </UncontrolledCollapse>

              <hr style={{ color: "gray", border: "1px solid" }} />
              <Row form className="content-align-end text-center">
                <Col md={12}>
                  <Button color="danger" style={{ margin: 20 }}>
                    Cancelar
                  </Button>{" "}
                  <Button color="primary" type="submit" style={{ margin: 20 }}>
                    Guardar Producto
                  </Button>{" "}
                </Col>
              </Row>


            </Form>
          </Col>
        </Row>
      </Container>
    </CatalogLayout>
  );
};

export default EditProduct;
