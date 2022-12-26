const {instrument} = require("@socket.io/admin-ui")

const io = require("socket.io")(3000,{
    cors: {
        origin: [
            "http://localhost:8080",
            "https://admin.socket.io"
        ]
    }
})

io.on("connection",socket=> {
    console.log(socket.id)

    // socket.on("custom-event",(number,text,obj)=> {
    //     console.log(number,text,obj)
    // })
    socket.on("send-message",(message,room)=> {
         //io.emit("receive-message",message)
         if (room === "")
             socket.broadcast.emit("receive-message",message)
         else {
            socket.to(room).emit("receive-message",message)
         }
         console.log(message)
    })

    socket.on("join-room",(room,callback) => {
        socket.join(room)
        callback(`Joined Room -> ${room}`)
    })
})

instrument(io, {
    auth: false
})