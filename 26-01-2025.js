// let sum = () => {
// console.log("hkk")
// }
// sum()


// .lenght
// .slice(StaticRange,end)
// repalce('j','l')
// .concat


// Array

// .toString()
// .pop()
// .push()
// .shift()
// .unShift()
// .delete()
// .concat()
// .slice(StaticRange,end)
// reverse()




// let obj={
//     name:"kunal",
// }

// let a = function name1() {
//     let v ='kk'

// }

// let arr=[1,"kunal",obj,a]
// console.log(arr[3])

// let myarr=[1,2,"kun",{name:"kunal",surname:"mou"},[1,'fsd']]


// console.log(myarr.length())


// let arr1=[1,2,3]
// for (let element of arr1) {

//     let res = ++element

//     console.log(res) 
// }


// let arr2=[4,5,6]
// arr1= arr1.concat(arr2)
// console.log(arr1)


// looping in array

// let array=[1,2,3,4,"jjljojo",['j',5,'i',[5,5,"khkh"]]]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
// }


// to create a new array from extsting array

// let arr2=[4,5,6,7,8]
// let newarr=[]

// for (const element of arr2) {

//     console.log(element*2)

// }

// console.log(arr2)


// map , filter, reduce

// let arr2=[4,5,6,7,8]

// let newArr=arr2.map((e)=> e*2 )
// console.log(newArr)



// let arr2=[4,5,6,7,8]

// arr2.filter((el)=>{
//     if(el>6){
//         return el

//     }
// } )
// console.log(arr2)


// let arr2=[4,5,6,7,8]

// arr2.reduce((a,b)=>{
//     return a+b

// })

// console.log(arr2)

// console.log(typeof a)
// var a=10

//   var fname = "kunal"
//   a()
// function a(){

//     function b(){


//         function c(){

//             console.log(fname)
//         }
//         c()
//     }
//     b()

// }


// const arr = [1, 2, 3, 4, 5]





// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log(arr[i])   //1,2,3,4,5,undefined
//     }, 1000)

// }

// console.log("Ljjl")

// wirte a  code to print 1to 100

// for(let i=1;i<=100;i++){
//     console.log(i)
// }


// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// for (const element of numArray) {
//     if(element%2==0){
//         console.log(element)
//     }

// }

// let num="10000000"
// console.log(num.length)


// let num2='1234'
// console.log(num2[0])

// const number = 12345;
// const result = sumOfDigits(number);
// console.log(`The sum of the digits in ${number} is ${result}.`);

// function sumOfDigits(number) {
//     return Math.abs(number)
//         .toString()
//         .split('')
//         .reduce((sum, digit) => sum + parseInt(digit), 0);
// }

// // Example usage:

// let num = '1234'
// let num3 = []

// for (i = 0; i < num.length; i++) {
//     // let num=num[i]
//    let num5=Number(num[i])

//     num3.push(num[i])
// }



// function sum(a, b) {
//     return a + b

// }
// let res = num3.reduce(sum)
// console.log(res)



// let num3=[]

// function sum(a,b){
//     return a+b

// }

// let res=num3.reduce(sum)
// console.log(res)



// problem no.1 print a numbers 1 to 100

// for (let i = 1; i <= 100; i++) {
// console.log(i)    
// }


//problem no.2 (sol 1) print even number of arrray

let numArray = [1, 0, 2, 4, 92, 44, 66, 3, 5, 99, 8888, 9393]

// for (const element of numArray) {
//     if (element %2 == 0) {
//         console.log(element)
//     }
// }

// printEven()
// function printEven() {
//     for (const element of numArray) {
//             if (element %2 == 0) {
//                 console.log(element)
//             }
//         }  
// }


//problem no.2 (sol 2)  print even number of arrray

// numArray.map((element)=>{
//     if (element %2 == 0) {
//                 console.log(element)
//             }

// })

//problem no.3 find the numbers of digit in given numbers

// let givenNum=12354
// givenNum=String(givenNum)
// digitInNum=givenNum.length
// console.log(`"${digitInNum}" numbers of digit in the number '${givenNum}' `)
//////////
// function countDigit(params) {
//     let givenNum=params
// givenNum=String(givenNum)
// digitInNum=givenNum.length
// console.log(`"${digitInNum}" numbers of digit in the number '${givenNum}' `)

// }
// countDigit(5468)




//problem no.4 to calculate  the sum of digit in a number

// let givenNum2 = 64611
// givenNum2 = String(givenNum2)

// let arrr=[]
// for (let i = 0; i < givenNum2.length; i++){
//     num=givenNum2[i]
//     num=Number(num)
//     arrr.push(num)
// }
// let digitSum=arrr.reduce((a,b)=> a+b)
// console.log(digitSum)


//problem no.5 find a leap year
// let year = 2100
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`)
// }
// else{
//     console.log(`${year} is not  leap year`)
// }


// start pattern problems
// start pattern problem no 1
// ***  ***

// for(let i=0 ; i<2 ; i++){
//     for(let j=0; j<3;j++){
//         document.write("*")
//     }
//     document.write("   "+"   ")

// }

// start pattern problem no 2
// *** 
// ***
// ***
// ***
// ***

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 3; j++) {
//         document.write("*")
//     }
//     document.write("</br>")
// }

// start pattern problem no 3
// *
// **
// ***
// ****
// *****

// for(let i=1 ; i<6 ; i++){
//         for(let j=0; j<i;j++){
//             document.write("*")
//         }
//         document.write("</br>")
//     }





// for(let i=0 ; i<5 ; i++){
//     for(k=1; k<=5-i; k++){
//         document.write("&nbsp;&nbsp")
//         // document.write("<span class='red'>*</span>")
//     }
//     for(let j=0; j<=i;j++){
//         document.write("*")
//     }
//     document.write("</br>")
// }



// start pattern problem no 4
//     *
//    ***
//   *****
//  *******
// *********


// for (let i = 0; i < 5; i++) {
//     for (k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;&nbsp")
//     }
//     for (let j = 0; j <= i; j++) {
//         document.write("*")
//     }
//     for(let l = 1; l <= i; l++){
//         document.write("*")
//     }
//     document.write("</br>")

// }


// claculate a power of number 
// let a=prompt("enter a number")
// let b=prompt("enter a power")



// function findPower(num, pow) {
//     let res=1
//      for (let i = 0; i < pow; i++) {
//         res *=num
//     }
    
//     return res
// }
// let resute =findPower(a, b)
// console.log(resute)



























