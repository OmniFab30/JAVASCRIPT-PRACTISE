//Exercice 01: Basic syntax to create object
 const person = {
    firstname: "Fabiano",
    age: 19,
    neighborhood: "Anosizato Est I",
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
delete person.neighborhood //first option

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
bankingCount.displayAmount = function(){
    console.log(`Your balance : ${this.balance} Ar`)
}
bankingCount.displayAmount()

//Exercice 12: nested object
const student = {
  firstname: "Paul",
  address: {
    city: "Antananarivo",
    neighborhood: "Analakely"
  }
};

//display city values
console.log(student.address.city) 
console.log(student.address["city"])

//Exercice 13: add postal code inside the nested object
student.address.postalCode = 101
student.address["postalCode"] = 101
console.log(student)

//Exercice 14: display all properties in address
for (let property of Object.keys(student.address)) 
    console.log(`${property} : ${student.address[property]}`)

//Exercice 15: table of objects
const undergraduate = [
  {firstname: "Jean", note: 15 },
  {firstname: "Paul", note: 12 },
  {firstname: "Marie", note: 18 }
]

//display all firstname
for(let i in undergraduate) 
    console.log(undergraduate[i].firstname)

//Exercice 16: Displays only students with a grade of 15 or higher.
//using for...in
//for(let i in undergraduate)
    (undergraduate[i].note >= 15) && console.log(`${undergraduate[i].firstname} : ${undergraduate[i].note}`) 

//using for...of and Object.values()
for(let i of Object.values(undergraduate)) 
(i.note >= 15) && console.log(`${i.firstname}: ${i.note}`)

//Exercice 17: average of note
//basic
const averageNote = () => {
    let sum = 0

    for(let i in undergraduate){
        sum += undergraduate[i].note
    }

    const average = (sum / undergraduate.length)
    console.log(average)
}

averageNote()

//Exercice 18: Find the student with the best grade.
//basic
const bestGrade = () => {
    let bestNote = undergraduate[0].note
    let bestStudent = undergraduate[0].firstname

    for(let i of undergraduate){
        if (i.note >= bestNote) {
            bestNote = i.note
            bestStudent = i.firstname
        }
    }

    console.log(`Undergraduate with the best grade is ${bestStudent} : ${bestNote}`)
}

bestGrade()

//Exercice 19: Destructuring
const book = {
  title: "Modern JavaScript",
  author: "Dupont",
  pages: 350
}
// Retrieves properties into variables using destructuring.
const {title, author, pages} = book
console.log(`${title} - ${author} - ${pages}`)

//Exercice 20: Rename the variables
const {title: bookTitle, author: bookAuthor, pages: pageNumber} = book
console.log(`${bookTitle} - ${bookAuthor} - ${pageNumber}`)

//Exercice 21: Copies a user object with the spread operator.
const bookCopies = {...book}
for(const[key, value] of Object.entries(bookCopies)){
    console.log(`${key} : ${value}`)
}

//Exercice 22: Adds a property without modifying the original object.
const addNewProperties = {...book, date: "10-02-26", category: "Roman"}
for(const[key, value] of Object.entries(addNewProperties)){
    console.log(`${key} : ${value}`)
}

//Exercice 23: merge two objects.
const dictionnary = {
    dictionnaryTitle: "Le petit Robert",
    dictionnaryAuthor: "Robert"
}

const newObject = {...book, ...dictionnary}
console.log(newObject)
