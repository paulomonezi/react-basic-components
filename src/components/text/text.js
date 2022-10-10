import '../text/text.css'
import React from 'react'

const Texto = ({ children, color }) => {
    return (
        <>
            <p className='text'
                style={{ backgroundColor: color }}>
                {children.toUpperCase()}
            </p>
        </>
    )
}

Texto.defaultProps = {
    color: 'white'
}

export default Texto