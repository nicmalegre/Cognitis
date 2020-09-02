import React from 'react';
import {Collapse,Navbar,NavbarBrand,Nav,NavbarText} from 'reactstrap';
import imagen from "./cognitis-logo_2020.png";
import "./navbar.css";


const Logo = () => {
   
    return (
        
        <div>
            <Navbar color="light" light expand="md" id="Navbar">
                <NavbarBrand>
                    <img src={imagen} id="img-Navbar" alt="logo" className="center-block"/>
                </NavbarBrand>
                <Collapse  navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavbarText id="text-navbar">ERP + MARKETPLACE + CLOUD</NavbarText>
                </Collapse>
            </Navbar>
        </div>
  );
};

export default Logo;