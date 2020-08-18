import React from 'react'

const wrapperStyles = {
    backgroundImage: "url('../../../Background.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position:'fixed',
    overflow: 'auto'
}
const LayoutSucursal = (props) => {
    return(
        <div className="wrapper-wizard-layout" style={wrapperStyles}>
            { props.children }
        </div>
    )
}

export default LayoutSucursal;