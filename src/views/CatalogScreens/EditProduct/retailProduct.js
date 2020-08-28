import React, { useState, useEffect } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";
import axios from "axios";
import {connect} from 'react-redux'

const RetailProduct = (props)=> {

  const {  register, errors } = useForm();
  //product status and selected product
  const [productselect, setProductSelect] = useState({});
  const [products, setProducts] = useState([]);

    //this function gets the data from the server
    useEffect(() => {
      const funcionSeteo = async() => {
        await setProductSelect(props.productos.productoActual);
      }
        funcionSeteo();
      }, []);

      const handleChange = (e) => {
        const {value,name} = e.target;
        let stateProd = productselect;
        stateProd[name] = value;
        setProductSelect({
          stateProd,
        });
        props.handleDataExtra(productselect);
        console.log(value)
      }

  return (
    <>
  
    <Row form>
        <Col md={4}>
        <FormGroup>
  <Label for="prod_line">Linea Producto</Label>
            <Input
            type="text"
            name="product_line"
            value={productselect.product_line}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_line?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Segmento</Label>
            <Input
            type="text"
            name="product_seed"
            value={productselect.product_seed}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_seed?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Servicio</Label>
            <Input
            type="select"
            name="product_service"
            value={productselect.product_service}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            >
                <option value={"Servicio Uno"}>Servicio Uno</option>
                <option value={"Servicio Dos"}>Servicio Dos</option>
            </Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_service?.message}
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
            name="product_serie"
            value={productselect.product_serie}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            >
                <option value={"Serie Uno"}>Serie Uno</option>
                <option value={"Serie Dos"}>Serie Dos</option>
            </Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_serie?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Modelo</Label>
            <Input
            type="text"
            name="product_model"
            value={productselect.product_model}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_model?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">NTecnico</Label>
            <Input
            type="text"
            name="product_NTecnico"
            value={productselect.product_NTecnico}
            onChange = {
              handleChange
            }
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_NTecnico?.message}
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
                    type="text"
                    name="product_technical_data"
                    value={productselect.product_technical_data}
                    onChange = {
                      handleChange
                    }
                    innerRef={register({
                        required: {
                          value: false,
                          message: "no es requerido",
                        },
                      })}
                  />
            </Col>
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
)(RetailProduct)