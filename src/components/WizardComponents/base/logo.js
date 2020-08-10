import React from "react";
import { Col } from "reactstrap";
import logo from "./cognitisLogo-Texto.png";
import "./index.css";

// comoponent to show Cognitis logo
const Logo = () => {
  return (
        <Col lg="6">
            <img src={logo} alt="logo" className="center-block"/>
        </Col>
  );
};

export default Logo;
