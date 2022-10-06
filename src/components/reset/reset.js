const ResetText = () => {
    let textCase = document.querySelector('.base-text').innerHTML
    let result = textCase.charAt(0).toUpperCase()+ textCase.slice(1).toLowerCase()
     textCase = result
     console.log(result)

    let textColor = document.querySelector('.base-text')
    textColor.style.color = 'black'
}

export default ResetText



