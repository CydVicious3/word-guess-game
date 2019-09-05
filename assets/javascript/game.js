const words = ['upside down', 'mind flayer', 'eleven', 'hopper', 'demogorgon', 'hawkins', 'will', 'starcourt mall', 'joyce', 'mike', 'dustin', 'lucas', 'nancy', 'pollywog', 'the gate',]

const changeDisplay = function () {
    document.getElementById('display').innerHTML = `
    <h2> Type a letter of choice to guess the word!  ${displayWord}</h2>`
}

const getRandWord = () {
    return words[Math.floor(math.random() * words.length)]
        .toLowerCase()

}

let wins = 0
let losses = 0
let guesses = 5
const lettersGuessed = []
let word = getRandWord()




const displayWord = function (chosen) {
    let wordStr = ''
    word.split('').forEach(function (letter) {
        if (lettersGuessed.indexOf(letter) !== -1) {
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