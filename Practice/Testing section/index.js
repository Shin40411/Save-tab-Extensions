//           start       finish      step size
// for (let count = 10;  count < 21; count += 1) {
//     console.log(count)
// }


// for ( let i = 10; i < 101; i += 10) {
//     console.log(i)
// }
// let messesages = [
//     "Hey how's it going?",
//     "Im fine, you?",
//     "All good",
//     "same here"
// ]
// *length: count all elements in array
// for (let i = 0; i < messesages.length; i += 1) {
//     console.log(messesages[i])
// }


//*array: always start with 0
// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i++ ) {
//     console.log(cards[i])
// }
// let sentence = ["Hello", "my", "name", "is", "Tho"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }


// let player1 = 101
// let player2 = 101
// function getFatestRace() {
//     if (player1 < player2) {
//         return player1
//     } else if (player2 < player1) {
//         return player2
//     } else {
//         return player1
//     }
// }
// // let fatestRace = getFatestRace()
// // console.log(fatestRace)
// function getTotalRaceTime() {
//     return player1 + player2 
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)



// let randomNumber = Math.random() 
// let floorNumber = Math.floor(randomNumber * 21) + 1
// // console.log(randomNumber)
// console.log(floorNumber)
// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// console.log( rollDice() )




// let hasCompletedCourse = true
// let givesCertificate = true
// if (hasCompletedCourse === true && givesCertificate === true) {
//         generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate....")
// }




// let hasSolvedChallenge = false
// let hasHintleft = false
// if (hasSolvedChallenge === false && hasHintleft === false) {
//         showSolution()
// }
// function showSolution() {
//         console.log("Showing the solution...")
// }



// let  likesDocumentaries = true
// let likesStartups = false
// if (likesDocumentaries === true || likesStartups === true) {
//         recommendMovie()
// }
// function recommendMovie() {
//         console.log("Hey, check out this new film we think you will like!")
// }




// let person = {
//         name: "Tho",
//         age: "22",
//         country: "Vietnam"
// }
// function logData() {
//      console.log(person.name + " is " + person.age + " years old  and lives in " + person.country)   
// }
// logData()




// let age = 75
// if (age < 6) {
//        console.log("free") 
// } else if (age >= 6 && age <= 17) {
//         console.log("child discount")
// } else if (age >= 18 && age <= 26) {
//         console.log("student discount")
// } else if (age >= 27 && age <= 66) {
//         console.log("full price")
// } else if (age > 66) {
//         console.log("senior citizen discount")
// }



// let largeCountries = ["China","India","USA","Indonesia","Vietnam"]
// console.log("The 5 largest countries in the world:")
// for ( let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }




// let largeCountries = ["Tuvalu","India","USA","Monaco"]
// largeCountries.pop() //remove the last el from array
// largeCountries.push("Vietnam") //add more el to the last position in array
// largeCountries.shift() //remove the first el from array
// largeCountries.unshift("China") //add more el to the first position in array
// console.log(largeCountries)



// let dayOfMonth = 13
// let weekday = "Friday"
// if (weekday === "Friday" && dayOfMonth === 13) {
//     console.log("😱")
// }



// let hands = ["rock", "paper", "scissor"]
// function randomItem() {
//     let randomIndex = Math.floor( Math.random() * 3 )
//     return hands[randomIndex]
// }
// console.log( randomItem() )

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

// sortFruit()


// let boxes = document.getElementById("box")

// boxes.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })


// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// const boxes = document.getElementById("box")

// boxes.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     boxes.innerHTML += "<p>Thank you for buying!</p>"
// }

// const recipient = "James"

// // const email = "Hey" + recipient + "! How is it going? Cheers Tho"

// const sender = "Tho Hoang Dang"

// const email = `
// Hey, ${recipient}! 
// How is it going? 
// Cheers ${sender}
// `

// console.log(email)





// const welcomeEl = document.getElementById("welcome-el")
// .    parameters
// function greetUser(greet, name, emoji) {
//     welcomeEl.textContent = `${greet} ${name}${emoji}` 
// }

//.    arguments

// greetUser("Welcome back", "Tho", "!")



//.        number as parameters
// function add(number1, number2) {
//   return number1 + number2
// }
// console.log( add(3,4) )



// .   array as parameters 
// function getFirst(arr) {
//   return arr[0] 
// }
// const firstCard = getFirst([1, 2])

// console.log(firstCard)
