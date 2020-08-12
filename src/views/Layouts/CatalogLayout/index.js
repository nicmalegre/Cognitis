import React from 'react'
import Navbar from '../../../components/CatologComponents/Navbar'
import Sidebar from '../../../components/CatologComponents/Sidebar'

const wrapperLayoutStyles = {
    width: '100vw',
    minHeight: '100vh'
}

const pageContentStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start'
}

const contentContainerStyles = {
    width: '100%',
    height: '100vh',
    textAling: 'center'
}

const CatalogLayout = (props) => {
    return(
        <div style={wrapperLayoutStyles}>
            <Navbar />
            <div style={pageContentStyles}>
                <Sidebar />
                <div style={contentContainerStyles}>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default CatalogLayout;