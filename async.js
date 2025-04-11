// setTimeout(function () {
//     console.log("a")
// }, 3000)

// const { forEach } = require("async")

// setTimeout(function () {
//     console.log("b")
// }, 3000)


// setTimeout(function () {
//     console.log("c")
// }, 3000)


// callback and promisess 
//  sayghronus each intertion is wait for pervisous  intertion to complete excucution 

// asysc
// a code eexcucution alwoode excucute immgetlly don,t  block the flow


// callback
// is a function passed as an aragement to anathor function
// func
// callbackhell

// callback
//nested  callback staracked one anathor perforing like piremed 

// promises
//  promises is hlod resolve and rejects






// function getData(dataId, getNexData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNexData) {
//             getNexData()
//         }
//     }, 2000)

// }


// getData(1, () => {
//     console.log("kjkj")
//     getdata2(2, () => {
//         getdata3()


//     })
// })



// function getData()
// let promise = new Promise((res,rej)=>{


// })



// function getData(dataId, getNexData) {
//     return new Promise((resolve, rej) => {
//         setTimeout(() => {
//             resolve("success")
//             console.log("data", dataId)
//             if (getNexData) {
//                 getNexData()
//             }
//         }, 3000)

//     })
// }
// getData(2, () => {
//     console.log("getNexData")
// }).then((res) => {
//     console.log(res)

// })

// let promise=getData(1)

// promise.then((res)=>{
//     console.log(res)
// })

// promise.catch((err)=>{
//     console.log(err)
// })
// / function getData(dataId, getNexData) {
//     return new Promise((resolve, rej) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             if (getNexData) {
//                 getNexData()
//             }
//         }, 3000)

//     })
// }

// function fun1() {
//     console.log("function1")
// }

// function fun2() {
//     console.log("function1")
// }

// function fun3() {
//     console.log("function1")
// }


// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("promise")
//         }, 2000)
//     })
// }

// let = promise = getpromise().then(() => {
//     fun1()
// })





// function fun1() {
//     return function (cb) {
//     setTimeout(()=>{console.log("kkkk111")},2000)
//     }
//     setTimeout(()=>{

//         cb()
//     },1000)
// }
// fun1()(()=>{console.log("kkkk2222")})


// setTimeout(() => {
//     console.log("1")
// }, 1000)

// setTimeout(() => {
//     console.log("2")
// }, 100)

// setTimeout(() => {
//     console.log("3")
// }, 1000)


// function callbac1() {
// setTimeout(() => {
// console.log("1")
// 
// }, 1000)
// function callbac2() {
// setTimeout(() => {
// console.log("2")
// }, 100)
// 
// function callbac3() {
// setTimeout(() => {
// console.log("3")
// }, 1000)
// 
// }callbac3()
// 
// }
// callbac2()
// 
// 
// }
// 
// callbac1()


// function (){
//     console.log("1")


// }



// function fun1() {
//     setTimeout(() => {
//         console.log("11")
//         function fun2() {
//             console.log("22222")
//             setTimeout(() => {
//                 function fun3() {
//                     setTimeout(() => {
//                         console.log("33333")
//                     }, 0)
//                 } fun3()
//             }, 2000)
//         } fun2()

//     }, 4500)
// }
// fun1()


// function fun1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("11");
//             resolve();
//         }, 4500);
//     }).then(() => {
//         return new Promise((resolve) => {
//             console.log("22222");
//             setTimeout(() => {
//                 resolve();
//             }, 2000);
//         });
//     }).then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("33333");
//                 resolve();
//             }, 0);
//         });
//     });
// }

// fun1();





// function myfunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("re")
//         }, 2000)
//     })
// }



// function myfunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 1000)
//     })
// }

// function myfunction3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data3")
//             resolve("success")
//         }, 500)
//     })
// }


// async function asFun() {
//     await myfunction1()
//     await myfunction2()
//     await myfunction3()
// }


// asFun()



// a wait pusue the excution  of it soruouding async function untied the promise in rented


// *IIFE

// (let = (2) => {
//     console.log("gjgh", 2)
// }) ('2')



// const git_api="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"



// outer().then()



// const card =['a','b','c']

// const promise = createorder(card)

// promise.then(function(orderId){
//     console.log(orderId)
// }).then((res)=>{
//     proseedtopaymnet().then((res)=>{
//         console.log(res)
//     })
// }).catch((err)=>{
//     console.log(err)
// })


// function createorder(card){
//     const pro = new Promise((res,rej)=>{

//         function validecaer(card){
//             return ""
//         }

//         if(!validecaer(card)){
//             const   err = new Error("card is not valid")
//             rej(err)
//         }
//         const orderId="879"
//         if(orderId){
//             setTimeout(()=>{
//                 res(orderId)
//             },5000)
//         } 
//     })
//     return pro
// }

// function proseedtopaymnet (payment){
//     return new Promise((res,rej)=>{
//         function payment(payment){
//            return 1
//         }
//         if(!payment(payment)){
//             err= new Error("proseedtopaymnet error")
//             rej(err)
//         }
//         paid =555
//         if(paid){
//             setTimeout(()=>{
//                 res("proseedtopaymnet sucess")
//             },2000)
//         }

//     })

// }



// async function fetchApi() {
//     try {
//         const res = await fetch("https://dogapi.dog/api/v2/breeds");
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }


// function fetchApi() {
//     fetch("https://dogapi.dog/api/v2/breeds") // Fetch data from the API
//         .then((res) => res.json())  // Convert response to JSON
//         .then((data) => {
//             console.log(data);  // Log the fetched data
//         })
//         .catch((error) => {
//             console.error("Error fetching data:", error); // Handle errors
//         });
// }

// breed.attributes.name

/* <h2>${breed.attributes.name}</h2>
   <p>${breed.attributes.description}</p> */

// function fetchApi() {
//     fetch("https://dogapi.dog/api/v2/breeds")
//         .then((res) => { return res.json() })
//         .then((data) => {
//             let ndata=data.data
//             console.log(ndata.attributes)
//         })
// }

// fetchApi()


const pro = async () => {
    const inputvalue = document.querySelector('#search-input').value.trim().toLowerCase()

    const dogContainer = document.querySelector(".dog-container")

    const responce = await fetch('https://dogapi.dog/api/v2/breeds')
    const data = await responce.json()

    let resValveArr = [];
    for (let i = 0; i < data.data.length; i++) {
        resValveArr.push(data.data[i].attributes.name.toLowerCase())
    }

    if (resValveArr.includes(inputvalue)) {
        console.log(inputvalue)
    }

}


document.getElementById("search-btn").addEventListener("click", (e) => {
    e.preventDefault()
    pro()
})



































