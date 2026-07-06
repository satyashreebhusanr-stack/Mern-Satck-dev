// if condition:-

// let age=20;
// if(age>=18){
//     console.log("you are eligible for vote");
// }

//if-else condition:-
// let age=10;
// if(age>=18){
//     console.log("you are eligible for vote");
// } 
// else {
//     console.log("you are not eligible for vote");
// }
//if-elif condition:-
// let mode="green";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// else if(mode==="blue"){
//     color="blue";
// }
// else if(mode==="pink"){
//     color="pink";
// }
// else{
//     color="white";
// }
// console.log(color);

//practice task:-
//write code to give grades to student according their score..
//1.90-100 -> A
//2.80-89 -> B
//3.70-79 -> C
// 4.60-69 -> D
//5.0-59 -> F
let score=85;
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=80 && score<=89){
    grade="B";
}
else if(score>=70 && score<=79){
    grade="C";
}
else if(score>=60 && score<=69){
    grade="D";
}
else{
    grade="F";
}
console.log(grade);