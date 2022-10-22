import './button.css'

const Button = ({ label = 'Click Here' }) => {

    function showLabel(label) {
        alert('This label name is ' + label)
    }

    return <button className='btn' onClick={() => { showLabel(label) }}>{label}</button>
}

export default Button

