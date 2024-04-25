import { createSlice, current } from "@reduxjs/toolkit";
import { fetchPost, createPost } from "./postAction";

const initialState = {
  isLoading : false,
  posts : [],
  error: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
      builder.addCase(fetchPost.pending, (state, action)=> {
          state.isLoading = true;
      })
      builder.addCase(fetchPost.fulfilled, (state, action)=> {
          state.isLoading = false;
          state.posts = action.payload;
      })
      builder.addCase(fetchPost.rejected, (state, action)=> {
          state.isLoading = false;
          console.log(action.error);
          state.error = action.error;
      })
      builder.addCase(createPost.pending, (state, action)=> {
          state.isLoading = true;
      })
      builder.addCase(createPost.fulfilled, (state, action)=> {
          state.isLoading = false;
      
          state.posts.push(action.payload)
      })
      builder.addCase(createPost.rejected, (state, action)=> {
          state.isLoading = false;
          console.log(action.error);
          state.error = action.error;
      })
  }
})
export default postSlice.reducer;
