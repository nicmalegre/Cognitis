import React from "react";
import {Row, Col, FormGroup, Label} from 'reactstrap'
import {connect} from 'react-redux'


const IndumentaryProduct = (props)=> {

  console.log(props.prop) //Llega el array con los atributos de forma correcta.

  return (
    <Row form >
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Curva:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_curve}</Label>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Temporada:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_season}</Label>            
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup row>
                <Label for="" sm={4}>Colores:</Label>
                <Label for="" sm={4}>{props.productos.productoActual.product_color}</Label>            
            </FormGroup>
        </Col>
    </Row>
    

  )
}

const mapStateToProps = (state) => {
    return {
      productos: state.productos,  
    }
  }
  
  export default connect(
    mapStateToProps,
  )(IndumentaryProduct);