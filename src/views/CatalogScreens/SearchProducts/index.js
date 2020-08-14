import React,{useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
  Pagination,
  
} from "react-bootstrap";
import {Label} from "reactstrap"
import CatalogLayout from "../../Layouts/CatalogLayout";

const SearchProducts = () => {

  //Ejemplo de arreglo de productos que vendran como respuesta luego de una busqueda.
  const [objetos, setObjeto] = useState ({
    id:'',
    code:'',
    name:'',
    dolarize:'',
    state:'',
    mark:'',
    category:'',
    type:''

  })

  setObjeto ({ 

  })
  




  return (
    <CatalogLayout>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="pt-3 pl-3">
              <h3>Buscar Producto</h3>
            </Row>
            <Row className="p-3">
              <Card style={{ width: "100%" }}>
                <Card.Header>Search</Card.Header>
                <Row className="p-3">
                  <Form className="ml-3 w-75">
                    <Row>
                      <Col className="d-flex">
                        <Label>Product Name</Label>
                        <Form.Control />
                      </Col>
                      <Col className="d-flex">
                        <label>Product Code</label>
                        <Form.Control />
                      </Col>
                    </Row>
                  </Form>
                </Row>
                <Row className="d-flex justify-content-start pl-3 pb-3">
                  <Button variant="primary ml-3" onclick={setObjeto}>Buscar</Button>
                </Row>
              </Card>
            </Row>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%" }} className="mt-3">
              <Card.Header>Filters</Card.Header>
              <Form className="p-3">
                <Form.Control as="select" className="mb-1">
                  <option>Marca</option>
                </Form.Control>
                <Form.Control as="select" className="mb-1">
                  <option>Proovedor</option>
                </Form.Control>
                <Form.Control as="select" className="mb-1">
                  <option>Categoría</option>
                </Form.Control>
                <Form.Control as="select" className="mb-1">
                  <option>Tipo de Producto</option>
                </Form.Control>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "100%" }} className="ml-3 mr-3 p-3">
            <Row>
              <Table bordered striped hover className="ml-3 mr-3">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Dolarize</th>
                    <th>State</th>
                    <th>Mark</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  
                    {objetos.forEach((objeto) => (
                          <tr>
                            <td>{objeto.id}</td>
                            {/* <td>{objeto.code}</td>
                            <td>{objeto.name}</td>
                            <td>{objeto.dolarize}</td>
                            <td>{objeto.state}</td>
                            <td>{objeto.mark}</td>
                            <td>{objeto.category}</td>
                            <td>{objeto.type}</td> */}
                            <td>
                              <Button color="primary" href="#" style={{margin:1}}>view</Button>{' '}
                              <Button color="primary" href="#" style={{margin:1}}>edit</Button>{' '}
                              <Button color="danger" href="#" style={{margin:1}}>delete</Button>{' '}
                            </td>
                            
                          </tr>    
                      ))
                    }
                  
                  
                </tbody>
              </Table>
            </Row>
            <Row className="d-flex justify-content-end">
              <Pagination className="mr-3">
                <Pagination.Prev disabled />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </Row>
          </Card>
        </Row>
      </Container>
    </CatalogLayout>
  );
};

export default SearchProducts;
