 /* closure: when a function returns another function, 
    we are returing the combination of function definition
    along with function scope. This would let the function definition
    have an associated persistent memorywhich could hold on to live data 
    between executions. This combination of the function and it's scope chain
    is what is called a closure in javascript.
 */

 function outer() {
    let counter = 0;
    function inner() {
        counter ++;
        console.log(counter)
    }
    return inner
 }

 const fn = outer()
 // calling inner function twice
 fn()
 fn()