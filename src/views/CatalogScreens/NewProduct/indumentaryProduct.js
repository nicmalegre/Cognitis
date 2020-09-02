import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";


const IndumentaryProduct = (props)=> {

    const {  register,errors } = useForm();
    const [dataIndumentary,setDataIndumentary] = useState({
        product_id: '',
        product_curve: '',
        product_color: 'Verde',
        product_season: '',
        //product_status: '',
      });
    const handleChange = (event) => {
        const {value,name} = event.target;
        let objAux = {};
        setDataIndumentary(
            {
                ...dataIndumentary,
                [name]: value,
            }
        );
        props.passData(dataIndumentary);
    }
  return (
      <>
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Curva</Label>
            <Input
            type="input"
            name="product_curve"
            value={dataIndumentary.product_curve}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: true,
                  message: "curva del producto es requerido",
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
            type="input"
            name="product_season"
            value={dataIndumentary.product_season}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: true,
                  message: "Temporada del producto es requerido",
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
            value={dataIndumentary.product_color}
            onChange={handleChange}
            innerRef={register({
                required: {
                  value: true,
                  message: "color del producto es requerido",
                },
            })}
            >
                <option value={"Verde"}>Verde</option>
                <option value={"Azul"}>Azul</option>
                <option value = {"Amarillo"}>Amarillo</option>
            </Input>
            <span className="text-danger span d-block mb-2">
            {errors?.product_color?.message}
            </span>
        </FormGroup>
        </Col>
    </Row>
    </>

  )
}

export default IndumentaryProduct;