import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./chatActionType";
import axios from "axios"
export const fetchChat = createAsyncThunk(
    ACTION_TYPE.FETCH_CHATS,
    async(token)=>{
        try{
            const config ={
                headers:{
                    Authorization: token,
                }
            };
            const res = await axios.get( `http://localhost:8080/chat`,config);
            console.log('res of the chat fetch: ', res);
            return res    
        }

        catch(error){
            console.log(error, "error of the fetch chat")
        }
    }

)
export const createChat = createAsyncThunk(
    ACTION_TYPE.CREATE_CHATS,
    async({userId,token})=>{
        console.log('userId,token: ', userId,token);
        try{
            const config = {
                headers: {
                  Authorization:token,
                },
              };
            const res = await axios.post(`http://localhost:8080/chat`,{userId:userId},config);
            console.log('res: ', res);
            return res    
        }

        catch(error){
            console.log(error)
        }
    }

)