import React, {useState} from "react"; //importacion de la libreria
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, Button, Input, Row, Container, Col, Card } from "reactstrap"; //importar elementos
import { withRouter } from "react-router-dom";
import "./index.css"; //importar css
import axios from "axios";
import Logo from '../../../components/WizardComponents/base/logo';
import Welcome from '../../../components/WizardComponents/base/welcome';
import { FormattedMessage } from 'react-intl';
import WizardLayout from '../../Layouts/WizardLayout/index'



const Registeruser = (props) => {
  //clase 'Nombre' extends React.component

  const [mailEntered, setMailEntered] = useState({
    adress:null,
  })

  const adressMail = (dato) => {
    setMailEntered({
      adress: dato
    })
  }

  const handleInputChange = (event) => {
    props.changeEmail(event.target)
  };

  /* const handleInputChange = (event) => {
    setDatos({
      ...user,
      [event.target.name]: event.target.value,
    });
  }; */

  const sendData = (event) => {
    //event.preventDefault();
    console.log(event);
    axios.post('http://localhost:3000/api/verificationcode', {
      mail: mailEntered.adress
    })
    .then( res => { 
      props.changeCodeTime(res.data.verificationCode, res.data.expireAt)
      
    }).catch(err => console.log(err));


    if (document.querySelector("#input-email").value != ""){
      props.history.push('/VerificationCode')
    }
    
  };

  //Funcion que renderiza el componente visual jsx
  return (
    
    <WizardLayout>
              <Row>
                <Col lg="6" md="3" xs="10">
                  < Logo />
                </Col>
              </Row>
              <Row className="text-center" style={{marginBottom:30}}>
                <Col lg="12" xs="12">
                  < Welcome />
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card id="card-user" body>
                    <InputGroup>
                      <Input
                        id="input-email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                        required
                      />
                      <InputGroupAddon addonType="append">
                          <Button
                            className="button-verification-code"
                            color="primary"
                            active
                            onClick={sendData}
                            type="submit"
                          >
                           <FormattedMessage id="app.nextButton"/>
                          </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Card>
                </Col>
              </Row>
      </WizardLayout>
  );
};

export default withRouter(Registeruser);