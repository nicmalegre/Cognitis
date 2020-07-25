import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Base from '../base/base';

const Welcomescreen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Container fluid={true}>
            <Row className="mt-4 text-aling-center">
                < Base />
                <Col xs="2" className="text-center">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret color="warning">
                            Language
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>English</DropdownItem>
                            <DropdownItem>Spanish</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                </Col>
            </Row>
            <div>
               <Col md={{ size: 3, offset: 5 }}>
                <Link className="btn btn-warning btn-lg" to="/product">
                    Comenzar
                </Link>
              </Col>
            </div>
            
    </Container>
  );
};

export default Welcomescreen;
