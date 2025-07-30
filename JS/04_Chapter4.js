// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// For loops(used to iterate(repeat) a piece of code)
// for(initialisation;condition;updation){
//do something
// }
for (let i = 1; i <= 5; i++) {
   console.log(i);
}

// Dry Run

// Print all odd numbers (1 to 15)
for (let j = 1; j <= 15; j = j + 2) {
   console.log(j);
}
for (let j = 15; j >= 1; j = j - 2) {
   console.log(j);
}

// Print all even numbers (1 to 15)
for (let k = 2; k <= 10; k = k + 2) {
   console.log(k);
}

// Infinite Loops
// for(let i=1 ; i++){
//    console.log(i);   
// }

// Print multiplication table of 5
for (let l = 5; l <= 50; l = l + 5) {
   console.log(l);
}

// let a = prompt("Write your number");
// a = parseInt(a);

// for(let l=a;l<=a*10;l=l+a){
// console.log(l);
// }

// Nested for loop
for (let x = 1; x <= 3; x++) {
   console.log(`Outer loop ${x}`);
   for (let y = 1; y <= 3; y++) {
      console.log(y);
   }
}

// While loop
// let z=1;
// while(z<=5){
//    console.log(z);
//    z++;
// }

// Game
// const favMovie="Avatar";
// let guess=prompt("Guess favorite movie");
// while((guess!=favMovie) && (guess!="quit")){
//    if(guess == "quit"){
//      console.log("You quit");
//      break;
//    }
//    guess=prompt("wrong guess try again");
// }
// if(guess == favMovie){
//    console.log("Congrats!!");
// }

// Break keyword
let z = 1;
while (z <= 5) {
   if (z == 3) {
      break;
   }
   console.log(z);
   z++;
}

// Loops with arrays
// For loops
let fruits =["mango","banana","apple","litchi","pineapple"];
fruits.push("orange");
for(let b=0;b<fruits.length;b++){
   console.log(b,fruits[b]);
}

// Nested loops with nested arrays
let heros=[["Ironman","Spiderman","Thor"],["Superman","Wonder woman","Flash"],["Eternals","Black widow","Hulk"]];
for(let c=0;c<heros.length;c++){
   console.log(`List #${c},${heros[c]},${heros[c].length}`);
   for(let d=0;d<heros[c].length;d++){
      console.log(`d=${d},${heros[c][d]}`);
   }
}

// for of loop
// for(elements of collections){
// do somenthing
// }
let colors=["black","orange","blue","pink"];
for(color of colors){
   console.log(color);
}

for(char of "amishamohanty"){
   console.log(char);
}

// Nested for of loop
let heros1=[["Ironman","Spiderman","Thor"],["Superman","Wonder woman","Flash"],["Eternals","Black widow","Hulk"]];
for (list of heros1){
   // console.log(list);
   
   for(hero of list){
      console.log(hero);
   }
}