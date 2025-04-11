


// The prototype is a reference to another object and is used when a property or method is called on an object. In JavaScript, objects are created by using the new operator. The new operator creates an instance of a particular object.



// const student ={
//     fullNmae : "kunal mounfehkhk",
//     mark: 90.33,
//     printmark: function (){
//         console.log("mark",this.mark)
//     }
// }


// const emp = {
//     calTax() {
//         console.log("tax rate ia 10%")
//     }
// }



// const suv = {
//     salary: 1000000,
//     myTax() {
//         console.log("tax rate ia 20%")
//     }
// }

// suv.__proto__ = emp;


// class


// class in a program  or code templet for createing objects

// class myClass{

//     constructor(){}
//     myMethod(){}

// }



// class toyotaCar {
//     start() {
//         console.log("start1")
//     }
//     stop() {
//         console.log("stop")
//     }

// }

// let fortuner = new toyotaCar()



// let fortune2 = new toyotaCar()


// fortune2 ={

//     start() {
//         console.log("start fortune2r")
//     }


// }



// constructor()

// constructor is a methode or function in js for creating or insitling object


// class toyotaCar {
//     constructor() {
//         console.log("createing  obj")
//     }
//     start() {
//         console.log("start1")
//     }
//     stop() {
//         console.log("stop")
//     }

// }

// let fortuner = new toyotaCar()



// innheretance is passing out properticrse to paraent class to child calss




// class parant {

//     coder() {
//         console.log("coder parant")
//     }
// }

// class child extends parant {
//     coder() {
//         console.log("child coder")
//     }

// }

// let obj = new child()







// class person1 {

//     eat() {
//         console.log("working as a 'enginer'")


//     }
//     sleep() {
//         console.log("working as a 'enginer'")

//     }

//     profession() {
//         console.log("working as a 'enginer'")
//     }
// }

// let person1obj = new person1()


// class person2 extends person1 {

//     profession() {
//         console.log("working as a 'doctor'")
//     }

// }

// let person2obj = new person2()


// super key word
// super is used tio involced parant class constration   
//  the super kewyrd is used to called a constuser of its paretnt clss to assces parant properties and method




// class person {
//     constructor() {
//         console.log(" parant class")
//         this.branch = 'informetion technology'

//     }
//     eat() {
//         console.log("eat")
//     }
// }






// class Enginer extends person {
//     constructor(it) {
//         console.log(" child class")
//         super()
//         this.branch = 'computer science and ' + it

//     }
//     work() {
//         console.log(" work")
//         this.workingAt = "Google"
//     }
// }


// let kunal = new Enginer("informetion technology")





// create a website for your clg create a class yours with tow properties name and e-mail it aso call a methode to view data that users to view data


// create a new class called addime wich inherties fo user add new methode call to data that alllowed to used to website data

// let web = "website data"



// class data {

//     constructor(nameValue, eMailValue) {
//         this.name = nameValue
//         this.eMail = eMailValue
//         // super()
//     }
//     view() {
//         console.log(web)
//     }

// }

// let user = new data("xyy", "xyz.@gmail.com")

// class addmin extends data {
//     constructor(nameValue, eMailValue) {

//         super(nameValue,eMailValue)
//     }

//     call() {
//         web = "new web"
//         console.log(web)

//     }
// }

// let user2 = new addmin("xyy")








// incusuletion is the buddling of data and methodes that oprate of data single unit tipically defat as a class

// incusuletion can be acvives useing js class
// the prosess of raping code and data togethe into a single unit (class)








// class Animal {
//     speck() {
//         return "animal sound"
//     }
// }


// class dog extends Animal {
//     speck() {
//         return "bark"
//     }
// }


// class cat extends Animal {
//     speck() {
//         return "meow"
//     }
// }

// const Animal1 = new Animal()
// const dog1 = new dog()
// const dog2 = new dog()

// create a account and cheack a blance,deposit,withdraw





class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            
            return amount;
        } else {
            console.log("Insufficient balance");
           
        }
    }

    getBalance() {
        return this._balance;
    }
}

const myAccount = new BankAccount(1000);

