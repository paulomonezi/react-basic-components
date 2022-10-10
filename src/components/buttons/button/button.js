import './button.css'



const Button = (props) => {
    return <>
        <button className='btn'>{props.label}</button>
    </>
}

Button.defaultProps = {
    label: 'Click Here'
}

export default Button

