
import { userModel } from "../models/userModel.js";
import { chatModel } from "../models/chatModel.js";
import { messageModel } from "../models/messageModel.js";
export const sendMessage = async(req,res)=>{
    const {content,chatId}= req.body;
    if(!content || !chatId){
        throw Object.assign(new Error(), {
            name: "BAD_REQUEST",
            message: "Invalid data passes to request",
          });
    }
    var newMessage = {
        senderId:req.user,
        content:content,
        chatId:chatId
    }
    try{
        var message = await messageModel.create(newMessage)
        message = await message.populate("senderId","firstName, avatar")
        message = await message.populate("chatId")
        message = await userModel.populate(message,{
            path:"chat.users",
            select:"firstName,avatar,email"
        })

        await chatModel.findByIdAndUpdate(req.body.chatId,{
            latestMessage:message,  
        })
        return message
    } 
    catch(error){
       console.log(error)
    }

}
export const fetchMessage = async(req)=>{
    try{
        const messages = await messageModel.find({chatId:req.params.chatId}).populate("senderId","firstName,avatar,email").populate("chatId")
        console.log(messages)
        return messages

    }
    catch(error){
        console.log(error)

    }
}
export const messageService = {
    sendMessage
   
  };