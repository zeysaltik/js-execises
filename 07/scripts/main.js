function fullName1() {
    console.log("Zeynep nur saltık")
}
fullName1()

function fullName() {
    let firstName = "Zeynep"
    let secondName = "Nur"
    let lastName = "Saltık"
    let space = " "
    let namee = firstName + space + secondName + space + lastName
    console.log(namee)
}
(fullName())

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
addNumbers(2, 2)

function areaOfRectangle(length, width) {
    let area = length * width
    console.log(area)
}
areaOfRectangle(3, 7)

function perimiterOfRectangle(length, width) {
    let permiter = 2 * (length + width)
    console.log(permiter)
}
perimiterOfRectangle(3, 7)

function volumeOfRectPrism(length, witdh, heigt) {
    let volume = length * witdh * heigt
    console.log(volume)
}
volumeOfRectPrism(3, 7, 7)

function areaOfCircle(r) {
    let area = Math.PI * r * r
    console.log(area)
}
areaOfCircle(5)

function circumOfCircle(r) {
    let circum = 2 * Math.PI * r
    console.log(circum)
}
circumOfCircle(5)

function densityensityOfSubstance(mass, volume) {
    let density = mass / volume
    console.log(density)
}
densityensityOfSubstance(11, 7)

function speed(distance, timeTaken) {
    let Speed = distance / timeTaken
    console.log(Speed)
}
speed(11, 7)

function weigth(mass, gravity) {
    let calculateWeigth = mass * gravity
    console.log(calculateWeigth)
}
weigth(7, 5)

function convertCelsiusToFahrenheit(oC) {
    let celsiusToFahrenheit = (oC * 9 / 5) + 32
    console.log(celsiusToFahrenheit)
}
convertCelsiusToFahrenheit(35)

function bodyMassIndex(kg, heigth) {
    let BMI = kg / (heigth * heigth)
    console.log(BMI)
}
bodyMassIndex(48, 158)

if (bodyMassIndex <= 18, 5) {
    console.log("Under weight")
} else if (18, 5 >= bodyMassIndex <= 24.9) {
    console.log("Normal weight")
} else if (25 >= bodyMassIndex <= 29.9) {
    console.log("Over weight")
} else if (bodyMassIndex >= 30) {
    console.group("Obese")
}

function findMax() {
    let maxNum = Math.max(0, 10, 5)
    console.log(maxNum)
}
findMax(0, 10, 5)

function findMax1() {
    let maxNum1 = Math.max(0, -20, -2)
    console.log(maxNum1)
}
findMax1(0, -10, -2)

function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c
}
let a = 1
let b = 2
let c = 3
let x = 4
let y = 5
let result = solveLinEquation(a, b, c, x, y) 
console.log(result)

