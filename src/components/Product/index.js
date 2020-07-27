import React from "react";
import {Link} from 'react-router-dom';
import Base from "../base/base";
import { Row, Col, Form, Container, FormGroup, Input, Label } from "reactstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "./index.css";

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
      <Container className="themed-container" fluid={true}>
             <Row className=" mt-4 text-aling-center">
              <Base />
            </Row>
            <Row className= "rowtwo">
              <Col md={{ size: 8, offset: 2 }} className="text-aling-center">
                <h1>
                  Please select the Product to Install
                </h1>
                <Form className="justify-content-center">
                    <FormGroup row className="item">
                      <Label for="checkbox1" md={10} className=" text-product text-center h1">
                        Cognitis 360
                      </Label>
                      <Col md={{ size: 2 }} className="text-center">
                        <FormGroup check>
                          <Input type="checkbox" id="checkbox1" />{" "}
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="item">
                      <Label for="checkbox2" md={10} className="text-center text-product h1">
                        Cognitis Marketplace
                      </Label>
                      <Col md={{ size: 2 }}>
                        <FormGroup check>
                          <Input type="checkbox" id="checkbox2" />{" "}
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="item">
                      <Label for="checkbox3" md={10} className="text-center text-product h1">
                        Cognitis ERP
                      </Label>
                      <Col md={{ size: 2 }}>
                        <FormGroup check>
                          <Input type="checkbox" id="checkbox3" />{" "}
                        </FormGroup>
                      </Col>
                    </FormGroup>
                </Form>
              </Col>
                <Link className="btn btn-warning btn-lg" to="/user">
                    Next
                </Link>
            </Row>
      </Container>
    );
  }
}
export default Product;
