const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const readline = require('readline') // standard io
const port = 8000;
const hostname = '127.0.0.1';

let app = express();
// express : client GET response
// use this to get static files in "index" folder (including css,html)
app.use(express.static('index'));
/*
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index/index.html');
});
*/
let server = http.createServer(app);
server.listen(port, hostname,  () => {
    console.log(`Server listening on ${hostname} ${port}`);
});

const io = new Server(server);
io.on('connection',(socket) => {
    
    //console.log(io.sockets.adapter.rooms);
    // user info
    socket.on('user_info', (user) => {
        // connect text
        io.emit('connected', user);
    })
    
    // socket's disconnect event
    socket.on('disconnect',()=>{
        io.emit('disconnected');
    })
    // socket's recieving messages event
    // let the server emit the message to everyone except sender
    socket.on('chat_message', (msg) => {
        socket.broadcast.emit('chat_message',{text:'[Server] : '+msg.text, sender:msg.sender});
    })

    // is_typing event
    socket.on('is_typing', (user) => {
        socket.broadcast.emit('is_typing',user);
    })

    socket.on('not_typing', (user) => {
        socket.broadcast.emit('not_typing',user);
    })
    
})