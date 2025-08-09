// Dom(part 9 & part 10)
// DOM(Document Object Model)-It represents a document with a logical tree.It allows us to manipulate/change webpage content(HTML elements)
//  document
//     |
//    body
//   /    \
// div    ul
//  |    / | \
// h1   li li li 

// Open in console(Changes in console are temporary but in js file it is permanent)
// console.dir(document); //To print document
// console.dir(document.all);

// To change the text of h1 element we have to access h1 in html all collection which is at idx 7 and print inner text of h1 then change it by changing the text
// console.dir(document.all[7]);
// console.dir(document.all[7].innerText);
// document.all[7].innerText = "Peter Parker";

// Selecting Elements

// By ID(Returns the Element as an object or null(if not found))
// document.getElementById("id name");
// document.getElementById("mainImg");
// let imgObj = document.getElementById("mainImg");
// console.dir(imgObj); //Gives us the actual value of image object 
// console.dir(imgObj.src);
// console.dir(imgObj.tagName);
// console.dir(imgObj.id);

// document.getElementById("main"); //Gives null as it doesn't exist

// By Class(Returns the Element as an HTML collection or empty collection(if not found))
// document.getElementsByClassName("class name");
document.getElementsByClassName("oldImg");

let smallImages = document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
}

// By Tag(Returns the Element as an HTML collection or empty collection(if not found))
// document.getElementsByTagName("class name");

document.getElementsByTagName("p");
console.dir(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText = "abc";
// console.dir(document.getElementsByTagName("p")[1]);

// Query Selectors(Allows us to use any css selectors)
console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

// Setting content(Actually manipulating objects that are visible in the screen)
// Using properties & methods
// innerText(shows visible text contained in a node)
// textContent(shows all the full text)
// innerHTML(shows full markup)
console.dir(document.querySelector("p"));
// let innerText = document.querySelector("p");
// console.dir("para.innerText");

// Attribute Manipulation
// getters&setters
// obj.getAttribute( attr )
// obj.setAttribute( attr,val )

let img = document.querySelector('img');
console.dir(img);
console.dir(img.getAttribute('id'));

// Manipulating style
// obj.style
// console.dir(img.style());

let heading = document.querySelector("h1");
// console.dir(heading.style());
heading.style.color = "red";
heading.style.backgroundColor = "black";
