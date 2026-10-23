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


//Exercice 02:
class Computer{
    brand
    processor
    ram

    constructor(brand, processor, ram){
        this.brand = brand
        this.processor = processor
        this.ram = ram
    }

    showSpecifications(){
        console.log(`# Computer Specifications: 
            ==> ${this.brand} 
            ==> ${this.processor} 
            ==> ${this.ram}
        `)
    }
}

pc1 = new Computer("Dell Latitude 5430", "Intel Core de 12e génération", "64 Go DDR4")
pc2 = new Computer("Apple MacBook Air M5", "Puce Apple Silicon M5", "16Go")
pc3 = new Computer("Lenovo Legion 5 15IRX10 ", "Intel Core i7-13650HX", "32 Go DDR5")

pc1.showSpecifications()
pc2.showSpecifications()
pc3.showSpecifications()
