/*Exercices 01: function display message */
export function greeting(){
    return "Hello, world!"
}

/*Exercices 02: function display message with variable */
export function fullname(firstname, lastname){
    return `Hello, ${firstname} ${lastname}!`
}

/*Exercices 03: operations with two numbers*/
export const operations = (a, b, operator) => {
    switch(operator){
        case "+": return a + b
        break
        case "-": return a - b
        break
        case "*": return a * b
        break
        case "/": return a / b
        break
        case "**": return a ** b
        break
        default: return "Operator invalid !!"
    }
}

/*Exercices 04: test a number if pair */
export function ifPair(number){
    return (number % 2 === 0) ? true : false
}

/*Exercices 05: return a max of two numbers*/
export const max = (a, b) => (a > b) ? a : b

/*Exercices 06: simple calcul average */
export const average = (a, b, c) => (a + b + c) / 3

/*Exercices 07: conversion Celsius to Fahrenheit */
export function Fahrenheit(Celsius){
    return `${Celsius}°C = ${(Celsius * 9/5) + 32} Fahrenheit`
}

/*Exercices 08: count char in string escape excluded*/

//basic
export function countNoSpace(str){
    const a = str.split("")
    let count = 0
    for (let i = 0; i < a.length; i++) if(a[i] === " ") count ++
    return (str.length - count)
}

//with replaceAll method
export const noSpace = (str) => str.replaceAll(" ", "").length

//with regEx
export const noSpaceWithRegex = (str) => str.replace(/ /g, "").length

/*Exercices 09: reverse a string*/
export const stringReverse = str => str.split("").reverse().join("")

/*Exercices 10: sum in array number*/
export function sum(array){
    let sum = 0
    for(let i of array) sum += i
    return sum
}

/*Exercices 11: maximum number in array*/
export function maxNumber(array){
    let max = array[0]
    for(let i of array) if (max < i) max = i
    return max
}

/*Exercices 12: factorial*/
export const factorial = (number) => (number === 0) ? 1 : (number * factorial(number - 1))
    
/*Exercices 13: count vowel in string*/
export function countVowel(str){
    const vowel = ["a","e","i","o","u","y"]
    let vowelCount = 0
    for(let i of vowel)
        for(let j of str.split("")) (i === j.toLowerCase()) ? vowelCount ++ : 0
    return vowelCount
}

//using includes method
export function countWithIncludes(str){
    const vowel = "aoieuyAOIEUY"
    let vowelCount = 0
    for (let i of str) (vowel.includes(i)) ? vowelCount ++ : 0
    return vowelCount
}


/*Exercices 14: Multiplication table*/
export function multiplication(number, limit){
    for(let i = 0; i <= limit; i++) console.log(`${number} * ${i} = ${number * i }`)
}

/*Exercices 15: Calcul of power number no ** */
export const power = (a, n) => (n === 0) ? 1 : a * power(a, n - 1)

/*Exercices 16 : Test if Palyndrome */
export const palyndrome = (word) => {
    const arrayWord = word.toLowerCase().split("").reverse().join("")
    return (word.toLowerCase() === arrayWord) ? true : false
}

/*Exercices 17 : square root */
export const squareRoot = (n) => n ** 0.5

/*Exercices 18 : Test if a number is prime*/
export const primeNumber = (number) => {
    if(number < 2) return false
    for(let i = 2; i < number; i++) {if(number % i === 0) {return false}}
    return true
}
// for dynamic test using square root
export const primeNumberUsingSquareRoot = (number) => {
    const n = Math.floor(squareRoot(number))
    return primeNumber(n)
}

/*Exercices 19 : count occurence value */
export function count(array, value) {
    let countValue = 0
    for(let i of array) (i === value) ? countValue ++ : 0
    return countValue
}

/*Exercices 20 : filter pair number in array no using filter method */
export const filterPair= (array) => {
    const pairValue = []
    for(let i of array) if(i % 2 === 0) pairValue.push(i)
    return pairValue
}

/*Exercices 21 : Anagram solution for two strings*/

//basic
export const anagram = (firstValue, secondValue) => {
    const a = (typeof(firstValue) && typeof(secondValue)) === "string"

    if (firstValue.length != secondValue.length && !a) return false

    const f = firstValue.toLowerCase().split("")
    const s = secondValue.toLowerCase().split("")

    for(let i of f){
        if (s.includes(i)){
            let index = s.indexOf(i)
            s.splice(index, 1)
        }
        else return false 
    }

    return s.length === 0
}

/*Exercices 22 : return a sum using rest parameters */
export const sumFunction = (...arrayNumber) => {
    const sum = arrayNumber.reduce((a, b) => a + b)
    return sum
}

