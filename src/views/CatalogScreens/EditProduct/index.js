import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Label, Input, FormGroup, CustomInput, ButtonToggle, Button } from "reactstrap";
import CatalogLayout from '../../Layouts/CatalogLayout'

import CarouselComponent from './carousel'


//IMPORT THE THINGS FOR THE CAROUSEL
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption, FormText} from 'reactstrap';




const EditProduct = (props) => {
    
    const listproducts = [
        {codProduct: 1, nameProduct:"product1", Descripción:'test1', Marca:'Marca1', Dolarizado:'si', Categoria:'categoria 1', Tipo:'tipo 1', Estado:'Estado 1', Proveedor:'Proveedor 1',CódProveedor:'22', 
        Unidad:'U', Volumen:23 ,Bultos:41 ,BultoCliente:25, MargenMin:15,MargenMax:20,costoNetoRepo:23,Bonificaciones:56,CostoBonificacion:25, CostoFlete:23, TasaPais:10, CostoActual:12,PrecioLista:120, Tipo:"Tipo 2",Cuenta:"cuenta 2" },
        
        {codProduct: 2, nameProduct:"product2", Descripción:'test2', Marca:'Marca2', Dolarizado:'no', Categoria:'categoria 2', Tipo:'tipo 2', Estado:'Estado 2', Proveedor:'Provedor 2',CódProveedor:'335', Unidad:'L', Volumen:'',Bulto:''},
        {codProduct: 3, nameProduct:"product3", Descripción:'test3', Marca:'Marca3', Dolarizado:'si', Categoria:'categoria 3', Tipo:'tipo 2', Estado:'Estado 3', Proveedor:'Proveedor 3',CódProveedor:'336', Unidad:'B', Volumen:'',Bulto:''},
        {codProduct: 4, nameProduct:"product4", Descripción:'test4', Marca:'Marca1', Dolarizado:'no', Categoria:'categoria 1', Tipo:'tipo 3', Estado:'Estado 1', Proveedor:'Proveedor 1',CódProveedor:'256', Unidad:'B', Volumen:'',Bulto:''},
    ];
    const id=1;
    const [productselect, setProductSelect] = useState({});
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        setProducts(listproducts)
        const arrayEdit= listproducts.map(item => item.codProduct === id ? setProductSelect(item) : (console.log('product not found')));
        setProducts(arrayEdit) 
    }, [])

   
  return (
    <CatalogLayout>
        <Container>
        <Row>
            <Col lg="12" xs="12" style={{marginTop:20}}>
            <h3>Nuevo Producto</h3>
            </Col>

            <Col lg="12" xs="12" style={{marginTop:25}}>
                <Form>
                    <FormGroup row>
                        <Label for="" sm={3}>Código de Producto</Label>
                        <Col sm={9}>
                            <Input type="number"
                                   name=""
                                   id=""
                                   value={productselect.codProduct}
                                 disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={3}>Nombre de Producto</Label>
                        <Col sm={9}>
                            <Input type="text" name=""
                                 id="" 
                                 placeholder="Ingresar el nombre de producto" 
                                 value={productselect.nameProduct}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="" sm={3}>Descripción</Label>
                        <Col sm={9}>
                            <Input type="textarea" name="" id="" value={productselect.Descripción} />
                        </Col>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="">Marca</Label>
                                <Input type="select" name="" value={productselect.Marca}>
                                <option>Marca 1</option>
                                <option>Marca 2</option>
                                <option>Marca 3</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="">Dolarizado</Label>
                                <Input type="select" name="" value={productselect.Dolarizado}>
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
                                <Input type="select" name="" value={productselect.Categoria}>
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
                                <Input type="select" name="" value={productselect.Tipo}>
                                <option>Tipo 1</option>
                                <option>Tipo 2</option>
                                <option>Tipo 3</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="">Estado</Label>
                                <Input type="select" name="" value={productselect.Estado}>
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
                                <Input type="select" name="" value={productselect.Proveedor}>
                                <option>Proveedor 1</option>
                                <option>Proveedor 2</option>
                                <option>Proveedor 3</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleEmail">Código de Proveedor</Label>
                                <Input type="number" name="" id=""
                                value={productselect.CódProveedor}
                                disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleCheckbox" style={{display:'inline'}}>Publicado en E-Commerce</Label>
                        <div>
                            <CustomInput type="checkbox" id="exampleCustomRadio" name="customRadio" label="" value={productselect.checkbox}/>
                        </div>
                    </FormGroup>
                    <Row>
                        <Col md={8}>    
                            <CarouselComponent></CarouselComponent>
                        </Col>
                        <Col md={4}>
                            <ButtonToggle type='file' color="primary" style={{marginTop:10}}>Añadir Imagen</ButtonToggle>{' '}<br/>
                            <ButtonToggle color="danger" style={{marginTop:10}}>Remover Imagen</ButtonToggle>{' '}<br/>
                            <ButtonToggle color="danger" style={{marginTop:10}}>Remover Todo</ButtonToggle>{' '}<br/>
                        </Col>
                    </Row>

                    {/* Caracteristicas de Stock */}
                    <hr style={{color: 'gray', border:'1px solid'}}/>
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                        <h4>Caracteristicas de Stock</h4>
                    </Col>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="">Unidad</Label>
                                <Input type="select" name="" value={productselect.Unidad}>
                                    <option>U</option>
                                    <option>L</option>
                                    <option>B</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Volumen</Label>
                                <Input type="number" name="" id="" value={productselect.Volumen}/>
                            </FormGroup> 
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Bultos</Label>
                                <Input type="number" name="" id="" value={productselect.Bultos}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Bultos al Cliente</Label>
                                <Input type="number" name="" id="" value={productselect.BultoCliente}/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Margen Minimo</Label>
                                <Input type="number" name="" id="" value={productselect.MargenMin}/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Margen Maximo</Label>
                                <Input type="number" name="" id="" value={productselect.MargenMax}/>
                            </FormGroup>   
                        </Col>
                    </Row>

                    {/* Costos y Precios */}
                    <hr style={{color: 'gray', border:'1px solid'}}/>
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                        <h4>Costos y Precios</h4>
                    </Col>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleEmail">Costo Neto/Reposicion</Label>
                                <Input type="number" name="" id="" value={productselect.costoNetoRepo}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Bonificaciones</Label>
                                <Input type="number" name="" id="" value={productselect.Bonificaciones}/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Costo con Bonificacion</Label>
                                <Input type="number" name="" id="" value={productselect.CostoBonificacion} disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleEmail">Costo Flete %</Label>
                                <Input type="number" name="" id="" value={productselect.CostoFlete}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleEmail">Tasa Pais %</Label>
                                <Input type="number" name="" id="" value={productselect.TasaPais} disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Costo actual con impuestos</Label>
                                <Input type="number" name="" id="" disabled value={productselect.CostoActual}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Precio de Lista</Label>
                                <Input type="number" name="" id="" value={productselect.PrecioLista}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <Button style={{marginTop:32, backgroundColor:"rgb(247, 147, 1)"}}>Agregar Lista al Producto</Button>{' '}
                            <Button style={{marginTop:32, backgroundColor:"rgb(247, 147, 1)"}}>Otras Bonificaciones</Button>{' '}
                        </Col>  
                    </Row>


                    {/* Contables */}
                    <hr style={{color: 'gray', border:'1px solid'}}/>
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                        <h4>Contables</h4>
                    </Col>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="">Tipo</Label>
                                <Input type="select" name="" value={productselect.Tipo}>
                                    <option>Bienes de cambio</option>
                                    <option>Tipo 2</option>
                                    <option>Tipo 3</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="">Cuenta</Label>
                                <Input type="select" name="" value={productselect.Cuenta}>
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
                            <Button color="danger" style={{margin:20}}>Cancelar</Button>{' '}
                            <Button color="primary" style={{margin:20}}>Guardar Producto</Button>{' '}
                        </Col>
                    </Row>
            </Col>
        </Row>
        </Container>
    </CatalogLayout>
  )
};

export default EditProduct;