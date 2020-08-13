import React from 'react'
import { Row, Col, Container, Form, Label,  Button, Input, FormGroup, UncontrolledCollapse, CustomInput, ButtonToggle, InputGroup, InputGroupText, InputGroupAddon } from "reactstrap";
import CatalogLayout from '../../Layouts/CatalogLayout'
import { FaHandPointer } from 'react-icons/fa';


const ProductView = () => {

    //Objeto Producto que simula al de la BD
    const producto = {
        product_code: '34234234',
        product_name: 'nameoftheproduct',
        product_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Texto Ejemplo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        product_dolarize: 'Yes/No',
        product_state: 'active, inactive',
        product_mark: 'markofproduct',
        product_category: 'categoryoftheproduct',
        product_type: 'typeofproducts',
        product_providers: {
            provider1: {name:'nameofprovider1', code:'codeofprovider1'},
            provider2: {name:'nameofprovider2', code:'codeofprovider2'},
            provider3: {name:'nameofprovider3', code:'codeofprovider3'},

        },
        ecommerce_published: 'yes/no',
        product_images: {
            image1: {id:'1', otherproperties:'otherproperties'},
            image2: {id:'2', otherproperties:'otherproperties'},
            image3: {id:'3', otherproperties:'otherproperties'},
        },
        product_cost_and_prices: {
            cost1: '1'
        },
        product_stock_caract: {
            unit: '1'
        },
        product_contables: {
            type: 'ssdad',
            cuenta: 'asdfasdf'
        }
    }


    //Aca va a ir el desgloce del producto




    return(
        <CatalogLayout>
            
            <Container>
                <Row>
                    <Col lg="12" xs="12" style={{marginTop:20}}>
                    <h3>Vista Producto</h3>
                    </Col>

                    <Col lg="12" xs="12" style={{marginTop:25}}>
                        <Form>
                            <FormGroup row>
                                <Label for="" sm={2}>Código del Producto:</Label>
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
                                        <Label for="" sm={6}>{producto.product_providers.provider1.name}</Label>
                                        <Label for="" sm={3}>{producto.product_providers.provider1.code}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}></Label>
                                        <Label for="" sm={6}>{producto.product_providers.provider2.name}</Label>
                                        <Label for="" sm={3}>{producto.product_providers.provider2.code}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup row>
                                        <Label for="" sm={3}></Label>
                                        <Label for="" sm={6}>{producto.product_providers.provider3.name}</Label>
                                        <Label for="" sm={3}>{producto.product_providers.provider3.code}</Label>
                                    </FormGroup>
                                </Col>                             
                            </Row><br/>
                            
                            <FormGroup row>
                                <Label for="" sm={3}>Publicado en E-Commerce:</Label>
                                <Label for="" sm={3}>{producto.ecommerce_published}</Label>
                            </FormGroup>

                            <Label/>

                            {/* Campos no comunes */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerCampos" lg="12" xs="12"  style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Otros Campos</h4>
                            </Col><br/>
                            <UncontrolledCollapse toggler="#togglerCampos">
                                Campos de Acuerdo a la industria
                            </UncontrolledCollapse>


                            {/* Caracteristicas de Stock */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerStock" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Caracteristicas de Stock</h4>
                            </Col><br/>
                            <UncontrolledCollapse toggler="#togglerStock">
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Unidad</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label> 
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Volumen</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bultos</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bultos al Cliente</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Margen Minimo</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Margen Maximo</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>   
                                </Col>
                            </Row>
                            </UncontrolledCollapse>

                            {/* Costos y Precios */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerCostAndPrices" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Costos y Precios</h4>
                            </Col><br/>
                            <UncontrolledCollapse toggler="#togglerCostAndPrices">
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Costo Neto/Reposicion:</Label>
                                        <Label for="" sm={3}>{producto.product_cost_and_prices.cost1}</Label> 
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Bonificaciones:</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo c/Bonificaciones:</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo Flete (%):</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Tasa Pais (%):</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Costo Actual c/Impuestos:</Label>
                                        <Label for="" sm={3}>{producto.product_stock_caract.unit}</Label>
                                    </FormGroup>   
                                </Col>
                            </Row><br/>
                            </UncontrolledCollapse>

                            {/* Contables */}
                            <hr style={{color: 'gray', border:'1px solid'}}/>
                            <Col id="togglerContables" lg="12" xs="12" style={{marginTop:20, cursor:"pointer"}}>
                                <h4>Contables</h4>
                            </Col><br/>
                            <UncontrolledCollapse toggler="#togglerContables">
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Cuenta:</Label>
                                        <Label for="" sm={3}>{producto.product_contables.cuenta}</Label> 
                                    </FormGroup>
                                </Col>                                
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="">Tipo de cuenta:</Label>
                                        <Label for="" sm={3}>{producto.product_contables.type}</Label> 
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
                                <Button color="danger" style={{margin:20}}>Volver</Button>{' '}
                                <Button color="primary" style={{margin:20}}>Editar Producto</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Row>
             </Container>


        </CatalogLayout>
    )
}

export default ProductView;