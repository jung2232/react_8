import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (userInfo) => {
    const data = await axiosInstance.post("/", userInfo);
    console.log(data);
    return data;
  },

  signInUser: async (userInfo) => {
    console.log(userInfo);
    try {
      const result = await axiosInstance.post("/user/login", userInfo);

      return result;
    } catch ({ response: { data } }) {
      return data.errorMessage;
    }
  },

  checkUserId: async ({ username }) => {},
};
