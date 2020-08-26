import React, {useState, createContext} from 'react';

//create company context
export const CompanyContext = createContext();



//create company provider
export const CompanyProvider = (props) => {
    const [dataCompany, setDataCompany]= useState({
        head_house_id:'',
        company_id:'',
    }); 
    return ( 
        <CompanyContext.Provider value={[dataCompany, setDataCompany]}>
             {props.children}
        </CompanyContext.Provider>
     );
    }
 
