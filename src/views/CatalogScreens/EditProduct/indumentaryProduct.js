import React, { useState, useEffect } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'

const IndumentaryProduct = (props)=> {

    const {  register, errors } = useForm();
      //product status and selected product
  const [productselect, setProductSelect] = useState({});

  const handleChange = (e) => {
    const {value,name} = e.target;
    let stateProd = productselect;
    stateProd[name] = value;
    setProductSelect({
      stateProd,
    });
    props.handleDataExtra(productselect)
    console.log(value);
  }

    //this function gets the data from the server
  useEffect(() => {
    const funcionSeteo = async() => {
      await setProductSelect(props.productos.productoActual);
      console.log(props)
    }
      funcionSeteo();  
    },[]);

  return (
    <Row form>

        <Col md={4}>
        <FormGroup >
            <Label for="">Curva</Label>
            <Input
            type="text"
            name="product_curve"
            value={productselect.product_curve}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_curve?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Temporada</Label>
            <Input
            type="text"
            name="product_season"
            value={productselect.product_season}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_season?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Colores</Label>
            <Input
            type="select"
            name="product_color"
            value={productselect.product_color}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            >
                <option value={"Verde"}>Verde</option>
                <option value={"Azul"}>Azul</option>
                <option value = {"Amarillo"}>Amarillo</option>
            </Input>
            <span className="text-danger span d-block mb-2">
            {errors?.colores?.message}
            </span>
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
)(IndumentaryProduct)