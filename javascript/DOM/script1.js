// let division = document. querySelector("div")
// console.log(division)

// let demo = division.getAttribute("id")
// console.log(demo)
// let para = document.querySelector("p")
// console.log(para.setAttribute("class","pigon"))
// //you can set the attribute name &value both things

// let div = document.querySelector("div")
// div.style.backgroundColor = "green"
// div.style.color = "yellow"
// div.style.fontSize = "20px"


let newBtn = document.createElement("button")
newBtn.innerText = "clickme"
console.log(newBtn)

let div = document.querySelector("div")
// div.prependend(newBtn)
// div.append(newBtn)
// div.after(newBtn)
// div.before(newBtn)

div.remove(newBtn)


let para = document.querySelector("p")
para.remove()




