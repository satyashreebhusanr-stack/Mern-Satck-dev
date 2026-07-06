let demo = document.querySelector("#btn")
demo.onclick = (e) =>{
    //console.log("click me 1 time")
    console.log(e)
    console.log(e.target)
    console.log(e.type)
}
let demo2 = document.querySelector("#btn1")
demo2.ondblclick = (evt) =>{
console.log(evt.type)
console.log(evt.target)
    //console.log("btn was clicked 2 times")

}

let test = document.querySelector("#para")
test.onmouseover = (sbr) =>{
    console.log(sbr.type)
    console.log(sbr.target)
    //console.log("i am inside the box")
}
let demo3 = document.querrySelector("btn2")
demo3.
