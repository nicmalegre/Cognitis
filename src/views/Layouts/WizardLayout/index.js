import React from 'react'

const wrapperStyles = {
    //backgroundImage: "url('../../../../Background.png')",
    backgroundImage: "url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
}
const WizardLayout = (props) => {
    return(
        <div className="wrapper-wizard-layout" style={wrapperStyles}>
            { props.children }
        </div>
    )
}

export default WizardLayout;

