import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";

const RetailProduct = (props)=> {

    const {  errors } = useForm();
    const [dataRetail,setDataRetail] = useState({
        product_id: '',
        product_line: '',
        product_seed: '',
        product_service: 'Servicio Uno',
        product_serie: '"Serie Uno"',
        product_NTecnico:'',
        product_status: '',
        product_technical_data: '',
        product_model: '',
      });
    const handleChange = (event) => {
        const {value,name} = event.target;
        let objAux = {};
        setDataRetail(
            {
                ...dataRetail,
                [name]: value,
            }
        );
        props.passData(dataRetail);
    }

  return (
    <>
  
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Linea</Label>
            <Input
            type="input"
            name="product_line"
            value={dataRetail.product_line}
            onChange={handleChange}
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
            type="select"
            name="product_seed"
            value={dataRetail.product_seed}
            onChange={handleChange}
            >
                <option value={"Segmento Uno"}>Segmento Uno</option>
                <option value={"Segmento Dos"}>Segmento Dos</option>
                <option value={"Segmento Tres"}>Segmento Tres</option>
            </Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_segment?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">Service</Label>
            <Input
            type="select"
            name="product_service"
            value={dataRetail.product_service}
            onChange={handleChange}

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
            value={dataRetail.product_serie}
            onChange={handleChange}

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
            type="input"
            name="product_model"
            value={dataRetail.product_model}
            onChange={handleChange}

            />
            <span className="text-danger span d-block mb-2">
            {errors?.product_model?.message}
            </span>
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
            <Label for="">NTecnico</Label>
            <Input
            type="input"
            name="product_NTecnico"
            value={dataRetail.product_NTecnico}
            onChange={handleChange}
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
                    type="textarea"
                    name="product_technical_data"
                    placeholder="Ingrese datos tecnicos"
                    onChange={handleChange}
                  />
            </Col>
        </FormGroup>
        </Col>
        
    </Row>
    </>
  )
}

export default RetailProduct;