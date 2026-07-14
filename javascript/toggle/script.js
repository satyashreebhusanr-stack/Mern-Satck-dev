let newBtn = document  . querySelector("#btn")
let currMode = "light"
let modes = ["white","black","pink","green","blue"]
// let index = 0;
newBtn.addEventListener("click",() =>{
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black"
//     }else{
//         currMode = "light";
// document.querySelector("body").style.backgroundColor = "white"
//     }
 document.body.style.backgroundColor = modes[index];

    console.log("Current Color:", modes[index]);

    index++;
if (index >= modes.length) {
        index = 0;
    }
    console.log(currMode)
})