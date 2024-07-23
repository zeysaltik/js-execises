function sayHello() {
    console.log("hello!")
}
sayHello()

const anonymousFun = function () {
    console.log('İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor.')
}
anonymousFun()

const square = function () {
    console.log("Bu bir expression function türünde bir fonksiyondur.")
}
square()

function carpma() {
    let num = 2
    let carpma = num * num
    console.log(carpma)
}
carpma()

function printFullName() {
    let firstName = "Zeynep"
    let secondName = "Nur"
    let lastName = "Saltık"
    let space = " "
    let fullName = firstName + space + secondName + space + lastName
    console.log(fullName)
}
printFullName()

function printFullName() {
    let firstName = "Zeynep"
    let secondName = "Nur"
    let lastName = "Saltık"
    let space = " "
    let fullName = firstName + space + secondName + space + lastName
    return fullName
}
console.log(printFullName())

function addTwoNumbers() {
    let numOne = 5
    let numTwo = 7
    let total = 5 + 7
    return total
}
console.log(addTwoNumbers())

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function square1(number) {
    return number * number
}
console.log(square1(7))

function sumTwoNumbers(num1, num2) {
    let sum = num1 + num2
    return sum
}
console.log(sumTwoNumbers(7, 6))

function sumArrayValues(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}
let nums = [1, 2, 3, 4, 5]
console.log("Toplam", sumArrayValues(nums))

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 3, 5, 7, 11))
console.log(sumAllNums(7, 7, 7, 7))

const sayHello1 = function (name) {
    return `Hello ${name}`
}
console.log(sayHello1("Zeynep"));

(function () {
    console.log("blabla")
})()

let myCrushName = (function (namee) {
    console.log(`fck you ${namee}`)
})("halilisko")

const ikiCarpiİki = n => {
    return n * n
}
console.log(ikiCarpiİki(2))

const printFullNamee = (firstName, secondName, lastName) => {
    return (`My name is ${firstName} ${secondName} ${lastName}`)
}
console.log(printFullNamee("Zeynep", "Nur", "Saltık"))

const toplama = (num1, ...numbers) =>{
    console.log(numbers)
}
toplama(1, 2, 3, 4, 5)

function names(name = "Halil") {
    let message = `${name}`
    return message
}
console.log(names())
console.log(names("Zeynep"))