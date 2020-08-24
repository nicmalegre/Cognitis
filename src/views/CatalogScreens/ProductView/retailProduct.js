import React from "react";
import {Row, Col, FormGroup, Label} from 'reactstrap'
import {connect} from 'react-redux'

const {Provider,Consumer} = React.createContext();

const RetailProduct = (props)=> {
  return (
    
    <>
    <Row form >
        <Col md={4}>
            <FormGroup row>
  <Label for="" sm={4}>Linea: {props.productos.productoActual.product_line}</Label>
                <Label for="" sm={4}>{props.product_line}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Segmento:</Label>
                <Label for="" sm={4}> {props.productos.productoActual.product_seed}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Service:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_service}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Serie:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_serie}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Modelo:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_model}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>NTecnico:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_NTecnico}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={12}>
            <FormGroup row>
                <Label for="" sm={4}>Datos Tecnicos:</Label>
                <Label for="" sm={8}>{props.productos.productoActual.product_data_tecnic}</Label>
            </FormGroup>
        </Col>
        
    </Row>
    </>
   
  )
}

const mapStateToProps = (state) => {
    return {
      productos: state.productos,  
    }
  }
  
  export default connect(
    mapStateToProps,
  )(RetailProduct);