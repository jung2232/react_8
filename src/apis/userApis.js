import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (userInfo) => {
    try {
      const data = await axiosInstance.post("/user/signup", userInfo, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return error;
    }
  },

  signInUser: async (userInfo) => {
    try {
      const result = await axiosInstance.post("/user/login", userInfo, {
        withCredentials: true,
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  checkUserId: async (username) => {
    try {
      const result = await axiosInstance.post("/user/doublecheck", username, {
        withCredentials: true,
      });
      return result;
    } catch (error) {
      return error;
    }
  },

  getUserInfo: async () => {
    try {
      const result = await axiosInstance.get("/user/info", {
        withCredentials: true,
      });
      return result;
    } catch (error) {
      const { errorMessage } = error.response.data;
      return errorMessage;
    }
  },

  getUserData: async () => {
    try {
      const { data } = await axiosInstance.get("/user/mypage", {
        withCredentials: true,
      });

      return data;
    } catch {}
  },
};
