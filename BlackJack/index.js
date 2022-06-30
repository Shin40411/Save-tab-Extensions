// let firstCard = getRandomCard()

// let secondCard = getRandomCard()

let cards = []

let sum = 0

//Group variables
let player = {

     name: "Shin",

    //  chips: 145,

    //  sayHello: function() {
    //     console/console.log("Hi!");
    //  }
}
//

//boolean
let hasBlackJack = false

let isAlive = false
//

let messesage = ""

let messesageEl = document.getElementById("messesage-el")

let cardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

let sumEl = document.querySelector("#sum-el")

playerEl.textContent = "Made by: " + player.name //+ ": $" + player.chips 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()    
}

function renderGame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messesage = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messesage = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messesage = "You're out of the game!"
        isAlive = false
    }
    // console.log(messesage)
    messesageEl.textContent = messesage 
}

function newCard() {
    // console.log("Drawing a new card from the deck!")

    if (hasBlackJack === false &&  isAlive === true) {
        let card = getRandomCard()

        sum += card
    
        cards.push(card)
    
        renderGame()
    }

}


// Recap:

// arrays
// objects
// booleans
// if else statements
// comparison operators
// logical operators
// for loops
// the Math object
// return statements


