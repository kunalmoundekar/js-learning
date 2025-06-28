// create a tringle shape using "*" sol=1

// let num=0;
// for (i = 0; i <= 4; i++) {
//     for (j = 0; j <= num; j++) {
//         document.write("*");

//     }
//     num++;
//     num++;    
//     // document.write("*");
//     document.write('<br>');
// }

// create a tringle shape using "*" sol=2

// for(i=0;i<=4;i++){
//     for(j=0;j<=i;j++){
//     document.write("*");
//     }
//     document.write('<br>');
// }

// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//     // Print spaces
//     for (let j = 1; j <= n - i; j++) {
//         document.write("&nbsp;");
//     }

//     // Print stars
//     for (let j = 1; j <= i; j++) {
//         document.write("*&nbsp;");
//     }

//     document.write("<br>");
// }



// let n = 5; 

// for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= n - i; j++) {
//         document.write("&nbsp;");
//     }


//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }

//     document.write("<br>");
// }




// create a  reverse tringle shape using "*" sol=2

// debugger
// for (i = 0; i <= 4; i++) {

//     document.write(&nbsb);
//     // document.write("*");
//     for (j = 4; j <= 0; j--) {
//         document.write("*");

//     }

// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// write a program that assign a  grade based on numerical marks


// problem 1 sol=>

// let mark = Number(prompt("Enter your marks to convert into a grade:"));

// if (mark > 100) {
//     document.write("You are a 'God👏🏼'");
// } else if (mark >= 90) {
//     document.write("You passed with grade 'A+'");
// } else if (mark >= 80) {
//     document.write("You passed with grade 'A'");
// } else if (mark >= 70) {
//     document.write("You passed with grade 'B'");
// } else if (mark >= 60) {
//     document.write("You passed with grade 'C'");
// } else if (mark >= 35) {
//     document.write("You passed with grade 'D'");
// } else {
//     document.write("You are 'FAIL'");
// }


// problem 2 sol=>

// let age = Number(prompt("Enter your Age:"));

// if (age <= 0) {
//     document.write("invalid Age");
// } else if (age <= 12) {
//     document.write("Your tickit prise is '5rs'");
// }
// else if (age <= 18) {
//     document.write("Your tickit prise is '10rs'");
// } else if (age <= 60) {
//     document.write("Your tickit prise is '20rs'");
// }
// else if (age <= 150) {
//     document.write("Your tickit prise is '15rs'");
// } else {
//     document.write("Age entered is unrealistic! your ticket is free");
// }


// console.log(moduleVar3,moduleVar2)

//  import { moduleVar,moduleVar2,moduleVar3 } from './fuction.js'

// debugger

// console.log('counter'); // 1

// function makeCounter() {
//     let count = 0;

//     function inner() {
//         var k = 10
//         count++;
//         return count
//     }
//     inner()
//     console.log(k)
// }

// makeCounter();
// makeCounter();
// makeCounter();
// let k=makeCounter();
// console.log(k())


// function name1() {

//     var k = 1000
// }
// name1() 
// console.log(k)

// // if(true){
// //     var k = 1000
// // }
// // console.log(k)





// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   const myFunc = makeFunc();
//   myFunc();


// function makeCounter() {
//     let count = 0;

//     return function () {
//       count++;
//       return count;
//     };
//   }

//   let counter=makeCounter()

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// function greet(name = "Stranger") {
//   console.log("Hello, " + name + "!");
// }
// greet("kunal"); // Output: Hello, Stranger!




// function counter() {

//   let count = 0; // Private variable
//   return function () {
//     count++; // Increment count
//     console.log(`Count: ${count}`);
//     count = 0;
//   };


// }

// const increment = counter();
// increment(); // Output: Count: 1
// increment(); // Output: Count: 2
// increment(); // Output: Count: 3

// function counter(){
//   let count =0
//    return function inner(){
//   count++
//   console.log(`count:=== ${count}`)
//   }
//   // inner( )


// }
// let res = counter()
// console.log(counter())
// console.log(res())
// // counter()
// counter()
// counter()
// res()
// res()

// let res = function function1(){
//   console.log("vabknsdmlhs")
// }

// console.log(res())

// function adder(num) {
//   function add(b) {
//     console.log(num - b)
//   }
//   return add
// }
// const addTo5 = adder(5)

// // console
// addTo5(2)


// function one(){
//   function two(){
//     console.log(a)
//   }
//   let a=10
//   return two
// }
// one()()


