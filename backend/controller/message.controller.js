import { fetchMessage, sendMessage } from "../service/message.service.js";

 export const postMessage = async(req,res)=>{
    const response =await sendMessage(req)
    return res.status(200).json({
        success:true,
        message:"message posted successfully",
       connection:response
    })


}
export const requestMessage = async(req,res)=>{
    const response =await fetchMessage(req)
    return res.status(200).send({
        success:true,
        message:"message requested successfully",
        messages: response
    })


}

export default {
    postMessage,
    requestMessage
  };