import React from "react";
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
import CatalogLayout from "../../Layouts/CatalogLayout";

const SearchProducts = () => {
  return (
    <CatalogLayout>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="pt-3 pl-3">
              <h2>Buscar Productos</h2>
            </Row>
            <Row className="p-3">
              <Card style={{ width: "100%" }}>
                <Card.Header>Search</Card.Header>
                <Row className="p-3">
                  <Form className="ml-3 w-75">
                    <Row>
                      <Col className="d-flex">
                        <label>Product Name</label>
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
                  <Button variant="primary ml-3">Buscar</Button>
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
                    <th>Product</th>
                    <th>Stock Id</th>
                    <th>In Stock</th>
                    <th>MAC</th>
                    <th>Retail Price</th>
                    <th>In Value</th>
                    <th>Retail Value</th>
                    <th>Profit Value</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row className="d-flex justify-content-end">
              <Pagination className="mr-3">
                <Pagination.Prev disabled />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
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
