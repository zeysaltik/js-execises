let Challange = "30 Days Of JavaScript"

console.log(Challange)
console.log(Challange.length)
console.log(Challange.toUpperCase())
console.log(Challange.toLowerCase())
console.log(Challange.substr(0, 7))
console.log(Challange.substring(0, 7))

console.log(Challange.includes("Script"))
console.log(Challange.split())
console.log(Challange.split(' '))

let blabla = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

console.log(blabla.split())
console.log(blabla.split(' '))

console.log(Challange.replace("JavaScript", "Python"))
console.log(Challange.charAt(15))
console.log(Challange.charCodeAt(11))
console.log(Challange.indexOf("a"))
console.log(Challange.lastIndexOf("a"))

let sentence = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"
console.log("burda")
console.log(sentence.indexOf("çünkü"))
console.log(sentence.lastIndexOf("çünkü"))
console.log(sentence.search("çünkü"))

let string = "  30 Days Of JavaScript   ,,"
console.log(string.trim(' '))
console.log(string.trim())

console.log(Challange.startsWith(30))
console.log(Challange.endsWith("Script"))
console.log(Challange.match("a"))

let days = '30 Days Of'
console.log(days.concat(" JavaScript"))

console.log(Challange.repeat(2))

let sentence1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(sentence1)

// let teresa = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
let teresa = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(teresa)

let toCheck = '10'
console.log(toCheck)
console.log(toCheck === 10)

toCheck = parseInt(toCheck)
console.log(toCheck)

console.log(toCheck === 10)

let toCheck1 = '9.8'

console.log(toCheck1)
console.log(toCheck1 === 10)

toCheck1 = Math.ceil(toCheck1)
console.log(toCheck1)
console.log(toCheck1 === 10)

let py = "python"
console.log(py.indexOf("on"))

let jarg = "jargon"
console.log(jarg.indexOf("on"))

let sentence2 = "Umarım bu kurs jargonla dolu değildir."
console.log(sentence2.indexOf("jargon"))

let randomNum = Math.random()
let numBtnZeroAndAhndrd = randomNum * 100
console.log(Math.floor(numBtnZeroAndAhndrd))

let numBtnFiftyAndAhndrd = (Math.random() * 50)
let randNum1 = Math.floor(numBtnFiftyAndAhndrd) + 50
console.log(randNum1)



let number = Math.random()
let numBtnZeroAnd255 = number * 255 + 1
console.log(Math.floor(numBtnZeroAnd255))

let myString = "Ben Zeynep"
let lengthOfString = myString.length
let randomIndex = Math.floor(Math.random() * lengthOfString)
let randomCharacter = myString[randomIndex]

console.log(randomCharacter)

let paragraph = "1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125"

console.log(paragraph)

console.log(sentence.substr(37, 11))

let sentence3 = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'
let pattern = /aşk/gi
console.log(sentence3.match(pattern).length)

let pattern2 = /çünkü/gi
console.log(sentence.match(pattern2).length)

let sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence4 = sentence4.replace(/\%/g, '').replace(/\$/g, '').replace(/\@/g, '').replace(/\&/g, '').replace(/\#/g, '').replace(/\;/g, '').replace(/\!/g, '')
console.log(sentence4)

let blabla1 = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
let regEx = /\d+/
let degerler = blabla1.match(/\d+/g)
console.log()

let yillikMaas = degerler[0] * 12
let yillikIkramiye = +degerler[1]
let yillikOnlineKurs = degerler[2] * 12
console.log(yillikMaas + yillikIkramiye + yillikOnlineKurs)