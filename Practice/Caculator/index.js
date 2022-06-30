
function add() {
    var number1 = document.getElementById("num1-el").value
    var number2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerHTML = parseInt(number1) + parseInt(number2);
}

function subtract() {
    var number1 = document.getElementById("num1-el").value
    var number2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerHTML = parseInt(number1) - parseInt(number2);
}

function divide() {
    var number1 = document.getElementById("num1-el").value
    var number2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerHTML = parseInt(number1) * parseInt(number2);
}

function multiply() {
    var number1 = document.getElementById("num1-el").value
    var number2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerHTML = parseInt(number1) / parseInt(number2);
}