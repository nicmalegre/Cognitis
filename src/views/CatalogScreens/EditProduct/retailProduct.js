import React, { useState, useEffect } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";

const RetailProduct = (props)=> {

    const {  register, errors } = useForm();

    const productFantasy = [
        {
            codProduct: 1,
            nameProduct: "product1",
            Descripción: "this is a test",
            Marca: "Marca1",
            Dolarizado: "si",
            Categoria: "categoria 1",
            Estado: "Estado 1",
            Proveedor: "Proveedor 1",
            CódProveedor: "22",
            Unidad: "L",
            Volumen: 23,
            Bultos: 41,
            BultoCliente: 25,
            margenMinimo: 15,
            margenMaximo: 20,
            costoNetoRepo: 23,
            Bonificaciones: 56,
            CostoBonificacion: 25,
            CostoFlete: 23,
            tasaPais: 10,
            costoActualConImp: 12,
            precioLista: 120,
            tipoContable: "Tipo 2",
            cuentaContable: "Cuenta 3",
            linea:"ejemplolinea",
            segmento:"ejemplosegmento",
            service:"ejemploservice",
            serie:"ejemploserie",
            modelo:"ejemplomodelo",
            ntecnico:"ejemplo ntecnico",
            datostecnicos:'esto seria un ejemplo de datos tecnicos del producto si tuviese datos tecnicos'

        },

        {
          codProduct: 2,
          nameProduct: "product2",
          Descripción: "test2",
          Marca: "Marca2",
          Dolarizado: "no",
          Categoria: "categoria 2",
          Tipo: "tipo 2",
          Estado: "Estado 2",
          Proveedor: "Provedor 2",
          CódProveedor: "335",
          Unidad: "L",
          Volumen: "",
          Bulto: "",
        },
    ]

      //Imitating the selected product
  const id = 1;

      //product status and selected product
  const [productselect, setProductSelect] = useState({});
  const [products, setProducts] = useState([]);

    //this function gets the data from the server
    useEffect(() => {
        setProducts(productFantasy);
        const arrayEdit = productFantasy.map((item) =>
          item.codProduct === id
            ? setProductSelect(item)
            : console.log("product not found")
        );
        setProducts(arrayEdit);
      }, []);

  return (
    <>
  
    <Row form>
        <Col md={4}>
        <FormGroup>
            <Label for="">Linea</Label>
            <Input
            type="text"
            name="linea"
            value={productselect.linea}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="segmento"
            value={productselect.segmento}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="service"
            value={productselect.service}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="serie"
            value={productselect.serie}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="modelo"
            value={productselect.modelo}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="nTecnico"
            value={productselect.ntecnico}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
                    type="text"
                    name="datos tecnicos"
                    value={productselect.datostecnicos}
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

export default RetailProduct;