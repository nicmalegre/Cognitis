//imports of all required libraries and components
import React,{ useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  UncontrolledCollapse, ButtonToggle,
  Button,
  Alert,
} from "reactstrap";
import CatalogLayout from "../../Layouts/CatalogLayout";
import "./index.css";
import CarouselComponent from "./carousel";
import { useForm } from "react-hook-form";
import axios from "axios";
import IndumentaryProduct from './indumentaryProduct';
import RetailProduct from './retailProduct';

const NewProduct = (props) => {
  const { register, handleSubmit, errors } = useForm();
  //This a function we use when te user click on "Add Image" button
  const buttonAddImageClick = () => {
    Array.prototype.forEach.call(
      document.querySelectorAll(".file-upload-button"),
      function (button) {
        const hiddenInput = button.parentElement.querySelector(
          ".file-upload-input"
        );
        hiddenInput.click();
      }
    );
  };

  const hiddenInputChange = () => {
    Array.prototype.forEach.call(
      document.querySelectorAll(".file-upload-button"),
      function (button) {
        const hiddenInput = button.parentElement.querySelector(
          ".file-upload-input"
        );
        const label = button.parentElement.querySelector(".file-upload-label");
        const filenameList = Array.prototype.map.call(
          hiddenInput.files,
          function (file) {
            return file.name;
          }
        );

        label.textContent = filenameList.join(", ") || "No file";
        label.title = label.textContent;
      }
    );
  };

  //This function prepared the data to be sent to the server. transforming the input to integer or float
  const transformToNumber = (data) => {
    //transform to integer
    data.product_id = parseInt(data.product_id);
    data.product_package = parseInt(data.product_package);
    data.product_vol = parseInt(data.product_vol);
    data.product_package = parseInt(data.product_vol);
    data.product_min_margin = parseInt(data.product_min_margin);
    data.product_max_margin = parseInt(data.product_max_margin);
    //transform to float
    data.costoNetoReposicion = parseFloat(data.costoNetoReposicion);
    data.product_bonification = parseFloat(data.product_bonification);
    data.product_price_bonification = parseFloat(data.product_price_bonification);
    data.product_freight_cost = parseFloat(data.product_freight_cost);
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
    if(data.product_in_ecommerce === false){
      data.product_in_ecommerce = 0;
    }else{
      data.product_in_ecommerce = 1;
    };
    axios
      .post("https://cognitis-360.herokuapp.com/api/products/saveproduct", data)
      .then((res) => "Nuevo producto cargado en la BD")
      .catch((err) => console.log(err));
      onDismiss();
    console.log(data);
    e.preventDefault();
    
  };
  //status to control the visibility of the alert
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(
    !visible
  );


  //Variable que indica la industria en este momento
  //const industry = 'retail'; //se va setear con una propiedad que se pase en props 
  const industry = 'retail';

  //Funcion que controla el dinamismo de los campos de acuerdo a la industria
  let industryMannage = industry === 'retail' ? (
    <RetailProduct />
  ) : (
    <IndumentaryProduct />
  );

  return (
    <CatalogLayout>
      <Container>
        <span>
          <Alert color="success" isOpen={visible} toggle={onDismiss}>
            Producto guardado exitosamente!
          </Alert>
        </span>
        <Row>
          <Col lg="12" xs="12" style={{ marginTop: 20 }}>
            <h3>Nuevo Producto</h3>
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
                  Descripción
                </Label>
                <Col sm={9}>
                  <Input
                    type="textarea"
                    name="product_description"
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
                      innerRef={register({
                        required: {
                          value: true,
                          message: "categoria es requerido",
                        },
                      })}
                    >
                      <option value={1}>Categoria 1</option>
                      <option>Categoria 2</option>
                      <option>Categoria 3</option>
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
                      {errors?.product_type?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Estado</Label>
                    <Input
                      type="select"
                      name="product_status"
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
                      name="proveedor"
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
                    <Input type="number" name="codProveedor" disabled />{" "}
                    {/*why??*/}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleCheckbox" style={{ display: "inline" }}>
                  Publicado en E-Commerce
                </Label>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomRadio"
                    name="product_in_ecommerce"
                    label=""
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
                          type="select"
                          name="product_material"
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
                          type="select"
                          name="product_origin"
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
                          type="select"
                          name="fabricante"
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
                          type="select"
                          name="product_shipping"
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
                          type="select"
                          name="product_warranty"
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
                          type="select"
                          name="product_barcode"
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
              <Col id="togglerStock" lg="12" xs="12" style={{ marginTop: 20, cursor:"pointer" }}>
                <h4>Agregar Caracteristicas de Stock</h4>
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
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Volumen es requerido",
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
                    <Label for="exampleEmail">Bultos</Label>
                    <Input
                      type="number"
                      name="product_package"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bultos es requerido",
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
                    <Label for="exampleEmail">Bultos al Cliente</Label>
                    <Input
                      type="number"
                      name="product_package_to_client"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bultos es requerido",
                        },
                      })}
                    />
                    <span className="text-danger span d-block mb-2">
                      {errors?.product_package_to_client?.message}
                    </span>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Minimo</Label>
                    <Input
                      type="number"
                      name="product_min_margin"
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
              <Col id="togglerCostosyPrecios" lg="12" xs="12" style={{ marginTop: 20, cursor:"pointer" }}>
                <h4>Agregar Costos y Precios</h4>
              </Col>
              <UncontrolledCollapse toggler="#togglerCostosyPrecios">
              <br/>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo Neto/Reposicion</Label>
                    <Input
                      type="number"
                      name="costoNetoReposicion"
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
                      name="product_bonification"
                      step="0.01"
                      innerRef={register({
                        required: {
                          value: true,
                          message: "Bonificaciones es requerido",
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
              <Col id="togglerContables" lg="12" xs="12" style={{ marginTop: 20, cursor:"pointer" }}>
                <h4>Agregar Caracteristicas Contables</h4>
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

export default NewProduct;
