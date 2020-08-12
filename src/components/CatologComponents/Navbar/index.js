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
import { FiSearch } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import "./index.css";
import logo from "../Navbar/cognitis-logo_2020.png";
import companylogo from "../Navbar/companylogo.png";
import Subnavbar from "./Subnavbar";

// Main Navbar component of the catalog page
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
          <img id="image-catalog" src={logo} alt="logo" className="center-block" />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="mr-auto">
          <img id="image-catalog" src={companylogo} alt="logo" className="center-block" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Form
              inline
              className="ml-auto"
              //style={{ width: "500px" }}
            >
              <InputGroup >
                <FormControl
                  placeholder="Search"
                  size="sm"
                  style={{ width: "350px" }}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" size="sm">
                  <i> <FiSearch /></i>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <Navbar.Text className="font-weight-bold text-primary ml-5">
              ERP + MARKETPLACE + CLOUD
            </Navbar.Text>
          <Nav className="ml-auto">
            <Nav.Link href="#help" >
              <i className="mt-1"><GiHelp/></i>
              Help
            </Nav.Link>
            <i className="mt-1"><FaRegUser /></i>
            <NavDropdown id="collasible-nav-dropdown" >
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
        {/*Components Subnavbar */}
          <Subnavbar />
    </>
  );
};

export default CNavbars;
