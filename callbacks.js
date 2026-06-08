/*Exercice 01: Callback simple */

//basic
function displayMessage(firstname){
    console.log(`Hello, ${firstname}`)
}

const greeting = (firstname, cb) => {
    cb(firstname)
}

greeting("Fabiano", displayMessage)

//Callback anonym
const dynamicGreeting = (firstname, cb) => cb(firstname)
dynamicGreeting("Aina Fabiano", (firstname) => {
    console.log(`Hello, ${firstname}`)
})


/*Exercice 02: sum of two numbers using callbacks*/

//basic
const displaySum = (sum) => {
    console.log(sum)
}

const sum = (a, b, cb) => {
    const sum = a + b
    cb(sum)
}

sum(6,5,displaySum)

//using callback anonym
const dynamicSum = (a, b, cb) => {
    const sum = a + b
    cb(a, b, sum)
}

dynamicSum(2,3,(a, b, sumResult) => {
    console.log(`${a} + ${b} = ${sumResult}`)
})

/*Exercice 03: browse each element in array and display using callbacks*/
const browseArray = (array, cb) => {
    for(let i of array) cb(i)
}

browseArray([1,2,3], (element) => {
    console.log(element)
})

/*Exercice 04: changes each element of the array*/
const changeValue = (arrayNumber, cb) => {
    const finalValue = []
    for(let i of arrayNumber) finalValue.push(cb(i))
    console.log(finalValue)
}

changeValue([2,4,5,6,7], (a) => a * 2)

/*Exercice 05: setTimeout simple*/
console.log("Start")
setTimeout(() => {
    console.log("Wait...")
}, 1000)
setTimeout(() => {
    console.log("End")
}, 2000)

//using callback
const callback = () => {
    console.log("Start")
    setTimeout(() => {
        console.log("Wait...")
        setTimeout(() => {
            console.log("End")
        }, 1000)
    }, 1000)
}

callback()


