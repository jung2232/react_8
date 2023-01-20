import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (userInfo) => {
    try {
      const data = await axiosInstance.post("/user/signup", userInfo);
      return data;
    } catch (error) {
      return error;
    }
  },

  signInUser: async (userInfo) => {
    try {
      console.log("요청 전");
      const result = await axiosInstance.post("/user/login", userInfo);
      console.log("요청 후");
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  checkUserId: async (username) => {
    try {
      const result = await axiosInstance.post("/user/doublecheck", username);
      return result;
    } catch (error) {
      return error;
    }
  },

  getUserInfo: async () => {
    try {
      const result = await axiosInstance.get("/user/info");
      return result;
    } catch (error) {
      const { errorMessage } = error.response.data;
      return errorMessage;
    }
  },

  getUserData: async () => {
    try {
      const { data } = await axiosInstance.get("/user/mypage");
      return data;
    } catch {}
  },
};
