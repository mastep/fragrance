const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const axios = require("axios");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true}
    });


io.on('connection', (socket) => {
    socket.on('eventUpdating', (msg) => {
        axios
            .get('http://188.225.42.19:8000/api/forms/register')
            .then((res)=>{
                io.emit('eventData', res.data.data)
                console.log('request');
            })
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});