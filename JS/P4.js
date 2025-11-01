const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
list.addEventListener("clicked",(e) => {
    if(e.target.tagname === "I"){
        e.target.classList.toggle("fa-regular");
        e.target.classList.toggle("fa-solid");
    }
})

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}


