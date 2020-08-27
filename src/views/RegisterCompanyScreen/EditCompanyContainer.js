import React, { useState, useEffect } from "react";
import Form from "../../components/RegisterCompaniesComponents/formulario/formEditCompany";
import RegisterCompanyLayout from "../Layouts/RegisterCompanyLayout/index";
import axios from 'axios'
const EditCompanyContainer = (props) => {
  const [company, setCompany] = useState(null);
  
  
  useEffect(() => {
    const { id } = props.match.params;
    getCompany(id)
    console.log('comapany state: ', company);
  },[]);

  const getCompany = id => {
    axios.get(`https://cognitis-360.herokuapp.com/api/company/${id}`)
    .then(res => {
        setCompany(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <RegisterCompanyLayout>
      { company ? <Form company={company} company_id={props.match.params.id}/> : <span>Loading...</span>}
    </RegisterCompanyLayout>
  );
};
export default EditCompanyContainer;
