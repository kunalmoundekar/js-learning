// function outer (){
//     let num =10
//     console.log(5)
//     function inner () {
//         console.log(num)
//     }
//     return inner
// }
// outer()

// //  let innercall = outer()
// //  innercall()

function outer() {
  let secret = "🔒 Secret value";

  function inner() {
    console.log("Accessing secret:", secret);
  }

  return inner();
}

const closureFunc = outer(); // closure is created here

