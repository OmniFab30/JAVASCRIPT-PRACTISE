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

//Exercice 05: Mini-Calculator
class Calculator{
    a
    b

    constructor(a, b){
        this.a = a
        this.b = b
    }

    add(){
        return this.a + this.b
    }

    subtract(){
        return this.a - this.b
    }

    multiply(){
        return this.a * this.b
    }

    divide(){
        if(this.b == 0){
            console.log("Calcul unsuccesfully")
        }
        return this.a / this.b
    }
}

function displayResult(
    a, 
    b, 
    addResult, 
    subtractResult,
    multiplyResult, 
    divideResult
){
    console.log(`Calculate for: a = ${a} and b = ${b}`)
    console.log(`\t==> ${a} + ${b} = ${addResult}`)
    console.log(`\t==> ${a} - ${b} = ${subtractResult}`)
    console.log(`\t==> ${a} * ${b} = ${multiplyResult}`)
    console.log(`\t==> ${a} / ${b} = ${divideResult}`)
}

c1 = new Calculator(4,5)
displayResult(c1.a, c1.b, c1.add(), c1.subtract(), c1.multiply(), c1.divide())
c2 = new Calculator(26,14)
displayResult(c2.a, c2.b, c1.add(), c2.subtract(), c2.multiply(), c2.divide())


//Exercice 06: Stock Value

class Product{
    name
    price
    quantity

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    calculateStockValue(){
        return this.price * this.quantity
    }
}

const products = [
    p1 = new Product("Apple", 10, 5),
    p2 = new Product("Pineapple", 25, 15),
    p3 = new Product("Orange", 7, 9),
    p4 = new Product("Banana", 4, 12),
    p5 = new Product("Pear", 2, 20)
]

function displayStock(p){
    console.log("\t=== STOCK VALUE ===")

    for(i = 0; i < p.length; i++){
        console.log(`\nProduct-${i}: 
    Name: ${p[i].name}
    Price: $${p[i].price}
    Quantity: ${p[i].quantity} 
    Stock Value: $${p[i].price * p[i].quantity}`)
    }
}

displayStock(products)