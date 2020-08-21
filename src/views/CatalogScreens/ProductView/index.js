import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Form, Label,  Button,FormGroup, UncontrolledCollapse, ButtonToggle} from "reactstrap";
import CatalogLayout from '../../Layouts/CatalogLayout'
import CarouselComponent from './carousel'
import IndumentaryProduct from './indumentaryProduct'
import RetailProduct from './retailProduct'
import axios from "axios";  


const ProductView = (props) => {

    const [producto, setProducto] = useState({
        
        // //fields of product_stock table
        // product_sku: '',
        // product_id: '',
        // provider_id: '',
        // product_status:'',
        
        //fields of product table
        product_id:'', //es el codigo de product
        product_name: '',
        product_description: '',
        product_is_dollar: '',
        product_brand: '',
        // product_maker:'', falta en bd
        product_type: '',
        product_in_ecommerce: '',
        product_unit: '',
        product_vol:'',
        product_package:'', //modificar en bd
        product_package_to_client:'', //modificar en bd
        product_max_margin:'',
        product_min_margin:'',
        product_list_price:'', //modificar en bd
        product_bonification:'',
        product_price_bonification: '',
        product_freight_cost:'',
        // product_cost_neto_repo:'', falta en bd
        // product_country_tax:'', falta en bd
        // product_cost_with_tax:'', falta en bd
        product_accountant_type:'',
        product_accountant_account:'',
        product_material:'',
        product_origin:'',
        product_shipping:'',
        product_warranty:'',
        product_barcode:'',
        product_status:'',
        product_category:'',
        product_industry_id:''
        


    })

    //Variable que indica la industria en este momento
    const industry = 'retail'; //se va setear con una propiedad que se pase en props 
    //const industry = props.products_industry_id //if = 1 then retail else indumentary

    //Id del producto que se selecciono para ver 
    const id_product = props.product_id; //se va setear con una propiedad que se pase en props
    
    //Haremos una peticion a la API para traer el objeto producto a partir de la id que nos llega  
    useEffect(() => {
        //const traerProducto = ()=>{
            axios.get('http://localhost:3000/api/products/getproduct', id_product)
            .then( res => { 
            setDataProduct(res); //le tenemos que pasar res para setear el objeto local

            }).catch(err => console.log(err)); //mostrar error
        //}
    }, []);

    //Funcion que setea el producto con la respuesta de la peticion.
    const setDataProduct = (product) => { //Recibe el product
     
        setProducto ({
         
            product_sku: product.product_sku, 
            product_id: product.product_id,  
            provider_id: product.provider_id,     
            product_status: product.product_status,
            product_name: product.product_name,
            product_description: product.product_description, 
            product_is_dollar:  product.product_is_dollar,
            product_brand: product.product_brand,
            product_maker: product.product_maker,
            product_type: product.product_type,
            product_in_ecommerce: product.product_in_ecommerce,
            //product_images = product.product_images
            product_unit: product.product_unit,
            product_vol: product.product_vol,
            product_package: product.product_package,
            product_package_to_client: product.product_package_to_client,
            product_min_margin: product.product_min_margin,
            product_max_margin: product.product_max_margin,
            product_list_price: product.product_list_price,
            product_bonification : product.product_bonification,
            product_price_bonification : product.product_price_bonification,
            product_freight_cost : product.product_freight_cost,
            // product_cost_neto_repo:'', falta en bd
            // product_country_tax:'', falta en bd
            // product_cost_with_tax:'', falta en bd
            product_accountant_type: product.product_accountant_type,
            product_accountant_account: product.product_accountant_account,
            product_material: product.product_material,
            product_origin: product.product_origin,
            product_shipping: product.product_shipping,
            product_warranty: product.product_warranty,
            product_barcode: product.product_barcode,
            product_status: product.product_status,
            product_category: product.product_category,
            product_industry_id: product.product_industry_id
        
        })
        
        console.log(producto);

      };
      
      //Funcion que controla el dinamismo de los campos de acuerdo a la industria
      let industryMannage = industry === 1 ? (
        <RetailProduct />
      ) : (
        <IndumentaryProduct />
      );





    return(
        <CatalogLayout>
            
            <Container>
                <Row>
                    {/*Titulo de la vista */}
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                    <h3>Vista Producto</h3>
                    </Col>
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
                                {industryMannage}
                                <Row form >
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Material:</Label>
                                            <Label for="" sm={4}>{}</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Origen:</Label>
                                            <Label for="" sm={4}>{}</Label>            
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Fabricante:</Label>
                                            <Label for="" sm={4}>{}</Label>            
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form >
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Envio:</Label>
                                            <Label for="" sm={4}>{}</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Garantia:</Label>
                                            <Label for="" sm={4}>{}</Label>            
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup row>
                                            <Label for="" sm={4}>Cod. de Barra:</Label>
                                            <Label for="" sm={4}>{}</Label>            
                                        </FormGroup>
                                    </Col>
                                </Row>
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