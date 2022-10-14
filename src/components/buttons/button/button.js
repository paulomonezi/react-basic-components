import './button.css'

// const LabelName = (props) => {
//     alert('This label name is ' + props.label)
// }

// const Button = (props) => {
//     return <>
//         <button className='btn' onClick={() => { LabelName(props) }}>{props.label}</button>
//     </>

// }

// Button.defaultProps = {
//     label: 'Click Here'
// }

const Button = ({ label = 'Click Here' }) => {

    function showLabel(label) {
        alert('This label name is ' + label)
    }

    return <button className='btn' onClick={() => { showLabel(label) }}>{label}</button>
}

export default Button

