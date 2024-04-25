import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import routes from './routes/index.js'
import cors from 'cors';
import { app, server } from "./socket.js";

dotenv.config();
//middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan("tiny"))
app.use(cors())
const __dirname = path.resolve();

app.use('/uploads',express.static(path.join(__dirname,'/uploads')));

//routes
app.use("/", routes);

//connection
connectDB();

const port=process.env.PORT|| 8080;
server.listen(port,()=>{
    console.log(`Server  is running in ${process.env.DEV_MODE} on ${port}`)
})