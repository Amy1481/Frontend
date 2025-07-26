// console.log() - to write (log) a message on the console
// console.log("Amisha");
// console.log("1234");
// console.log(2+2);
// console.log("Amisha" , 22);
// console.log("Amisha" + 22);
// console.log("Hello world");

let pencilPrice = 10;
let eraserPrice = 10;
// let output = "The price of is : "+(pencilPrice+eraserPrice)+" Rupees";
// Template literals
let output = `the total price is : ${pencilPrice + eraserPrice} Rupees`
console.log(output);

// Operators in js 
// Arithmatic operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary operators
console.log(a++); //10
console.log(++a); //12

// Assignment operators
b = a;
console.log(b);

// Comparison operators
let age = 18;
console.log(age > 18);  //false
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);  //compares value not type
console.log(age === 18); //compares type & value
console.log(age != 18);

// Conditional statements
// if statement
let newAge = 23;
if (newAge >= 18) {
    console.log("You can vote"); //prints if statement is true or doesnot print anything
}
// else if statement
let newAAge = 17;
if (newAAge >= 18) {
    console.log("You can vote");
}
else if (newAAge <= 25) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// Nested if-else
let marks = 45;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    }
    else {
        console.log("Grade : A");
    }
}
else {
    console.log("Fail");

}

// Logical operators 
// let mark=75;
// if(mark >=33 && mark >=80){
//     console.log("Pass");
// }
// if(mark >=33 || mark >=80){
//     console.log("Pass");
// }
// if(!(mark >33)){
//     console.log("Pass");
// }

// Switch statement
let color = "red";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("stop");
        break;
}

// Alert(Displays an alert message on the page)
// alert("Something is wrong")
// console.log("This is a simple log");
// console.error("This is an error message");
// console.warn("This is an warning message");

// Prompt(Dispalys a dialog box that asks user for some input)
let firstName = prompt("Enter your name : ");
console.log(firstName);
