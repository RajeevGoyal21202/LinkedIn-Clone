import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./commentActionType";
import { create } from "../../services/comment.service";
import axios from "axios";

export const createComment = createAsyncThunk(
  ACTION_TYPE.ADD_COMMENT,
  async ({ postId, comment }, { getState }) => {
    console.log("{ postId, comment }: ", { postId, comment });
    try {
      let state = getState();
      console.log("state: ", state.auth.userToken);
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
      const res = await create({ postId, comment }, config);
      return { data: res.data, postId };
    } catch (error) {
      console.log("error: ", error);
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
export const fetchComment = createAsyncThunk(
  "auth/update",
  async ({ postId }, { getState }) => {
    console.log("postId: ", postId);
    try {
      let state = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
      const res = await axios.get(
        `http://localhost:8080/comment/${postId}`,
        config
      );
      console.log("res: ", res);
      return { data: res.data, postId };
    } catch (error) {
      console.log("error: ", error);
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
