import React from 'react'
 //importacion de la libreria
import FormHeadCompany from '../../../components/RegisterCompaniesComponents/formulario/formHeadCompany'
import RegisterCompanyLayout from '../../Layouts/RegisterCompanyLayout/index';

const RegisterHeadCompany = (props) => {
  //clase 'Nombre' extends React.component
  

  //Funcion que renderiza el componente visual jsx
  return (
      <RegisterCompanyLayout>
        <FormHeadCompany />
      </RegisterCompanyLayout>
  );
};

export default RegisterHeadCompany;

