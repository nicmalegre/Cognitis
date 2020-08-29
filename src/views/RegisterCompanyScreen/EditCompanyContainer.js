import React, { useState, useEffect } from "react";
import Form from "../../components/RegisterCompaniesComponents/formulario/formEditCompany";
import RegisterCompanyLayout from "../Layouts/RegisterCompanyLayout/index";
import axios from 'axios';
import { COMPANIES_URL, INDUSTRY_URL } from '../../urls/url'
const EditCompanyContainer = (props) => {
  const [company, setCompany] = useState(null);
  const [industries, setIndustries] = useState(null)
  
  
  useEffect(() => {
    const { id } = props.match.params;
    getCompany(id)
    getIndustries()
  },[]);

  //get company by id
  const getCompany = id => {
    //https://cognitis-360.herokuapp.com/api/company
    axios.get(`${COMPANIES_URL}/${id}`)
    .then(res => {
        setCompany(res.data)
    })
    .catch(err => console.log(err))
  }

  //get all industries stored on db
  const getIndustries = () => {
    axios.get(`${INDUSTRY_URL }/`)
    .then( res => {
      setIndustries(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <RegisterCompanyLayout>
      { company && industries ? <Form company={company} company_id={props.match.params.id} industries={industries}/> : <span>Loading...</span>}
    </RegisterCompanyLayout>
  );
};
export default EditCompanyContainer;
