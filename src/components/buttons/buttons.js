import './buttons.css'
import CharacterColorizer from '../colorizer/colorizer'
import UpperCaser from '../uppercaser/uppercaser'


const Buttons = () => {
    return <>
        <button className="btn" onClick={() => CharacterColorizer()}>Randomizer</button>
        <button className="btn" onClick={() => UpperCaser()}>UpperCaser</button>
        <button className="btn">Reset</button>
    </>


}




export default Buttons

