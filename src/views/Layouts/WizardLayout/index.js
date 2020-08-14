import React from 'react'

const wrapperStyles = {
    backgroundImage: "url('../../../../Background.png')",
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

