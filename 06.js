for (let i = 0; i <= 5; i++) {
    console.log("i", i)
}

for (let i = 5; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

let numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < numbers1.length; i++) {
//     sum = sum + numbers1[i]
// }
// console.log(sum)

const newArr1 = []
let sum1 = 0
for (let i = 0; i < numbers.length; i++) {
    newArr1.push(numbers[i] ** 2)
}
console.log(newArr1)

let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

let i1 = 0
do {
    console.log(i1)
    i1++
} while (i1 <= 5)

let names = ["ecem", "ela", "zeynep", "leyla"]

for (let name of names) {
    console.log("Ad", name)
}

let numbers1 = [1, 2, 3, 4, 5]

for (let number of numbers1) {
    console.log(number)
}

for (let number of numbers1) {
    console.log(number * number)
}

for (let name of names) {
    if (name == "ela"){
        console.log(`${name} bulundu!`)
        break
    }
    console.log("ad", name)
}

for (let name of names) {
    if (name == "ela"){
        console.log(`${name} bulundu!`)
        continue
    }
    console.log("ad", name)
}

