//imports of all required libraries and components
import React, { useState, useEffect, useContext } from "react";
import {ProviderContext} from '../../../store/ProvidersContext';
import ProvidersTable from '../ProvidersTable'
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
import {PRODUCTS_URL,CATEGORIES_URL} from '../../../urls/url';
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
import { FaIndustry } from "react-icons/fa";
// EditProduct Component
const EditProduct = (props) => {
  //using the react hook form library for validations
  const { register, handleSubmit, errors } = useForm();
  //data product selected
  const [productselect, setDataProduct] = useState({});
  //All Categories
  const [categorias,setCategorias] = useState([]);
  //All Providers
  const [proveedores,setProv] = useState([]);
  //This data reflects if the selected product is a retail or indumentary product
  const [dataExtra,setDataExtra] = useState({});
  //Context of providers
  const [providersContext,setProvidersContext] = useContext(ProviderContext);
  //Actual providers of the selected product
  const [provActual,setProvActual] = useState([]);
  const [ind,setInd] = useState();
  //const [dataExtra,setDataExtra] = useState({})

  //Load Categories Function
  const cargarCategorias = () => {
    axios.get(`${CATEGORIES_URL}/`).
    then(res => {
      setCategorias(
        res.data
      );
    }).
    catch(error => {
      console.log(error);
    })
  }

  const setearDataExtra = (objeto) => {
    setDataExtra({
      ...dataExtra,
      ...objeto,
    });
  }

  //Load Providers Function
  const cargarProv = () => {
    axios.get(`${PRODUCTS_URL}/providers/allProviders`).
    then(res => {
      setProv(
        res.data
      )
      setProvidersContext({
        providers: res.data.map(value=>{
          return ({
           ...value,
           selected: false, 
          })
        })
      });
    }).
    catch(error => {
      console.log(error);
    })
  }
  //Load Providers of the actual product
  const cargarProvProd = (dataProd) => {
    axios.post(`${PRODUCTS_URL}/providers/getProvider`,dataProd).
    then(res=>{
      setProvActual(
        res.data
      );
    }).
    catch(error=>{console.log(error)});
  }
  //Load Data of the Choosed Product
  const traerDatosProductos = (id_product) => {
    axios.get(`${PRODUCTS_URL}/productdata/${id_product}`)
    .then( async res => {
      await props.dispatch(fetchProductoData(res.data))
      setDataProduct(res.data);
      setInd(res.data.nombreIndustria);
    }).
    catch(err => console.log(err));
  }
  
  //This function gets the data from the server
  useEffect(() => {   
    const id_product = props.match.params.idProd;
    const traerData = async() => {
      await traerDatosProductos(id_product);
      await cargarProv();
      await cargarCategorias();
      await cargarProvProd({product_id:id_product});
      const aux = await proveedores.map(value => {
        return value.provider_id
      })
      console.log(aux)
      if(props.productos.productoActual.nombreIndustria === 'retail'){
        setDataExtra({
          product_line: props.productos.productoActual.product_line,
          product_seed: props.productos.productoActual.product_seed,
          product_service: props.productos.productoActual.product_service,
          product_serie: props.productos.productoActual.product_serie,
          product_NTecnico: props.productos.productoActual.product_NTecnico,
          prodcut_status: props.productos.productoActual.product_status,
          product_technical_data: props.productos.productoActual.product_technical_data,
          product_model: props.productos.productoActual.product_model,
        })
      }
    }
    traerData();
  }, []);
  //This function prepared the data to be sent to the server. transforming the input to integer or float
  const transformToNumber = (data) => {
    //transform to integer
    data.product_id = parseInt(data.product_id);
    data.product_package = parseInt(data.product_package);
    data.product_vol = parseInt(data.product_vol);
    data.product_package_customers = parseInt(data.product_package_customers);
    data.product_min_margin = parseInt(data.product_min_margin);
    data.product_max_margin = parseInt(data.product_max_margin);
    //transform to float
    data.product_cost_neto_repo = parseFloat(data.product_cost_neto_repo);
    data.product_bonification = parseFloat(data.product_bonification);
    data.product_price_bonification = parseFloat(data.product_price_bonification);
    data.product_freight_cost = parseFloat(data.product_freight_cost);
    data.product_country_tax = parseFloat(data.product_country_tax);
    data.product_cost_with_tax = parseFloat(data.product_cost_with_tax);
    data.product_list_price = parseFloat(data.product_list_price);
  };
  //Sending data to the server
  const onSubmit = (data, e) => {
    e.preventDefault();
    const aux = {
      ...data,
      ...dataExtra,
      nombreIndustria: ind,
    }
    transformToNumber(aux);
    axios
      .put(`${PRODUCTS_URL}/updateProduct/${props.match.params.idProd}`, aux)
      .then((res) => "producto editado con exito")
      .catch((err) => console.log(err));
    //console.log(data);
    console.log(aux)
    onDismiss();
  };
  //status to control the visibility of the alert
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(!visible);
  
  const handleChange = (e) => {
    const {value,name} = e.target;
    let stateProd = productselect;
    stateProd[name] = value;
    setDataProduct({
      stateProd,
    });
  }

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
                <Label for="product_id" 
                  sm={3}
                >
                  Código de Producto
                </Label>
                <Col sm={9}>
                  <Input
                    type="number"
                    name="product_id"
                    disabled
                    value = {productselect.product_id}
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
                    {errors?.product_name?.message}
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
                      <option value={"0"}>No</option>
                      <option value={"1"}>Si</option>
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
                    <Label for="">Categoria</Label>
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
                      {
                        categorias.map(cat => {
                          return(
                            <option 
                              value={cat.category_id}
                            >
                              {cat.category_name}
                            </option>
                          )
                        })
                      }
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
                      <option value={"Tipo 1"}>Tipo 1</option>
                      <option value={"Tipo 2"}>Tipo 2</option>
                      <option value={"Tipo 3"}>Tipo 3</option>
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
                      <option value={"0"}>Inactivo</option>
                      <option value={"1"}>Activo</option>
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
                    <ProvidersTable/>
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
                <Label for="product_in_ecommerce" style={{ display: "inline" }}>
                  Publicado en E-Commerce
                </Label>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomRadio"
                    name="product_in_ecommerce"
                    value={productselect.product_in_ecommerce}
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
                    disabled
                  >
                    Añadir Imagen
                  </ButtonToggle>{" "}
                  <br />
                  <ButtonToggle color="danger" style={{ marginTop: 10 }} disabled>
                    Remover Imagen
                  </ButtonToggle>{" "}
                  <br />
                  <ButtonToggle color="danger" style={{ marginTop: 10 }} disabled>
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
                  (props.productos.productoActual.nombreIndustria === "indumentary") ? (
                    <IndumentaryProduct datos = {props.productos.productoActual} handleDataExtra={setearDataExtra}/>) : null
                  }
                  {
                    (props.productos.productoActual.nombreIndustria === "retail") ?
                    (<RetailProduct datos = {props.productos.productoActual} handleDataExtra={setearDataExtra}/>) : null
                  }
                    <Row form>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Material</Label>
                          <Input
                          type="select"
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
                          >

                            <option value={"Material Uno"}>Material uno</option>
                            <option value={"Material Dos"}>Material dos</option>
                            <option value={"Material Tres"}>Material tres</option>

                          </Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.product_material?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="">Origen</Label>
                          <Input
                          type="select"
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
                          >

                            <option value={"Origen 1"}>Origen Uno</option>
                            <option value={"Origen 2"}>Origen Dos</option>

                          </Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.product_origin?.message}
                          </span>
                      </FormGroup>
                      </Col>
                      <Col md={4}>
                      <FormGroup>
                          <Label for="product_maker">Fabricante</Label>
                          <Input
                          type="select"
                          name="product_maker"
                          value={productselect.product_maker}
                          onChange = {
                            handleChange
                          }
                          innerRef={register({
                            required: {
                              value: false,
                              message: "no es requerido",
                            },
                          })}
                          >

                            <option  value={"Fabricante uno"}>Fabricante Uno</option>  
                            <option  value={"Fabricante dos"}>Fabricante Doso</option>  
                            <option  value={"Fabricante tres"}>Fabricante Tres</option> 

                          </Input>
                          <span className="text-danger span d-block mb-2">
                          {errors?.product_maker?.message}
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
                      name="product_package_customers"
                      value={productselect.product_package_customers}
                      onChange = {
                        handleChange
                      }
                      innerRef={register({
                        required: {
                          value: true,
                          message: "product_package_customers es requerido",
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
                      name="product_cost_neto_repo"
                      value={productselect.product_cost_neto_repo}
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
                      {errors?.product_costo_neto_repo?.message}
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
                      name="product_country_tax"
                      value={productselect.product_country_tax}
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
                      {errors?.product_country_tax?.message}
                    </span>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="product_cost_with_tax">Costo actual con impuestos</Label>
                    <Input
                      type="number"
                      name="product_cost_with_tax"
                      value={productselect.product_cost_with_tax}
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
                      {errors?.product_cost_with_tax?.message}
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
                      name="product_list_price"
                      value={productselect.product_list_price}
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
                      {errors?.product_list_price?.message}
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
                      {errors?.product_accountant_account?.message}
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
                    Editar Producto
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
