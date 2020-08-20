import React from "react";
import Logo from "../../components/WizardComponents/base/logo";
import { Container, Row, Col } from "react-bootstrap";
import LayoutSucursal from "../Layouts/RegisterCompanyLayout/layoutsucursal";

const DashboardContainer = (props) => {
  return (
    <LayoutSucursal>
      <Container>
        <Row>
          <Col lg="4" md="4" xs="10" sm="4">
            <Logo />
          </Col>
          <Row style={{ marginTop: 200 }}>
            <Col className="align-self-center">
              <h1 className="text-center textblue">
                Welcome to Coginitis 360!
              </h1>
              <h6 className="text-center textblue">
                thank you for choosing us
              </h6>
            </Col>
          </Row>
        </Row>
      </Container>
    </LayoutSucursal>
  );
};

export default DashboardContainer;
