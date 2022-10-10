import '../text/paragraph.css'
import React from 'react'

const Paragraph = ({ children, color }) => {
    return (
        <>
            <p className='text'
                style={{ backgroundColor: color }}>
                {children.toUpperCase()}
            </p>
        </>
    )
}

Paragraph.defaultProps = {
    color: 'white'
}

export default Paragraph