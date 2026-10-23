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

/*Exercice 06: Download Similation*/
const dSimulation = (cb) => {
    console.log("Downloading...")
    setTimeout(() => {
        cb()
    }, 3000)
}

dSimulation(() => {
    console.log("Downloaded File !")
})

/*Exercice 07: verify age using callback */
const verifyAge = (age, successCallback, errorCallback) => {
    if(age < 0 || age > 120){
        console.log("Age Invalid !!!")
    } 
    (age >= 18) ? successCallback() : errorCallback()
}

verifyAge(
    19,
    () => console.log("Authorized access"),
    () => console.log("Denied Access")
)

/*Exercice 08: commande system' s Restaurant */
const getCommande = (callback) => {
    console.log("Commande Accepted")
    setTimeout(() => {
        callback()
    }, 1000)
}

const preparCommande = (callback) => {
    console.log("In preparation...")
    setTimeout(() => {
        callback()
    }, 1000)
}

const serveCommande = (callback) => {
    console.log("Commande served")
}

getCommande(() => {
    preparCommande(() => {
        serveCommande()
    })
})

/*Exercice 09: game of score: display message after 1 second*/
const play = (score, succesCallback, failCallback) => {
    (score < 0) ? console.log("Score Invalid") : (score > 50) ? succesCallback(score) : failCallback(score)
}

play(
    80,
    (score) => {
        setTimeout(() => {console.log(`Congratulations !!! you earn ${score} points`)}, 1000)
    }, 
    (score) => {
        setTimeout(() => {console.log(`Game over !!! you earn only ${score} points`)}, 1000)
    }
)

/*Exercice 10: Simulation of forEach method*/
const forEachSimulation = (arrayNumber, callback) => {
    for(let i of arrayNumber) callback(i)
}
const integer = [12,88,66,223,845,14]
forEachSimulation(integer, (i) => {
    console.log(i)
})