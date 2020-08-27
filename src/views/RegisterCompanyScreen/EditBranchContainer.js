import React, { useState, useEffect } from "react";
import Form from "../../components/RegisterCompaniesComponents/formulario/formEditBranchoffice";
import RegisterCompanyLayout from "../Layouts/RegisterCompanyLayout/index";
import axios from 'axios'
const EditBranchContainer = (props) => {
  const [branchoffice, setBranchOffice] = useState([]);
  const [dataSend , setDataSend] = useState({company_id:props.match.params.id});
  
  useEffect(() => {
    const { id } = props.match.params;
    getBranchOffice(id)
  },[]);

  const getBranchOffice = id => {
    axios.post("http://localhost:3000/api/branchofficehouse/branchofficebycompany", dataSend)
    .then(res => {
        setBranchOffice(res.data)
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
