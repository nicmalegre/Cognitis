import React from "react";
import { Col } from "reactstrap";
import logo from "./cognitisLogo-Texto.png";
import "./index.css";

// comoponent to show Cognitis logo
const Logo = () => {
  return (
        <Col lg="4" md="4" sm="4">
            <img src={logo} alt="logo" className="center-block"/>
        </Col>
  );
};

export default Logo;