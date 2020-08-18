import React, { useState } from "react";
import {Row, Col, FormGroup, Label} from 'reactstrap'


const RetailProduct = (props)=> {

  

  return (
    <>
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Linea:</Label>
                <Label for="" sm={4}>{}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Segmento:</Label>
                <Label for="" sm={4}>{}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Service:</Label>
                <Label for="" sm={4}>{}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Serie:</Label>
                <Label for="" sm={4}>{}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Modelo:</Label>
                <Label for="" sm={4}>{}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>NTecnico:</Label>
                <Label for="" sm={4}>{}</Label>            
            </FormGroup>
        </Col>
    </Row>
    <Row form >
        <Col md={12}>
            <FormGroup row>
                <Label for="" sm={4}>Datos Tecnicos:</Label>
                <Label for="" sm={8}>{}</Label>
            </FormGroup>
        </Col>
        
    </Row>
    </>
  )
}

export default RetailProduct;