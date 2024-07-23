// const arr = Array()
// // const  arr = []
// console.log(arr)

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers.length)

// let firstNumber = numbers[0]
// console.log(firstNumber)

// let middleNumber = numbers[3]
// console.log(middleNumber)

// let lastNumber = numbers[6]
// console.log(lastNumber)

// let mixedDataTypes = [5, "zeynep", true, [], {}, null, undefined]
// console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)

let firstCompany = itCompanies[0]
console.log(firstCompany)

let middleCompany = itCompanies[3]
console.log(middleCompany)

let lastCompany = itCompanies[6]
console.log(lastCompany)

// itCompanies[0] = itCompanies[0].toUpperCase();
// itCompanies[1] = itCompanies[1].toUpperCase();
// itCompanies[2] = itCompanies[2].toUpperCase();
// itCompanies[3] = itCompanies[3].toUpperCase();
// itCompanies[4] = itCompanies[4].toUpperCase();
// itCompanies[5] = itCompanies[5].toUpperCase();
// itCompanies[6] = itCompanies[6].toUpperCase();

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

let sentence = "are big IT companies"
let sentence2 = itCompanies.concat(sentence)
console.log(sentence2.toString())

let lastIndex = itCompanies.length - 1;
console.log(itCompanies[lastIndex])
let fisrt6ItCompanies = itCompanies.slice(0, lastIndex)
// console.log(fisrt6ItCompanies)

let mySentence1 = fisrt6ItCompanies.join(", ")
console.log(mySentence1)

let mySentence2 = " and " + itCompanies[lastIndex]
console.log(mySentence2)

let mySentence3 = " are big IT companies."
console.log(mySentence3)

let myFinalSentence = mySentence1 + mySentence2 + mySentence3;
console.log(myFinalSentence)

// if (finalSentence == myFinalSentence) {
//     console.log("Başardın. Cümleler tamamen aynı!")
// }
// else {
//     console.log("Cümleler tamamen aynı değil!")
// }

//
// console.log(itCompanies.toString())


let indexOfGoogle = itCompanies.indexOf("Google")
if (indexOfGoogle == -1) {
    console.log("not found")
}
else {
    console.log("Google")
}

// itCompanies.sort()
// console.log(itCompanies)

// itCompanies.reverse()
// console.log(itCompanies)

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
console.log(itCompanies.slice(Math.round(itCompanies.length / 2) - 1, Math.round(itCompanies.length / 2)))

console.log(itCompanies.splice(0, 1))
console.log(itCompanies)

console.log("Ortadan Silme")
console.log(itCompanies.splice((itCompanies.length / 2) - 1, 1))
console.log(itCompanies)


console.log(itCompanies.splice(itCompanies.length - 1, 1))
console.log(itCompanies)

console.log("Hepsini Silme")
console.log(itCompanies.splice(0))
console.log(itCompanies)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/\./g, '').replace(/\,/g, '')
console.log(text)
let text1 = text.split(' ')
console.log(text1)
console.log(text1.length)

const shoppingCart = ["Meat", 'Milk', 'Coffee', 'Tea', 'Honey']

let indexOfMeat = shoppingCart.indexOf("Meat")
if (indexOfMeat == -1) {
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart)

let indexOfSugar = shoppingCart.indexOf("Sugar")
if (indexOfSugar == -1) {
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)

console.log(shoppingCart.splice(4, 1))

console.log(shoppingCart.indexOf("Tea"))
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)


// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

console.log(ages[0])

console.log(ages[ages.length - 1])
console.log(ages.length)
console.log(ages.slice(Math.round(ages.length / 2) - 1, Math.round(ages.length / 2)))

console.log(ages[ages.length-1] - ages[0])