import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Base configuration for Axios
const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5050', // Replace with your API base URL
  timeout: 5000, // Request timeout in milliseconds
});

// Request interceptor to log request details
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log("Request:", {
      url: config.url,
      method: config.method,
      params: config.params,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor to log response details
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return Promise.resolve(response);
  },
  (error) => {
    console.error("Response Error:", error.response || error);
    return Promise.reject(error);
  }
);

export default apiClient;
