import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (userInfo) => {
    axiosInstance.defaults.withCredentials = true;
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
    axiosInstance.defaults.withCredentials = true;
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
    axiosInstance.defaults.withCredentials = true;
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
      axiosInstance.defaults.withCredentials = true;
      const result = await axiosInstance.get("/user/info", {
        withCredentials: true,
      });
      return result;
    } catch (error) {
      axiosInstance.defaults.withCredentials = true;
      const { errorMessage } = error.response.data;
      return errorMessage;
    }
  },

  getUserData: async () => {
    try {
      axiosInstance.defaults.withCredentials = true;
      const { data } = await axiosInstance.get("/user/mypage", {
        withCredentials: true,
      });

      return data;
    } catch {}
  },
};
