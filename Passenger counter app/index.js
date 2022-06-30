//document.getElementById("count-el").innerText = 5

// cmd+k+c

// let firstBatch = 6

// let secondBatch = 5

// let count = firstBatch + secondBatch

// console.log(count)

// --------
// let myAge = 22

// let humanDogRatio = 20

// let myDogAge = myAge - humanDogRatio

// console.log(myDogAge)
// --------

// let count = 5 

// count = count + 2

// count = count + 10

// count = count - 2

// console.log(count)

// -------
// let count = 50
// console.log(count)

// count = count + 50
// console.log(count)

// count = count - 75
// console.log(count)

// count = count + 45
// console.log(count)
// --------

// Tạo function chạy vòng lặp thế biến vào toán tử lấy tổng
// let count1 = 30

// let count2 = 40

// let count3 = 50

// function increment() {
//     let totalCount = count1 + count2 + count3
//     console.log(totalCount)
// }

// increment()

// --------

// Tạo function tăng dần cho biến lapsCompleted với 1 sau đó cho chạy ba lần 
// let lapsCompleted = 0

// function increment() {
//      lapsCompleted = lapsCompleted + 1
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)
//------

//Tạo biến lấy phần tử của id từ thẻ số của html
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")
//Hiển thị biến vào console để hàm số đo được xác định
//    console.log(saveEl)

//Cho biến count bằng 0
let count = 0

//Khởi tạo function của onclick từ button
function increment() {
//Cho biến count đã tạo ở trên cộng 1 và lấy kết quả đã cộng
    count += 1
//Hiển thị số tăng dần từ function ra màn hình
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr
    
    countEl.textContent = 0

    count = 0
}

console.log("Đếm hành khách trên xe")

// let myname = "Tho"

// let greeting = "Hi"

// console.log(greeting + ", my name is " + myname + "!")

// let myGreeting = greeting + ", my name is " + myname + "!"

// console.log(myGreeting)

// console.log(4 + 5) //9

// console.log(4 + "5") //45

// console.log("4" + "5") //45 




// Recap 
// Script tag
// variables
// numbers
// strings
// console.log 
// functions
// The DOM 
// get ElementByID 
// innerText 
// textContent
