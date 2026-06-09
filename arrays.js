/*Exercice 01: display the first and the last value in array */
const arrayNumber = [10,20,30,40,50]
console.log(arrayNumber[0])
console.log(arrayNumber[arrayNumber.length - 1])

/*Exercice 02: display each element with index */
const fruits = ["Apple", "Banana", "Watermelon", "Pineapple", "Orange"]
//basic 
for(let i = 0; i < fruits.length; i++){
    console.log(`Index n° ${i} : ${fruits[i]}`)
}
//with forEach method
fruits.forEach((element, index) => {
    console.log(`Index n° ${index} : ${element}`)
})

/*Exercice 03: add element in last and first index of list */
const firstname = ["Fabiano", "Aina", "Anjara", "Juliot"]
firstname.push("Peter")
firstname.unshift("Kanto")
console.log(firstname)

/*Exercice 04: delete element in last and first index of list */
firstname.pop()
firstname.shift()
console.log(firstname)

/*Exercice 05: calcul sum*/
const notes = [10,19,14,9,12]
let sum = 0
for(let note of notes) sum += note
console.log(`Sum: ${sum}`)

/*Exercice 06: search max value in notes array*/
let max = notes[0], min = notes[0]
for(let note of notes)(note > max) ? max = note : max
console.log(max)

/*Exercice 07: search min value in notes array */
for(let note of notes)(min > note) ? min = note : min
console.log(min)

/*Exercice 08: search an element in notes array */
//using no methods


