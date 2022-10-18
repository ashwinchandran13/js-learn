// generators are function that return iterable objects
// rewriting same iterable example

function* generatorFunction() {
    yield 'hello'
    yield 'world'
}

const generatorObject = generatorFunction()
// generatorObject is an iterable object

for( const item of generatorObject) {
    console.log(item);
}