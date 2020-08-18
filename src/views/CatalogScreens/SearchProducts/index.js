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
import {Label, Input} from "reactstrap"
import CatalogLayout from "../../Layouts/CatalogLayout";
import axios from "axios";


const SearchProducts = () => {

//   //Ejemplo de producto que viene como respuesta luego de una busqueda.
  const [producto, setProducto] = useState({
    product_code: '133', 
    product_name: 'elprod',
    product_description: 'askdfj',
    product_dolarize: 'yes',
    product_state: 'active',
    product_mark: 'mark1',
    product_category: 'cat1',
    product_type: 'type1',
    product_providers: {  

    },
    ecommerce_published: '',
    product_images: {

    },
    product_cost_and_prices: {
        neto_repo_cost: '',
        bonification:'',
        flete_cost:'',
        country_tax:'',
        cost_with_tax:'',
        list_price:'',
    },
    product_stock_caract: {
        unit: '1',
        volume:'',
        package:'',
        package_to_client:'',
        margin_min:'',
        margin_max:''
    },
    product_contables: {
        type: '',
        cuenta: '',
    }
})

// //Arreglo que contendra los productos que vienen como respuesta de la peticion
// const resultados = [producto, producto, producto] //A modo de prueba tiene 3 objetos producto.


//Estado de tipo arreglo que sirve para almacenar la respuesta de la peticion a la API
const [resultSearch, setResults] = useState ([producto, producto, producto])


//Objeto que se pasa por parametro en la peticion. Por defecto los valores de los campos son 'all' debido a que no filtra
const [datosPeticion, setDatosPeticion] = useState ({
  code:'adfsd',
  name:'asdfas',
  mark: 'all',
  provider: 'all',
  category: 'all',
  type: 'all'
})


//Funcion que controla el input del codigo de producto
const setCode = (event) => {

  setDatosPeticion({
    ...datosPeticion,
    code : event.target.value
  })
  
}

//Funcion que controla el input del nombre de producto
const setName = (event) => {
  setDatosPeticion({
    ...datosPeticion,
    name: event.target.value
  })
}

//Funcion que controla el filtro de la marca
const setMark = (event) => {
  setDatosPeticion({
    ...datosPeticion,
    mark: event.target.value 
  })
}

//Funcion que controla el filtro del proveedor
const setProvider = (event) => {
  setDatosPeticion({
    ...datosPeticion,
    provider: event.target.value 
  })
}

//Funcion que controla el filtro del tipo de producto
const setCategory = (event) => {
  setDatosPeticion({
    ...datosPeticion,
    category: event.target.value 
  })
}

//Funcion que controla el filtro del tipo de producto
const setType = (event) => {
  setDatosPeticion({
    ...datosPeticion,
    type: event.target.value 
  })
}


//Funcion que se ejecuta al solicitar una busqueda.
const getResult = (datosPeticion) => { //Se pasan los filtros como parametro de la funcion
  
  console.log(datosPeticion);
  
  axios.get('url api', datosPeticion) //Aplicar los parametros que entran en getResult
  .then( res => { 

    setResults({
      resultSearch: res,
    })


  }).catch(err => console.log(err)); //mostrar error

}





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
                        <Input onChange={setName}></Input>
                        {/* <Form.Control onChange={setName} /> */}
                      </Col>
                      <Col className="d-flex">
                        <label>Product Code</label>
                        <Form.Control onChange={setCode} />
                      </Col>
                    </Row>
                  </Form>
                </Row>
                <Row className="d-flex justify-content-start pl-3 pb-3">
                  <Button variant="primary ml-3" onClick={() => getResult(datosPeticion)}>Buscar</Button>
                </Row>
              </Card>
            </Row>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%" }} className="mt-3">
              <Card.Header>Filters</Card.Header>
              <Form className="p-3">
                <Form.Control as="select" onChange={setMark} className="mb-1">
                  <option>Marca</option>
                </Form.Control>
                <Form.Control as="select" onChange={setProvider} className="mb-1">
                  <option>Proovedor</option>
                </Form.Control>
                <Form.Control as="select" onChange={setCategory} className="mb-1">
                  <option>Categoría</option>
                </Form.Control>
                <Form.Control as="select" onChange={setType} className="mb-1">
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
                  
                      {resultSearch.map( (product) => (
                        <tr>
                        <td>{'id'}</td>
                        <td>{product.product_code}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_dolarize}</td>
                        <td>{product.product_state}</td>
                        <td>{product.product_mark}</td>
                        <td>{product.product_category}</td>
                        <td>{product.product_type}</td>


                        <td>
                          <Button color="primary" href="#" style={{margin:1}}>view</Button>{' '}
                          <Button color="primary" href="#" style={{margin:1}}>edit</Button>{' '}
                          <Button color="danger" href="#" style={{margin:1}}>delete</Button>{' '}
                        </td>
                      </tr> 
                      ))}                    


                  
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
