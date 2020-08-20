import React, {useState} from 'react';
import {
  FormGroup,
  Input,
  Row,
  Container,
  Col,
  Label,
  Card,
  Form,
  Button,
} from "reactstrap"; //importar elementos
import { useForm } from "react-hook-form";
import axios from 'axios'
import Logo from "../../WizardComponents/base/logo";


const FormTest = (props) => {
    const { register, trigger, handleSubmit, errors } = useForm();
        
          
          
          
    const onSubmit = (data,e) => {
        console.log(data)
      e.preventDefault();
      axios.post("http://localhost:3000/api/headcompany/company/sucursal/savesucursal", data)
      .then((res) => "Se cargo en la base de datos una nueva compañia")
      .catch((err) => console.log(err));
    };
  
    
    const [input, setInput] = useState({
      company:'',
      razonsocial:'',
      cuil:'',
      
    });
  
    const inputChange =async (event) => {
      let value = "";
      let inputvalue = event.target.value;
      let length = inputvalue.length;
      let name = event.target.name
      let noerror= await trigger(name)
      console.log(noerror)
      if ((length > 0) && (noerror)) {
        value = errors?.name? false : true;
      } else {
        value = false;
      }
      setInput({
        ...input,
        [name]: value,
      });
    };
      
          //Funcion que renderiza el componente visual jsx
          return (
            <Container fluid>
              <Row>
                <Col lg="4" md="4" xs="10">
                  <Logo />
                </Col>
                <Col lg="8" xs="10">
                  <h3 className="mt-5 text" style={{ marginBottom: 30,color: "rgb(0, 55, 100)"}}>
                    Ingrese datos de la Sucursal {props.cantSuc}{" "}
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card id="card-user">
                    <Form onSubmit={handleSubmit(onSubmit)} id="card-user">
                      <h6 className="text">
                        Datos de la Sucursal {props.cantSuc}{" "}
                      </h6>
                      <Row form>
                        <Col md={6}>
                          <Label for="Sucursal">Nombre de la Sucursal</Label>
                          <Input
                            type="text"
                            name="sucursal"
                            id="sucursal"
                            placeholder="ingrese el nombre de la sucursal"
                            valid={input.sucursal}
                            onChange={inputChange}
                            innerRef={register({
                              required: {
                                value: true,
                                message: "Nombre de sucursal es requerido",
                              },
                            })}
                          />
                          <span className="text-danger span d-block mb-2">
                            {errors?.sucursal?.message}
                          </span>
                        </Col>
                        </Row>
                        <Button type="submit">
                            save
                        </Button>
                        </Form>
                        </Card>
                        </Col>
                        </Row>
                        </Container>
                    

    );
}
 
export default FormTest;