// Js Runtime
// async await >> promise chains >> callback hell
// Synchronous(Means the code runs in a particular sequence of instructions given in the program.Each instruction waits for previous instruction to complete its execution)
// Asynchronous(Execution of code allows to execute next instruction immediately and doesn't block the flow)

// Asynchronous programming
// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello");
// },2000);
// // Decides the time after which the execution of the function

// console.log("Three");
// console.log("Four");

// Callbacks(It is a function passed as an argument to another function)
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}

calculator(1,2,sum);

// Callback hell(Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom). This style of programming becomes difficult to understand & manage)
// function getData(dataId,getNextData){
    //2s
    // setTimeout(() => {
    //     console.log("Data",dataId);
    //     if(getNextData){
    //         getNextData();
    //     }
    // },2000);
// }
// // Nested call back(too complex) - Callback Hell
// getData(1,() => {
//     console.log("Getting data 2....");
//     getData(2,() => {
//         console.log("Getting data 3....");
//         getData(3,() => {
//             console.log("Getting data 4....");
//             getData(4);
//         });
//     });
// });

// Promises((To solve callback hells)It is for "eventual" completion of task. It is an object in Js)
// A js promise object can be 
// Pending:the result is undefined
// Resolved:the result is a value(fulfilled)
// Rejected:the result is an error
// let promise = new Promise((resolve,reject) => {....})
// Resolve & reject are callbacks provided by js
// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise"); 
//     // resolve(123);
//     // reject("Some error");
// });
// promise(in console)
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// .then() & .catch()
// promise.then((res) => {....})
// promise.catch((err) => {....})
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data",dataId);
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise"); 
        // resolve(123);
        // reject("Some error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled",res);
});

promise.catch((err) => {
    console.log("Rejected",err); 
});

function getData(dataId){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("Data",dataId);
                resolve("Success");
            },5000);
        });
}

// Promise chain
// getData(1).then((res) => {
//     console.log(res); 
//     getData(2).then((res) => {
//         console.log(res); 
//         getData(3).then((res) => {
//             console.log(res); 
//             getData(4).then((res) => {
//                 console.log(res); 
//             });
//         });
//     });
// });
// or
// console.log("Getting data 1");
// getData(1)
//     .then((res) => {
//         console.log("Getting data 2");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("Getting data 3");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// Async-Await(async always returns a promise and await pauses the execution of its surrounding async function until the promise is settled)
// async function myFunc() {.....}
async function hello(){
    console.log("Hello");
}

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve("200");
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data",dataId);
            resolve("Success");
        },5000);
    });
}

// Async-Await
async function getAllData() {
    console.log("Getting data 1");
    await getData(1);
    console.log("Getting data 2");
    await getData(2);
    console.log("Getting data 3");
    await getData(3);
    console.log("Getting data 4");
    await getData(4);
}