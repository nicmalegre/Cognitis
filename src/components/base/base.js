import React, {Fragment } from "react";
import { Col } from "reactstrap";
import logo from "./cognitis-logo_2020.png";
import "./index.css";

const Base = () => {
  return (
            <Fragment>
                <Col xs="3" className="text-center">
                    <img src={logo} alt="logo" className="center-block"/>
                    <p className="text-white">
                    <span className="font-weight-bold">ECOMMERCE INTEGRADO</span>
                    <br />
                    ERP + MARKETPLACE + CLOUD
                    </p>
                </Col>
                <Col xs="7" className="mt-5">
                    <h1 className="text">Welcome to the registration Wizard</h1>
                </Col>
            </Fragment>
  );
};

export default Base;
