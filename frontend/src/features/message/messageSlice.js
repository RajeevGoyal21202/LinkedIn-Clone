import { createSlice } from "@reduxjs/toolkit";
import { fetchMessage } from "./messageAction";

const initialState = {
    isLoading: false,
    messages: [],
    error: null,
  };
  
  export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage(state, action) {

            console.log("new Message", action.payload)

            console.log('state.messages: ', state.messages);
            state.messages = [...state.messages,action.payload]

        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchMessage.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
        state.messages = action.payload;

      });
      builder.addCase(fetchMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
    },
  });
  
  export const { addMessage } = messageSlice.actions;
  export default messageSlice.reducer;
  