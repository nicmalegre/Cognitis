import React from "react";
import {Row, Col, FormGroup, Label} from 'reactstrap'

const RetailProduct = (props)=> {

  return (
    <>
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Linea:</Label>
                <Label for="" sm={4}>{props.product_line}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Segmento:</Label>
                <Label for="" sm={4}>{props.product_seed}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Service:</Label>
                <Label for="" sm={4}>{props.product_service}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Serie:</Label>
                <Label for="" sm={4}>{props.product_serie}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Modelo:</Label>
                <Label for="" sm={4}>{props.product_model}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>NTecnico:</Label>
                <Label for="" sm={4}>{props.product_NTecnico}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={12}>
            <FormGroup row>
                <Label for="" sm={4}>Datos Tecnicos:</Label>
                <Label for="" sm={8}>{props.product_data_tecnic}</Label>
            </FormGroup>
        </Col>
        
    </Row>
    </>
  )
}

export default RetailProduct;