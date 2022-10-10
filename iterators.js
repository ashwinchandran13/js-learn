// iterable: an object which implements iterable protocol is called an
// iterable. For an object to be an iterable it must implement a method 
// at key [Symbol.iterator]. That method should not accept any argument and
// should confirm to the iterator protocol.
// the iterable protocol decides whether an object is iterable
// the object must have a next() method the returns an object with two properties
// value: which gives the current value
// done: which is a boolean value whether there are more values to be iterated
// upon

const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if (step === 1) {
                    return {value: 'Hello', done: false}
                } else if (step === 2) {
                    return {value: 'World', done: false}
                }
                return {value: undefined, done: true}
            }
        }

        return iterator
    }
}

for (const word of obj) {
    console.log(word);
}

// we have created our own iterable