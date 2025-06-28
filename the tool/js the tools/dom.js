// dom
// (document object model)

// all tag are the element and they called as a "element node" (like ,html body title ,h1,p)

// chile and parants

// document.childNodes
// document.children[1].style

// document.body.children[1].style.backgroundColor='blue'
// document.body.children[0].style.backgroundColor='black'.style.color=''
// document.body.style.backgroundColor='green'


// lastElementChild
// FristElementChild

// document.getElementsByClassName()
// document.getElementById("")

// let div1_2 =document.getElementsByClassName('div')


// div1_2[0].style.backgroundColor='green'

// let div =document.getElementById('divId')
// div.style.backgroundColor='red'

// .querySelectorAll(".bx")  //by class name
// .querySelectorAll("#bx") // by Id 
// querySelector("p") // by tag name

// let a =document.querySelectorAll(".bx").forEach(
//     e=>{
//         e.style.backgroundColor='green'
//     }
// )

// let b =document.querySelector("#divId").style.backgroundColor='red'


// let d =document.querySelectorAll(".p-class").forEach(
//     e=>{
//         e.style.backgroundColor='black'
//     }
// )

// let c =document.querySelectorAll("p").forEach(
//     e=>{
//         e.style.backgroundColor='pink'
//     }
// )


// inner html
// innerText
// textContent

//  document.querySelector('.container').innerHTML='<h1>fghj hjkiuytrfg</h1>'
//  document.querySelector('.container').hidden=true
//  document.querySelector('.container').innerText='fghj hjkiuytrfg'
//  document.querySelector('.container').textContent='fghj hjkiuytrfg'


// attribute
// hasAttribute("width")//cheack a attribute is or not
// getAttribute("width")
// setAttribute("","")


//  document.querySelector('.container').hasAttribute("width")

// console.log( document.querySelector('.container').hasAttribute("width"))

// let a= document.querySelector('.container').getAttribute("width")


// let a= document.querySelector('.container').setAttribute("style","border:2px solid red")
// let b= document.querySelector('.container').removeAttribute("style")
// console.log(b)

// a.removeAttribute("style")

// Text
// ateribte class
// color


// let createElement= document.createElement("div")
// createElement.textContent='fghjkk'
// createElement.setAttribute("class","c-class")


// document.querySelector(".container").append(createElement)















