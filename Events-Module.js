const EventEmitter = require("events");
const event = new EventEmitter();
const fs = require("fs");
const http = require("http");


// ==================== Creating a new File (Event Emitter) ==================== //

// event.on("eventLog", (msg) => {
//     fs.writeFile("./Files/Event-Module.txt",
//     `${new Date()}    ${msg}\n`,
//     {flag: "a"},
//     (err, result) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Successfully File Created");
//         }
//     });
// });

// event.emit("eventLog", "Log Event Emitted");




// ==================== Show that file on server (Responses in Console) ==================== //

const server = http.createServer((req, res) => {
    fs.readFile("./Files/Event-Module.txt", "utf8", (err, result)=>{
        if(err){
            console.log(err);
        }
        res.end(result);
    });  
});


server.on('request', (req, res) => {
    res.on('finish', () => {
        console.log('Response finished');
    });
});


// When a client connects to a server, a new socket object is created to handle the
// communication between the client and the server.
server.on('connection', (socket) => {
    socket.on('close', () => {
      console.log('Client disconnected');
    });
});
  

// The SIGINT signal is sent to a process when the user presses Ctrl+C in the terminal, 
// which is typically used to gracefully stop a running process.
// When the SIGINT signal is received, the signal handler 
// function is called. Inside the signal handler function, a server.close() 


// process is a powerful tool that provides a lot of functionality for controlling and 
// interacting with the current Node.js process.

process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server connections closed');
      process.exit();
    });
});


server.on('listening', () => {
    console.log('Server started at 3000');
});


server.listen(3000);