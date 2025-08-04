// Array Methods

// High order function use other functions as parameter or use to return value

// forEach Loop in arrays(Call Back function - it is a function to execute for each element in the array. A callback is a function passed as an argument to another function)
// arr.forEach(callBackFnx(val,idx,arr))

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){  //Value at each index
//     console.log(val);
// });

// Generally we pass the callback function in the form of arrow function
// let arr=[1,2,3,4,5];
let arr=["pune","delhi","mumbai"];
arr.forEach((val,idx,arr) =>  {
    // console.log(val);
    console.log(val.toUpperCase(),idx,arr);
});

let nums=[1,2,3,4];
nums.forEach((num) =>  {
    console.log(num*num);
});

// Map(Create a new array with the results of some operations. The value its callback returns are used to form new array)
// arr.map(callBackFnx(val,idx,arr))

let newArr = nums.map((val) => {
    // console.log(val);
    return val;0
});

console.log(newArr);


// Filter(Creates a new array of elements that gives true for a condition/filter)
// arr.filter(callBackFnx(val,idx,arr))

let evenArr = nums.filter((val) => {
    return val%2 == 0;
});

console.log(evenArr);

// Reduce(Performs some operations & reduces the array to a single value. It returns that single value)
// arr.reduce(callBackFnx(val,idx,arr))

let nums1=[5,7,2,1];
// const output = nums1.reduce((res , curr) => {
//     return res + curr;
// });

// Largest number
const output = nums1.reduce((prev , curr) => {
        return prev > curr ? prev : curr; //if prev > curr ?(then return) prev :(or else return) curr
    });

console.log(output);
