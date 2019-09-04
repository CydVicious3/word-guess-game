const words = [ 'Upside Down', 'Mind Flayer', 'Eleven', 'Hopper', 'Mind Flayer', 'Demogorgon', 'Hawkins', 'Will', 'Starcourt Mall', 'Joyce', 'Mike', 'Dustin', 'Lucas', 'Nancy', 'Pollywog', 'The Gate', ]

const changeDisplay = function () {
    document.getElementById('display').innerHTML = `
    <h2> Type a letter of choice to guess the word!  ${displayWord}</h2>`
}

const getRandWord = () {
    return words[Math.floor(math.random () * words.length)]
    .toLowerCase()

}

let wins = 0
let losses = 0
let guesses = 5
const lettersGuessed = []



const displayWord = function (chosen) {
    let wordStr = ''
    word.split('').forEach(function (letter) {
        if (letter === chosen || lettersGuessed.indexOf(letter) !=== -1) {
            wordStr += `${letter} `
        }
        else {
            wordStr += '_ '
        }
    })
    document.getElementById('word').textContent = wordStr
}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
       if (word.includes(event.key)) {
           lettersGuessed.push(event.key)
           displayWord(event.key)
       }
    }
}