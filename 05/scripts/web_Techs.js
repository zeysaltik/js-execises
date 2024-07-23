const webTechs = [

    'HTML',

    'CSS',

    'JavaScript',

    'React',

    'Redux',

    'Node',

    'MongoDB'

]
let indexOfSass = webTechs.indexOf("Sass")
if (indexOfSass == -1) {
    webTechs.push("Sass")
} else {
    console.log("Sass is a CSS preprocess")
}
console.log(webTechs)