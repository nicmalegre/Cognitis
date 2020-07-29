/**
 *  SelectCountry is a component that allows a user to select their country.
 * 
 * 
 */

//Libraries and components imported to use in this component.
import React from 'react'; 
import { FormGroup, Label, Col, Button, Input,Row, Container, Card} from 'reactstrap'; 
import axios from 'axios';

import "./selectcountry.css"; 

import Logo from '../base/logo';
import Welcome from '../base/welcome';


const SelectCountry = (props) => {

    //Array of countries. This shows on the dropdown list of countries.
    var countries = ["Argentina", "Australia", "Bolivia", "Canada", "Chile", "Colombia", "Ecuador", "Guyana", "New Zealand", "Paraguay", "Peru", "Surinam", "USA", "Uruguay", "Venezuela"]

    //Arrow function to capture the name of the selected country with the value property.
    const inputChange = (event) => {
        props.handleChangeCountry(event.target.value)
    }

    const sendData = (event) => {
        props.postData();    
    
    }
 


  return (  
    <Container fluid>
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
            <Col lg="12" md="8" xs="12">
                <Card id="card-selectCountry" body>
                    <FormGroup row>
                            <Label for="exampleSelect" sm={3}>Select Country</Label>
                            <Col sm={7}>
                                <Input type="select" name="select" id="exampleSelect" onChange={inputChange}>
                                    
                                    {/* Function to insert the countries of the array like items in dropdown menu */}
                                    {countries.map( country => 
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                    )}
                                                            
                                </Input>
                            </Col>
                            <Button type="submit" onClick={sendData} color="primary" active >Next</Button>
                    </FormGroup>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default SelectCountry;
