/* Function Currying: Curring is a process in functional programming in
    which we transform a function with multiple parameters to a sequence of 
    nesting functions that take one argument at a time
    function f(a, b, c) is transformed to f(a)(b)(c)
*/

function sum(a, b, c) {
    return (a + b + c)
}

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

const sum2 = curriedSum(2)
const sum3 = sum2(3)
const sum5 = sum3(5)
console.log(sum5)