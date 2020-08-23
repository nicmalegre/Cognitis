//imports of all required libraries and components
import React, { useState, useEffect, useLayoutEffect } from "react";
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
import RetailProduct from './retailProduct';
import {connect} from 'react-redux';
import {
  fetchProductoData
} from '../../../Redux/Actions/ProductosActions';
// EditProduct Component
const EditProduct = (props) => {
  //imitating api data
  /*
  const listproducts = [
    {
      product_id: 1,
      product_name: "product1",
      product_description: "this is a test",
      product_brand: "product_brand1",
      product_is_dollar: "si",
      category: "category 1",
      product_status: "product_status 1",
      Proveedor: "Proveedor 1",
      CódProveedor: "22",
      product_unit: "L",
      product_vol: 23,
      product_package: 41,
      product_package_to_client: 25,
      product_min_margin: 15,
      product_max_margin: 20,
      costoNetoRepo: 23,
      product_bonification: 56,
      product_price_bonification: 25,
      product_freight_cost: 23,
      tasaPais: 10,
      costoActualConImp: 12,
      precioLista: 120,
      product_accountant_type: "Tipo 2",
      product_accountant_account: "Cuenta 3",
      fabricante: "nombredelfabricante1",
      product_warranty:"nombredelaproduct_warranty",
      product_material:"nombredelproduct_material",
      product_origin:"product_origindelprod",
      product_shipping:"product_shippingdelprod",
      product_barcode:"product_barcodedelprod",
      linea:"ejemplolinea",
      segmento:"ejemplosegmento",
      service:"ejemploservice",
      serie:"ejemploserie",
      modelo:"ejemplomodelo",
      ntecnico:"ejemplo ntecnico",
      datostecnicos:'esto seria un ejemplo de datos tecnicos del producto si tuviese datos tecnicos'


    },

    {
      product_id: 2,
      product_name: "product2",
      product_description: "test2",
      product_brand: "product_brand2",
      product_is_dollar: "no",
      category: "category 2",
      Tipo: "tipo 2",
      product_status: "product_status 2",
      Proveedor: "Provedor 2",
      CódProveedor: "335",
      product_unit: "L",
      product_vol: "",
      Bulto: "",
    },
    {
      product_id: 3,
      product_name: "product3",
      product_description: "test3",
      product_brand: "product_brand3",
      product_is_dollar: "si",
      category: "category 3",
      Tipo: "tipo 2",
      product_status: "product_status 3",
      Proveedor: "Proveedor 3",
      CódProveedor: "336",
      product_unit: "B",
      product_vol: "",
      Bulto: "",
    },
    {
      product_id: 4,
      product_name: "product4",
      product_description: "test4",
      product_brand: "product_brand1",
      product_is_dollar: "no",
      category: "category 1",
      Tipo: "tipo 3",
      product_status: "product_status 1",
      Proveedor: "Proveedor 1",
      CódProveedor: "256",
      product_unit: "B",
      product_vol: "",
      Bulto: "",
    },
  ];
  //Imitating the selected product
  const id = 1;
  */
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
  const [productselect, setDataProduct] = useState({
  });
  const [prodCod,setProdCod] = useState("");
  const [products,setProducts] = useState([]);
  const [prodTipo,setProdTipo] = useState({});
  let industry = "retail";
  const [nombre,setNombre] = useState(0);

  //this function gets the data from the server
  useEffect(() => {   
    const id_product = 61;
    /*const obtenerData = async() => {
      await props.dispatch(fetchProductoData(id_product));
      console.log(props);
      setDataProduct(props.productos.productoActual);
      setNombre(props.productos.productoActual.producto_id);
    }
    */
    axios.get('http://localhost:3000/api/products/productdata/' + id_product)
    .then( async res => {
      props.dispatch(fetchProductoData(id_product))
      setDataProduct(res.data);
      console.log(res.data) //le tenemos que pasar res para setear el objeto local
      let industry2 = res.data.products_industry_id;
      //if(industry2 === 1){
        setProdTipo({
          product_id: res.data.product_id,
          product_line: res.data.product_line,
          product_seed: res.data.product_seed,
          product_service: res.data.product_service,
          product_serie: res.data.product_serie,
          product_NTecnico: res.data.product_NTecnico,
          product_status: res.data.product_status,
          product_technical_data: res.data.product_technical_data,
          product_model: res.data.product_model,
        })//}else{
          //console.log("otro tipo");
        //};
        console.log(prodTipo);
        console.log(productselect)
      }).catch(err => console.log(err));///mostrar error
      console.log(props);
      //console.log(props);
  }, []);

  //This function prepared the data to be sent to the server. transforming the input to integer or float
  const transformToNumber = (data) => {
    //transform to integer
    data.product_id = parseInt(data.product_id);
    data.product_package = parseInt(data.product_package);
    data.product_vol = parseInt(data.product_vol);
    data.product_package_to_client = parseInt(data.product_package_to_client);
    data.product_min_margin = parseInt(data.product_min_margin);
    data.product_max_margin = parseInt(data.product_max_margin);
    //transform to float
    //data.costoNetoReposicion = parseFloat(data.costoNetoReposicion);
    data.product_bonification = parseFloat(data.product_bonification);
    data.product_price_bonification = parseFloat(data.product_price_bonification);
    data.product_freight_cost = parseFloat(data.product_freight_cost);
    //data.tasaPais = parseFloat(data.tasaPais);
    //data.costoActualConImp = parseFloat(data.costoActualConImp);
    //data.precioLista = parseFloat(data.precioLista);
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
      .put("http://localhost:3000/api/catalog/editproduct/" + 61, data)
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
    setDataProduct({
      stateProd,
    });
  }

  
  //Variable que indica la industria en este momento
  //se va setear con una propiedad que se pase en props 
 

  //Funcion que controla el dinamismo de los campos de acuerdo a la industria
  /*let industryMannage = industry == "retail" ? (
    <RetailProduct datos = {{
      product_id: productselect.product_id,
      product_line: productselect.product_line,
      product_seed: productselect.product_seed,
      product_service: productselect.product_service,
      product_serie: productselect.product_serie,
      product_NTecnico: productselect.product_NTecnico,
      product_status: productselect.product_status,
      product_technical_data: productselect.product_technical_data,
      product_model: productselect.product_model,
    }}/>
  ) : (
    <IndumentaryProduct />
  );*/


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
                <Label for="product_id" sm={3}>
                  Código de Producto
                </Label>
                <Col sm={9}>
                  <Input
                    type="number"
                    name="product_id"
                    //value={productselect.product_id}
                    //value = {prodCod}
                    value = {nombre}
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
                    {errors?.product_id?.message}
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
                    name="product_name"
                    value={productselect.product_name}
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
                  Descripcion
                </Label>
                <Col sm={9}>
                  <Input
                    type="textarea"
                    name="product_description"
                    value={productselect.product_description}
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
                      name="product_brand"
                      value={productselect.product_brand}
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
                      {errors?.product_brand?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Dolarizado</Label>
                    <Input
                      type="select"
                      name="product_is_dollar"
                      value={productselect.product_is_dollar}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Dolarizacion es requerido",
                        },
                      })}
                    >
                      <option>No</option>
                      <option>Si</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_is_dollar?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">category</Label>
                    <Input
                      type="select"
                      name="category"
                      value={productselect.category}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "category es requerido",
                        },
                      })}
                    >
                      <option>category 1</option>
                      <option>category 2</option>
                      <option>category 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.category?.message}
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
                      name="product_type"
                      value={productselect.product_type}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "category es requerido",
                        },
                      })}
                    >
                      <option>Tipo 1</option>
                      <option>Tipo 2</option>
                      <option>Tipo 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.prodcut_type?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Estado</Label>
                    <Input
                      type="select"
                      name="product_status"
                      value={productselect.product_status}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_status es requerido",
                        },
                      })}
                    >
                      <option>product_status 1</option>
                      <option>product_status 2</option>
                      <option>product_status 3</option>
                    </Input>
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_status?.message}
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
                      //value={productselect.Proveedor}
                      /*onChange = {
                        handleChange
                      }*/
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
                  {
                  <RetailProduct datos = {props.productos.productoActual}/>
                  }
                  <Row form>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Material</Label>
                          <Input
                          type="text"
                          name="product_material"
                          value={productselect.product_material}
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
                          {errors?.product_material?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Origen</Label>
                          <Input
                          type="text"
                          name="product_origin"
                          value={productselect.product_origin}
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
                          {errors?.product_origin?.message}
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
                          name="product_shipping"
                          value={productselect.product_shipping}
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
                          {errors?.product_shipping?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Garantia</Label>
                          <Input
                          type="text"
                          name="product_warranty"
                          value={productselect.product_warranty}
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
                          {errors?.product_warranty?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Codigo de Barra</Label>
                          <Input
                          type="text"
                          name="product_barcode"
                          value={productselect.product_barcode}
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
                          {errors?.product_barcode?.message}
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
                      name="product_unit"
                      value={productselect.product_unit}
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
                      {errors?.product_unit?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Volumen</Label>
                    <Input
                      type="number"
                      name="product_vol"
                      value={productselect.product_vol}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_vol es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_vol?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Package</Label>
                    <Input
                      type="number"
                      name="product_package"
                      value={productselect.product_package}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_package es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_package?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Paquetes al Cliente</Label>
                    <Input
                      type="number"
                      name="product_package_to_client"
                      value={productselect.product_package_to_client}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_package es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_packageClientes?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Minimo</Label>
                    <Input
                      type="number"
                      name="product_min_margin"
                      value={productselect.product_min_margin}
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
                      {errors?.product_min_margin?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Maximo</Label>
                    <Input
                      type="number"
                      name="product_max_margin"
                      value={productselect.product_max_margin}
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
                      {errors?.product_max_margin?.message}
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
                    <Label for="exampleEmail">Bonificacion Producto</Label>
                    <Input
                      type="number"
                      name="product_bonification"
                      value={productselect.product_bonification}
                      onChange = {
                        handleChange
                      }
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_bonification es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_bonification?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo con Bonificacion</Label>
                    <Input
                      type="number"
                      name="product_price_bonification"
                      value={productselect.product_price_bonification}
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
                      {errors?.product_price_bonification?.message}
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
                      name="product_freight_cost"
                      value={productselect.product_freight_cost}
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
                      {errors?.product_freight_cost?.message}
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
                    Otras product_bonification
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
                      name="product_accountant_type"
                      value={productselect.product_accountant_type}
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
                      {errors?.product_accountant_type?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Cuenta</Label>
                    <Input
                      type="select"
                      name="product_accountant_account"
                      value={productselect.product_accountant_account}
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
                  <Button color="primary" type="submit" style={{ margin: 20 }} onClick = {() => {console.log(errors)}}>
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

const mapStateToProps = (state) => {
  return {
    productos: state.productos,  
  }
}

export default connect(
  mapStateToProps,
)(EditProduct)
