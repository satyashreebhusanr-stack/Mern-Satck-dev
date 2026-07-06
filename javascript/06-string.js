// let str = "java script";
// console.log(str)//java script
// console.log(str.length)//11
// console.log(str[0])//j
// console.log(str[1])//a
// console.log(str[4])//
// console.log(str[5])//s


// string literals & interpolation
// let obj={
//     item:"pen",
//     price:10
// }
// let object=`the cost of ${obj.item} is ${obj.price}`;
// console.log(object)

// let item="pen";
// let price= 10
// let object = `the cost of the ${item} is ${10}`;
// console.log(object)

// let str="java script"
// console.log(str)//javascript

// let str1 = "java\nscript"
// console.log(str1)
// let str2="java\tscript"
// console.log(str2)


//method of string

// let str="webbocket"
// nit=str.toUpperCase()
// console.log(str)
// console.log(nit)

//Note -> string can't change their original charectoer so that why we will take one another variable to do this


// let str = "WEB BOCKET"
// let nit= str.toLowerCase()
// console.log(str)
// console.log(nit)

//trim->

// let str = "    today    is a good day       "
// console.log(str.trim())
// console.log(str.replaceAll(" ",""))

// //concatination ->
//  let str1 ="java"
//  let str2 ="script"
//  let str3 = " is a good language"
//  let result = str1.concat(str2)
//  console.log(result)
//  let result1 = str1 + str2 + str3
//  console.log(result1)


//Slice ->

// let str = "web developement"
// console.log(str.slice(2,4))//b
// console.log(str.slice(4,7) )//dev
// console.log(str.slice(0,5))//web d
// console.log(str.slice(3,8))// deve


//replace & replaceall

// let str = "today is a good day and we read js in this day"
// console.log(str.replace("day","time"))
// console.log(str.replaceAll("day","time"))

//charAt ->
// let str = "web socket API"
// console.log(str.charAt(3))
// console.log(str.charAt(6))//c
// console.log(str.charAt(8))//e

//array-

// let arr =[23,45,78,90,84,34,567,3423,65,75]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr[6])


// loop in array
// let heros = ["ironman","spiderman","batman","superman","hulk"]
// // for(let i=0;i<heros.length;i++){
// //     console.log(heros[i])
// // }
// for(let i of heros){
//     console.log(i)
// }


// // array methods :-
// let foodItems = ["pizza","burger","pasta","biryani","chicken"]
//     console.log(foodItems)
//     foodItems.push("momos")
//     console.log(foodItems)
//     foodItems.pop()
//     console.log(foodItems)
//     foodItems.unshift("dahibara")
//     console.log(foodItems)
//     foodItems.shift()
//     console.log(foodItems)


//to string() ->
//  let marks = [34,45,67,87,78,90,]
//  console.log(marks)
//  let mark = marks.toString()
//  console.log(mark)


//concat ->
// let food =["pizza","burger","pasta","biryani","chicken"]
// let drink = ["mozito","mocktail", "cocktail"]
// let vegetable = ["patato","onion","brinjal"]
// let res = food.concat(drink)
// console.log(res)
// let res1 = [food + drink +vegetable]
// console.log(res1)

//slice ->

// let arr = [23,43,78,90,57,67,32,45]
// console.log(arr.slice(2,5))
// console.log(arr.slice(0,6))
// console.log(arr.slice(4,8))
// console.log(arr.slice(2))
// console.log(arr.slice(-3))
// console.log(arr.slice(4,-2))



//splice
// let months =["jan","march","april","june"]
// console.log(months)
// months.splice(1,0,"feb")
// console.log(months)
// months.splice(4,0,"may")
// console.log(months)
// months.splice(4,0,"dec")
// console.log(months)
// months.splice(0,2)
// console.log(months)


// practice questions ->


// let mark =[78,90,54,32,98,25,70]
// let sum=0;
// for(let i=0;i<mark.length;i++){
//  sum+=mark[i];
// }
// console.log(sum)
// let avg =sum/mark.length
// console.log(avg)

// 2.
// let price = [789,543,590,432,489]
// let newprice;
// for(let i=0;i<price.length;i++){
//     newprice = price[i]-(price[i]*10/100)
//     price[i]=newprice
// }
// console.log("newprice",price)

let price = [789,543,590,432,489]
let i=0;
for(let val of price){
    console.log(`val of price is ${i}=${val}`);
    let offer = val-(val*10/100)
}
















