const countries = [

    'Albania',

    'Bolivia',

    'Canada',

    'Denmark',

    'Ethiopia',

    'Finland',

    'Germany',

    'Hungary',

    'Ireland',

    'Japan',

    'Kenya'

]

console.log(countries.indexOf("Ethiopia"))
let indexOfEthiopia = countries.indexOf("Ethiopia")
if (indexOfEthiopia == 4) {
    console.log("ETHİOPİA")
} else {
    countries.push("Ethiopia")
}
console.log(countries)

console.log(countries.length)
console.log(countries.length - 1 / 2)