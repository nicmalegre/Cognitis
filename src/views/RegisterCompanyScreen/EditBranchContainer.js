import React, { useState, useEffect } from "react";
import Form from "../../components/RegisterCompaniesComponents/formulario/formEditBranchoffice";
import RegisterCompanyLayout from "../Layouts/RegisterCompanyLayout/index";
import axios from 'axios'
import {BRANCHOFFICEHOUSE_URL} from '../../urls/url'
const EditBranchContainer = (props) => {
  const [branchoffice, setBranchOffice] = useState(null);
  
  useEffect(() => {
    const { id } = props.match.params;
    getBranchOffice(id)
  },[]);

  const getBranchOffice = id => {
    //http://localhost:3000/api/branchofficehouse
    axios.get(`${BRANCHOFFICEHOUSE_URL}/${id}`)
    .then(res => {
        setBranchOffice(res.data)
        //console.log(branchoffice);
    })
    .catch(err => console.log(err))
  }

  return (
    <RegisterCompanyLayout>
      { branchoffice ? <Form branchoffice={branchoffice} branch_office_id={props.match.params.id}/> : <span>Loading...</span>}
    </RegisterCompanyLayout>
  );
};
export default EditBranchContainer;
