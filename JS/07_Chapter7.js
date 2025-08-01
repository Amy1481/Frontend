// this Keyword("This" keyword refers to an object that is executing the current piece of code)
const student = {
    name: "Amisha",
    age: 23,
    eng: 85,
    math: 89,
    phy: 97,
    getAvg(){
        console.log(this);
        
        let avg=(this.math + this.eng + this.phy)/3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};
// console.log(student.eng);
// Output in console
// student.getAvg()
// {name: 'Amisha', age: 23, eng: 85, math: 89, phy: 97, …}
// age: 23
// eng: 85
// getAvg: ƒ getAvg()
// math: 89
// name: "Amisha"
// phy: 97
// [[Prototype]]: Object
// 12
// 90.33333333333333
// 13 
// Amisha got avg marks = 90.33333333333333
// undefined

function getAvg(){
    console.log(this);
}

// try & catch(the try statement allows you to define a block of code to be tested for errors while it is being executed and the catch statement allows you to define a block of code to be executed if an error occurs in the try block)
console.log("Hello");
console.log("Hello");
// let a=5; //if defined then try occurs
try{
    console.log(a);
    
}
catch(error){
    console.log("Error.Variable a isn't defined.");
    console.log(error);
}
// console.log(a);  (Error coz a is not defined and the further code is not executed coz error is detected)
console.log("Hello2");
console.log("Hello2");
console.log("Hello2");

// Arrow Functions
// const func=(arg1,arg2....) =>(arrow function) {function defination};
const sum = (a,b) => {
    console.log(a+b);
};
// const sum1 = (a,b) => (a+b);Inplicit return

const cube = (n) => {
    return n*n*n;
};
const hello = () => {
    console.log("Hello");
};

// Implicit(automatic) return in arrow function
//  const func=(arg1,arg2....) =>(arrow function) (value);
const mul =(a,b) => (
    a*b
);

// Set Timeout
// setTimeout(function,timeout)
// setTimeout((){
// do something;
// },timeout); waits for the time we have passed through it then executes function
// console.log("Hi there!");

// setTimeout (() => {
//    console.log("Thailand");
// },4000);

// console.log("Welcome to");

// Set interval
// setInterval(function,interval)
// setInterval((){
// do something;
// },interval);waits for the time we have passed through it then executes function multiple times after each interval
// console.log("Hi there!");

// let id = setInterval (() => {
//    console.log("Thailand");
// },4000);

// console.log("Welcome to");
// console.log(id);

// to stop it executing multiple times we name the setInterval an ID

// this with Arrow Functions(DOUBT)
const student1 = {
    name: "Amisha",
    marks: 67,
    prop: this,   //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);   //parent scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this) //student
        },3000);
    },
    getInfo2: function(){
        setInterval(function() {
            console.log(this) //window
        },3000);
    },
};