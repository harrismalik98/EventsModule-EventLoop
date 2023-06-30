const fs = require("fs");

function file(){
    fs.writeFile("./Files/Event-Loop.txt",
    `${new Date()}\n`,
    {flag: "a"},
    (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Program Successfully Working");
        }
    });
}

setTimeout(file, 5000);

console.log("Program is Start");




// setTimeout(print,5000);

// function print(){
//     console.log("Log after 5 sec");
// }

// console.log("First Log");

// setTimeout(() => {
//     console.log("Log after 3 sec");
//   }, 3000);
  
// console.log("Second Log");


// The event loop in JavaScript is a mechanism that allows the execution of code to be 
// managed asynchronously.

