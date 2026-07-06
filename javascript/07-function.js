// function sum(a,b){
//   return a+b;
// }
// sum(2,3)
// function Vowels(str) {
//     let count = 0;
    
//     for (let i=0; i<str.length; i++) {
//         let char = str[i];
//         if (
//             char === 'a' ||char === 'e' ||char === 'i' ||char === 'o' ||char === 'u'
//         ) {
//             count++;
//         }
//     }
    
//     return count;
// }
// console.log(Vowels("web bucket"));

//type A function
// function myFunction() {
//     // Function implementation
//     console.log("today is a good day");
//     console.log("we are learning js");
// }
// myFunction(); // Calling the function

// //type B function
// function myFunction(a,b) {
//     // Function implementation
//     let sum = a+b;
//     console.log("sum of two numbers is:",sum);
// }
// myFunction(2,3); // Calling the function


//for each loop
// let arr=[10,20,30,50,40,20,10]
// // arr.forEach(function printval(val){ //normal function
// //     console.log(val);
// // })
// arr.forEach((val)=>{ //arrow function
//     console.log(val);
// })

let arr1=['goa','delhi','mumbai']
arr1.forEach((val) =>{
    console.log(val);
})

//example of map function
// let nums = [4, 9, 16, 25]
// let newArr = nums.map((val) => {
//     return val*val
// })
// console.log(nums)
// console.log(newArr)


// example of a fillter method
// print only even nums
// let nums = [4,9,16,25,36,49,64]
// let evenNums = nums.filter((val) =>{
//     return val%2 ==0
// })
// console.log(nums)
// console.log(evenNums)

//Q. we are given array of marks of student. filter of the ,arks of student that scored more than 90

let marks = [89,86,34,91,32,64,92,45]
let highMarks = marks.filter((val) =>{
    return val>=90
})
console.log(marks)
console.log(highMarks)

