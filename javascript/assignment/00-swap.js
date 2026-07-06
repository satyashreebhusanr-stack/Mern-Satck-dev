// let a=3
// let b=5
// console.log(`before swap - a: ${a}`) // Output: 3
// console.log(`before swap - b: ${b}`) // Output: 5
// let temp=a
// a=b
// b=temp
// console.log(`after swap - a: ${a}`) // Output: 5
// console.log(`after swap - b: ${b}`)//output: 3
let a=3
let b=5
console.log(`before swap - a: ${a}`) // Output: 3
console.log(`before swap - b: ${b}`) // Output: 5
a=a+b
b=a-b
a=a-b
console.log(`after swap - a: ${a}`) // Output: 5
console.log(`after swap - b: ${b}`)//output: 3