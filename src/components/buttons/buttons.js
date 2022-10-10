import Button from "./button/button"

const sayHello = () => {
    console.log('aoba')
}

const Buttons = () => {
    return <>
        <Button label='Test' onClick={sayHello()} />
        <Button />
        <Button />
    </>
}




export default Buttons

