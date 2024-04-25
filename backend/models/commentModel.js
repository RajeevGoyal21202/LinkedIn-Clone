import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postModel"
    },
    body:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    }


},{timestamps:true})

export const commentModel = mongoose.model('comments',commentSchema)