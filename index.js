import * as functions from "./functions.js"
import * as callbacks from "./callbacks.js"
import * as arrays from "./arrays.js"
import * as objects from "./objects.js"
import * as miniProjects from "./miniProjects"

console.log(functions.greeting())
console.log(functions.fullname("Aina", "Fabiano"))
console.log(functions.operations(12, 5,"**"))
console.log(functions.ifPair(8))
console.log(functions.max(5,8))
console.log(functions.average(4,5,8))
console.log(functions.Fahrenheit(5))
console.log(functions.countNoSpace("Aina fabiano"))
console.log(functions.noSpace("Rakotondrajaona Aina Fabiano"))
console.log(functions.noSpaceWithRegex("Rakotondrajaona Aina Fabiano"))
console.log(functions.stringReverse("aina"));
console.log(functions.sum([2,5]));
console.log(functions.maxNumber([1,2,88,99,12]))
console.log(functions.factorial(5))
console.log(functions.countVowel("fabiano"))
console.log(functions.countVowel("Aina Fabiano"))
functions.multiplication(5, 10)
console.log(functions.power(2, 3))
console.log(functions.palyndrome("kayAK"))
console.log(functions.squareRoot(25))
console.log(functions.primeNumber(151))
console.log(functions.primeNumberUsingSquareRoot(7))
console.log(functions.count([1,2,3,1,1,5,1], 1))
console.log(functions.filterPair([45,89,45,88,67,952]))
console.log(functions.anagram("fabiano", "onaibaf"))
console.log(functions.sumFunction(1,2,5,3,86))


