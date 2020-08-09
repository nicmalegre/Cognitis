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
} from "react-bootstrap";
import "./index.css";
import logo from "../Navbar/cognitis-logo_2020.png";
import companylogo from "../Navbar/companylogo.png";

const CNavbars = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Col sm={1} className="d-flex justify-content-center">
              <img src={logo} alt="logo" className="center-block" />
            </Col>
            <Col sm={1}>
              <img
                src={companylogo}
                alt="logo"
                className="center-block"
                className="companylogo"
              />
            </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  size="sm"
                  className="mr-sm-1"
                  //className="mx-sm-12"
                />
                <Button variant="outline-success" size="sm">
                  Search
                </Button>
              </Form>
              <Navbar.Text className="espacio">
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
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
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
            <Nav.Link className="text">icono casa</Nav.Link>
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
