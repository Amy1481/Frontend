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
// document.getElementsByClassName("oldImg");

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i]);
// }

// By Tag(Returns the Element as an HTML collection or empty collection(if not found))
// document.getElementsByTagName("class name");

// document.getElementsByTagName("p");
// console.dir(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText = "abc";
// console.dir(document.getElementsByTagName("p")[1]);

// Query Selectors(Allows us to use any css selectors)
// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// Setting content(Actually manipulating objects that are visible in the screen)
// Using properties & methods
// innerText(shows visible text contained in a node)
// textContent(shows all the full text)
// innerHTML(shows full markup)
// console.dir(document.querySelector("p"));
// let innerText = document.querySelector("p");
// console.dir("para.innerText");

// Attribute Manipulation
// getters&setters
// obj.getAttribute( attr )
// obj.setAttribute( attr,val )

// let img = document.querySelector('img');
// console.dir(img);
// console.dir(img.getAttribute('id'));

// Manipulating style
// obj.style
// console.dir(img.style());

// let heading = document.querySelector("h1");
// console.dir(heading.style());
// heading.style.color = "red";
// heading.style.backgroundColor = "black";


//using classlist
// obj.classList
// classList.add() to add new classes
// classList.remove() to remove new classes
// classList.contain() to check if class exists 
// classList.toggle() to toggle between add and remove

// Navigation
// parent element
// children
// previousElementSibling/nextElementSibling 
// console.dir(h4.parentElement());

// Adding elements and removing elements 
// document.createElement('p')
// In console
// document.createElement('p');
// <p>​</p>​
// let newP = document.createElement('p');
// undefined
// console.dir(newP);
// VM226:1 p
// undefined
// newP.innerText = "Hi,I am a new para";
// 'Hi,I am a new para'
// console.dir(newP);

// But this new para is not visible in code so we have to insert in by using
// appendChild(element) - to insert a element inside a parent
// let body = document.querySelector('body');
// undefined
// body.appendChild(newP);
// <p>​Hi,I am a new para​</p>​

// append(element) - to make changes in an element at last
// newP
// <p>Hi,I am a new para</p>
// newP.append("This is new text");

// prepend(element) - to make changes in an element at first
// body.appendChild(newP);

// insertAdjacent(where,element)

// Removing elements
// removeChild()
// remove(element)

// Part 10
// Events(These are signals that something has occurred (user input/actions))
// Onclick
let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function() {
    console.log("Button was clicked");
    alert("Button was clicked");
};

let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("You entered a button");
    }
    console.dir(btn);
}
function sayHello(){
    alert("Hello");
}

// Onmouseenter
