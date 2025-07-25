// Using console uses REPL(Read-Evaluate-Print-Loop)

// Variables(It is simply the name of a storage location and the memory stores the variable whereas the varibale stores its value)

// Data types  
// There are 2 types of data types - primitive(the basic core fundamental data types) includes number,string,boolean,underdefined,null
// Example:
// a=25
// 25
// typeof a
// 'number'


//Operations (+,-,*,/,%,**(exponential)) and varibales are operand
// NaN(Not-A-Number) 
// 0/0
// NaN
// typeof NaN
// 'number'

// Operator Precendence(like BADMAS) - ()[highest like division in BADMAS]  **  *,/,%   +,-

// let keyword(syntax of declaring variable)
let a=4;
console.log(a);
console.log(typeof(a));
let side=4;
let area = side ** 2;
console.log(area);

// const keyword(values of constants can't be re-assigned & they can't be re-declared)
const pi=3.14;
let rad=4;
let area1 = pi * rad ** 2;
console.log(area1);

// var keyword(old syntax of writing variables now we use let both are similar)
var x=2;
var y=5;
var sum=x+y;
console.log(sum);

// Assignment operator
let age=24;
age=+1;
console.log(age);

// Unary operator 
// Pre-increment(change,then use)
// Post-increment(use,then change)
// let age=10;
// undefined
// let newAge = ++age;
// undefined
// age
// 11
// newAge
// 11
// age=10;
// 10
// newAge=age++;
// 10
// age
// 11

// Identifier rule - All the javascript variables must be unique names(identifiers)
// Names 
// can contain letters,digits,undercores and dollar signs (no space)
// must begin with a letter
// can also begin with $ and _
// are case-sensetive(y and Y are different variables)

// Typescript(static(fixed) typed where js is dynamic(changing) typed)

// Undefined(a variable that has not been assigned a value) and Null(the intentional absense of any object value and to be explicitly assigned)