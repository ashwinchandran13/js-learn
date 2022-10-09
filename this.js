/* this def: this keyword is used in a function, refers  to the object
    it belongs to. It makes function reusable by letting us decide the object
    value. The value of the object is determined entirely by how a function
    is called.
*/

// function sayMyName(name) {  // what would the function return-depends on fn call
//     console.log(`My name is ${name}`);
// }

// sayMyName('Walter White')
// sayMyName('Heisenberg')

// we can determine the value by how the fn is called
// same way we can determine the value of this by how the fn is called


// 1. implicit binding

const person = {
    name: 'Walter White',
    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
}

// function is called with dot operator, which means object is what this keyword
// will be referencing

// person.sayMyName()

// 2. explicit binding

// if the function is not defined inside an object and we want to reference
// an object to call the function

function sayMyName(name) {
    console.log(`My name is ${this.name}`);
}

// sayMyName.call(person)

// 3. new binding

// js allows to create empty objects with new keyword

function Person(name) {
    this.name = name
}

// with this function multiple Person can be created

const p1 = new Person('Ashwin')
const p2 = new Person('Batman')

// this person function is called a constructor function as we can create
// multiple person from a person function

// when we invoke a function with new keyword, js under the hood creates
// an empty object which the function's this will reference

// console.log(p1.name, p2.name)

// 4. default binding

// the fallback binding method used for a function when none of the above 
// conditions match

// sayMyName()  

// when none of the condtions match, js defaults global scope and set this
// keyword to global object. In the global scope, js will try to find the
// variable name

// const name = 'Superman' // on browser this would work as global
// for node
globalThis.name = 'Superman'
sayMyName()

// order of precedence: new, explicit, implicit, default