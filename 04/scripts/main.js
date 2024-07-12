
let age = prompt("Yaşınızı giriniz")
let blabla = 18 - age
if (age >= 18) {
    alert(`${age} yaşındasınız, araba kullanmak için yeterince büyüksünüz`)
} else {
    alert(`${age} yaşındasınız, araba kullanmak için ${blabla} yıl beklemeniz lazım`)
}

let firstPerson = prompt("Birinci kişinin yaşını giriniz")
let secondPerson = prompt("İkinci kişinin yaşını giriniz")

let difference = firstPerson - secondPerson

if (difference > 0) {
    alert(`Birinci kişi ikinci kişiden ${difference} yaş büyük`)
} else {
    alert(`Birinci kişi ikinci kişiden ${-1 * difference} yaş küçük`)
}

let a = prompt("a sayısını giriniz")
let b = prompt("b sayısını giriniz")

if (a > b) {
    alert(`a,b'den büyüktür`)
} else {
    alert(`a, b'den küçüktür`)
}

a > b ? alert("a, b'den büyüktür") : alert("a, b'den küçüktür")

let numOne = prompt("Sayı giriniz")
let remainderNumOne = numOne % 2

if (remainderNumOne == 0) {
    alert(`${numOne} çift bir sayıdır`)
} else {
    alert(`${numOne} tek bir sayıdır`)
}

let score = prompt("Notunuzu giriniz")

if (score >= 80 && score <= 100) {
    alert(`A`)
} else if (score >= 70 && score <= 79) {
    alert(`B`)
} else if (score >= 60 && score <= 69) {
    alert(`C`)
} else if (score >= 50 && score <= 59) {
    alert(`D`)
} else if (score >= 0 && score <= 49) {
    alert(`F`)
}

let month = prompt("Bir ay giriniz")
let month1 = month.toLowerCase().trim()

if (month1 == "aralık" || month1 == "ocak" || month1 == "şubat") {
    alert(`kış`)
}
else if (month1 == "mart" || month1 == "nisan" || month1 == "mayıs") {
    alert(`ilkbahar`)
}
else if (month1 == "haziran" || month1 == "temmuz" || month1 == "ağustos") {
    alert(`yaz`)
}
else if (month1 == "eylül" || month1 == "ekim" || month1 == "kasım") {
    alert(`sonbahar`)
}

let day = prompt("Bir gün giriniz")
let day1 = day.toLowerCase().trim()

if (day1 == "pazartesi" || day1 == "salı" || day1 == "çarşamba" || day1 == "perşembe" || day1 == "cuma") {
    alert(`haftaiçi`)
}
else if (day1 == "cumartesi" || day1 == "pazar") {
    alert(`haftasonu`)
}
