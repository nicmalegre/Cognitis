import React, {Fragment } from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import '../Navbar/index.css';


// Secondary nav shown below the main navbar of the page catalog
const Subnavbar = () => {
  return (
      <Fragment>
      <Navbar expand="lg" variant="dark" className="secondary">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-white">
            <i>
              <AiFillHome />
            </i>
          </Nav.Link>
          <Nav.Link href="#home" id="text-white">
            Menu usuario
          </Nav.Link>
          <Nav.Link href="#home" id="text-white">
            Inicio
          </Nav.Link>
          <Nav.Link href="#link" id="text-white">
            Productos y Servicios
          </Nav.Link>
          <Nav.Link href="#link" id="text-white">
            Fondos
          </Nav.Link>
          <Nav.Link href="#link" id="text-white">
            Proveedor
          </Nav.Link>
          <Nav.Link href="#link" id="text-white">
            Administracion
          </Nav.Link>
          <Nav.Link href="#link" id="text-white">
            Configuracion
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Fragment>
  );
};

export default Subnavbar;
