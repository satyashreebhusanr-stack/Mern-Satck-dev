let arr =  [10,20,42,30,56,11, 25 , 97 , 66 , 74] 
let largest = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(`The largest number in the array is: ${largest}`)