import React, { useState, useEffect } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";
import axios from "axios";
import {connect} from 'react-redux'

const RetailProduct = (props)=> {

    const {  register, errors } = useForm();
    /*
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
            prod_line:"ejemploprod_line",
            prod_seed:"ejemploprod_seed",
            prod_service:"ejemploprod_service",
            prod_serie:"ejemploprod_serie",
            prod_model:"ejemploprod_model",
            prod_NTecnico:"ejemplo prod_NTecnico",
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
    */

      //Imitating the selected product
  const id = 1;

      //product status and selected product
  const [productselect, setProductSelect] = useState({});
  const [products, setProducts] = useState([]);

    //this function gets the data from the server
    useEffect(() => {
      const funcionSeteo = async() => {
        await setProductSelect(props.productos.productoActual);
      }
        /*setProducts(productFantasy);
        const arrayEdit = productFantasy.map((item) =>
          item.codProduct === id
            ? setProductSelect(item)
            : console.log("product not found")
        );
        setProducts(arrayEdit);*/
     /* axios.get('http://localhost:3000/api/products/productdata/' + '61')
    .then( async res => {
      //props.dispatch(fetchProductoData(id_product))
      setProductSelect(res.data);
      console.log(res.data) //le tenemos que pasar res para setear el objeto local
      let industry2 = res.data.products_industry_id;
      //if(industry2 === 1){
        /*setProdTipo({
          product_id: res.data.product_id,
          product_line: res.data.product_line,
          product_seed: res.data.product_seed,
          product_service: res.data.product_service,
          product_serie: res.data.product_serie,
          product_NTecnico: res.data.product_NTecnico,
          product_status: res.data.product_status,
          product_technical_data: res.data.product_technical_data,
          product_model: res.data.product_model,
        })*///}else{
          //console.log("otro tipo");
        //};
        //console.log(prodTipo);
        //console.log(productselect)
     // }).catch(err => console.log(err))
        //setProductSelect(props.datos);
        //console.log(props.datos)
        funcionSeteo();
      }, []);

      const handleChange = (e) => {
        const {value,name} = e.target;
        console.log(value);
        console.log(name);
        let stateProd = productselect;
        stateProd[name] = value;
        setProductSelect({
          stateProd,
        });
      }

  return (
    <>
  
    <Row form>
        <Col md={4}>
        <FormGroup>
  <Label for="prod_line">{props.productos.productoActual.product_id} Linea Producto</Label>
            <Input
            type="text"
            name="product_line"
            value={props.productos.productoActual.product_line}
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
            <Label for="">Seed</Label>
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
            type="text"
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
            ></Input>
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
            type="text"
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
            ></Input>
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