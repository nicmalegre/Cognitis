import React from "react";
import {Link} from 'react-router-dom';
import { Row, Col, Form, Container, FormGroup, Input, Label, CustomInput, Button, Card, CardTitle, CardText } from "reactstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "./index.css";

import Logo from '../base/logo';
import Welcome from '../base/welcome';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    let { isChecked } = this.state.isChecked;
    let check = isChecked ? (
      <i className='icon-check input-correct"'>
        <AiFillCloseCircle />
      </i>
    ) : (
      //If not
      <i className="icon-check input-correct">
        <AiFillCheckCircle />
      </i>
    );
    return (
      <Container fluid>
              <Row>
                <Col lg="6" md="3" xs="10">
                  < Logo />
                </Col>
              </Row>
              <Row className="text-center" style={{marginBottom:30}}>
                <Col lg="12" xs="12">
                  < Welcome />
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card className="card" body>
                      <h3>Please select the product to install</h3>
                      <div>
                        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Cognitis 360" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Cognitis Marketplace" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Cognitis ERP" />
                      </div>
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col lg="12" className="d-flex justify-content-center" style={{marginTop:10}}>
                <Link to="/user">
                    <Button color="warning" style={{borderColor:"black"}}><b>Next</b></Button>
                </Link>
              </Col>
            </Row>
      </Container>
    );
  }
}
export default Product;
