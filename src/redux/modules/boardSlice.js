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
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addBoard = createAsyncThunk(
  "board/__addBoard",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosInstance.post(`/api/products`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteDetailList = createAsyncThunk(
  "detail/deletedetailList",
  async (productId, thunkAPI) => {
    try {
      const data = await axiosInstance.delete(`/api/products/${productId}`);
      if (data.status === 200) {
        thunkAPI.dispatch(__getBoardList());
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
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
      state.boardList = action.payload; // Store에 있는 todo에 서버에서 가져온 todo를 넣습니다.
    },
    [__getBoardList.rejected]: (state) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //글작성
    [__addBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__addBoard.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__addBoard.pending]: (state) => {
      state.isLoading = true;
    },

    // 삭제하기
    [__deleteDetailList.pending]: (state, action) => {},
    [__deleteDetailList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    },
    [__deleteDetailList.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;
