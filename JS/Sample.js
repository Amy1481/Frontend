// To do app
let todo =[];

let req = prompt("Please enter your request");

// Building each request using while loop so that it works continueously in loop where it's condition is always true thus works always
while(true){
    // If request is to quit then we'll quit and print quitting the app and break the loop 
   if(req == "quit"){    
    console.log("Quitting App");
    break;
   }

   //If request is to show the tasks alraedy entered then we will use for of loop to print all the tasks     
   if(req == "list"){
    console.log("------------");
    // for(task of todo){
    //     console.log(task); 
    // }
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }
    console.log("------------");
   }

   //If the request is to add another task to existing list then we'll push to todo array and print it  and also use a prompt asking what task you want to add  
   else if(req == "add"){
    let task = prompt("Please enter your task you want to add");
    todo.push(task);
    console.log("Task added");
   }
   else if(req == "delete"){
    let idx=prompt("Please enter the task index")
    todo.splice(idx,1);
    console.log("Task deleted");
   }
   else{
    console.log("Wrong request");
   }
   req = prompt("Please enter your request");
}