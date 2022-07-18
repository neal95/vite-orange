import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import NProgress from '@/plugins/NProgress';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 允许携带cookie
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start();

    return config;
  },
  (error: AxiosError) => {
    NProgress.start();

    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      NProgress.done();

      return response.data;
    }
    NProgress.done();

    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      NProgress.done();

      return Promise.reject(response.data);
    }
    NProgress.done();

    return Promise.reject(error);
  },
);

export default axiosInstance;
