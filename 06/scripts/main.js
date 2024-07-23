// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let i1 = 0
// do {
//     console.log(i1)
//     i1++
// } while (i1 <= 10)

let i2 = 0
while (i2 >= 10) {
    console.log(i2)
    i2--
}

let i3 = 0
do {
    console.log(i3)
    i3--
} while (i3 >= 10)

// const n = 10;
// for (let i = 0; i <= n; i++) {
//     console.log(i)
// }

for (let i = 0; i <= 7; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
        line += '#';
    }
    console.log(line)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let number of numbers) {
    console.log(number * number)
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} * ${i} = ${i * i * i}`)
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i)
}

for (let i = 1; i <= 100; i += 2) {
    console.log(i)
}

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log("0 ile 100 arasındaki sayıların toplamı:"+ sum)

let sum1 = 0
for (let i = 0; i <= 100; i += 2) {
    sum1 = sum1 + i
}
console.log("çift sayıların toplamı:" + sum1)

let sum2 = 0 
for (let i = 1; i <= 100; i+= 2) {
    sum2 = sum2 + i
}
console.log("tek sayıların toplamı:" + sum2)

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

  for (let i = 0; i < countries.length; i++) {
    
  }
