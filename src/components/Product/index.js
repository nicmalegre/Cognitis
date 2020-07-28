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
import "./index.css";

import Logo from "../base/logo";
import Welcome from "../base/welcome";

class Product extends React.Component {
      
      state = {
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      product: '',
    };

    handleInputChange=(event) =>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      isChecked2: value,
      isChecked3: value
    });
  }
  handleInputChangeOne=(event) => {
    const target = event.target;
    console.log(target.name,target.checked, target.value);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if ((name == "isChecked2") && (this.state.isChecked3)){
      console.log("inside")
      this.setState({
        isChecked: value,
        isChecked2:value,
        isChecked3: value,
      });
    }
    else if ((name == "isChecked3") && (this.state.isChecked2)){
      this.setState({
        isChecked: value,
        isChecked2:value,
        isChecked3: value,
      });    
    }
    else{
      this.setState({
      [name] : value,
    })
  } 

  }
    handleProduct =(props)=> {
    console.log(this.props);
    if (this.state.c1) {
       this.props.changeProduct(0)

      }
    else if (this.state.c2) {
       this.props.changeProduct(1)
    } else {
         this.props.changeProduct(2)
    }
    //const product = this.state.product;
    //axios.post("http://localhost:4000/api/verificationcode", product);
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
              Please select the product to install
            </h3>
            <Card id="card-product" md="12" body style={{ marginTop: 50 }}>
              <FormGroup row className="item">
                <Label
                  for="checkbox1"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis 360
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox1"
                    name="isChecked"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox2"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis Marketplace
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox2"
                    name="isChecked2"
                    checked={this.state.isChecked2}
                    onChange={this.handleInputChangeOne}             
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox3"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis ERP
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox3"
                    name="isChecked3"
                    checked={this.state.isChecked3}
                    onChange={this.handleInputChangeOne}
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
              <Button color="warning" onClick={this.handleProduct} style={{ borderColor: "black" }}>
                <b>Next</b>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Product;
