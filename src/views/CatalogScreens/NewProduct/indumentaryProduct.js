import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";


const IndumentaryProduct = (props)=> {

    const {  errors } = useForm();

  return (
      <>
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Curva</Label>
            <Input
            type="input"
            name="curva"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.curva?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Temporada</Label>
            <Input
            type="input"
            name="temporada"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.temporada?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Colores</Label>
            <Input
            type="select"
            name="colores"
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.colores?.message}
            </span>
        </FormGroup>
        </Col>
    </Row>
    </>

  )
}

export default IndumentaryProduct;