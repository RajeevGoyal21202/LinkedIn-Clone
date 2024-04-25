import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./messageType";
import axios from "axios";
import Message from "../../component/Message";

 export const fetchMessage = createAsyncThunk(
  ACTION_TYPE.FETCH_MESSAGE,
  async ({ chatId, token }) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(`http://localhost:8080/message/${chatId}`,config);
      console.log("message",response)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
