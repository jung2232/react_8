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
      const result = await axiosInstance.post("/user/login", userInfo);
      return result;
    } catch ({ response: { data } }) {
      return data.errorMessage;
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
};
