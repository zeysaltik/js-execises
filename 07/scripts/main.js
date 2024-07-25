

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
fullName()

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
addNumbers(5, 2)

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

function checkSeason(month) {
    if (month == "aralık " || month == "ocak" || month == "şubat") {
        return "kış"
    }
    else if (month == "mart" || month == "nisan" || month == "mayıs") {
        return "ilkbahar"
    }
    else if (month == "haziran" || month == "temmuz" || month == "ağustos") {
        return "yaz"
    }
    else if (month == "eylül " || month == "ekim" || month == "kasım") {
        return "sonbahar"
    }
}

let blabla = checkSeason("temmuz")
console.log(blabla)




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
console.log(solveLinEquation(1, 2, 3, 4, 5))

function solveLinEquation1(a1, b1, c1, x1) {

    let toplam = a1 + b1;
    let carpim = a1 * b1;
    return carpim + toplam;
}

let cevap = solveLinEquation1(5, 8, 7, 9) * 2
console.log(cevap / 2)

function islem(q, a, z, b, c, d,) {
    let cevap = q + c;
    return cevap / 3;
}
let response = islem(4, 0, 0, 0, 4)
console.log(4)

function names(Zeynep, Deniz, Mustafa, Saniye) {
    return Zeynep, Deniz, Mustafa, Saniye
}
let namess = "Zeynep, Deniz, Mustafa, Saniye"
console.log(namess)

function swapValues(x, y) {
    return [y, x];
}
let x = 3;
let y = 5;
[x, y] = swapValues(x, y);
console.log(x);
console.log(y);

function capitalizeArray(word) {
    return word
}
let word = "blablabla"
let upperWord = word.toUpperCase()
capitalizeArray("blablabla")
console.log(upperWord)


function sumNumbers(number1, number2, number3) {
    let sum = number1 + number2 + number3
    console.log(sum)
}
sumNumbers(1, 2, 3)

function sumNumbers1(num1, num2, num3, num4) {
    let sum1 = num1 + num2 + num3 + num4
    console.log(sum1)
}
sumNumbers1(1, 2, 3, 4)

function generateRandomIP() {
    function getRandomByte() {
        return Math.floor(Math.random() * 256);
    }

    return `${getRandomByte()}.${getRandomByte()}.${getRandomByte()}.${getRandomByte()}`;
}

let randomIP = generateRandomIP();
console.log(randomIP); 

