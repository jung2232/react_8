import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "./../../config/axiosInstance";

export const __addComment = createAsyncThunk(
  "add/comment",
  async (commentInfo, thunkAPI) => {
    try {
      const data = await axiosInstance.post(
        `/comment/${commentInfo.id}`,
        commentInfo.content
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comment: "",
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = commentSlice.actions;
export default commentSlice.reducer;
