let arr=[];
console.log(typeof(arr));

// JS Objects Literals(Used to store keyed collections & complex entities)
// property => (key,value)pair
// Objects are a collection of properties

// Creating a object literals 
// Example
const student = {      // property name is student
    name : "Amisha",   // key:value
    age : 23,
    marks : 86.7,
    city : "Bhubaneswar"
};
console.log(student);

// Create an object literal for properties of thread/twitter post which includes username,content,likes,reposts,tags
const post = {
    username : "@amisha12426",
    content : "This is my #firstpost",
    likes : 200,
    repost : 5,
    tags : ["@amsk123","@jahja568","@nakjs178"]
};
console.log(post);
// Get values
// post["likes"];
// post.content;
console.log(post["likes"]);
console.log(post.content);


// Conversion in get values(Js automatically converts objects keys to strings.Even if we made the number as a key,the number will be converted to string)
const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj);
// console.log(obj)["1"];
// console.log(obj["null"]);

// Add/Update value
const student1 = {      // property name is student
    name : "Amishamohanty",   // key:value
    age : 27,
    marks : 96.7,
    city : "Delhi"
};
console.log(student1);
console.log(student1.city);
student1.city = "Mumbai";
console.log(student1.city);
student1.gender="female";
console.log(student1);
student1.marks="A";
console.log(student1);
// delete student1.marks;
// console.log(student1);

// Nested objects(storing info of multiple students)
const classInfo = {
    aman : {
        grade:"A+",
        city:"Delhi"
    },
    shradha : {
        grade:"A",
        city:"Pune"
    },
    priya : {
        grade:"O",
        city:"Agra"
    }
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.shradha.city);

// Array of objects(storing info of multiple students)
const classInformation = [
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"shradha",
        grade:"A",
        city:"Pune"
    },
    {
        name:"priya", 
        grade:"O",
        city:"Agra"
    }
];
console.log(classInformation);
console.log(classInformation[1]);
console.log(classInformation[2].city);

// Math Object
// Properties
console.log(Math.PI);
console.log(Math.E); 

// Methods
console.log(Math.abs(-12));  //Gives absolute value of any number
console.log(Math.pow(2,5));
console.log(Math.floor(5.7)); //Gives round off value to nearest smallest int value
console.log(Math.ceil(7.3));  //Gives round off value to nearest largest int value
console.log(Math.random()); //Gives random value every time we run between 0 to 1

// Random integers
let step1 = Math.random();
let step2 = step1*10;  //range is 1 to 10 thus we multiply 10 if it was between 1 to 100 then multiply 100
let step3 = Math.floor(step2);
// let num=Math.floor(Math.random()*10); //combined 3 steps all together
// console.log(num);
 let step4 = step3+1;
 console.log(step4);

// Guessing game(user enters a max number & then tries to guess a random generated number between 1 to max) - DOUBT
const max=prompt("Enter your max number");

const random1=Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("USer quit");
    }
    if(guess == random1){
        console.log("You are right! Congrats!! Random number is",random1);
        break;
    }
    else if(guess < random1){
        prompt("Hint:Your guess was too small.Please try again");
    }
    else{
        prompt("Hint:Your guess was too small.Please try again");
    }
    // else{
    //     prompt("Your guess was wrong.Please try again");
    // }
}



