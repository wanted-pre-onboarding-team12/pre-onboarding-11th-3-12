import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosError,
} from 'axios';

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default instance;
