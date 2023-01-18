import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

export const __addTodos = createAsyncThunk(
  "todo/addTodos",

  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/todo`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodoThunk = createAsyncThunk(
  "todo/deleteTodos",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todo/${id}`);
      if (data.status === 200) {
        thunkAPI.dispatch(__addTodos());
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodosThunk = createAsyncThunk(
  "todo/getTodos",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/todo`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [__addTodos.pending]: (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todo = action.payload; // Store에 있는 todo에 서버에서 가져온 todo를 넣습니다.
      console.log(state.todo);
    },
    [__addTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 삭제하기
    [__deleteTodoThunk.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteTodoThunk.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    },
    [__deleteTodoThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
