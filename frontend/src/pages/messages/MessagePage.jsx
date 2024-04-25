import React, { useEffect } from 'react'
import Message from '../../component/Message'
import { io } from "socket.io-client";
import { saveSocket } from '../../features/chat/chatSlice';
import "../../component/Style/message.css"
import { useDispatch } from 'react-redux';

const MessagePage = () => {
  const socket = io.connect("http://localhost:8080");
  const dispatch = useDispatch()
  useEffect(()=> {
    console.log("useEffect");
    try {
      console.log("aAGa")
        dispatch(saveSocket(socket));
        
    } catch (error) {
        console.log(error);
    }
}, [])
  return (
    <div className='MessagePage'>
    <Message/>
    
    </div>
  )
}

export default MessagePage