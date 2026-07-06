syllabus:-

1.HTML (STURCTURING THE WEBSITE)
2.CSS (styling the web pages)
     Bootstrap(light weight framework)
     Tailwind(light weight framework)
3.Javascript(building logic  / function)     
    react js(library of js)
    next js(framework of react js)

BACKEND part:-

4.Node Js
     Express Js(framework)

5.MongoDB   
     Mongoose(framework)  

6.restFul API integration
7.Authentication and Authorization

AI:-

8.basic LLM'S model(large language model)
9.prompt Engineering
10.chatgpt/open AI/gemini..etc
11.AI chatbot

Deploymemnt and Devops part:-

12.hosting in vercel,render like cloud platform
13.use Docker /AWS for deployment and pipeline

capstone project:-

14.build end-to-end MERN Stack project
15.AI integration with MERN 


 

HTML :-
-> HTML Stands for hyper text markup language.

->it is used for sturcturing the websites.

->html is markup language beacuse html contain the skeleton stucture of the web page 
 also it builts on tags so that why we tell them HTML is a markup languauge.

-> all the HTML written through some tag lines.

->

Head:-
-> in head tag we have some tag like <title>  and some meta elements.

-> <title> tag contains our website title in the title bar.

-> meta elements helps us to create responsive with screen size.

-> we also attached some external style sheet  link in the head tag.

Body:-

-> body contain all the page structure of a web page.

-> we can design and development all the things in that body part.

Heading :-

-> heading is major element in our html page.

-> there are 6 types of headers are there like h1 to h6.

-> <h1> is the bigger heading and <h6> is the smaller heading. (ctrl + / for comment out)

paragraph :-

-> paragraph play a major role to describe our data briefly.

-> it is denoted by a element <p>.

 Break :-

 -> it is used to break the line and creating a new line.

 -> it is denoted by <br>.

 -> it is a single tag.

 Horizontal Tag :-

 -> it is used for creating a horizontal line.

 -> it is denoted by <hr>.

 -> it is also a single tag.

 Image tag :-

 -> when we put a image in our website we just need a <img> tag for put our image.

 -> <img> is also a single tag.

 -> in that <img> tag we have some elements to configure our image in a right direction
    so we need some attributes.

-> attributes means it is an behaviour of an html element.

-> in<img> tag we some attributes like src(image source),alt,height,width.

Anchor Tag:-

-> it is used to attached some outside links in our web pages.

-> it contains two attributes like href(hyper refference) and target(open in a separate page).
-> target have two values _self (it opens in our own website)
blank(open in another page).88

-> it is denoted by <a>.

HTML formatting :-

-> to format our text in a proper way.

-> there are 10 types of formatting are present...
   1.<b>
   2.<i>
   3.<em> = emphasized the text
   4.<small> = smaller the text
   5.<ins> = inserted the text
   6.<del> = delete the text
   7.<mark> = marked the text
   8.<strong> = stronger the text
   9.<sup> = superscript the text
   10.<sub> = subscript the text
->   


HTML Table:-


- As we draw a normal table to maintain our data so html also provide a table like  structur .
- <table> is the main tag of html table .
- inside html table we have
  - <tr>->table row
  - <td> ->table data
  - <th> -> table heading

  ex.


sl. no.      name      salary
 1           jhon      23000
 2           ridhi     54000
 3           sai       67000
 4           prakash   7000


HTML LIST:-

- as our day to day life ,when we store some data inside a proper format that we callled our list data.
- HTMl also provide a list to store some data inside it
- in HTMl there are 2 types list are there....


1.unorder list-->


- when we stored that data in a un-organized from that called our unordered list.
- it is denoted by<ul>
- inside <ul> tag we have <li>tag.(<li> list item)

2.orderd list--


- when we store that data in organized form that called ordered list.
- it is denoted by<ol>.
- inside <ol> tag we have <li> tag.(<li> list item).



ex.

-my fav skils are->(ul)
  - html
  - css
  - js

- my fav. hobbies  are-.(ol)
  1.READ NEWS PAPPER
  2.do coding
  3.practicing



Block level elements & inline element in HTml:-
 BLOCK LEVEL element-.

   - a block level element always starts on a new line ,and the browser automatically add some space before and after the element.
   - a block level element always takes up the full width available .


  ex.<div>,<p>,<main>,<form,>,<section> etc..

  INLINE ELEMENT->
   - an inline element does not starts on NEW LINE .
   - an inline element only takes up as much width as necessary.

   ex. <span>,<label>,<button>,<sub>,<br>etc...


Form in  HTML :-
- an html form is used to collect some user inputs for the data storage purpose.
- <form>tag is the main tag OF HTML form.
- inside <form> tag we have lavel & input tag for take the user input.

- there are some input tag like->

1. <input type="text">
2. <input type="button">
3. <input type= "checkbox">
4. <input type ="color">
5. <input type="date">
6. <input type="email">
7. <input type ="file">
8. <input type ="hidden"> 
9. <input type ="image">
10. <input type = "month">
11. <input type = "number">
12. <input type = "password">
13. <input type = "radio">
14. <input type = "range">
15. <input type = "search">
16. <input type = "submit">
17. <input type = "time">
18. <input type = "url">
19. <input type = "week">
20. <input type = "tel">



symantic tag  in html:-
- writing semantic markup means understanding the hierarchy of your content and how both are mechanism will work on aweb browser

- most commo semantic tag are:-
   - header
   - main
   - nav
   - footer
   - section
   - article
   - aside etc.....











                            CSS:-

- CSS STANDS FOR  CASCADDING style sheet
- basically css works for ther desigining & styling our web pages.
- css is not a programming language,it's a styling language

Syntax:-

selector{
  properties: value;
}
 ex. 
 h1{
  color:red;
 }
- in the above example h1 the selector ,color is the properties & red is the value of tht properties.
- there are three types of css are presented like...


1. Inline css:----


- we use inline css inside the tag name.
- inline css have the highest prioritty by compare with other types of css.
- we can put our styling by creating a "style" attribute inside the tag.


2. Internal css:-

- we used internal css inside <head> tag,by creating a<style> tag insude it.
- internal css used many cases for small codebase.
- 



3. External css:--
 
-  we used External css file and link that file in our HTML page.

- we can link the external css file be <link>tag.
- it is most popularly used because everyone wants to see the clean code so all files have to be separated. 


Selector in css:-

- we used css selectors for selectting an HTML element for the shake of designing
- there are bassicaly 5 types of selectors are therre...

1. ID Selectors:-

- is a type of selector that used for unique design.
- it is denoted by "#". 

2. Class selector:-

- Class selector is a type of selector that used for similar design in multiple element.
- it is denoted by "."

3. Group selector:-

- group selector is atype of selector that used for design more than one element by creating a group


4. Universal selector:-

- is type of selector that use for design whole html design in a single design.
- it is denoted by "*".

5. Element selector:-

- is a type of selector that use for design single single element separatelly.



practice task:-

1. create a simple div with an id "box".add some text content inside the div.set it's background color to blue.
2. create # headings h1 H2 h3. give them all a class heading & set color of heading to red.


properties in css:-


1. color:red/blue/greenetc..
2. background-color: red green blue etc..
3. text-align:left/right/center
4. text-decoration: underline/overline/line-through
5. font-weight:normal/bold /bolder100/300/900
6. font-familly:italic/sansarif/roboto/cursive
7. line-height:1/2/4/5  etc....
8. tec=xt-transform:uppercasde/lowercase/capitalize



etc......


Box model in css:-
- box is used for properly placed the element in the right direction.
- it majors all the size of that particular element and place them
- there are 5 types of box model are there
1. height
2. width
3. border(border-radius)
4. margin(left,right,top,buttom)
5. padding(left,right,top,buttom)


Display properties in css:-

- we used display property to showcase our element in a proper form display.
- there are 4 typesof display properties
1. display inline-> takes only the space required by the element 
2. display-block-> takes full space available in width.
3. display-inline-block->similar to display inline but differenceis that when we apply padding over here.
4. display-none->to remove element from the document flow.(none-nothing)


Flex-Box in CSS:-

- We can use flex-box to create one dimentional designn in a single page.
- flex-box have some properties like..

1. display:flex;
2. flex-direction: row/row-reverse/column/column-reverse
3. justify-content : centere/space-between/space-evenly/space-around'
4. align-item:centere/top/buttom
5. flex-wrap/no-wrap


Grid Layout in CSS:-

- CSS Grid layout is a two-dimetional layout system for the web.
- A grid is a collectin of horizental & vertical lines creating apatteren against which we can line up our design element.
- some imp. properties of grid-layout..


1. display:grid;
2. grid-template_column: repeat(4,1fr)/100 200 300;
3. grid-gap:20px/30px etc..
4. grid-auto-rows: 100px/200px etc.. 


Css Units:-


- basicaly there are multiple units in css but we will discuss some im.units.

1. px(pixel)- fixed
2. % (percentage)- percentage fully depends upon their parent element

ex. rakesh- 100->20%->20
bikash-1000->20%-> 200
3. vh(viweport height)&(viewport width) -> it will increase or decrease their size as pre the screen size.
4. vmax(view maximum)-> if the screen size can  be sqized to a phone screen so our content can be small so it break thet and create a new line of content. 
5. em & rem (root units of css)-> we can handle all the tag by a root element /tag so that it would be feasible for our content


position properties in  CSS:-

- the position property specify the type of positionning method used for an element. 

- there are 5 types of position property are there...

1. static - default value, it's not change their position.
2. relative - the element is positioned relative to it's normal position.
3. absolute - the element is positioned relative to it's ancestors.
4. fixed - the element is positioned relative to the browser window.
5. sticky- the element is positioned based on user scroll position.



Animation in CSS:-
Animation (transition) :- to change the state of an object

- transition enables you to define the transition between two states of an element.
- some important transition  properties are ....

1. transition-property : property you want to transition (font-size,color,bg color)
2. transition-duration: 2s/3s/4s etc...;
3. transition-timing-function: ease-in/ease-out/ease-in-out/linear/steps(4)e etc..
4. transition-delay: 2s/3s/4s/ets...;

- transition shorthand(property names/duration/timing-function/delay)
    transition:font-size 2s ease-in 5s;

    Animation (transform):-

    - it is use to apply 2d& 3d transformation to an element.
    1. Transform(Rotate) -.
      - transform:rotate(45deg/90deg etc..)
      - rotate:45deg;
      - rotatX:45deg;
      - rotateY:45deg;
      - rotateZ:45deg;

    2. Transform(scale)->
     - transform:scale(2/3etc..)
     - transform:scale(1,2)
     - transform:scaleX(0.5)
     - transform:scaleY(0.5)

    3. Transform (skew)->
      - transform: skew(45deg);
      - transform: skewX(45deg);
      - transform: skewY(45deg); 
      - transform: skewZ(45deg);

Animation (key frame) ->
- It is a special css rule that define the different stages of an animation over the time.

- syntax:-

@keyframe spinScale{
  0%{
       transform:totate(0deg)scale(1)
  }
  50%{
       transform:rotate(180deg)scale(1.5);
  }
  100%{
      transform:rotate(360deg)scale(2)
  }
}

in key frame the properties are ->
 - animation-duration
 - animation-timing-function
 - animatin-delay
 - animatin-iteration count
 - animatin-derection

 Note->@keyframe is the heart of animation
      

rest topic ->

html- symantic tags
CSS- keys-frames animation









Javascript ;-

- javascript is usd for building logic of a web page.
- js is a high level programing language,used in both client side(fronted) as  well as server side(backend).
- js comes from echma script so we see the latest version of js in terms of echma script
- the latest version of js is ES16.
- Node js is the run time enviorment of js.

Variable in js:-

- variable is container to store digital datainside it.
- in js there are 3 types variable are there 

1. var :-

- var is type of variable which is used for changiing the variable value in latter stage.
- var is usedd in folder browser so now in these days we will don't use var most of cases.

2. let

- let is a type of variable which is also used for changing the variable value in later stage.
- let is a block scope/function scope so we have been used let most of the cases.

3. const-constant
 
rules for creating variable name :-   

variables names are case sensative "a" & "A" different.
- only letter ,digits, undersccore & special charecter is allowed.(don't keep white space over here)
- only letter,undderscore or special characteronly( $,_) should be the 1st character only.
-  reserve woeds can't be a variable name.
ex. for,while,var,let,console

Datatype in javascript :-

- datatype is an attribute associated with a piece of data that tells a computer system how to interprtt it's value.
- in data type we used "typeof" operater to know ,what type of data it is.
- mainly in js there are 2types of datatype are there..

 1. primitive datatype

 - in js there are 7types primitve datatypes are there..

  1. number - Number are the type of datatype those it cotain some numerical values
  2. boolean - in boolean datatype we got boolean value like true /false.
  3. undefined - the data is not defined
  4. Null - nothing
  5. bigInt- big integer value
  6. string - sequence of charecters
  7. Symbol - in symbol we got one symbole of more than one value.

 2. reference/non-primitive datatype

 - reference datatype are the type of datatype which can hold multiple element in asingle frame.
 - there are 3 types of reference datatype...
 1. array 

 - array is a collection of similar type of datastored in contigious of memory.
 - array index starts form "0".
 ex.
     arr = []
 2. object-.
  
  - object is a reference datatype where we can store more than one element in asingle frame
  - mainly objects are working on(key:value) pair
  ex.

  let hari+{
    "name":hari babu
    "phone-no":7846912311
    "address":bbsr
    "carrier":good
  }
  - inthe above example left hand are side are the keys ,right hand sides are the values of that keys &hari is our object name. 
 3. function

 - function is a block code that perform specific task.
 - function reduce our complete ,time &space complexity.
 symtax:-

 function creatiion ->
  function my_shedule(){
    console.log("i wake up at 5pm")
    console.log("then take a good shower")
    console.log("eat break fast with cup of tea")
  }
  my_shedule()
  my_shedule()



  operator in js:-
- operator are key features to do some task or operate some task.
- ex-A+B
- in the above example A & B are the operand & "+" sign is our operator.
- in javascript , there are 5 types of operator are there...



coditional statement-.
 - to impliment some condition in the code.
 - there are 3 types of conditional statement are there..
 1. if condition:-
  
  - if condition is true then statement is true.
  - syntax:-
   if (condition){
    statement
   }
2. if-else condition:-
- if conditin is true then statement is true otherwise false.
-syntax:-
 if(condition){
  statement
 }
 else{
  statement
 }
 3. if-elif condition:-
  - it's check the condition multiple times ,where the condition is true it returns the statement.
  - syntax:-
  if(condition){
    statement
  }
  else if(condition){
    statement
  }
  else if(condition){
    statement
  }
  else //default codition{
    statement
  }


Loops in javascript:-


- loops  are  used to execute a piece of code again & again.
- there are 5 types of loop are there...

1. for loop:-

- syntax
for(initialization; condition; updation){

  statement
}
ex.we want to print "js "5 times
for(let i = 1; i<=5;i++){
  console.log("js");
}
working->
i=1->js
i=2->js
i=3->js
i=4->js
i=5->js
i=6->
2. while loop ->

- syntax:-
initializatio;
while(condition){
  statement;
  updatation
}

3. do-while loop:-

- syntax:-

initialization;
do{
  statement;
  updatation
}while(condition)

4. for-in loop -> it iterates on string & array
5. for-of loop -> it iterates on objects



String in js


- basicaly string is a sequence of character used to represent text.
- creat a string -> let str = "web bocket".
- we calculate the string  length  -> str.length property.
- we calculate the string index-> str[0],str[1],str[2]etc...

string literals &interpolation ->
 

String literals :-
- it's a way to have embedded exsperssion in string.
- it's denoted by symbol   ``  .
String interpolation:-
- to create string by doing substitution of placeholder.
- ex. -> string text${expression} string text.

escape symbol in string:-

1. \n -> newline
2. \t ->tab

string methods :-

1. str.toUpperCase()
2. str.toLoweercase()
3. str.tim()
4. str.slice(start,(end-1))
5. str1.concact(str2)
6. str.replace(oldval,newVal)
7. str.replaceAll(oldVal,newVal)
8. str.charAt(idx)



Array in js:-

- array is collection of items.
- ex.let arr = ["iron man","bat man","spyder man"]
- array index starts from "0".
- indexing of array -> arr[0],arr[1]etc...

- looping over an array->
  

  - loop -> iteration
  - syntax ->for(let i=0;i < arr.length();i++){
    statement
  }
 
Methods of array :-

2. POP() -> remove from the end of an array
1. PUCH() -> add an elemetn to end of an arry
4. concat() - concat the array
3. toString() ->convert array to string
5. unshift() - add the element to the starting of an array
6. shift() - remove the element to the starting of an array
7.  slice() - return a piece of array
8. splice() - change original array(add,remove,replace)



pra  ctice question  ->
 
1. foer a given array wtih marks of student -> [78,90,54,32,98,25,70].
find the average marks of the student.
2. for a given array with price of 5 items -. >[789,543,590,432,489].all itemms have an offer of 10% off of them. change the array to store final price after applying offer.

function in js :-

- it is a block of code that performs specific task , can be invoked or called whenever we need.
- ex. (in-build function)

1. console.log("hello") -> in this code .log() is a function
2. "abc" .toUppercase() -> in this code . toUppercase() is a function
[1,2,3].push(4) -> in this code .push() is a function


- there are 2types of function in js
1. Normal function ->

 -> Type A function ->

 // function creation  -.>

 function function_name(){
  //do some task
 }
 //function calling ->
 function_name()


 -> Type B function ->

 // function creation ->

 function function_name(parameter_1,parameter_2){
  //do some task
 }
 //function calling
 function_Name(arg_1,arg_2)

2. Arrow function ->


- it is a compact wy of writing a function,
- it uses map function to retrive the backend data,filter()
function for filterise our data etc...

//function creation ->
const function_name = (param_1,param_2) =>{
  //to do some work
}
//function calling ->

function_name(arg_1,arg_2)

normal function ->

function sum(a,b){
  return a+b;
}
sum(2,3)

arrow function ->

const sum=(a,b) =>{
  return a+b
}
sum(2,3)

1. practice a function using thhe "function" keyword that takes a string as an argument & return the number of vowels in that string.(tcs)



Map Method/function in js:-

- create a new array with result of some operatin. the value it's callback return REUSED TO FORM A NEW ARRAY .Normally we create a new array by calling the function in every array element.
- map doesn't change the original  array.
- it doesn't execute the function for empty array.
- syntax:-

  arr.map(callbackFunction (value,index,array))


  Filter method/fuinction in js:-

  - create a new array of element that gives true for a condition/filterization.
  - ex. all even array in the given digits.

  let newArr= arr.filter((val) => {
    return val % 2 === 0;
  })

  For Each loop in array :-

  - arr.forEach(callbackFunction)
-  callbackfunction -> it is a function to execute for each element in the array.
- callbackfunction is a function that passed as an argument of another function.


Advance js :-

1. DOM
2. Event & Event Handling
3. Sync & ASync code (promise, .then,.catch,async&await)
4. API handling

DOM in jas:

- DOM stands for document object model.
- when a web page is loaded ,the browser create a document object model of that page
- The HTML dom model is constructed as atree like structure 

windows -> document -> HTML -> Head ->meta tags & title ->body -> h1,h2,img etc....

why we used DOM in js:-
- js can change all the html element in the page.
- js can create , delete or edit any HTML page directly through DOM.
- js can also access CSS styling directlly.

window object :-

- the window object represent an open window in abrowser.
- it is a browser object & it automatically created by browser.
- it is also a global object with lots of properties & methods.

 DoM Manipulation :-
1. Selecting with ID -> document.getElementById("myID")

2. selecting with class -> document.getElementsByClassName("myClass")

3. selecting with Tag -> document.getElementsByTagName("p")

4. Query Selector ->
   
   - document.querySelector("id/class/tag")
   - document.querySelectorAll("id/class/tag")

5. Attributes ->

  - getAttribute(attr) -> to get the attribute value
  - setAttribute(atter,value) -> to set the attribute value


6. Insert element ->
  

  - node.append (ele) -> adds at the end of the node(inside)
  - node.prepend(ele) -> add at the start of the node(inside)
  - node.after(ele)   -> adds after the node(outside)
  - node.befor (ele)  -> adds before the node(outside)


Delete element -.
  - node.remove(ele) -> remove the node


event in js:-

- the change in the state of an object is knowen as event.
- some famous events are..

1. mouse Event (click, dblclick, onMousover)
2. keyboard event (keypress, keyup, keydown)
3. Form event (submit)
4. print event...

Event Handling :-

- syntax :-

  node.event = ()=>{
  //handle here
  }

Event object:-

- it is a special object that has details about yhe event
- all event handler have access to the event objects properties & methods
- syntax :-
 
 node.event = (e) =>{
  //handle here
 }

- in methods you can get -> e.target,e.type etc......

practice task:-

- create  a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.









