import React, {Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { FormattedMessage } from 'react-intl';
import logo from "./cognitisLogo-Texto.png";
import "./index.css";

const Welcome = () => {
  return (
        <Col lg="12">
            <h1 className="text"><FormattedMessage id="app.welcomeMessage"/></h1>
        </Col>
  );
};

export default Welcome;