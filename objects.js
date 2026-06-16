//Exercice 01: Basic syntax to create object
 const person = {
    firstname: "Fabiano",
    age: 19,
    city: "Anosizato Est I",
    establishment: "ISPM"
}
console.log(person)

//display properties of person using Object.entries()
for(const[key, value] of Object.entries(person)) 
    console.log(`${key} : ${value}`)


//Exercice 02: Add proprety inside object
person.profession = "Student" //first option
person["notes"] = [12,15,18] //second option
console.log(person) 

const addPerson = {...person, familySituation : "single"} //spread operator
console.log(addPerson)

//Exercice 03: Modify a property
person.age = 25 //first option
person["firstname"] = "Aina Fabiano" //second option

//Exercice 04: delete a property
delete person.city //first option

const {establishment,...newPerson} = person //using spread operator
console.log(newPerson)

Reflect.deleteProperty(person, "profession") //delete with Reflect.deleteProperty()
console.log(person)

//Exercice 05: display all keys with Object.keys()
for (let i of Object.keys(person)) console.log(i)

//Exercice 06: display all properties using for ... in
const car = {
    mark: "Toyota",
    model:"Corolla",
    year: "2020"
}

for (let property in car) console.log(`${property}: ${car[property]}`)

//Exercice 07: Count the number of properties in the object
console.log(Object.keys(car).length) //only using Object.keys()
console.log(Object.values(car).length) //only using Object.values()
console.log([...Object.keys(car)].length) //using spread operator and object.keys()
console.log([...Object.values(car)].length) //using spread operator and object.values()

//Exercice 08: display display only the object's values
for (let value in car) console.log(`${car[value]}`) //using for ... in
for (let value of Object.values(car)) console.log(value) //using for ... of and Object.values()

//Exercice 09: Object methods
const user = {
    firstname: "Aina",
    lastname: "Fabiano",
    age: 19,
    
    fullname(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

user.fullname()

//add method
//basic 
function sayHello(){
    console.log(`Hello , ${this.firstname} ${this.lastname} !`)
}

user.hello = sayHello
user.hello()

//using anonymous function
user.displayAge = function() {
    console.log(`I 'm ${this.age} years old`)
}
user.displayAge()

console.log(user)

//Exercice 10: Create an object bankingCount and use methods
const bankingCount = {
    holder: "Rakotondrajaona Aina Fabiano",
    balance: 25000,

    //methode to deposit an amount
    deposit(amount){
        this.balance += amount
    },
    //method to pull an amount
    pull(amount){
        this.balance -= amount
    }
}

//deposit 5000
bankingCount.deposit(5000)
console.log(bankingCount.balance)

//pull 10000
bankingCount.pull(10000)
console.log(bankingCount.balance)

//Exercice 11: add display amount method