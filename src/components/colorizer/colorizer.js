    const CharacterColorizer = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    let text = document.querySelector('.base-text')
    text.style.color = '#' + randomColor

}

export default CharacterColorizer