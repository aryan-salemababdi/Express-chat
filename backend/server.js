const express = require("express");
const io = require("socket.io");
const app = express();
app.get("/" , (req,res) =>{
    res.send(" This Is Test ");
});
const server = app.listen(3010,err =>{
    console.log("app listen to port 3010");
})
const socket = io(server);
const mySocket = socket.of("/socket");


mySocket.on("connection",(socket)=>{
    console.log("new User Connected");

    socket.on("newMessage" , (message) =>{
        console.log(message.msg);
        mySocket.emit("havemessage" , message);
    }
    )

    socket.on("disconnect",()=>{
        console.log("User disconnected");
    })
});
