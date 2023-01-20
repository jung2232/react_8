import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return error;
  },
);
