const express = require('express');
// we are importing http 
const http = require('http');
const {Server} = require("socket.io");  // socket io is gives me an object

const app = express();  // now this app is my expressServer
const PORT = 9000;      // write any number

// to use socket we need http to be
// integrated with my app that is expressServer 




// we are integrating http ans express server
const server = http.createServer(app);

// my io is instance of Server given
// to me by socket.io 
const io = new Server(server);

// connection establish means
// a frontend is accessing my backend
io.on("connection",(socket) => {

        socket.on('this is event name',(data)=>{
                io.emit('this is event name',data);

        });

        // the IO is unique and it's associated
        // with my server
        // and socket are multiple and 
        //are associated with frontend 
        
});
// using middleware I will send
// public folder to browser
// the same way live server sends

app.use(express.static('public'));
// express.static is a internal method of
// express used to send static html files
// in a folder






server.listen(PORT,()=>{
    console.log(`server is up and running on http://localhost:${PORT}/`)
});