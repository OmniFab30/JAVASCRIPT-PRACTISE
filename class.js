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

//Exercice 03:
class Rectangle{
    width
    height

    constructor(width, height){
        this.width = width
        this.height = height
    }

    calculateArea(){
        return this.width * this.height
    }

    calculatePerimeter(){
        return (this.width + this.height) * 2
    }
}

r1 = new Rectangle(5, 10)
console.log(`Area value: ${r1.calculateArea()}`)
console.log(`Perimeter value: ${r1.calculatePerimeter()}`)

//Exercice 04: Lamp state
class Lamp{
    color
    isOn = false

    constructor(color, isOn){
        this.color = color
        this.isOn = isOn
    }

    turnOn(){
        if(this.isOn === false){
            this.color = `No-${this.color}`
            this.isOn = true
        }
        else console.log("The Lamp is already off")
    }

    turnOff(){
        if(this.isOn === true){
            this.color = `No-${this.color}`
            this.isOn = false
        }
        else console.log("The Lamp is already on")
    }

    showStatus(){
        console.log(`Lamp Status: 
            ==> Color: ${this.color} 
            ==> State: ${this.isOn}
        `)
    }
}

l1 = new Lamp("red", false)
l1.turnOn()
l1.showStatus()
l2 = new Lamp("green", true)
l2.turnOff()
l2.showStatus()