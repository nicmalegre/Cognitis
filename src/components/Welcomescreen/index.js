import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Logo from '../base/logo';
import Welcome from '../base/welcome';
import { FormattedMessage } from 'react-intl';

const Welcomescreen = ({ changeLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Container fluid>
            <Row>
              <Col lg="6" xs="8">
                < Logo />
              </Col>
              <Col lg="6" xs="4">
                <Row className="text-center">
                  <Dropdown className="dropdown-lenguage" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="warning"><FormattedMessage id="app.btnLanguage"/></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => changeLanguage('en')}><FormattedMessage id="app.englishLanguageOPtion"/></DropdownItem>
                        <DropdownItem onClick={() => changeLanguage('es')}><FormattedMessage id="app.spanishLanguageOPtion"/></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Row>
              </Col>
            </Row>

            <Row className="text-center" style={{marginTop:40}}>
                <Welcome/>
            </Row>

            <Row>
              <Col lg="12" className="d-flex justify-content-center" style={{marginTop:40}}>
                <Link to="/product">
                    <Button color="warning" style={{borderColor:"black"}}><b><FormattedMessage id="app.btnStart"/></b></Button>
                </Link>
              </Col>
            </Row>
    </Container>
  );
};

export default Welcomescreen;
