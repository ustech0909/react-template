import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://the-drupal-10.local", // change API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: response interceptor (clean response)
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
