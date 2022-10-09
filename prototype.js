function Person(fname, lname) {
    this.fname = fname
    this.lname = lname
}

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Clark', 'Kent')

// since js being a dynamic language, properties can be attached to an object 
// at any time

// person1.getFullName = function () {
//     return this.fname + ' ' + this.lname
// }

// console.log(person1.getFullName());
// console.log(person2.getFullName());  // error

// getFullName fn is just specific to just person1

// to assign a property or a method to every instance of Person fn, we use
// prototype. Every fn has a property called prototype which points to an
// object. Making use of prototype to determine all the shareble properties.

Person.prototype.getFullName = function () {
    return this.fname + ' ' + this.lname
}

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// one use of prototype is to share properties or methods across instances
// to implement inheritence in js, prototype is used.
// Prototypal Inheritence

// if an instance of a fn wants to use a property of another function

// batman instance can access isSuperHero and fightCime fn
// batman wants to access getFullName fn. It can be done using inheritance

function SuperHero(fname, lname) {
    Person.call(this, fname, lname);
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function () {
    console.log('Fighting Crime');
}
SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero('Bruce', 'Wayne')

SuperHero.prototype.constructor = SuperHero

console.log(batman.getFullName());