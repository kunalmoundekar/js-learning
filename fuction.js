
//  const moduleVar = "I am module-scoped"
//  const moduleVar2 ="I am module 2"
//  var moduleVar3 ="I am module5611616 "

// export { moduleVar, moduleVar2, moduleVar3 };


// function function1(){
//     console.log("hello world")
// }
// function1()


// let a="kunal"
// let a;

// function function1(){
//     console.log("hello world :",a)
// }
// a="kkkk";
// function1()


// let myfun =()=>{
//     console.log("hello world :")
// }

// myfun()

// let a=5
// let b=10
// let c=15

// a=a+a
// b=b-c
// c=b-c

// console.log("the value of a:",a," the value of  b:",b,c)

// string
// string are  emuteble they are not change we can just alter them way apping diffrent porperties and metho


// console.log( `kunsn"hsnkn"ojojojosns'nsd'sndsjj`)



// console.log(k)
// const k ="kunal"

// fun1()



// let b = 1;
// function outer() {
//     console.log(b,"this is console 1")
//     var b;
//     console.log(b,"this is console 2")
//     function inner() {
//         b++;
//         console.log(b,"console 3")
//         let b = 3
//         console.log(b,"console 4")


//     }
//     console.log(b, "this is console 5")
//     inner()
//     console.log(b, "this is console 6")



// }
// console.log(b, "this is console 7")





// function fun1() {
//     console.log('jdjddkfjd') 
// }

// k()

// var a;
// console.log(a)
// a=10
// console.log(a)


// const a = 20

// function f1() {
//     // console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     // a++
//     var a = 10;
//     console.log(a); // 10
// }
// console.log(a);


// f1()


// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }

// const k=10
// k=k+10
// console.log(k)

// Accessing `i` outside the loop will result in an error:
// console.log(i); // ReferenceError: i is not defined

// console.log(myVar); // ReferenceError
// var myVar;

// let greet={

// }

// greet.message = "I am a dynamic function!"

// console.log(greet.message)


// const a = 0


// function fun1() {
//     console.log(a)
//     if(a){
//     console.log(a+"dsdsjsl")

//     }
//     else{
//         console.log(78544)
//         }

// }
// fun1()

// function test() {
//     let x = 5;
//     console.log(x)
// }
// test()
// console.log(x)

// function test() {
//      const x = 5;
//     console.log(x)

//      }
//      test()

// var x = 6;
// console.log(x)

// if (true) {
//     let x = 5;
//     console.log(x)
// }
// console.log(x)

// var x = 6;

// /* function name1 */if(true) {
// var x = 5;
// console.log(x)

// }
// name1()

// console.log(x)

// function myFunction() {
//     let y = 5; 
//   }
//   console.log(y);


// let y; 

// function myFunction() {
//  y = 10; 
// }

// myFunction();
// console.log(y); 


// const k;
// k=10


// function parent(){
//     let x =10

//     function child() {
//         let y =50
//         console.log(y)  
//     }
//     child()
//     console.log(y)
//     console.log(x)

// }
// parent()

// let x=5

// {

//      console.log(x)
// }

// let age=10
// var age=10
// const age =10


// function testVar() {
//     function name1() {

//         if (true) {
//             var x = 10; // Function-scoped
//         }
//         console.log(x); // Outputs: 10
//     }
//     name1()
//     console.log(x);
// }
// testVar();

// let infinity = Infinity;
// console.log(typeof infinity)

// let isLoggedIn = true;
// let hasAccess = false;

// console.log(isLoggedIn)



// let notDefined;
// console.log( typeof notDefined);


// let empty = null;

// console.log( typeof empty)


// let a =10
// let b=10

// let sm1= Symbol(10) 
// let sm2= Symbol(10) 

// console.log(sm1===sm2)

// let a= function nme1(params) {

// }

// console.log(typeof )

// let difference = "5" - 2;
// console.log(difference)


// let num="42"

// num=Number(num)
// console.log(num,typeof num)


// const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];



// if(42){
//     console.log("jlljoih")
// }



// closure in js
// function x() {
//     for (var i = 1; i <= 5; i++) {

//         function close(n) {

//             setTimeout(() => {
//                 console.log(n)

//             },n* 1000)
//         }
//         close(i)
//     }
// }
// x()


// hii sir my name is kunal moundekar i am from nagapur 
// i am grgeateb in bcom.in 2022
//  and i strat a web devlopment form last year  i have some konglege full stack wed devlopment i learn html css  bootsrap js react mongodb, and i create a some project on this based 



// what is the closure ?
// yes  i can tell you 
//  so a function along with refernce to its  outer enveroment like  together froms a closure 

//   so anythis  other world you can sey that a closure is  a combitaion  of a function and its lexical scope bundle together froms a closure


// can you expaine  a liltle bite more  about it
//  yes can  so its like each and every function in js has accsecss to its  outer lecical enveroment that mens like access to variable a function  is presentnt in the enveroment of its parent so its has each and every function access together  so even when this function is like excuting with other scope not in a original scope but even if it  excuting in other scope its sitll remembers its outer lexical enveroment where it is  originally present in the
//  code  so that is was closure is

//  can yo give lilte  of example  to demonstrate thiswhat you just sayed?

// yes i can difinetlly give you a example let me just share a screen 
//  so its is visiable

// suppose we have nested fuction let call its outer function and suppose we have nested fuction insied outer what is know as inner function

// function parentFun(b) {
//     function ourter(b) {

//         function inner() {
//             console.log(a, b)
//         }
//         // let a = 10

//         return inner
//     }
//     return ourter(20)

// }
// var a = 100
// let call = parentFun()
// call()


// function x() {
//     var a = 40;

//     function foobar() {
//         console.log(a)
//     }
//     a = 50;
//     return foobar
// }
// x()()

//////////////////////////////////////////////////////////

// function x(){
//     function z(){
//         // let a =100
//         console.log(a)

//     }
//     var a =10
//     return [y,z]

//     function y(){
//         let a =110
//         console.log(a)

//     }
// }

// let [fu1,fu2]=x()

// fu1()
// fu2()  

////////////////////////////////////////////////////////////////////////////////////////////

// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         count++; 
//         console.log(count);
//     }

//     return innerFunction;
// }

// const counter = outerFunction(); 
// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3

////////////////////////////////////////////////////////////////////////////////////////////

// function createCounter() {
// let count = 0; // Private variable
// 
// return {
// increment: function () {
// count++;
// console.log(count);
// },
// decrement: function () {
// count--;
// console.log(count);
// },
// getCount: function () {
// return count;
// }
// };
// }
// 
// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// console.log(counter.getCount()); // 1
/////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 3; i++) {
// setTimeout(function () {
// console.log(i);
// }, 1000);
// }

// Output after 1 second: 1, 2, 3 (due to `let` creating a block scope)
//////////////////////////////////////////////////////////////////////////////////

// for (var i = 1; i <= 3; i++) {
// (function (x) {
// setTimeout(function () {
// console.log(x);
// }, 1000);
// })(i);
// }

// Output after 1 second: 1, 2, 3 (Closure preserves the correct `i` value)
//////////////////////////////////////////////////////////////////////////////////



// function x(){
//     let a=10
//     function y(){
//         a++
//         console.log(a)
//     }
//     return y

// }

// // x()=  function y(){
// //     console.log(a)
// // }

// let res = x()
// res()


// function createCounter() {
// let count = 0; // Private variable
// 
// return {
// increment: function () {
// count++;
// console.log(count);
// },
// decrement: function () {
// count--;
// console.log(count);
// },
// getCount: function () {
// return count;
// }
// };
// }
// 
// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// console.log(counter.getCount()); // 1

// function once(func) {
//     let executed = false;

//     return function() {
//         if (!executed) {
//             executed = true;
//             return func();
//         } else {
//             console.log("Already executed!");
//         }
//     };
// }

// const runOnce = once(() => console.log("Running..."));
// runOnce(); // Output: Running...
// runOnce(); // Output: Already executed!



// function one( fun){
//     let ex=false

//     return function(...args){
//         if(!ex){
//             ex=true
//             return fun(...args)
//         }else{
//             console.log("Already executed!")
//         }
//     }
// }

// const run = one(()=>console.log("Running"))
// run()
// run()

// function a(parameter1,parameter2){
//     console.log("this is a function statement",parameter1,parameter2)
// }
// a("aragument1","aragument2")

// let b=()=>{
//     console.log("this is a function experstion")
// }
// b()




// (function(){
//     console.log("hknxk")
// })()


// what ae the first class function -- ability to be used like values
//  


// let b= function (para1) {
//     return function xyz(){

//     }

// }

// console.log(b)


// let arr1 =[1,5,"kunal"]
// let mySet = new Set(arr1);

// mySet.add(2);
// mySet.add(10);
// // mySet.add(10); // Duplicate, won't be added
// mySet.add("hello");

// console.log(mySet); // ✅ Output: Set { 1, 2, "hello" }

// console.log(mySet.has(1));
// console.log(mySet.has("hello")); // ✅ Output: true (checks if value exists)
//  // ✅ Output: true (checks if value exists)
// console.log(mySet.size);   // ✅ Output: 3 (size of the set)
// // 
// mySet.add(-1)
// mySet.delete(2); 
// console.log(mySet); // ✅ Output: Set { 1, "hello" }


// let arrr2 = { 1: "one", age: 21 }

// let myMap = new Map();
// myMap.set(arrr2 ,3)
// myMap.set("name", "Alice");
// myMap.set(1, "one"); // Number as a key
// myMap.set(true, "boolean"); // Boolean as a key

// console.log(myMap.get("name")); // ✅ Output: "Alice"
// console.log(myMap.has(1));      // ✅ Output: true
// console.log(myMap.size);        // ✅ Output: 3

// myMap.delete(true);
// console.log(myMap); // ✅ Output: Map(2) { "name" => "Alice", 1 => "one" }


// let array1=[1,5,10,"kk"]
// console.log([...array1])  

// what is the callback function

//  setTimeout(s,2000,"kunal")
//  setTimeout(s,1000,100)

// function s (num){
//     console.log("jljl " + num)
// }

// setTimeout(k=>console.log("hi"+k),1000,"kunal")

// clearTimeout(timeoutId); // Cancels the timeout

// console.log(timeoutId)

// var timeoutId = setTimeout(() => {
//     console.log("This will not run!");
// }, 3000);



// k()
// var k =function(){
//     console.log("call before innilisation")
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.push(6); // [1, 2, 3, 4, 5, 6]
// numbers.pop();   // [1, 2, 3, 4, 5]
// numbers.shift(); // [2, 3, 4, 5]
// numbers.unshift(0); // [0, 2, 3, 4, 5]
// console.log(numbers);

// let returnArr =numbers.forEach((fruit) =>  fruit );
// console.log(returnArr);

// let forArr = for(i=1 ;i<=numbers.length ; i++){
//   console.log(i);
// }


// let returnArr =numbers.forEach((fruit) => fruit );
// console.log(returnArr);

// numbers.map(fruit => console.log(fruit));

// let numbers = [10, 20, 30, 40, 50];
// let removed = numbers.push(8,8); 

// console.log(numbers); 
// console.log(removed); 


// let colors = ["red", "green", "blue"];
// let newColor =colors.splice(1, 0, "yellow", "purple"); // Insert at index 1

// console.log(colors); 
// console.log(newColor   ); 
// ["red", "yellow", "purple", "green", "blue"]


// let numbers = [10, 20, 30, 40, 50];
// let removed = numbers.unshift(8); 

// console.log(numbers); 
// console.log(removed); 

// let numbers = [1,2,3,4,5,]


// let k =numbers.map((e,i,a) => {
//   a[i]=e*2
// });
// console.log(numbers)
// console.log(k)






// for(i=0; i<numbers.length; i++){
//   console.log(numbers[i],i,numbers)
// }

// let newA = numbers.reduce (function duble(e){
//     return e>3
//     // console.log( e*2)
// })

// console.log(newA)
// console.log(numbers)


// function duble(e){
//   e*2
// }



// let newA=numbers.forEach((e,f,g) => {
//   console.log(e,f,g)
// });

// console.log(numbers)
// console.log(newA)



// let a=5
// a=a.toString(2)

// console.log(a)

// console.log(typeof a)


// arr = [1, 2, 3, 4, 5, 6]

// let a = arr.reduce((x, y, z) => {
//   console.log(x,y,z)
// })
// console.log(a)


// let numbers = [1, 2, 3, 4, 5];

// for ( element of numbers){
//   if (element === 3) return; // Doesn't stop iteration ❌
//   console.log(element);

// }

// numbers.some(num => {
//     if (num === 3) return;// Doesn't stop iteration ❌
//     console.log(num);
// });
// Output: 1, 2, 4, 5 (Still runs for all)



// let fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach((fruit, index) => {
//     console.log(`${index}: ${fruit}`);
// });
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry


// let values = [5, 10, 15];
// let sum = 0;

// values.forEach(num => sum += num);

// console.log(sum); // Output: 30

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

// users.forEach(user => user.name +=age);

// console.log(users);
// Output: [{ name: "Alice", age: 26 }, { name: "Bob", age: 31 }]

// let ids = [101, 102, 103];

// ids.forEach(id => fetch(`https://api.example.com/user/${id}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
// );


// let numbers = [1, 2, 3, 4, 5];

// for ( num of numbers){
//   if (num === 3) break;
//   console.log(num);
// }

// numbers.s(num => {
//     if (num === 3) return num; // Doesn't stop iteration ❌
//     console.log(num);
// });
// Output: 1, 2, 4, 5 (Still runs for all)

// let numbers = [1, 2, 3, 4, 5];

// numbers.map((num, index, arr) => {
//     arr[index] = num * 2;  // Modifies the original array
// });

// console.log(numbers);  
// Output: [2, 4, 6, 8, 10] ✅ (Original array modified)

// let users = [
//   { name: "Alice", active: false },
//   { name: "Bob", active: false }
// ];

// users.map(user => user.active = true);

// console.log(users);
// Output: [{ name: "Alice", active: true }, { name: "Bob", active: true }]

// debugger
// function x(y){
//     console.log('x')
//     y()
// }

// x(function y(){
//     console.log("y")
// })


// let user = [
//     { fristName: "kunal", lastName: "moundekar", age: 25 },
//     { fristName: "ram", lastName: "parate", age: 20 },
//     { fristName: "kisna", lastName: "shrikar", age: 30 },
//     { fristName: "chiku", lastName: "shama", age: 55 }
// ]
// console.log(user)

// let res = user.fi  lter(x=> x.age<=30).map(x=>x.age)

// // console.log(res)

// let result = user.reduce((a, c) => {
//      if (c.age <=30){
//         a.push(c.age)

//      }
//      return a
// },[])

// console.log(result)


// let mul = function (x, y) {
//     console.log(x * y)
// }
// // mul(2,2)


// let mul2 = function (x=2, y) {
//         console.log(x * y)
//     }


// let mul2=mul.bind(this,2)

// let sum = function (a) {
//     return function (b) {
//         return sum(a + b)

//     }

// }
// console.log(sum(2)(5)(6))


let sum  = (a)=>(b)=>  b ? sum(a+b):a
// console.log(sum(1)(2)())

// const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;

console.log(sum(1)(2)(3)()); // Output: 6
console.log(sum(10)(20)(30)()); // Output: 60
























