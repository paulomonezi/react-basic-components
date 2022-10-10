import './button.css'

const LabelName = (props) => {
    console.log(props.label)
    alert('This label name is ' + props.label)
}

const Button = (props) => {
    return <>
        <button className='btn' onClick={() => {LabelName(props)}}>{props.label}</button>
    </>

}

Button.defaultProps = {
    label: 'Click Here'
}

export default Button

