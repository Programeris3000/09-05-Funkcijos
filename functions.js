

// //Funkcijos pirma dalis
// SLAPTAŽODIS
function checkPassword (pass){
let originalPassword = `${pass}`
let password = originalPassword.trim()
let passwordLength = password.length

if (!password.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes')
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}
}

checkPassword('asdasdasdasdsad#')
checkPassword('asdasdasd')
checkPassword('asdasdasdasdasdasdasdasdasd#')

//Funkcijos antra dalis

// // AMŽIUS
function typeAge(number){
let age = number

if (isNaN(age)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Įvestas amžius yra per mažas')
} else if (age < 6) {
  console.log('Į mokyklą neina')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Pradinukas')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Pagrindinė')
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Gimnazija')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Įvestas amžius yra per didelis')
} 
}

typeAge(15)
typeAge(26)
typeAge(4)

// ŽAIDIMAS
//Funkcijos trecia dalis
// // PIRMAS LYGIS
// // Artimiausia nuo Žemės esanti Žvaigždė?
function checkAnswer(answer1, answer2){
let correctAnswer11 = 'sun'
let playerAnswer11 = `${answer1}`

let correctAnswer12 = 'moon'
let playerAnswer12 = `${answer2}`


if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}
}
checkAnswer('sun', 'moon')



// // ANTRAS LYGIS
function answerCheck (firstAnswer, secondAnswer){
let correctAnswer21 = 1
let correctAnswer22 = 1

let playerAnswer21 = firstAnswer
let playerAnswer22 = secondAnswer


if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}
}
answerCheck(1, 1)

// TREČIAS LYGIS
function checkYourAnswer(nsw1, nsw2, nsw3){
let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = nsw1
let playerAnswer32 = nsw2
let playerAnswer33 = nsw3

let answer31 = correctAnswer31 === playerAnswer31
let answer32 = correctAnswer32 === playerAnswer32
let answer33 = correctAnswer33 === playerAnswer33

let output = ''

if (answer31 && answer32 && answer33) {
  output = 'Patekai: visi teisingi'
} else if (answer31 && answer32) {
  output = 'Patekai: bet trečias neteisingas'
} else if (answer31 && answer33) {
  output = 'Patekai: bet antras neteisingas'
} else if (answer32 && answer33) {
  output = 'Patekai: bet pirmas neteisingas'
} else if (answer31) {
  output = 'Nepatekai: bet pirmas teisingas'
} else if (answer32) {
  output = 'Nepatekai: bet antras teisingas'
} else if (answer33) {
  output = 'Nepatekai: bet trečias teisingas'
} else {
  output = 'Nepatekai: visi neteisingi :('
}

console.log(output)
}
checkYourAnswer(1 , 1 , 1)


//Funkcijos trecia dalis
//Pasisveikinimas
function helloFriend (online, name, hours, born){
let isLoggedIn = online
let userName = `${name}`
let time = hours
let isBirthday = born

let greetingText = ''
let nameText = (isLoggedIn && userName) ? `, ${userName}` : ''
let birthdayText = (isLoggedIn && isBirthday) ? ' and have a great birthday!' : '.'

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning'
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon'
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = 'Good Evening'
} else {
  greetingText = 'Hello'
}

let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)
}
helloFriend(true, 'John', 14, false)