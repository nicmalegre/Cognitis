import React from 'react'
import Navbar from '../../../components/CatologComponents/Navbar'
import Sidebar from '../../../components/CatologComponents/Sidebar/Sidebar'

const wrapperLayoutStyles = {
    backgroundImage: "url('../../../../Background.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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
        <div>
            <Navbar />
            <div style={pageContentStyles}>
                <Sidebar />
                <div style={contentContainerStyles}>
                    {/*{ props.children }*/}
                </div>
            </div>
        </div>
    )
}

export default CatalogLayout;