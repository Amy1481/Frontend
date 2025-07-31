// Functions in JS (Function defination(telling js))
// function funcName(){  (Function calling(using the function))
//     do something
// }
function hello(){
    console.log("Hello");
}
// Calling the function to show the print
// hello();

// function printName(){
//     console.log("Youtube");
//     console.log("Amisha Mohanty");
// }
// printName();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
// print1to5();

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not adult");
    }
}
// isAdult();

// Functions with Arguments(values we pass to the function)
// function funcName(arg1,arg2){  
//     do something
// }

function printName(name){
    console.log(name);
}
// printName("Amisha");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
// printInfo("Amisha",21);
// printInfo("Tanya",23);
// printInfo("Gaurav");

function sum(a,b){
    console.log(a+b);
}
// sum(3,4);
// sum(7,4);
// sum(6,5);

// Return Keyword(used to return some value from the function)
// input --> function(does some work) --> output
// function funcName(arg1,arg2){  
//     do something
//     return val;
// }

function sum1(a,b){
    console.log("Hello");
    return a+b;
    console.log("Hello2");
}
// console.log(sum1(sum1(1,2),3)); (for sum of 3 numbers)
// console.log(sum(1,2));

function isAdultt(age){
    if(age>=18){
        // console.log("Adult");
        return "Adult";
    }
    else{
        // console.log("Not adult");
        return "Not adult";
    }
}
// console.log(isAdultt(25));

// Scope(Determines the accessibility of variables,objects and functions from different parts of the code)
// 1)Function scope(variables are defined inside a function are not accessible(visible) from outside the function)
let summ=54; //Global scope

function calSum(a,b){
    let summ=a+b; //Function scope(specific thus prints function scope)
    console.log(summ); //Prints function scope
}
calSum(2,3);
// console.log(summ); Not printing coz summ is defined inside the function thus not accessible

console.log(summ); //prints global scope as it is outside the function

// 2)Block scope(variable declared inside a {} block cannot be accessed from outside the block) 
// {
//      let a=25; //not possible if we console it outside the block but we always use let and const not var
//     //  var a=25;
// }
// console.log(a);

// for(let i=1;i<=5;i++){
//     console.log(i); //Block scope
// }
// console.log(i);

let age=25;
if(age>=18){
    let str="Adult";
    console.log(str);
    
}

// 3)Lexical scope(a variable defined outside a function can be accessible inside another function defined after the variable declared but opposite is NOT true)
function outerFunc(){
    let x=5;
    let y=7;
    function innerFunc(){
        // let d=8;
        console.log(x);
        console.log(y);
    }

    // console.log(d); Not possible to declare variable in inner function and access the variable in  outer function
    
    innerFunc();
}

// Function Expressions 
// const variable = function(arg1,arg2){
//     do or return something
// }

let name1="Amisha";

let add=function(e,f){
   return e+f;
}

// High Order Functions(A Functions that does one or both : takes one or multiple functions as argument or returns a function)

// 1)Takes one or multiple functions as argument
function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
// greet();
// greet();
multipleGreet(greet,10);
multipleGreet(function(){console.log("Namaste")},150);

// 2)Returns a function
// let odd = function(n){
//     console.log(!(n%2 == 0));
// }

// let even = function(n){
//     console.log(n%2 == 0);
// }

function oddOrEvenFactory(request){
   if(request == "odd"){
    let odd = function(n){
        console.log(!(n%2 == 0));
    }
    return odd;
   }
   else if(request == "even"){
    let even = function(n){
        console.log(n%2 == 0);
    }
    return even;
   }
   else{
    console.log("Wrong request");
   }
}
let request = "odd";  //Even

// Methods(Actions that can be performed on an object) 
const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
};

// Shorthand
// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     },
//     div(a,b){
//         return a/b;
//     }
// };