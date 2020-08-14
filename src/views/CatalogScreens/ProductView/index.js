import React, { useState } from 'react'
import { Row, Col, Container, Form, Label,  Button, Input, FormGroup, UncontrolledCollapse, CustomInput, ButtonToggle, InputGroup, InputGroupText, InputGroupAddon } from "reactstrap";
import CatalogLayout from '../../Layouts/CatalogLayout'
import CarouselComponent from './carousel'
import axios from "axios";  

const ProductView = (props) => {

    const [producto, setProducto] = useState({
        product_code: '', 
        product_name: '',
        product_description: '',
        product_dolarize: '',
        product_state: '',
        product_mark: '',
        product_category: '',
        product_type: '',
        product_providers: {
            

        },
        ecommerce_published: '',
        product_images: {

        },
        product_cost_and_prices: {
            neto_repo_cost: '',
            bonification:'',
            flete_cost:'',
            country_tax:'',
            cost_with_tax:'',
            list_price:'',
        },
        product_stock_caract: {
            unit: '1',
            volume:'',
            package:'',
            package_to_client:'',
            margin_min:'',
            margin_max:''
        },
        product_contables: {
            type: '',
            cuenta: '',
        }
    })

    //Variable que indica la industria en este momento
    const industry = 'retail'; //se va setear con una propiedad que se pase en props 
    
    //Id del producto que se selecciono para ver 
    const id_product = '1'; //se va setear con una propiedad que se pase en props
    
    // //Haremos una peticion a la API para traer el objeto producto a partir de la id que nos llega  
    const traerProducto = ()=>{
        axios.get('url api', id_product)
        .then( res => { 
          setDataProduct(res); //le tenemos que pasar res para setear el objeto local
          
        }).catch(err => console.log(err)); //mostrar error
    }



      //Funcion que setea el producto con la respuesta de la peticion.
      const setDataProduct = () => { //Recibe el product

      
        setProducto ({
          
            product_code: 'nuevo codigo', //product.product_code


          product_name : 'nuevo nombre', //product.product_name
          product_description : 'nueva descripcion', //product.product_description
          product_dolarize :  'Yes', //product.product_dolarize
          product_state : 'active', //product.product_state
          product_mark : 'marca 1', //product.product_mark
          product_category : 'categoria 1', //product.product_category
          product_type : 'tipo de producto 1', //product.product_type
          //product_providers = {}; //product.product_providers
          ecommerce_published : 'yes', //product.ecommerce_published
          //product_images = []; //product.product_images
          unit : 'U', //product.product_stock_caract.unit
          volume : '1', //product.product_stock_caract.volume
          package : '2', //product.product_stock_caract.package
          package_to_client : '3', //product.product_stock_caract.package_to_client
          margin_min : '4', //product.product_stock_caract.margin_min
          margin_max : '6', //product.product_stock_caract.margin_max
          neto_repo_cost : '1.20', //product.product_cost_and_prices.neto_repo_cost
          bonification : '0.20', //product.product_cost_and_prices.bonification
          cost_with_bonification : '1.00', //product.product_cost_and_prices.cost_with_bonification
          flete_cost : '10', //product.product_cost_and_prices.flete_cost
          country_tax : '21', //product.product_cost_and_prices.country_tax
          cost_with_tax : '1.21', //product.product_cost_and_prices.cost_with_tax
          list_price : '1.50', //product.product_cost_and_prices.list_price
          type : 'tipo1', //product.product_contables.type
          cuenta : 'cuenta1', //product.product_contables_cuenta
        })
        
        console.log(producto);



      };
      
  
  





    return(
        <CatalogLayout>
            
            <Container>
                <Row>
                    {/*Titulo de la vista */}
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                    <h3>Vista Producto</h3>
                    </Col>
                    <Button onClick={setDataProduct}>Set Product</Button>
                    {/*Cuerpo de la vista */}
                    <Col lg="12" xs="12" style={{marginTop:25}}>
                        <Form>

                            {/*Campos comunes para todas las industrias */}
                            <FormGroup row>
                                <Label for="" sm={4}>Código del Producto:</Label>
                                <Label for="" sm={8}>{producto.product_code}</Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4}>Nombre del Producto:</Label>
                                <Label for="" sm={3}>{producto.product_name}</Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={2}>Descripción del Producto:</Label>
                                <Label for="" sm={10}>{producto.product_description}</Label>
                            </FormGroup>
                            <Label/>

                            <Row form >
                                <Col md={6}>
                                    <FormGroup row>
                                        <Label for="" sm={4}>Marca del Producto:</Label>
                                        <Label for="" sm={4}>{producto.product_mark}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup row>
                                        <Label for="" sm={4}>Dolarizado:</Label>
                                        <Label for="" sm={4}>{producto.product_dolarize}</Label>            
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Label/>
                            
                            <Row form>
                                <Col md={6}>
                                    <FormGroup row>
                                        <Label for="" sm={4}>Estado del Producto:</Label>
                                        <Label for="" sm={4}>{producto.product_state}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup row>
                                        <Label for="" sm={6}>Tipo del Producto:</Label>
                                        <Label for="" sm={4}>{producto.product_type}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Label/>

                            <FormGroup row>
                                <Label for="" sm={4}>Categoría del Producto:</Label>
                                <Label for="" sm={8}>{producto.product_category}</Label>
                            </FormGroup>

                            <br/>

                            <Row form>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}>Proveedores de Producto:</Label>
                                        <Label for="" sm={6}>Nombre Producto</Label>
                                        <Label for="" sm={3}>Codigo Producto</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}></Label>
                                        <Label for="" sm={6}>{producto.name}</Label>
                                        <Label for="" sm={3}>{producto.code}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}></Label>
                                        <Label for="" sm={6}>{producto.name}</Label>
                                        <Label for="" sm={3}>{producto.code}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}></Label>
                                        <Label for="" sm={6}>{producto.name}</Label>
                                        <Label for="" sm={3}>{producto.code}</Label>
                                    </FormGroup>
                                </Col>                             
                            </Row><br/>
                            
                            <FormGroup row>
                                <Label for="" sm={3}>Publicado en E-Commerce:</Label>
                                <Label for="" sm={3}>{producto.ecommerce_published}</Label>
                            </FormGroup>

                            <Row>
                                <Col md={7} className="text-center">    
                                    <CarouselComponent></CarouselComponent>
                                </Col>
                                <Col md={4}>
                                    <ButtonToggle color="warning" style={{marginTop:10}}>Ver Propiedades</ButtonToggle>{' '}<br/>
                                </Col>
                            </Row>

                            <Label/>

                            {/* Campos no comunes, cada industria tendra sus campos adicionales */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerCampos" lg="12" xs="12"  style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Ver Más Características</h4>
                            </Col>
                            <UncontrolledCollapse toggler="#togglerCampos">
                            <br/>
                                Campos de Acuerdo a la industria
                            </UncontrolledCollapse>


                            {/* Caracteristicas del Stock del producto */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerStock" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Ver Características de Stock</h4>
                            </Col>
                            <UncontrolledCollapse toggler="#togglerStock">
                            <br/>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Unidad</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label> 
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Volumen</Label>
                                        <Label for="" sm={3}>{producto.volume}</Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bultos</Label>
                                        <Label for="" sm={3}>{producto.package}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bultos al Cliente</Label>
                                        <Label for="" sm={3}>{producto.package_to_client}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Margen Minimo</Label>
                                        <Label for="" sm={3}>{producto.margin_min}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Margen Maximo</Label>
                                        <Label for="" sm={3}>{producto.margin_max}</Label>
                                    </FormGroup>   
                                </Col>
                            </Row>
                            </UncontrolledCollapse>

                            {/* Costos y Precios del producto */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerCostAndPrices" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Ver Costos y Precios</h4>
                            </Col>
                            <UncontrolledCollapse toggler="#togglerCostAndPrices">
                            <br/>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Costo Neto/Reposicion:</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label> 
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bonificaciones:</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo c/Bonificaciones:</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo Flete (%):</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Tasa Pais (%):</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo Actual c/Impuestos:</Label>
                                        <Label for="" sm={3}>{producto.unit}</Label>
                                    </FormGroup>   
                                </Col>
                            </Row>
                            </UncontrolledCollapse>

                            {/* Contables del producto */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerContables" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Ver Contables</h4>
                            </Col>
                            <UncontrolledCollapse toggler="#togglerContables">
                            <br/>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Cuenta:</Label>
                                        <Label for="" sm={3}>{producto.cuenta}</Label> 
                                    </FormGroup>
                                </Col>                                
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Tipo de cuenta:</Label>
                                        <Label for="" sm={3}>{producto.type}</Label> 
                                    </FormGroup>
                                </Col>
                                
                            </Row>
                            <Label/>
                            </UncontrolledCollapse>

                        </Form>

                        <hr style={{color: 'gray', border:'1px solid'}}/>
                        <Label/>
                        <Row form className="content-align-end text-center">
                            <Col md={12}>
                                <Button color="danger" href="/catalog/searchproducts" style={{margin:20}}>Volver</Button>{' '}
                                <Button color="primary" href="#" style={{margin:20}}>Editar Producto</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Row>
             </Container>


        </CatalogLayout>
    )
}

export default ProductView;