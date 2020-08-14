import React from "react";
import { Col } from "reactstrap";
import logo from "./cognitisLogo-Texto.png";
import "./index.css";

// comoponent to show Cognitis logo
const Logo = () => {
  return (
            <img src={logo} alt="logo" className="center-block"/>

  );
};

export default Logo;
