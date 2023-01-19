import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://carrot8.shop:8080/",
  // baseURL: process.env.REACT_APP_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = `${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return error;
  },
);
