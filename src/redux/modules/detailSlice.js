import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  detailList: [],
  isLoading: false,
  error: null,
};

export const __getDetailList = createAsyncThunk(
  "detail/detailList",
  async (productId, thunkAPI) => {
    try {
      const data = await axiosInstance.get(`/api/products/${productId}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getDetailList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다
      console.log(action);
      state.detailList = action.payload; // Store에 있는 todo에 서버에서 가져온 todo를 넣습니다.
    },
    [__getDetailList.rejected]: (state) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
