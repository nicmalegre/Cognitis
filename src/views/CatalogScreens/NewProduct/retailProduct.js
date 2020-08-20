import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";

const RetailProduct = (props)=> {

    const {  errors } = useForm();

  return (
    <>
  
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Linea</Label>
            <Input
            type="text"
            name="linea"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.linea?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Segmento</Label>
            <Input
            type="select"
            name="segmento"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.segmento?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Service</Label>
            <Input
            type="select"
            name="service"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.service?.message}
            </span>
        </FormGroup>
        </Col>
    </Row>
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Serie</Label>
            <Input
            type="select"
            name="serie"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.serie?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Modelo</Label>
            <Input
            type="select"
            name="modelo"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.modelo?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">NTecnico</Label>
            <Input
            type="select"
            name="nTecnico"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.nTecnico?.message}
            </span>
        </FormGroup>
        </Col>
    </Row>
    <Row form>
        <Col md={12}>
        <FormGroup>
            <Label for="">Datos Tecnicos</Label>
            <Col sm={12}>
                  <Input
                    type="textarea"
                    name="datos tecnicos"
                    placeholder="Ingrese datos tecnicos"
                    
                  />
            </Col>
        </FormGroup>
        </Col>
        
    </Row>
    </>
  )
}

export default RetailProduct;