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
const notes = [10,19,14,9,12,10]
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

/*Exercice 08: count pair number in notes array */
let countPairNote = 0
for(let note of notes)(note % 2 === 0) ? countPairNote++ : countPairNote
console.log(`notes array contains ${countPairNote} pair numbers`)

/*Exercice 09: search an element no using  methods*/
const search = 10
for(let note of notes) {
    if(note === search){
        console.log(`${search} is in the list`)
        break
    }
    else{
        console.log(`${search} isn't in the list`)
        break
    }
}

/*Exercice 10: get the index of element no using  methods*/
//basic
let index = 0
 const numberSearch = 12
for(let i = 0; i < notes.length; i++){
    if(numberSearch === notes[i]){
        index = i
        console.log(`element: ${numberSearch} index : ${index}`)
    } 
}

//using forEach
notes.forEach((element, index) => {
    if (element ===  numberSearch) console.log(`element: ${element} | index: ${index}`) 
});

/*Exercice 11: count an element in array*/
let countNumber = 0
const countElement = notes.forEach(element => {
    if(element === numberSearch) countNumber++
});
console.log(`${numberSearch}: There are ${countNumber} in the list`)

/*Exercice 12: reverse an array no using reverse() method*/
const n = [0,1,2,3,4,5]
const nReversed = []
for(let i = n.length - 1; i > -1;  i--) nReversed.push(i)
console.log(nReversed)

// reverse array on the place
let left = 0
let right = n.length - 1

while(left < right){
    //reverse element
    let tmp = n[left]
    n[left] = n[right]
    n[right] = tmp

    left ++
    right--
}
console.log(n)

/*Exercice 13: create new array contains only a pair number*/
const pairArray = []
for(let number in n) if(number % 2 === 0) pairArray.push(number)
console.log(pairArray)

 /*Exercice 14: multiply each element by 2 no using method*/
const arrayMultiplied = []
for(let i in n) arrayMultiplied.push(i * 2)
console.log(arrayMultiplied)

/*Exercice 15: delete duplicates value*/
const duplicateArray = [4,4,5,5,8,9,1,2,4,5]
const uniqueValue = []
for(let number of duplicateArray) (!uniqueValue.includes(number)) && uniqueValue.push(number)
console.log(uniqueValue)

/*Exercice 16: fusion two arrays*/
const firstArray = [1,2,3,4,5]
const secondArray = [6,7,8]
for(let n of secondArray) firstArray.push(n)
console.log(firstArray)

