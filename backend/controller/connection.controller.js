import { connectionService } from "../service/connection.service.js"
export const postRequest=  async(req,res)=>{
    const response =await connectionService.postRequest(req)
    return res.status(200).send({
        success:true,
        message:"Request send successfully",
       connection:response
    })

}
export const getRequest= async(req,res)=>{
    const response = await connectionService.getRequest(req)
    console.log(response)
    return res.status(200).send({
        success:true,
        message:"Request get successfully",
       connection:response
    })
}
export const getSenderRequest= async(req,res)=>{
    const response = await connectionService.getSenderRequest(req)
    return res.status(200).send({
        success:true,
        message:"Request get successfully",
       connection:response
    })
}
export const getConnection = async(req,res)=>{
    const response = await connectionService.getConnection(req)
    console.log(response)
    return res.status(200).send({
        success:true,
        message:"Request get successfully",
       connection:response
    })

}
export const updateRequest=async(req,res)=>{
    try{

        const response = await connectionService.updateRequest(req)
        console.log(response);
        return res.status(200).send({
            success:true,
            message:"Request get successfully",
           connection:response
        })
    }
    catch(error){
        console.log(error)
    }
}
export const deleteRequest = async(req,res)=>{
    try{
        const response = await connectionService.deleteRequest(req)
        console.log(response);
        return  res.status(200).send({
            success:true,
            message:"Request deleted successfully",
           connection:response
        })
        
    }
    catch(error){
        console.log(error)
    }
}

const connectionController ={
    postRequest,
    getRequest,
    updateRequest,
    getConnection,
    getSenderRequest,
    deleteRequest
}
export default connectionController;