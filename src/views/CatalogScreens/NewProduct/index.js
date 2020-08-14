import React, { useState } from "react";
import { Row, Col, Container, Form, Label, Input, FormGroup, CustomInput, ButtonToggle, Button, UncontrolledCollapse } from "reactstrap";
import CatalogLayout from '../../Layouts/CatalogLayout'
import './index.css'
import CarouselComponent from './carousel'

import axios from "axios"; 


const NewProduct = (props) => {

    //This a function we use when te user click on "Add Image" button
    const buttonAddImageClick = () => {
        Array.prototype.forEach.call(document.querySelectorAll('.file-upload-button'), function(button){
            const hiddenInput = button.parentElement.querySelector('.file-upload-input');
            hiddenInput.click()
        })
    }

    const hiddenInputChange = () =>{
        Array.prototype.forEach.call(document.querySelectorAll('.file-upload-button'), function(button){
            const hiddenInput = button.parentElement.querySelector('.file-upload-input');
            const label = button.parentElement.querySelector('.file-upload-label');
            const filenameList = Array.prototype.map.call(hiddenInput.files, function (file){
                return file.name
            })

            label.textContent = filenameList.join(', ') || 'No file';
            label.title = label.textContent;

        })
        
    }
    const [product, setProduct] = useState({})
 
    const handlerChange=(e)=>{
      setProduct({
       ...product,
       //[name] : e.target.name       
      })

    }

  return (
    <CatalogLayout>
      <Container>
        <Row>
          <Col lg="12" xs="12" style={{ marginTop: 20 }}>
            <h3>Nuevo Producto</h3>
          </Col>

          <Col lg="12" xs="12" style={{ marginTop: 25 }}>
            <Form >
              <FormGroup row>
                <Label for="" sm={3}>
                  Código de Producto
                </Label>
                <Col sm={9}>
                  <Input type="number" name="" id="" disabled />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={3}>
                  Nombre de Producto
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingresar el nombre de producto"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="" sm={3}>
                  Descripción
                </Label>
                <Col sm={9}>
                  <Input type="textarea" name="" id="" />
                </Col>
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Marca</Label>
                    <Input type="select" name="">
                      <option>Marca 1</option>
                      <option>Marca 2</option>
                      <option>Marca 3</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Dolarizado</Label>
                    <Input type="select" name="">
                      <option>No</option>
                      <option>Si</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Categoria</Label>
                    <Input type="select" name="">
                      <option>Categoria 1</option>
                      <option>Categoria 2</option>
                      <option>Categoria 3</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Tipo</Label>
                    <Input type="select" name="">
                      <option>Tipo 1</option>
                      <option>Tipo 2</option>
                      <option>Tipo 3</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="">Estado</Label>
                    <Input type="select" name="">
                      <option>Estado 1</option>
                      <option>Estado 2</option>
                      <option>Estado 3</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Proveedor</Label>
                    <Input type="select" name="">
                      <option>Proveedor 1</option>
                      <option>Proveedor 2</option>
                      <option>Proveedor 3</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Código de Proveedor</Label>
                    <Input type="number" name="" id="" disabled />
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
                    name="customRadio"
                    label=""
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

              {/* Caracteristicas de Stock */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col lg="12" xs="12" style={{ marginTop: 20 }}>
                <h4>Caracteristicas de Stock</h4>
              </Col>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="">Unidad</Label>
                    <Input type="select" name="">
                      <option>U</option>
                      <option>L</option>
                      <option>B</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Volumen</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bultos</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bultos al Cliente</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Minimo</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Margen Maximo</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
              </Row>

              {/* Costos y Precios */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col lg="12" xs="12" style={{ marginTop: 20 }}>
                <h4>Costos y Precios</h4>
              </Col>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo Neto/Reposicion</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Bonificaciones</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo con Bonificacion</Label>
                    <Input type="number" name="" id="" disabled />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo Flete %</Label>
                    <Input type="number" name="" id="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Tasa Pais %</Label>
                    <Input type="number" name="" id="" disabled />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Costo actual con impuestos</Label>
                    <Input type="number" name="" id="" disabled />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Precio de Lista</Label>
                    <Input type="number" name="" id="" />
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

              {/* Contables */}
              <hr style={{ color: "gray", border: "1px solid" }} />
              <Col lg="12" xs="12" style={{ marginTop: 20 }}>
                <h4>Contables</h4>
              </Col>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Tipo</Label>
                    <Input type="select" name="">
                      <option>Bienes de cambio</option>
                      <option>Tipo 2</option>
                      <option>Tipo 3</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Cuenta</Label>
                    <Input type="select" name="">
                      <option>Venta de Mercaderia</option>
                      <option>Cuenta 2</option>
                      <option>Cuenta 3</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
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
          </Col>
        </Row>
      </Container>
    </CatalogLayout>
  );
};

export default NewProduct;
