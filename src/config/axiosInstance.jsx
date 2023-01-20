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
    console.log(error);
    return error;
  },
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => {
    if (
      error.response.data.errorMessage ===
      "JWT String argument cannot be null or empty."
    ) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return error;
  },
);
