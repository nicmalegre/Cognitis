import React from 'react'
import Navbar from '../../../components/CatologComponents/Navbar'
import Sidebar from '../../../components/CatologComponents/Sidebar/Sidebar'



const pageContentStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start'
}

const contentContainerStyles = {
    width: '100%',
    height: '100vh',
    textAling: 'center',
    overflow: 'auto',
}

//components layout in charge of providing the basic structure of the catalog for example (Navbar, Sidebar, body)
const CatalogLayout = (props) => {
    return(
        <div>
            <Navbar />
            <div style={pageContentStyles}>
                <Sidebar />
                <div style={contentContainerStyles} className="ml-4 mt-4 mr-4">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default CatalogLayout;