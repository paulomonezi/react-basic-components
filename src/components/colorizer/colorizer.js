import TextosPagina from "../text/pageTexts"

const CharacterColorizer = ({children}) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let text = children
    text.style.color = '#' + randomColor

}

export default CharacterColorizer