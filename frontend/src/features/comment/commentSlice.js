import { createSlice } from "@reduxjs/toolkit";
import { createComment, fetchComment } from "./commentAction";
const initalState = {
  comment: {},
  isLoading: true,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState: initalState,
  reducers: {},
  extraReducers: (binders) => {
    binders.addCase(fetchComment.pending, (state) => {
      console.log("fetchComment.pending");
      state.isLoading = true;
    });
    binders.addCase(fetchComment.fulfilled, (state, action) => {
      console.log("action: ", action);
      // console.log("fetchComment.fulfilled: ");
      state.isLoading = false;
      state.comment = {
        ...state.comment,
        [action.payload.postId]: action.payload.data,
      };
    });
    binders.addCase(fetchComment.rejected, (state, action) => {
      console.log("fetchComment.rejected: ");
      state.isLoading = false
      state.error = action.error.message;
    });
    binders.addCase(createComment.pending, (state) => {
      state.isLoading = true
    });
    binders.addCase(createComment.fulfilled, (state, action) => {
      state.isLoading = false
      state.comment = [action.payload.postId].unshift(action.payload.data);
    });
    binders.addCase(createComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false
    });
  },
});
export default commentSlice.reducer;
