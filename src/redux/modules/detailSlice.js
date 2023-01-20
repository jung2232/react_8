import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  detail: { title: "", description: "", price: 0 },
  isLoading: false,
  error: null,
};

export const __getDetail = createAsyncThunk(
  "detail/detail",
  async (productId, thunkAPI) => {
    try {
      const data = await axiosInstance.get(`/api/products/${productId}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __updateDetail = createAsyncThunk(
  "detail/update",
  async (detailData, thunkAPI) => {
    const { id, data: sendData } = detailData;
    try {
      const data = await axiosInstance.patch(`/api/products/${id}`, sendData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다
      state.detail = action.payload; // Store에 있는 todo에 서버에서 가져온 todo를 넣습니다.
    },
    [__getDetail.rejected]: (state) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__updateDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__updateDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
