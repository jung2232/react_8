import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://carrot8.shop:8080/",
  withCredentials: true,
});
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    console.log(error);
    return error;
  }
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
  }
);
