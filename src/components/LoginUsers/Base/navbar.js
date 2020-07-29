import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Col} from 'reactstrap';

import imagen from "./cognitis-logo_2020.png";

import "./navbar.css";


const Logo = () => {
   
    return (
        
        <div>
            <Navbar color="light" light expand="md" id="Navbar">
                <NavbarBrand href="/">
                    <img src={imagen} alt="logo" className="center-block"/>
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