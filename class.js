//Exercice 01: Class Person

class Person{
    firstname
    age

    constructor(firstname, age){
        this.firstname = firstname
        this.age = age
    }

    selfIntroduice(){
        console.log(`Hello i'm ${this.firstname} and i'm ${this.age} years old`)
    }
}

p1 = new Person("Aina Fabiano", 19)
p2 = new Person("Aina Riano", 15)
p1.selfIntroduice()
p2.selfIntroduice()

