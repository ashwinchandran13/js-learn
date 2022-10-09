
// function curry(sum) {
//     return function (value) {
//         console.log(sum);
//         return sum +=value
//     }
// }

const curry = sum => value => sum +=value

const array = [5, 23, 6, 8, 34];
const sum = array.map(curry(0))
console.log(sum);