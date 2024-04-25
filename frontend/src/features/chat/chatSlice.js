import { createSlice } from "@reduxjs/toolkit";
import { createChat, fetchChat } from "./chatAction";

const initalState = {
  chats: [],
  socket: null,
  loading: true,
  error: null,
};

export const chatSlice = createSlice({
  name: "chats",
  initialState: initalState,
  reducers: {
    saveSocket(state, action) {
      console.log("socket ", action.payload);
      state.socket = action.payload;
    },
  },
  extraReducers: (binders) => {
    binders.addCase(fetchChat.pending, (state) => {
      state.loading = true;
    });
    binders.addCase(fetchChat.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload.data.chats)
      state.chats = action.payload?.data.chats;
    });
    binders.addCase(fetchChat.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    });
    binders.addCase(createChat.pending, (state) => {
      state.loading = true;
    });
    binders.addCase(createChat.fulfilled, (state, action) => {
      state.loading = false;
      state.chats.push(action.payload.data.chat);
    });
    binders.addCase(createChat.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    });
  },
});
export const { saveSocket } = chatSlice.actions;
export default chatSlice.reducer;
