import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:8080";

export const fetchPost = createAsyncThunk(
  "post/fetch",
  async ({ token, page }) => {
    console.log("page: ", page);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.get(`${backendURL}/posts?page=${page}`, config);
      console.log(res);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const createPost = createAsyncThunk(
  "post/create",
  async (formData, { getState }) => {
    // console.log("action", formData.get("images"));

    try {
      let state = getState();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: state.auth.token,
        },
      };
      const res = await axios.post(`${backendURL}/posts`, formData, config);
      console.log("Create post🎶🎶", res.data);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
