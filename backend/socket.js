import { Server } from "socket.io";
import http from "http";
import express from "express"
import { sendMessage } from "./service/message.service.js";
import { messageModel } from "./models/messageModel.js";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log("a user connected", socket.id)


    socket.on("join", (roomId) => {
        console.log("roomId", roomId)
        socket.join(roomId);
    })

    socket.on("newMessage", async ({ message, roomId, senderId }) => {

        console.log(message, roomId, senderId)
        const messageData = await messageModel.create({
            senderId: senderId,
            content: message,
            chatId: roomId
        })
        console.log(messageData)
        io.in(roomId).emit('Recievemessage', messageData);
    })
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
    })
})

export { app, io, server }  