import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./connectionActionType";
import axios from "axios";

export const sendRequest = createAsyncThunk(
  ACTION_TYPE.POST_REQUEST,
  async ({ userId, token }, { getState }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.post(
        `http://localhost:8080/connection/${userId}`,
        {},
        config
      );
      // const res = await post(userId,config);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const gettRequest = createAsyncThunk(
  ACTION_TYPE.GET_REQUEST,
  async (token) => {
    try {
      //   let state = getState();
      //   console.log("token2",state.auth.userToken)
      //   const config ={

      //       headers:{
      //           "Content-Type": "application/json",
      //           Authorization: state.auth.userToken,
      //       }
      //   }

      const response = await axios.get(`http://localhost:8080/connection`, {
        headers: { Authorization: token },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateRequest = createAsyncThunk(
  ACTION_TYPE.UPDATE_REQUEST,
  async ({ senderId, token }) => {
    console.log("tokene2321: ", token);
    // console.log('token: ', token);
    try {
      //   let state = getState();
      //   console.log("token2",state.auth.userToken)
      //   const config ={

      //       headers:{
      //           "Content-Type": "application/json",
      //           Authorization: state.auth.userToken,
      //       }
      //   }
      console.log("senderID", senderId, token);
      const response = await axios.patch(
        `http://localhost:8080/connection/${senderId}`,
        null,
        { headers: { Authorization: token } }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteRequest = createAsyncThunk(
  ACTION_TYPE.DELETE_REQUEST,
  async ({ connectionId, token }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/connection/${connectionId}`,
        { headers: { Authorization: token } }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const SenderRequest = createAsyncThunk(
  ACTION_TYPE.SENDER_REQUEST,
  async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/connection/sender`,
        { headers: { Authorization: token } }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
