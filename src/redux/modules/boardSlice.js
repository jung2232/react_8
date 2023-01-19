import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  boardList: [],
  isLoading: false,
  error: null,
};

export const __getBoardList = createAsyncThunk(
  "board/boardList",
  async (_, thunkAPI) => {
    try {
      const data = await axiosInstance.get(`/api/products`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBoardList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getBoardList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다
      console.log(action);
      state.boardList = action.payload; // Store에 있는 todo에 서버에서 가져온 todo를 넣습니다.
    },
    [__getBoardList.rejected]: (state) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;
