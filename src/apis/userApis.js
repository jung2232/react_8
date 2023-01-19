import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (userInfo) => {
    console.log(userInfo);
    const data = await axiosInstance.post("/user/signup", userInfo);
    console.log(data);
    return data;
  },

  signInUser: async (userInfo) => {
    try {
      const result = await axiosInstance.post("/user/login", userInfo);
      return result;
    } catch ({ response: { data } }) {
      return data.errorMessage;
    }
  },

  checkUserId: async ({ username }) => {},

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
