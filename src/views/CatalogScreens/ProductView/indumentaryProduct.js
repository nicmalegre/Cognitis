import React from "react";
import {Row, Col, FormGroup, Label} from 'reactstrap'


const IndumentaryProduct = (props)=> {

  console.log(props.prop) //Llega el array con los atributos de forma correcta.

  return (
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Curva:</Label>
                <Label for="" sm={4}>{props.prop.product_curve}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Temporada:</Label>
                <Label for="" sm={4}>{props.product_season}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Colores:</Label>
                <Label for="" sm={4}>{props.product_color}</Label>            
            </FormGroup>
        </Col>
    </Row>
    

  )
}

export default IndumentaryProduct;