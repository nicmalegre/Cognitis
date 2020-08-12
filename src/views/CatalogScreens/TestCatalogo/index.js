import React from 'react'
import CatalogLayout from '../../Layouts/CatalogLayout'
import Form from '../../../components/CatologComponents/Form';
const TestCatalogo = () => {
    return(
        <CatalogLayout>
            {/*Desde aca de deberia llamar al form por ejemplo New Product*/}
            <Form />
        </CatalogLayout>
    )
}

export default TestCatalogo;
