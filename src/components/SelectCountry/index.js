/**
 *  SelectCountry is a component that allows a user to select their country.
 * 
 * 
 */


//Libraries and components imported to use in this component.
import React from 'react'; 
import { Form, FormGroup, Label, Col, Button, Input} from 'reactstrap'; 
import "./selectcountry.css"; 


const SelectCountry = (props) => {

    //Array of countries. This shows on the dropdown list of countries.
    var countries = ["Argentina", "Australia", "Bolivia", "Canada", "Chile", "Colombia", "Ecuador", "Guyana", "New Zealand", "Paraguay", "Peru", "Surinam", "USA", "Uruguay", "Venezuela"]

    //Arrow function to capture the name of the selected country with the value property.
    const inputChange = (e) => {
        console.log(e.target.value); //Temporaly only show the value on console 
    }

 


  return (
  
    
    <div className="div-verification-code">
        <Form className="form-verification-code">
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
                    <Button type="submit" color="primary" active >Next</Button>
            </FormGroup>

       
        </Form>
    </div>
  );
}

export default SelectCountry;
