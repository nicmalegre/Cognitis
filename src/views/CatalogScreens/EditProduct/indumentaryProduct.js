import React, { useState, useEffect } from "react";
import {Row, Col, FormGroup, Label, Input} from 'reactstrap'
import { useForm } from "react-hook-form";


const IndumentaryProduct = (props)=> {

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
            curva: 'lacurva',
            temporada:'latemporada',
            colores:'rojo, amarillo, azul'
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
    <Row form>

        <Col md={4}>
        <FormGroup >
            <Label for="">Curva</Label>
            <Input
            type="text"
            name="curva"
            value={productselect.curva}
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            
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
            type="text"
            name="temporada"
            value="unatemporada"
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
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
            type="text"
            name="colores"
            value="uncolor"
            innerRef={register({
                required: {
                  value: false,
                  message: "no es requerido",
                },
              })}
            ></Input>
            <span className="text-danger span d-block mb-2">
            {errors?.colores?.message}
            </span>
        </FormGroup>
        </Col>
    </Row>
    

  )
}

export default IndumentaryProduct;