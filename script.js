// String ("", '')
const myName = "Petro"
console.log(myName)

// Number 
const myAge = 41
console.log(myAge)
const trueData = true
const falseData = false
const currentYear = 2024
console.log(currentYear - myAge)

const inputCurrency = document.querySelector('input[type="text"]')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const currentRate = 1.03
btn.addEventListener('click',function(){
alert(`${inputCurrency.value} EUR converted in CHF and sum in CHF = ${inputCurrency.value/currentRate}`)
})

const result2 = currentYear - myAge

const birthYear = 1983

console.log(result2 == birthYear)

const userAnswer1 = prompt('Enter your Age')
const userAnswer2 = prompt('Enter current year')
alert (userAnswer2-userAnswer1)

console.log(myName.length)