// rewriting prototypal inheritance functions using classes
// sugar coating of existing js functionalities
class Person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    sayMyName() {
        return this.fname + ' ' + this.lname
    }
}

const classP1 = new Person('Bruce', 'Wayne')

console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fname, lname) {
        super(fname, lname)
        this.isSuperHero = true
    }
}

const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.sayMyName());

