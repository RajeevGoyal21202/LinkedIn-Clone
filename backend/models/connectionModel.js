import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
    connectionBy:{
         type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    connectedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default:"pending"
      }
})
export const connectionModel = mongoose.model("connection",connectionSchema)
