import '../text/paragraph.css'
import React from 'react'

const Paragraph = ({text, bgColor = 'blue', color = 'white'}) =>{
    return(
        <p className='text' style={{backgroundColor: bgColor, color:color}}>
            {text.toUpperCase()}
        </p>
    )
}

export default Paragraph