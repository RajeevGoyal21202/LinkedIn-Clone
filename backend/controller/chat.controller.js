import { errorHandler } from "../lib/utils.js";
import { chatService } from "../service/chat.service.js";

export const createChat = async (req, res) => {
  try {
    const response = await chatService.createChat(req);
    res.status(201).send({
      success: true,
      chat: response.chat,
    });
  } catch (error) {
    errorHandler(error,res)
  }
};

export const fetchChat = async(req,res)=>{
  try{
    const response  = await chatService.fetchChat(req);
    console.log('response: ', response);

    res.status(200).send({
      success:true,
      chats:response
    })
  }
  catch(error){
    console.log(error);
    errorHandler(error,res)
  }
}
export const createGroupChat = async(req,res)=>{
  try{
    const response  = await chatService.createGroupChat(req);
    res.status(200).send({
      success:true,
      chats:response
    })
  }
  catch(error){
    errorHandler(error,res)
  }
}
