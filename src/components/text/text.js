import '../text/text.css'
import React from 'react'

const UpperCaser = ({children}) => {
    return children.toUpperCase()
}

const Texto = ({ children, color, showTextColor }) => {
    return (
        <>
            <p className='text'
                style={{ backgroundColor: color }}
                onClick={() => { showTextColor(color) }}>
                {children.toUpperCase()}
            </p>
        </>
    )
}

Texto.defaultProps = {
    color: 'white'
}

export default Texto