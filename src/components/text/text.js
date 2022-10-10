import './text.css'

const Text = (props, color) => {
    return (
        <div style={{ backgroundColor: color }}>
            <p>
                {props.txt}
            </p>
        </div>

    )
}

Text.defaultProps = {
    color: 'orange'
    // txt: 'Default text'
}
export default Text