import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Col,
  FormGroup,
  Row,
  NavbarBrand,
  InputGroup,
} from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./index.css";
import logo from "../Navbar/cognitis-logo_2020.png";
import companylogo from "../Navbar/companylogo.png";
import { Input } from "reactstrap";

const CNavbars = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        inline="true"
      >
        {/*<Col sm={1} md="1" xs="1"className="d-flex justify-content-center">*/}
        <Navbar.Brand href="#home" md={1}>
          <img src={logo} alt="logo" className="center-block" />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={companylogo} alt="logo" className="center-block" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-5 ml-auto">
            <Form
              inline
              className="width"
              //style={{ width: "500px" }}
            >
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  size="sm"
                  className="mr-sm-1 width"
                  style={{ width: "400px" }}
                />
                <InputGroup.Append>
                  {/*<Button variant="outline-success" size="sm">*/}
                  <i>
                    <FiSearch />
                  </i>
                  {/*</Button>*/}
                </InputGroup.Append>
              </InputGroup>
            </Form>

            <Navbar.Text className="ml-3 textblue">
              ERP + MARKETPLACE + CLOUD
            </Navbar.Text>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#help">Help</Nav.Link>
            <NavDropdown title="User Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text>
              <a href="#login">UserName</a>
              <br />
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar expand="lg" variant="dark" className="secondary">
        <Nav className="mr-auto">
          <Nav.Link className="text">
            <i>
              <AiFillHome />
            </i>
          </Nav.Link>
          <Nav.Link href="#home" className="text">
            Menu usuario
          </Nav.Link>
          <Nav.Link href="#home" className="text">
            Inicio
          </Nav.Link>
          <Nav.Link href="#link" className="text">
            Productos y Servicios
          </Nav.Link>
          <Nav.Link href="#link" className="text">
            Fondos
          </Nav.Link>
          <Nav.Link href="#link" className="text">
            Proveedor
          </Nav.Link>
          <Nav.Link href="#link" className="text">
            Administracion
          </Nav.Link>
          <Nav.Link href="#link" className="text">
            Configuracion
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default CNavbars;
