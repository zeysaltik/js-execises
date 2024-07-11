//Üçgenin alanı
let base = prompt('Üçgenin tabanını giriniz')
console.log(base)

let height = prompt('Üçgenin yüksekliğini giriniz')
console.log(height)

let area = 0.5 * base * height
console.log(area)
alert(`Üçgenin alanı: ${area}`)

//Üçgenini çevresi
let a = prompt('Üçgenin a kenarını giriniz')
console.log(a)

let b = prompt('Üçgenin b kenarını giriniz')
console.log(b)

let c = prompt('Üçgenin c kenarını giriniz')
console.log(c)
let perimeter = +a + +b + +c
console.log(perimeter)
alert(`Üçgenin çevresi: ${perimeter}`)

//Dikdörtgenin çevresi ve alanı
let a1 = prompt('Dikdörtgenin a kenarını giriniz')
console.log(a)

let b1 = prompt('Dikdörtgenin b kenarını giriniz')
console.log(b)

let perimeter1 = (+a + +b) * 2
console.log(perimeter1)
alert(`Dikdörtgenin çevresi: ${perimeter1}`)

let area1 = a * b
console.log(area1)
alert(`Dikdörtgenin alanı: ${area1}`)

let pi = 3.14
let r = prompt("Yarıçapı giriniz")
console.log(r)

let area2 = pi * r * r
console.log(area2)
alert(`Dairenin alanı: ${area2}`)


let perimeter2 = 2 * pi * r
console.log(perimeter2)
alert(`dairenin çevresi: ${perimeter2}`)

let hour = prompt("Saat giriniz")
console.log(hour)

let ratePerHour = prompt("Saat başına oran giriniz")
console.log(ratePerHour)

let weeklyEarning = hour * ratePerHour
console.log(weeklyEarning)
alert(`Haftalık kazanç: ${weeklyEarning}`)

let name = prompt("Adınızı giriniz")
console.log(name)

if (name.length < 7){
    alert(`Adınızın uzunluğu 7den küçük`)
} else {
    alert(`Adınızın uzunluğu 7den büyük`)
}

const firstName = prompt("Adınızı giriniz")
const lastName = prompt("Soyadınızı giriniz") 

if (firstName.length > lastName.length){
    alert (`Your first name, ${firstName} is longer than your family name, ${lastName}`)
} else {
    alert (`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
}

let myAge = prompt("Yaş giriniz")
let yourAge = prompt("Kendi yaşınızı giriniz")
let difference = myAge - yourAge

if (difference > 0) {
    alert(`ben senden ${difference} yaş büyüğüm`)
} else {
    alert(`ben senden ${-1 * difference} yaş küçüğüm`)
}

let yourDate = prompt("Doğum tarihinizi giriniz")
console.log(yourDate)
let now1 = new Date()
let yearDt = now1.getFullYear()
let blabla = yearDt - yourDate
let blabla1 = 18 - blabla
if (blabla >= 18) {
    alert(`${blabla} yaşındasınız. Araba sürmek için yeterince büyüksünüz.`)
} else {
    alert(`${blabla} yaşındasınız. Araba sürmek için ${blabla1} yıl daha beklemeniz lazım.`)
}

let year = prompt("Bir yıl giriniz")
console.log(year)
let seconds = year * 365 * 24 * 60 * 60
alert(`${seconds} saniyedir hayattasınız`)

const now = new Date()
const year1 = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()

if (month < 10) month = "0" + month
if (date < 10) date = "0" + date
if (hours < 10) hours = "0" + hours
if (minutes < 10) minutes = "0" + minutes

console.log(`${year1}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year1} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year1} ${hours}:${minutes}`)