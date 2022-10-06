import './buttons.css'
import CharacterColorizer from '../colorizer/colorizer'
import UpperCaser from '../uppercaser/uppercaser'
import ResetTextCase from '../reset/reset'


const Buttons = () => {
    return <>
        <button className="btn" onClick={() => CharacterColorizer()}>Randomizer</button>
        <button className="btn" onClick={() => UpperCaser()}>UpperCaser</button>
        <button className="btn" onClick={() => ResetTextCase()}>Reset</button>
        

    </>


}




export default Buttons

