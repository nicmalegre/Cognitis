import React from "react";
import { Col } from "reactstrap";
import { FormattedMessage } from 'react-intl';
import "./index.css";

// component to show Welcome message
const Welcome = () => {
  return (
        <Col lg="12">
            <h1 className="text"><FormattedMessage id="app.welcomeMessage"/></h1>
        </Col>
  );
};

export default Welcome;