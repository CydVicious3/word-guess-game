// arrray of words
const words = ['upsidedown', 'mindflayer', 'eleven', 'hopper', 'demogorgon', 'hawkins', 'will', 'starcourt mall', 'joyce', 'mike', 'dustin', 'lucas', 'nancy', 'pollywog', 'thegate']

// const changeDisplay = function () {
//     document.getElementById('display').innerHTML = `
//     <h2> Type a letter of choice to guess the word!  ${displayWord}</h2>`
// }

// selects new random word
const getRandWord = () => {
    return words[Math.floor(Math.random() * words.length)]
        .toLowerCase()
}

// starting values
let wins = 0
let losses = 0
let guesses = 5
let lettersGuessed = []
let word = getRandWord()

// resets game to initial state
const reset = function () {
    word = getRandWord()
    lettersGuessed = []
    guesses = 5
    displayWord()
    document.getElementById('guesses').textContent = guesses
    document.getElementById('wins').textContent = wins
    document.getElementById('losses').textContent = losses
    document.getElementById('letters').textContent = lettersGuessed.join(', ')
}

// displays words
const displayWord = function () {
    //  string of letters and blanks
    let wordStr = ' '
    // toggle win scenario
    let winStatus = true
    //  loops words and builds string
    word.split('').forEach(function (letter) {
        //  letters guessed
        if (lettersGuessed.indexOf(letter) !== -1) {
            wordStr += `${letter} `
        }
        else {
            //  adds blanks for missing letters
            wordStr += '_ '
            //  indicators for pending win
            winStatus = false
        }
    })
    //  state of word string
    document.getElementById('word').textContent = wordStr
    //  win if no blanks added
    if (winStatus) {
        alert(`You Won! The word is:  ${word}`)
        wins++
        //  reset game
        reset()
    }
}

//  confirms letter inclusions
const checkLetter = () => {
    // updates guessed letters
    lettersGuessed.push(event.key)
    document.getElementById('letters').textContent = lettersGuessed.join(', ')
    // guessed letter in word
    if (word.includes(event.key)) {
        // updates word display
        displayWord(event.key)
    } else {
        // decrement guesses
        guesses--
        document.getElementById('guesses').textContent = guesses
        //  expired guesses
        if (guesses <= 0) {
            alert(`You Lost! The word is: ${word}`)
            losses++
            // reset game
            reset()
        }
    }
}
//  locked to unguessed letters
document.onkeyup = event => event.keyCode >= 65 && event.keyCode <= 90 && lettersGuessed.indexOf(event.key) === -1 ? checkLetter(event.key) : null

// start game
reset()