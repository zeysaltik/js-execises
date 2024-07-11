let firstName = "Zeynep"
let lastName = "Saltık"
let country = "Türkiye"
let city = "İzmir"
let age = 16
let isMarried = false
let myYear = 2008

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof myYear)

console.log('10' === 10)

console.log(parseInt('9.8') == 10)

console.log("true değerler")
console.log(Boolean(true))
console.log(Boolean(1))
console.log(Boolean("zeynep"))

console.log("false değerler")
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))


console.log("Zeynep".length == "Saltık".length)
console.log(30 > 26)
console.log(11 >= 11)

console.log("Zeynep".length != "Saltık".length)
console.log(30 == 26)
console.log(28 === '28')

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false

let py = "python"
console.log(py.length)

let jarg = "jargon"
console.log(jarg.length)

console.log(py.length != jarg.length)

console.log(4 > 3 && 10 < 12) //true true -> true
console.log(4 > 3 && 10 > 12) //true false -> false
console.log(4 > 3 || 10 < 12) //true true -> true
console.log(4 > 3 || 10 > 12) //true false -> true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) //true true ->true ->false
console.log(!(4 > 3 && 10 > 12)) //true false ->false ->true
console.log(!(4 === '4')) //true

let date = new Date()

let year = date.getFullYear()
console.log(year)

let month = date.getMonth()+ 1
console.log(month)

let dayOfMonth = date.getDate()
console.log(dayOfMonth)

let day = date.getDay()
console.log(day)

let hour = date.getHours()
console.log(hour)

let minute = date.getMinutes()
console.log(minute)

let second = date.getSeconds()
console.log(second)

let time = date.getTime()
console.log(time)

console.log(`${dayOfMonth}/${month}/${year} ${hour}:${minute}:${second}`)
