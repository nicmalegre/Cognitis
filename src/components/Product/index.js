import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
//import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import "./index.css";
import Logo from "../base/logo";
import Welcome from "../base/welcome";
import { FormattedMessage } from 'react-intl';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c1: false,
      c2: false,
      c3: false,
      product: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeOne = this.handleInputChangeOne.bind(this);
    this.handleInputChangetwo = this.handleInputChangetwo.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleProduct(props) {
    console.log(this.state.c1);
    if (this.state.c1) {
       //props.changeProduct(0)
      }
     else if (this.state.c2) {
      //props.changeProduct(1)
    } else {
      //props.changeProduct(2)
    }
    console.log(props.user);
    //const product = this.state.product;
    //axios.post("http://localhost:4000/api/verificationcode", product);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "c1" ? target.checked : target.value;
    const name = target.name;

    if (name == "c1") {
      this.setState({
        c1: value,
        c2: value,
        c3: value,
        product: "",
      });
    }
  }

  handleInputChangeOne(event) {
    const target = event.target;
    const value = target.name === "c2" ? target.checked : target.value;
    const name = target.name;
    if (value && this.state.c3) {
      this.setState({
        c1: value,
        c2: value,
      });
    } else if (value == false && this.state.c3) {
      this.setState({
        c1: value,
        c2: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleInputChangetwo(event) {
    const target = event.target;
    const value = target.name === "c3" ? target.checked : target.value;
    const name = target.name;

    if (value && this.state.c2) {
      this.setState({
        c1: value,
        c3: value,
      });
    } else if (value == false && this.state.c2) {
      this.setState({
        c1: value,
        c3: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="6" md="3" xs="10">
            <Logo />
          </Col>
        </Row>
        <Row className="text-center" style={{ marginBottom: 50 }}>
          <Col lg="12" xs="12">
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col lg="8" sm={{ size: 8, offset: 2 }}>
            <h3 className="text-center text">
              <FormattedMessage id="app.selectProductMessage"/>
            </h3>
            <Card id="card-product" md="12" body style={{ marginTop: 50 }}>
              <FormGroup row className="item">
                <Label
                  for="checkbox1"
                  md={10}
                  className="text-product text-center h1"
                  style={{ fontSize: 20 }}
                >
                  Cognitis 360
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox1"
                    name="c1"
                    checked={this.state.c1}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox2"
                  md={10}
                  className="text-product text-center h1"
                  style={{ fontSize: 20 }}
                >
                  Cognitis Marketplace
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox2"
                    name="c2"
                    checked={this.state.c2}
                    onChange={this.handleInputChangeOne}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox3"
                  md={10}
                  className=" text-product text-center h1"
                  style={{ fontSize: 20 }}
                >
                  Cognitis ERP
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox3"
                    name="c3"
                    checked={this.state.c3}
                    onChange={this.handleInputChangetwo}
                  />
                </Col>
              </FormGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            lg="12"
            sm={{ size: 8, offset: 2 }}
            className="d-flex justify-content-center"
            style={{ marginTop: 20 }}
          >
            <Link to="/user">
              <Button
                onClick={this.handleProduct}
                color="warning"
                style={{ borderColor: "black" }}
              >
                <b><FormattedMessage id="app.nextButton"/></b>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Product;
