import React from 'react'
import Navbar from '../../component/Navbar'
import Notification from '../../component/Notification'
import { io } from "socket.io-client";

const NotificationPage = () => {
  const socket = io.connect("http://localhost:8000");
  return (
    <div>
    <Notification/>
      
    </div>
  )
}

export default NotificationPage