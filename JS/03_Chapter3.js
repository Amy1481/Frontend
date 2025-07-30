// String methods
// Methods - actions that can be performed on objects 
// Format
// stringName.method()
 

// String methods
// str.trim(trims whitespaces from both ends of string & returns a new one)
let msg="   Hello   ";
console.log(msg.trim());
// String are immutuable in js i.e no changes can be made to strings and whenever we do try to make a change,a new string is created and old one remains same 

// str.toUpperCase()
// str.toLowerCase()
let name="Apna";
// console.log(name.toUpperCase());
console.log(name.toLowerCase());

// With Arguments(Argument is a some value that we pass to the method)
// stringName.method(arg)
// indexOf(Returns the first index of occurance of some value in string or gives -1 if not found)
let code="ILoveCoding";
console.log(code.indexOf("Love"));
console.log(code.indexOf("z"));
console.log(code.indexOf("o"));

// method chaining
let msg1="   hello   ";
// let newMsg=msg1.trim();
// console.log("After trim : ",newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After uppercase : ",newMsg);
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// Slice(Returns a part of the original string as a new string)
// str.slice(starting index,ending index)
let act = "Hello";
console.log(act.slice(0,4));
//str.slice(-num)=str.slice(length-num) 

// Replace(searches a value in the string & returns a new string with value replaced)
let str="ILoveCoding";
console.log(str.replace("Love","Do"));
console.log(str.replace("o","x"));

//Repeat(Returns a string with the number of copies of a string) 
let fruit="Mango";
console.log(fruit.repeat(5));

// Array(Data Structure) - Linear collection of things 
// let student1 ="Aman";
// let student2 ="Shreya";
let students=["Aman","Shreya"];

let nums=[2,3,4,5];
console.log(nums);
console.log(nums[1]);
console.log(nums[4]);
console.log(nums.length);

// Mixed array
let info=["Aman",24,67.9];
console.log(info);
console.log(info[0][0]); //[0][0]-first square bracket gives us the string then the next square bracket gives index of the character of the string


// Empty array
let newArr=[];
console.log(newArr.length);

// Arrays are mutable but strings aren't mutable
let fruits = ["mango","apple","banana"];
fruits[1]="coconut";
console.log(fruits);
fruits[10]="payaya";
console.log(fruits);
console.log(fruits.length);

// Strings
let names="Amisha";
names[1]='n';
console.log(names);

// Arrays methods
// Push(add to end)
// Unshift(add to start)
// pop(delete from end & returns it)
// shift(delete from start & returns it)
let cars=["audi","bmw","xuv","porshe"];
cars.push("ferrari");
console.log(cars);
cars.pop()
console.log(cars.pop());
console.log(cars);
cars.unshift("rolls royce")
console.log(cars);
cars.shift();
console.log(cars);

// indexOf(returns index of something)
// includes(search for a value)
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("XUV"));
console.log(cars.includes("audi"));
console.log(cars.includes("toyota"));

// concat(merge two arrays)
// reverse(reverse an array)
// let primary=["red","blue","yellow"];
// let secondary=["orange","green","violet"];
//console.log(primary.concat(secondary));  //creates new array and adds the two arrays
// console.log(primary.reverse()); //reverses the original array

// slice(copies a portion of an array and doesnot change anything in original array)
let colors=["orange","pink","red","green","white","blue"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

// Splice(removes/replaces/add elements in place but changes the original array)
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1)); //splice(start,deleteCount)
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));// splice(start,deleteCount,item0...itemN)
console.log(colors);

// Sort(sorts an array)
console.log(cars);
console.log(cars.sort());//sorts cars on ascending order of alphabets a,b,c...
let chars=['a','z','f','h'];
console.log(chars.sort());
// DOesn't apply on numbers

// Array Referneces(arrays stores addresses of the values in the memory so it doesn't show the that same values of differnt arrays can be equal coz they have different addresses)
let arr=['a','b','c'];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push('d');
console.log(arrCopy);
arrCopy.pop();
console.log(arr);

// Constant Arrays
const g = 10; //string
const ar = [1,2,3];
console.log(ar.push(4));
console.log(ar);
// ar=[1,2,3]; Not possible we can't change the address of a constant array

// Nested Arrays(array of arrays { visualized as rows and columns in a table where rows are arrays internally(here it has 3 arrays) and columns are values or length of inside internal array (i.e 2)})
let roll=[[1,2],[3,4],[5,6]];
console.log(roll);
console.log(roll.length);
console.log(roll[0]);
console.log(roll[0][1]);







